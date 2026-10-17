import type { ImageMetadata } from "astro";
import charonLogo from "@/assets/logos/charon.svg";
import memeoverLogo from "@/assets/logos/memeover.png";

/**
 * Official app icons, keyed by the id of the project file in src/content/projects.
 * Projects without one are shown with a default icon.
 */
const logos: Readonly<Partial<Record<string, ImageMetadata>>> = {
  charon: charonLogo,
  memeover: memeoverLogo,
};

export function projectLogo(id: string): ImageMetadata | undefined {
  return logos[id];
}
