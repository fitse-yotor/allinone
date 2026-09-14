/*
  Locale resolution and path mapping.
  English lives at the root, Amharic under /am/. Every route exists in both,
  so the switcher maps a path to its twin without a lookup table.
*/

import { en, type Copy } from './en';
import { am } from './am';

export const locales = ['en', 'am'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

const copy: Record<Locale, Copy> = { en, am };

export function getCopy(locale: string | undefined): Copy {
  return copy[isLocale(locale) ? locale : defaultLocale];
}

export function isLocale(value: string | undefined): value is Locale {
  return value !== undefined && (locales as readonly string[]).includes(value);
}

/** Removes a locale prefix: "/am/about/" becomes "/about/". */
export function stripLocale(pathname: string): string {
  const stripped = pathname.replace(/^\/am(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/** Prefixes a locale-neutral path: ("/about/", "am") becomes "/am/about/". */
export function localizePath(path: string, locale: Locale): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === defaultLocale ? clean : `/${locale}${clean}`;
}

/** The same page in the other language. */
export function switchPath(pathname: string, to: Locale): string {
  return localizePath(stripLocale(pathname), to);
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'am' : 'en';
}

export const htmlLang: Record<Locale, string> = { en: 'en', am: 'am' };
export const ogLocale: Record<Locale, string> = { en: 'en_US', am: 'am_ET' };
