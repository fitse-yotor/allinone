import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
const source='C:/Users/muluh/.codex/generated_images/01a09eb4-62bb-7153-a426-8481d462b474';
const names=['hero','hana','dawit','meron','yonas','health','coffee','security'];
const files=await Promise.all((await fs.readdir(source)).filter(n=>n.endsWith('.png')).map(async name=>({name,time:(await fs.stat(path.join(source,name))).mtimeMs})));
files.sort((a,b)=>a.time-b.time);
await fs.mkdir('public/images',{recursive:true});
for(let i=0;i<Math.min(files.length,names.length);i++){
 await sharp(path.join(source,files[i].name)).resize({width:i===0?1500:i<5?650:1000,withoutEnlargement:true}).webp({quality:84}).toFile(`public/images/${names[i]}.webp`);
 console.log(names[i],files[i].name);
}
