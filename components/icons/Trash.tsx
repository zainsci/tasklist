import * as React from "react";
import type { SVGProps } from "react";
const SvgTrash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M277.37-111.869q-37.783 0-64.392-26.609-26.609-26.609-26.609-64.392v-514.5q-19.152 0-32.326-13.173-13.174-13.174-13.174-32.327 0-19.152 13.174-32.326t32.326-13.174H354.5q0-19.152 13.174-32.326T400-853.87h159.522q19.152 0 32.326 13.174t13.174 32.326h168.609q19.152 0 32.326 13.174t13.174 32.326q0 19.153-13.174 32.327-13.174 13.173-32.326 13.173v514.5q0 37.783-26.609 64.392-26.609 26.609-64.392 26.609H277.37ZM682.63-717.37H277.37v514.5h405.26v-514.5ZM355.696-280.239h85.5v-360h-85.5v360Zm163.108 0h85.5v-360h-85.5v360ZM277.37-717.37v514.5-514.5Z" />
  </svg>
);
export default SvgTrash;