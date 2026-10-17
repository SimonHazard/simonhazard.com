import { t } from "@/i18n/utils";

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export const primaryNav: readonly NavLink[] = [
  { href: "/projects", label: t("nav.projects") },
  { href: "/articles", label: t("nav.articles") },
  { href: "/about", label: t("nav.about") },
  { href: "/devblog", label: t("nav.devblog") },
];

export const homeLink: NavLink = { href: "/", label: t("nav.home") };

export const RESUME_HREF = "/static/simon-hazard.pdf";

export const externalLinks = {
  github: "https://github.com/SimonHazard",
  kofi: "https://ko-fi.com/simonhazard",
} as const;

/** True when `pathname` is the page of `href` or one of its children. */
export function isCurrentPath(href: string, pathname: string): boolean {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}
