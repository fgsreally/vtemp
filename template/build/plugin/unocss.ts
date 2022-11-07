import Unocss from "unocss/vite";
import { presetAttributify, presetUno } from "unocss";
import presetIcons from "@unocss/preset-icons";

export default function () {
  return Unocss({
    presets: [
      presetAttributify({
        /* preset options */
      }),
      presetUno(),
      presetIcons({
        collections: {
          // carbon: () =>
          //   import("@iconify-json/carbon").then((i) => i.icons as any),
        },
      }),
    ],
  });
}
