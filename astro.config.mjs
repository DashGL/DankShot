// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Dank Shots",
      social: {
        github: "https://github.com/DashGL/DankShot",
      },
      sidebar: [
        {
          label: "Prologue",
          autogenerate: { directory: "prologue" },
        },
      ],
    }),
  ],
});
