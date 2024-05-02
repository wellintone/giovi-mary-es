import * as React from "react";
const Gift = (props: any, stroke: string) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={60}
    height={60}
    style={{
      transition: "opacity 1s ease 0s,fill 2s ease 0s",
    }}
    {...props}
  >
    <defs fill="rgba(255, 255, 255, 1)" stroke={stroke}>
      <clipPath id="a" fill="rgba(255, 255, 255, 1)" stroke={stroke}>
        <path d="M8.43 6h43.5v48H8.43Zm0 0" />
      </clipPath>
    </defs>
    <path fill="rgba(255, 255, 255, 1)" stroke={stroke} d="M-6-6h72v72H-6z" />
    <path fill="rgba(255, 255, 255, 1)" stroke={stroke} d="M-6-6h72v72H-6z" />
    <g fill="rgba(255, 255, 255, 1)" stroke={stroke} clipPath="url(#a)">
      <path d="M10.098 21.707H26.32v7.25H10.098Zm5.984-7.375c-.062-.574.55-1.219 1.297-1.937.84-.817 1.555-1.344 2.508-1.461 1.156-.141 2.636.351 4.52 1.504.14 1.953.679 3.867 1.527 5.367.507.902 1.105 1.62 1.773 2.14-.602.008-1.336-.062-2.215-.246-2.148-.441-4.586-1.437-6.691-2.734-2.153-1.324-2.668-2.164-2.719-2.633Zm11.043-6.18c.691-.457 1.793-.492 3.055-.492 1.261 0 2.363.035 3.054.492.27.18 1.086.72 1.086 3.282 0 2.015-.492 4.043-1.347 5.562-.793 1.402-1.813 2.203-2.793 2.203-.98 0-2-.8-2.79-2.203-.859-1.52-1.35-3.547-1.35-5.562 0-2.563.815-3.102 1.085-3.282Zm8.828 4.305a.5.5 0 0 0 .078-.043c1.887-1.16 3.356-1.652 4.485-1.5.906.121 1.59.633 2.464 1.48.747.72 1.36 1.364 1.297 1.938-.05.469-.566 1.309-2.718 2.633-2.106 1.297-4.543 2.293-6.692 2.734-.879.184-1.613.254-2.215.246.668-.52 1.266-1.238 1.774-2.14.847-1.496 1.386-3.403 1.527-5.348Zm14.309 16.5H34.039v-7.25h16.223ZM47.277 52.34H34.04V30.613h13.238ZM32.371 21.707v7.25h-4.383v-7.25ZM27.988 52.34V30.613h4.383V52.34ZM13.082 30.613H26.32V52.34H13.082Zm-3.816 0h2.148v22.551a.83.83 0 0 0 .832.828h35.867a.83.83 0 0 0 .832-.828v-22.55h2.149c.46 0 .836-.372.836-.829V20.88a.833.833 0 0 0-.836-.828H39.176a24.93 24.93 0 0 0 3.261-1.676c2.282-1.402 3.36-2.594 3.5-3.863.157-1.422-.968-2.508-1.792-3.305-.86-.828-1.903-1.73-3.407-1.934-1.36-.183-2.894.223-4.781 1.262-.055-.777-.195-1.433-.414-1.996-.3-.762-.766-1.355-1.383-1.762-1.082-.715-2.441-.773-3.98-.773-1.54 0-2.899.059-3.98.773-.618.407-1.083 1-1.384 1.762-.218.559-.355 1.211-.414 1.98-1.843-1.003-3.363-1.394-4.722-1.226-1.496.184-2.547 1.027-3.465 1.914-.824.797-1.95 1.883-1.793 3.305.14 1.27 1.223 2.46 3.5 3.863a24.93 24.93 0 0 0 3.262 1.676H9.266a.833.833 0 0 0-.836.828v8.906c0 .457.375.828.836.828" />
    </g>
  </svg>
);
export default Gift;
