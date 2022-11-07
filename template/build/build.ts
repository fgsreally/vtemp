export default function () {
  return {     
    sourcemap: "hidden",
  cssTarget: "chrome80",
  manifest: "true",
  minify: "terser",
  reportCompressedSize: false,
  rollupOptions: {
    external: [],
 
  }}
}
