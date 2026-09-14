/*
  Hero scene: Ethiopia as an extruded matte form, lit like a physical model
  on a desk under one lamp. Slow rotation on the vertical axis and nothing
  else: no pointer tracking, no scroll coupling, no entrance animation.

  Loaded lazily by EthiopiaForm.astro only when the device qualifies.
*/

import {
  AmbientLight,
  DirectionalLight,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshStandardMaterial,
  PCFShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  ShadowMaterial,
  Shape,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
} from 'three';
import outline from '../data/ethiopia-outline.json';

const SECONDS_PER_REVOLUTION = 40;

export function mountEthiopia(host: HTMLElement, onFirstFrame: () => void): () => void {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  // PCF with a shadow radius gives the soft edge; PCFSoftShadowMap is deprecated.
  renderer.shadowMap.type = PCFShadowMap;
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new Scene();
  const camera = new PerspectiveCamera(28, 1, 0.1, 50);
  camera.position.set(0, 3.4, 4.4);
  camera.lookAt(0, -0.1, 0);

  // The form: outline in the XY plane, extruded along Z, then laid flat.
  const shape = new Shape((outline.points as [number, number][]).map(([x, y]) => new Vector2(x, y)));
  const geometry = new ExtrudeGeometry(shape, {
    depth: 0.14,
    bevelEnabled: true,
    bevelThickness: 0.018,
    bevelSize: 0.014,
    bevelSegments: 2,
    curveSegments: 1,
  });
  geometry.center();

  const material = new MeshStandardMaterial({ color: 0xe6e2da, roughness: 0.9, metalness: 0 });
  const form = new Mesh(geometry, material);
  form.rotation.x = -Math.PI / 2;
  form.castShadow = true;
  form.receiveShadow = true;

  const pivot = new Group();
  pivot.add(form);
  scene.add(pivot);

  // Ground that only receives the shadow, so the page's paper shows through.
  const ground = new Mesh(new PlaneGeometry(10, 10), new ShadowMaterial({ color: 0x12161c, opacity: 0.16 }));
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.09;
  ground.receiveShadow = true;
  scene.add(ground);

  // One low key light for a long soft shadow, plus a quiet ambient fill.
  const key = new DirectionalLight(0xfff6ea, 2.6);
  key.position.set(-4, 2.2, 1.6);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.radius = 6;
  key.shadow.bias = -0.0005;
  const cam = key.shadow.camera;
  cam.left = -2.5;
  cam.right = 2.5;
  cam.top = 2.5;
  cam.bottom = -2.5;
  cam.near = 0.5;
  cam.far = 12;
  scene.add(key);
  scene.add(new AmbientLight(0xffffff, 0.55));

  const resize = () => {
    const width = host.clientWidth;
    const height = host.clientHeight || width;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  resize();

  let frame = 0;
  let last = performance.now();
  let first = true;
  const speed = (Math.PI * 2) / SECONDS_PER_REVOLUTION;

  const tick = (now: number) => {
    // Clamp the step so returning to a background tab does not jump the model.
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    pivot.rotation.y += speed * dt;
    renderer.render(scene, camera);
    if (first) {
      first = false;
      onFirstFrame();
    }
    frame = requestAnimationFrame(tick);
  };

  const onVisibility = () => {
    cancelAnimationFrame(frame);
    if (!document.hidden) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    }
  };
  document.addEventListener('visibilitychange', onVisibility);
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    document.removeEventListener('visibilitychange', onVisibility);
    observer.disconnect();
    geometry.dispose();
    material.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
