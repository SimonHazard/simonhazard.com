// @ts-check

import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

/**
 * Self-hosted Fontsource family, Latin subset only.
 * @param {string} name
 * @param {string} cssVariable
 * @param {{ weights: [string | number, ...(string | number)[]]; italic?: boolean; fallbacks: string[] }} options
 */
function fontsource(name, cssVariable, { weights, italic = false, fallbacks }) {
  /** @type {["normal", "italic"] | ["normal"]} */
  const styles = italic ? ["normal", "italic"] : ["normal"];
  /** @type {[string]} */
  const subsets = ["latin"];
  return {
    provider: fontProviders.fontsource(),
    name,
    cssVariable,
    weights,
    styles,
    subsets,
    fallbacks,
  };
}

export default defineConfig({
  output: "static",
  site: "https://simonhazard.com",
  adapter: cloudflare({
    imageService: "compile",
  }),
  // Fully static site: no sessions, so the adapter does not declare a KV binding.
  session: false,
  integrations: [mdx(), sitemap()],
  fonts: [
    fontsource("Newsreader", "--font-newsreader", {
      weights: ["200 800"],
      italic: true,
      fallbacks: ["Georgia", "serif"],
    }),
    fontsource("Hanken Grotesk", "--font-hanken-grotesk", {
      weights: ["100 900"],
      italic: true,
      fallbacks: ["system-ui", "sans-serif"],
    }),
    fontsource("JetBrains Mono", "--font-jetbrains-mono", {
      weights: ["100 800"],
      fallbacks: ["ui-monospace", "monospace"],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
