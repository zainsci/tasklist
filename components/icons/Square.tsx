import * as React from "react";
import type { SVGProps } from "react";
const SvgSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="currentColor"
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M202.87-111.869q-37.783 0-64.392-26.609-26.609-26.609-26.609-64.392v-554.26q0-37.783 26.609-64.392 26.609-26.609 64.392-26.609h554.26q37.783 0 64.392 26.609 26.609 26.609 26.609 64.392v554.26q0 37.783-26.609 64.392-26.609 26.609-64.392 26.609H202.87Zm0-91.001h554.26v-554.26H202.87v554.26Z" />
  </svg>
);
export default SvgSquare;
