import compressPlugin from "vite-plugin-compression";

export default function () {
  return compressPlugin({
    ext: ".gz",
  });
}
