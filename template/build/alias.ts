import { fileURLToPath } from "node:url";

export default function () {
 return {
    "@": fileURLToPath(new URL("../src", import.meta.url)),
 }
}
