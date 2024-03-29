import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M434.5-434.5H237.37q-19.153 0-32.327-13.174T191.869-480q0-19.152 13.174-32.326T237.37-525.5H434.5v-197.13q0-19.153 13.174-32.327T480-768.131q19.152 0 32.326 13.174T525.5-722.63v197.13h197.13q19.153 0 32.327 13.174T768.131-480q0 19.152-13.174 32.326T722.63-434.5H525.5v197.13q0 19.153-13.174 32.327T480-191.869q-19.152 0-32.326-13.174T434.5-237.37V-434.5Z" />
  </svg>
);
export default SvgPlus;
