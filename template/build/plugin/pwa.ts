/**
 * Zero-config PWA for Vite
 * https://github.com/antfu/vite-plugin-pwa
 */
import { VitePWA } from "vite-plugin-pwa";

export default function () {
  return VitePWA({
    mode: "production",
    manifest: {
      name: "aa",
      short_name: "v",
      icons: [
        {
          src: "./resource/img/pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "./resource/img/pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
  });
}
