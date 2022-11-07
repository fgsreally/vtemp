/**
 * Package file volume analysis
 */
import visualizer from "rollup-plugin-visualizer";

export default function () {
  return visualizer({
    filename: "./node_modules/.cache/visualizer/stats.html",
    open: true,
    gzipSize: true,
    brotliSize: true,
  });
}
