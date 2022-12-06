// src/components/LensKitButton.tsx
import {
  ArchiveIcon,
  AvatarIcon,
  CopyIcon,
  PaperPlaneIcon,
  PlusIcon,
  UpdateIcon
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import { useState } from "react";

// src/utils/styled.ts
import { createStitches } from "@stitches/react";
var { styled } = createStitches({
  theme: {
    colors: {
      lime: "#ABFE2C",
      basil: "#00501E",
      peas: "#E5FFBE"
    }
  }
});
var styled_default = styled;

// src/components/LensKitButton.tsx
import { useAccount } from "wagmi";

// src/components/CreateProfileDialog.tsx
import { blackA, green, mauve, violet } from "@radix-ui/colors";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { keyframes } from "@stitches/react";
import { jsx, jsxs } from "react/jsx-runtime";
var CreateProfileDialog = (props) => /* @__PURE__ */ jsx(Dialog.Root, {
  open: true,
  children: /* @__PURE__ */ jsxs(Dialog.Portal, {
    children: [
      /* @__PURE__ */ jsx(DialogOverlay, {}),
      /* @__PURE__ */ jsxs(DialogContent, {
        children: [
          /* @__PURE__ */ jsx(DialogTitle, {
            children: "Create Profile"
          }),
          /* @__PURE__ */ jsxs(Flex, {
            css: {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 10
            },
            children: [
              /* @__PURE__ */ jsxs("svg", {
                width: "100%",
                viewBox: "0 0 536 240",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [
                  /* @__PURE__ */ jsxs("g", {
                    "clip-path": "url(#clip0_955_3831)",
                    children: [
                      /* @__PURE__ */ jsx("circle", {
                        cx: "266.72",
                        cy: "96.5",
                        r: "53.5",
                        fill: "#E5FFBE",
                        stroke: "#00501E",
                        strokeWidth: "2"
                      }),
                      /* @__PURE__ */ jsx("circle", {
                        cx: "266.72",
                        cy: "96.5",
                        r: "47.5",
                        fill: "#E5FFBE",
                        stroke: "#00501E",
                        strokeWidth: "2"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M281.419 84.9477C281.143 85.2248 280.881 85.5092 280.611 85.7937C280.611 85.3998 280.611 85.0133 280.611 84.6195C280.611 84.2257 280.611 83.8173 280.611 83.4162C280.16 66.8613 255.258 66.8613 254.807 83.4162C254.807 83.8149 254.807 84.216 254.807 84.6195C254.807 85.0133 254.807 85.3998 254.807 85.7937C254.538 85.5092 254.276 85.2248 254 84.9477C253.723 84.6706 253.425 84.3788 253.134 84.109C241.127 72.7248 223.524 90.3663 234.883 102.4C235.159 102.684 235.436 102.976 235.72 103.26C249.43 117 267.738 117 267.738 117C267.738 117 286.011 117 299.721 103.26C300.004 102.976 300.281 102.684 300.557 102.4C311.917 90.3663 294.314 72.7248 282.307 84.109C281.994 84.3788 281.71 84.6633 281.419 84.9477Z",
                        fill: "#00501E"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M266.151 102.865H264.103C264.103 99.8157 261.132 97.3318 257.486 97.3318C253.839 97.3318 250.869 99.8157 250.869 102.865H248.82C248.82 98.6838 252.707 95.2832 257.486 95.2832C262.264 95.2832 266.151 98.6838 266.151 102.865Z",
                        fill: "#E5FFBE"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M286.981 102.78H284.932C284.932 99.7301 281.964 97.2488 278.315 97.2488C274.666 97.2488 271.698 99.7301 271.698 102.78H269.65C269.65 98.6008 273.537 95.2002 278.315 95.2002C283.094 95.2002 286.981 98.6008 286.981 102.78Z",
                        fill: "#E5FFBE"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M259.845 102.908C261.473 102.908 262.792 101.589 262.792 99.9611C262.792 98.3333 261.473 97.0137 259.845 97.0137C258.217 97.0137 256.897 98.3333 256.897 99.9611C256.897 101.589 258.217 102.908 259.845 102.908Z",
                        fill: "#E5FFBE"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M280.739 102.908C282.367 102.908 283.687 101.589 283.687 99.9611C283.687 98.3333 282.367 97.0137 280.739 97.0137C279.112 97.0137 277.792 98.3333 277.792 99.9611C277.792 101.589 279.112 102.908 280.739 102.908Z",
                        fill: "#E5FFBE"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 183C249.102 183 247.22 197.772 247.22 199",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M237.22 184C237.22 184 235.068 193 225.138 193C218.22 193 218.22 185.739 218.22 185.739",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M299.22 184C299.22 184 301.374 193 311.303 193C318.22 193 318.22 185.744 318.22 185.744",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 183C287.34 183 289.22 197.772 289.22 199",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 177.905C268.22 177.905 263.98 169 252.668 169C235.659 169 238.969 194.597 226.359 200.965C219.3 204.526 202.22 197.325 202.22 215",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 177.905C268.22 177.905 272.462 169 283.772 169C300.783 169 297.472 194.597 310.083 200.965C317.141 204.526 334.22 197.325 334.22 215",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 110L268.22 215.5",
                        stroke: "#00501E",
                        strokeWidth: "2"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M341.06 68.0059L339.554 72.6723L338.047 68.0059C337.411 66.0335 335.859 64.4818 333.887 63.8452L329.22 62.3333L333.887 60.8271C335.859 60.1905 337.411 58.6388 338.047 56.6665L339.554 52L341.06 56.6665C341.696 58.6388 343.248 60.1905 345.22 60.8271L349.887 62.3333L345.22 63.8396C343.248 64.4818 341.702 66.0279 341.06 68.0059Z",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        strokeLinejoin: "round"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M327.386 48.3916L326.22 52.0044L325.054 48.3916C324.561 46.8647 323.36 45.6634 321.833 45.1705L318.22 44L321.833 42.8339C323.36 42.341 324.561 41.1397 325.054 39.6128L326.22 36L327.386 39.6128C327.879 41.1397 329.081 42.341 330.607 42.8339L334.22 44L330.607 45.1661C329.081 45.6634 327.884 46.8603 327.386 48.3916Z",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        strokeLinejoin: "round"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M268.22 134.262C268.817 130.744 270.787 127.609 273.697 125.544C276.606 123.479 280.217 122.655 283.734 123.252C283.137 126.769 281.167 129.905 278.257 131.97C275.348 134.035 271.737 134.859 268.22 134.262V134.262Z",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("line", {
                        x1: "69",
                        y1: "158",
                        x2: "467",
                        y2: "158",
                        stroke: "#00501E",
                        strokeWidth: "2"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M115.93 151.27C115.93 167.91 137.12 195.42 165.26 182.55",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M115.76 148.77C115.769 152.564 116.376 156.334 117.56 159.94C118.49 162.968 120.09 165.748 122.241 168.075C124.391 170.402 127.037 172.215 129.983 173.381C132.929 174.546 136.099 175.035 139.26 174.809C142.42 174.584 145.489 173.651 148.24 172.08V172.08",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M66.4199 182.55C94.5699 195.42 115.76 167.91 115.76 151.27",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M115.93 148.77C115.916 152.564 115.309 156.333 114.13 159.94C113.198 162.968 111.597 165.749 109.446 168.075C107.294 170.402 104.647 172.215 101.701 173.381C98.7541 174.546 95.583 175.035 92.4222 174.809C89.2613 174.584 86.1916 173.651 83.4399 172.08V172.08",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M115.76 187.65V148.99",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M138.92 85C137.399 84.9987 135.893 85.2973 134.487 85.8788C133.081 86.4603 131.804 87.3132 130.729 88.3888C129.653 89.4643 128.8 90.7414 128.219 92.147C127.637 93.5525 127.339 95.0589 127.34 96.58C127.34 93.5088 126.12 90.5634 123.948 88.3917C121.777 86.22 118.831 85 115.76 85C112.689 85 109.743 86.22 107.572 88.3917C105.4 90.5634 104.18 93.5088 104.18 96.58C104.18 93.5088 102.96 90.5634 100.788 88.3917C98.6166 86.22 95.6712 85 92.6 85C89.5288 85 86.5834 86.22 84.4117 88.3917C82.24 90.5634 81.02 93.5088 81.02 96.58V113.23C81.02 122.444 84.6801 131.28 91.1951 137.795C97.7101 144.31 106.546 147.97 115.76 147.97C124.973 147.967 133.808 144.306 140.322 137.792C146.836 131.278 150.497 122.443 150.5 113.23V96.58C150.5 93.5088 149.28 90.5634 147.108 88.3917C144.937 86.22 141.991 85 138.92 85V85Z",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M126.9 120.11C126.9 122.62 124.53 124.65 121.61 124.65C118.69 124.65 116.32 122.65 116.32 120.11",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M101.97 114.31C101.97 110.39 105.67 107.21 110.24 107.21C114.81 107.21 118.51 110.39 118.51 114.31",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M124.51 114.22C124.51 110.3 128.21 107.12 132.78 107.12C137.35 107.12 141.05 110.3 141.05 114.22",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M112.79 114.36C114.552 114.36 115.98 112.932 115.98 111.17C115.98 109.409 114.552 107.98 112.79 107.98C111.028 107.98 109.6 109.409 109.6 111.17C109.6 112.932 111.028 114.36 112.79 114.36Z",
                        fill: "#00501E"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M135.18 114.36C136.942 114.36 138.37 112.932 138.37 111.17C138.37 109.409 136.942 107.98 135.18 107.98C133.418 107.98 131.99 109.409 131.99 111.17C131.99 112.932 133.418 114.36 135.18 114.36Z",
                        fill: "#00501E"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M416.93 120.99C416.93 123.5 414.56 125.53 411.64 125.53C408.72 125.53 406.35 123.53 406.35 120.99",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M392 115.19C392 111.27 395.7 108.09 400.27 108.09C404.84 108.09 408.54 111.27 408.54 115.19",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M414.54 115.1C414.54 111.18 418.24 108 422.81 108C427.38 108 431.08 111.18 431.08 115.1",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M397.19 115.24C398.952 115.24 400.38 113.812 400.38 112.05C400.38 110.289 398.952 108.86 397.19 108.86C395.428 108.86 394 110.289 394 112.05C394 113.812 395.428 115.24 397.19 115.24Z",
                        fill: "#00501E"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M419.58 115.24C421.342 115.24 422.77 113.812 422.77 112.05C422.77 110.289 421.342 108.86 419.58 108.86C417.818 108.86 416.39 110.289 416.39 112.05C416.39 113.812 417.818 115.24 419.58 115.24Z",
                        fill: "#00501E"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M412.51 151.27C412.51 167.91 433.7 195.42 461.84 182.55",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M412.34 148.77C412.349 152.564 412.956 156.334 414.14 159.94C415.07 162.968 416.67 165.748 418.821 168.075C420.971 170.402 423.617 172.215 426.563 173.381C429.509 174.546 432.679 175.035 435.84 174.809C439 174.584 442.069 173.651 444.82 172.08V172.08",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M363 182.55C391.15 195.42 412.34 167.91 412.34 151.27",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M412.51 148.77C412.496 152.564 411.889 156.333 410.71 159.94C409.778 162.968 408.177 165.749 406.026 168.075C403.874 170.402 401.228 172.215 398.281 173.381C395.334 174.546 392.163 175.035 389.002 174.809C385.841 174.584 382.772 173.651 380.02 172.08V172.08",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M412 188L412 148",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      }),
                      /* @__PURE__ */ jsx("path", {
                        d: "M450 110.242C450 105.763 448.24 101.468 445.106 98.3014C441.973 95.1346 437.723 93.3555 433.291 93.3555C431.713 93.3578 430.144 93.587 428.63 94.0361C428.181 89.9028 426.239 86.0824 423.175 83.3076C420.111 80.5327 416.141 78.9988 412.026 79C407.912 78.9988 403.942 80.5327 400.878 83.3076C397.814 86.0824 395.871 89.9028 395.423 94.0361C393.905 93.5869 392.332 93.3578 390.751 93.3555C388.553 93.3499 386.376 93.7826 384.344 94.6287C382.312 95.4748 380.465 96.7177 378.909 98.2863C377.353 99.8549 376.118 101.718 375.276 103.77C374.434 105.821 374 108.021 374 110.242C374 113.801 375.114 117.269 377.181 120.151C379.248 123.033 382.164 125.181 385.511 126.288C383.462 129.146 382.357 132.584 382.354 136.114C382.354 140.592 384.115 144.887 387.248 148.054C390.382 151.221 394.632 153 399.063 153C401.535 153.002 403.977 152.449 406.212 151.381C408.447 150.312 410.418 148.755 411.984 146.822C413.547 148.756 415.517 150.314 417.75 151.383C419.983 152.451 422.424 153.004 424.895 153C427.089 152.997 429.261 152.558 431.287 151.706C433.313 150.855 435.154 149.609 436.703 148.039C438.253 146.469 439.481 144.606 440.319 142.556C441.156 140.506 441.585 138.31 441.582 136.092C441.579 132.56 440.474 129.118 438.426 126.256C441.781 125.163 444.707 123.025 446.786 120.148C448.865 117.272 449.99 113.804 450 110.242V110.242Z",
                        stroke: "#00501E",
                        strokeWidth: "2",
                        "stroke-miterlimit": "10"
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsx("defs", {
                    children: /* @__PURE__ */ jsx("clipPath", {
                      id: "clip0_955_3831",
                      children: /* @__PURE__ */ jsx("rect", {
                        width: "536",
                        height: "240",
                        fill: "white"
                      })
                    })
                  })
                ]
              }),
              /* @__PURE__ */ jsx(Fieldset, {
                children: /* @__PURE__ */ jsx(Input, {
                  id: "handle",
                  defaultValue: "lenskit"
                })
              }),
              /* @__PURE__ */ jsx(Flex, {
                css: { justifyContent: "space-between" },
                children: /* @__PURE__ */ jsx(Dialog.Close, {
                  asChild: true,
                  children: /* @__PURE__ */ jsx(Button, {
                    children: "Create(Mumbai Only)"
                  })
                })
              })
            ]
          }),
          /* @__PURE__ */ jsx(Dialog.Close, {
            asChild: true,
            children: /* @__PURE__ */ jsx(IconButton, {
              "aria-label": "Close",
              children: /* @__PURE__ */ jsx(Cross2Icon, {})
            })
          })
        ]
      })
    ]
  })
});
var overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
});
var contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
});
var DialogOverlay = styled_default(Dialog.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
});
var DialogContent = styled_default(Dialog.Content, {
  backgroundColor: "$peas",
  borderRadius: 6,
  boxShadow: "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  "&:focus": { outline: "none" }
});
var DialogTitle = styled_default(Dialog.Title, {
  margin: 0,
  fontWeight: 500,
  color: "$basil",
  fontSize: 17,
  textTransform: "uppercase"
});
var DialogDescription = styled_default(Dialog.Description, {
  margin: "10px 0 20px",
  color: mauve.mauve11,
  fontSize: 15,
  lineHeight: 1.5
});
var Flex = styled_default("div", { display: "flex" });
var Button = styled_default("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  padding: "0 15px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,
  textTransform: "uppercase",
  variants: {
    variant: {
      violet: {
        backgroundColor: "white",
        color: violet.violet11,
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: mauve.mauve3 },
        "&:focus": { boxShadow: `0 0 0 2px black` }
      },
      basil: {
        backgroundColor: "$basil",
        color: "white",
        "&:focus": { boxShadow: `0 0 0 2px black` }
      },
      green: {
        backgroundColor: green.green4,
        color: green.green11,
        "&:hover": { backgroundColor: green.green5 },
        "&:focus": { boxShadow: `0 0 0 2px ${green.green7}` }
      }
    }
  },
  defaultVariants: {
    variant: "basil"
  }
});
var IconButton = styled_default("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,
  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` }
});
var Fieldset = styled_default("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
  justifyContent: "center",
  width: "40%",
  marginBottom: 15
});
var Label = styled_default("label", {
  fontSize: 15,
  color: "$basil",
  width: 90,
  textAlign: "right",
  fontWeight: 500
});
var Input = styled_default("input", {
  all: "unset",
  width: "100%",
  flex: "1",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
  padding: "0 10px",
  fontSize: 15,
  lineHeight: 1,
  color: "$basil",
  boxShadow: "0 0 0 1px $colors$basil",
  height: 35,
  "&:focus": { boxShadow: `0 0 0 2px $colors$basil` }
});
var CreateProfileDialog_default = CreateProfileDialog;

// src/components/LensKitButton.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var dislogOpenState = {
  createProfile: false,
  updateProfile: false,
  follow: false,
  mirror: false,
  collect: false,
  post: false
};
function LensKitButton() {
  const { address } = useAccount();
  const [dialogOpen, setDialogOpen] = useState(dislogOpenState);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const handleOpenDialog = (dialog) => {
    setDialogOpen({ ...dislogOpenState, [dialog]: true });
    setPopoverOpen(false);
  };
  const adminActions = [
    {
      name: "Create Profile",
      description: "Create a new profile",
      icon: PlusIcon,
      onClick: () => handleOpenDialog("createProfile")
    },
    {
      name: "Update Profile",
      description: "Update your profile",
      icon: UpdateIcon,
      onClick: () => setDialogOpen({ ...dislogOpenState, updateProfile: true })
    },
    {
      name: "Post",
      description: "Post a new publication",
      icon: PaperPlaneIcon,
      onClick: () => setDialogOpen({ ...dislogOpenState, post: true })
    }
  ];
  const actions = [
    {
      name: "Follow",
      description: "Follow your favorite creators.",
      icon: AvatarIcon,
      onClick: () => setDialogOpen({ ...dislogOpenState, follow: true })
    },
    {
      name: "Collect",
      description: "Collect this post to your collection.",
      icon: ArchiveIcon,
      onClick: () => setDialogOpen({ ...dislogOpenState, collect: true })
    },
    {
      name: "Mirror",
      description: "Re-share this post to your followers.",
      icon: CopyIcon,
      onClick: () => setDialogOpen({ ...dislogOpenState, mirror: true })
    }
  ];
  const shortAddress = address ? `${address.slice(0, 4)}...${address.slice(-4)}` : "";
  return /* @__PURE__ */ jsxs2("div", {
    className: "w-full max-w-sm px-4",
    children: [
      /* @__PURE__ */ jsxs2(Popover.Root, {
        open: popoverOpen,
        onOpenChange: setPopoverOpen,
        children: [
          /* @__PURE__ */ jsx2(Popover.Trigger, {
            asChild: true,
            children: /* @__PURE__ */ jsxs2(Button2, {
              children: [
                /* @__PURE__ */ jsx2("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 28 27",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /* @__PURE__ */ jsx2("path", {
                    d: "M27.038 24.1564L26.7566 24.2868C25.0529 25.0632 23.1418 25.2608 21.3152 24.8494C20.3411 24.6355 19.4121 24.2523 18.5705 23.7172C20.2384 24.1484 22.007 23.9429 23.5316 23.1409L23.7512 23.0242L24.0462 22.8595L23.2228 21.4117L22.9277 21.5832L22.7631 21.6724C21.9603 22.0987 21.0603 22.3083 20.1518 22.2806C19.2433 22.2529 18.3577 21.9889 17.5824 21.5146C16.8947 21.1032 16.3075 20.5435 15.8635 19.8764C15.4195 19.2093 15.1301 18.4515 15.0161 17.6583C19.0003 17.2893 22.7398 15.5733 25.6176 12.7933L25.9195 12.4776C26.4256 11.973 26.8178 11.366 27.0699 10.6973C27.322 10.0286 27.4281 9.31375 27.381 8.60067C27.2642 7.32022 26.695 6.12331 25.7754 5.22467C24.8778 4.30358 23.6803 3.73404 22.3994 3.61901C21.2828 3.54039 20.1733 3.84807 19.2567 4.49045C19.066 3.38669 18.4956 2.38425 17.6441 1.65652C16.6588 0.830181 15.4099 0.384645 14.124 0.400816C12.848 0.385004 11.6079 0.822699 10.6245 1.63593C9.77703 2.36697 9.20753 3.36786 9.012 4.46987C8.09565 3.82697 6.98585 3.51922 5.86928 3.5984C4.58883 3.71521 3.39191 4.28449 2.49328 5.20409C1.5727 6.10126 1.00526 7.29942 0.894463 8.58009C0.846532 9.29325 0.952201 10.0084 1.20434 10.6772C1.45648 11.3461 1.84923 11.953 2.35603 12.457C2.4521 12.5668 2.55503 12.6697 2.65795 12.7727C5.53334 15.5522 9.27049 17.2683 13.2526 17.6377C13.14 18.4314 12.8511 19.1897 12.407 19.857C11.9629 20.5244 11.3749 21.0837 10.6863 21.494C9.91224 21.9684 9.02773 22.2325 8.12031 22.2602C7.21289 22.2878 6.31397 22.0782 5.51245 21.6519L5.34091 21.5627L5.04585 21.3911L4.22243 22.8389L4.52435 23.0036C4.59295 23.0466 4.66397 23.0855 4.73706 23.1203C6.26165 23.9223 8.03032 24.1278 9.69818 23.6967C8.85723 24.233 7.92799 24.6163 6.95346 24.8289C5.12685 25.2402 3.21578 25.0426 1.512 24.2662L1.23069 24.1358L0.400391 25.5768L0.736655 25.7346C2.79568 26.6783 5.10769 26.9194 7.31711 26.4208C9.56561 25.9364 11.5804 24.6965 13.0261 22.9076L13.2869 22.5713V26.7364H14.9474V22.5576C15.0298 22.6811 15.119 22.7978 15.2082 22.9076C16.6459 24.7208 18.6645 25.9833 20.9241 26.4826C21.6605 26.6492 22.4129 26.7344 23.1679 26.7364C24.669 26.7345 26.1515 26.4043 27.5114 25.7689L27.8408 25.6111L27.038 24.1564ZM10.5696 6.15787C10.5696 6.05494 10.5696 5.95888 10.5696 5.86281C10.5696 5.76675 10.5696 5.60207 10.5696 5.47855C10.5692 5.01622 10.6623 4.55856 10.8433 4.1331C11.0242 3.70764 11.2893 3.32314 11.6225 3.00269C11.9558 2.68223 12.3504 2.43246 12.7826 2.26834C13.2148 2.10422 13.6758 2.02915 14.1378 2.04765C14.5997 2.02915 15.0607 2.10422 15.4929 2.26834C15.9251 2.43246 16.3197 2.68223 16.653 3.00269C16.9862 3.32314 17.2513 3.70764 17.4323 4.1331C17.6132 4.55856 17.7063 5.01622 17.7059 5.47855C17.7059 5.60207 17.7059 5.73244 17.7059 5.86281C17.7059 5.99319 17.7059 6.06181 17.7059 6.16474L17.651 8.40167L19.2086 6.75484L19.4008 6.56271L19.6752 6.28824C20.0026 5.9632 20.3922 5.70751 20.8206 5.53648C21.2491 5.36544 21.7076 5.28256 22.1689 5.29281C22.6301 5.30306 23.0845 5.40624 23.5049 5.59614C23.9253 5.78604 24.3032 6.05877 24.6158 6.39804C24.955 6.71064 25.2278 7.08846 25.4177 7.50889C25.6076 7.92932 25.7107 8.38373 25.721 8.84494C25.7312 9.30616 25.6483 9.76471 25.4773 10.1932C25.3063 10.6216 25.0506 11.0112 24.7255 11.3386L24.4579 11.6199C21.6612 14.2703 18.0127 15.8391 14.1652 16.0457C10.3171 15.8415 6.66782 14.2723 3.87247 11.6199L3.59802 11.3386C3.27297 11.0112 3.01729 10.6216 2.84625 10.1932C2.67522 9.76471 2.59234 9.30616 2.60259 8.84494C2.61284 8.38373 2.71599 7.92932 2.90589 7.50889C3.09579 7.08846 3.36852 6.71064 3.70779 6.39804C4.38462 5.6998 5.30881 5.29562 6.28097 5.27269C7.17297 5.2865 8.02358 5.6514 8.6483 6.28824L8.92966 6.55586L9.13551 6.77543L10.6794 8.40167L10.5696 6.15787Z",
                    fill: "#00501E"
                  })
                }),
                /* @__PURE__ */ jsx2("div", {
                  style: {
                    marginLeft: 8
                  },
                  children: shortAddress || "Connect Wallet"
                })
              ]
            })
          }),
          /* @__PURE__ */ jsx2(Portal3, {
            children: /* @__PURE__ */ jsxs2(Content3, {
              children: [
                /* @__PURE__ */ jsxs2(List, {
                  children: [
                    adminActions.map((item) => /* @__PURE__ */ jsx2(ListItem, {
                      icon: /* @__PURE__ */ jsx2(item.icon, {
                        width: 24,
                        height: 24
                      }),
                      title: item.name,
                      onClick: item.onClick,
                      children: item.description
                    }, item.name)),
                    /* @__PURE__ */ jsx2(Divider, {}),
                    actions.map((item) => /* @__PURE__ */ jsx2(ListItem, {
                      icon: /* @__PURE__ */ jsx2(item.icon, {
                        width: 24,
                        height: 24
                      }),
                      title: item.name,
                      children: item.description
                    }))
                  ]
                }),
                /* @__PURE__ */ jsx2(Footer, {
                  title: "Documentation",
                  description: "Learn more about the project",
                  link: "https://docs.lens.xyz"
                })
              ]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx2(CreateProfileDialog_default, {
        open: dialogOpen.createProfile
      })
    ]
  });
}
var Portal3 = styled_default(Popover.Portal, {
  position: "absolute",
  left: "50%",
  zIndex: 10,
  marginTop: 3,
  width: "100%",
  maxWidth: 300,
  transform: "translateX(-50%)",
  paddingX: 4,
  "@sm": { paddingX: 0 },
  "@lg": { maxWidth: 600 }
});

var List = styled_default("ul", {
  display: "grid",
  padding: 22,
  margin: 0,
  columnGap: 10,
  listStyle: "none"
});
var Flex2 = styled_default("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 6,
  padding: 12,
});
var ListItem = ({ children, icon, title, ...props }) => /* @__PURE__ */ jsx2("li", {
  children: /* @__PURE__ */ jsxs2(Flex2, {
    children: [
      /* @__PURE__ */ jsx2(ListItemIcon, {
        children: icon
      }),
      /* @__PURE__ */ jsxs2(ListItemLink, {
        ...props,
        children: [
          /* @__PURE__ */ jsx2(ListItemHeading, {
            children: title
          }),
          /* @__PURE__ */ jsx2(ListItemText, {
            children
          })
        ]
      })
    ]
  })
});
var ListItemLink = styled_default("a", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  outline: "none",
  textDecoration: "none",
  userSelect: "none",
  padding: 12,
  borderRadius: 6,
  fontSize: 15,
  lineHeight: 1
});
var ListItemIcon = styled_default("div", {
  color: "$basil",
  height: 40,
  width: 60,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});
var ListItemHeading = styled_default("div", {
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
  color: "$basil"
});
var ListItemText = styled_default("p", {
  all: "unset",
  color: "$basil",
  lineHeight: 1.4,
  fontWeight: "initial"
});
var Divider = styled_default("div", {
  height: 1,
  backgroundColor: "$basil",
  opacity: 0.5,
  margin: "10px 0"
});
var Footer = ({ title, description, link }) => /* @__PURE__ */ jsx2("div", {
  style: { padding: 12 },
  children: /* @__PURE__ */ jsxs2(ListItemLink, {
    href: link,
    target: "_blank",
    rel: "noreferrer",
    children: [
      /* @__PURE__ */ jsx2("span", {
        style: { fontWeight: 500, color: "#00501E" },
        children: title
      }),
      /* @__PURE__ */ jsx2("span", {
        style: { color: "#00501E", marginTop: 5 },
        children: description
      })
    ]
  })
});

// src/components/LensKitProvider.tsx
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

// src/utils/state.ts
var authenticationToken = null;
var setAuthenticationToken = (token) => {
  authenticationToken = token;
  console.log("setAuthenticationToken: token", token);
};
var getAuthenticationToken = () => {
  return authenticationToken;
};

// src/components/LensKitProvider.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all"
  }
};
var httpLink = new HttpLink({
  uri: "https://api-mumbai.lens.dev",
  fetch
});
var errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(
      ({ message, locations, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  if (networkError)
    console.log(`[Network error]: ${networkError}`);
});
var authLink = new ApolloLink((operation, forward) => {
  const token = getAuthenticationToken();
  console.log("jwt token:", token);
  operation.setContext({
    headers: {
      "x-access-token": token ? `Bearer ${token}` : ""
    }
  });
  return forward(operation);
});
var client = new ApolloClient({
  uri: "https://api-mumbai.lens.dev",
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions
});
function LensKitProvider({ children }) {
  return /* @__PURE__ */ jsx3(ApolloProvider, {
    client,
    children
  });
}

// src/generated-gql.ts
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
var defaultOptions2 = {};
var PublicationTypes = /* @__PURE__ */ ((PublicationTypes3) => {
  PublicationTypes3["Comment"] = "COMMENT";
  PublicationTypes3["Mirror"] = "MIRROR";
  PublicationTypes3["Post"] = "POST";
  return PublicationTypes3;
})(PublicationTypes || {});
var TxReceiptFieldsFragmentDoc = gql`
    fragment TxReceiptFields on TransactionReceipt {
  to
  from
  contractAddress
  transactionIndex
  root
  gasUsed
  logsBloom
  blockHash
  transactionHash
  blockNumber
  confirmations
  cumulativeGasUsed
  effectiveGasPrice
  byzantium
  type
  status
  logs {
    blockNumber
    blockHash
    transactionIndex
    removed
    address
    data
    topics
    transactionHash
    logIndex
  }
}
    `;
var CommonPaginatedResultInfoFieldsFragmentDoc = gql`
    fragment CommonPaginatedResultInfoFields on PaginatedResultInfo {
  prev
  next
  totalCount
}
    `;
var MediaFieldsFragmentDoc = gql`
    fragment MediaFields on Media {
  url
  width
  height
  mimeType
}
    `;
var FollowModuleFieldsFragmentDoc = gql`
    fragment FollowModuleFields on FollowModule {
  ... on FeeFollowModuleSettings {
    type
    amount {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
    recipient
  }
  ... on ProfileFollowModuleSettings {
    type
    contractAddress
  }
  ... on RevertFollowModuleSettings {
    type
    contractAddress
  }
  ... on UnknownFollowModuleSettings {
    type
    contractAddress
    followModuleReturnData
  }
}
    `;
var ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Profile {
  id
  name
  bio
  attributes {
    displayType
    traitType
    key
    value
  }
  isFollowedByMe
  isFollowing(who: null)
  followNftAddress
  metadata
  isDefault
  handle
  picture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  coverPicture {
    ... on NftImage {
      contractAddress
      tokenId
      uri
      verified
    }
    ... on MediaSet {
      original {
        ...MediaFields
      }
      small {
        ...MediaFields
      }
      medium {
        ...MediaFields
      }
    }
  }
  ownedBy
  dispatcher {
    address
    canUseRelay
  }
  stats {
    totalFollowers
    totalFollowing
    totalPosts
    totalComments
    totalMirrors
    totalPublications
    totalCollects
  }
  followModule {
    ...FollowModuleFields
  }
  onChainIdentity {
    ens {
      name
    }
    proofOfHumanity
    sybilDotOrg {
      verified
      source {
        twitter {
          handle
        }
      }
    }
    worldcoin {
      isHuman
    }
  }
}
    ${MediaFieldsFragmentDoc}
${FollowModuleFieldsFragmentDoc}`;
var WalletFieldsFragmentDoc = gql`
    fragment WalletFields on Wallet {
  address
  defaultProfile {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
var NewFollowerNotificationFieldsFragmentDoc = gql`
    fragment NewFollowerNotificationFields on NewFollowerNotification {
  __typename
  createdAt
  isFollowedByMe
  wallet {
    ...WalletFields
  }
}
    ${WalletFieldsFragmentDoc}`;
var PublicationStatsFieldsFragmentDoc = gql`
    fragment PublicationStatsFields on PublicationStats {
  totalAmountOfMirrors
  totalAmountOfCollects
  totalAmountOfComments
}
    `;
var MetadataOutputFieldsFragmentDoc = gql`
    fragment MetadataOutputFields on MetadataOutput {
  name
  description
  content
  media {
    original {
      ...MediaFields
    }
    small {
      ...MediaFields
    }
    medium {
      ...MediaFields
    }
  }
  attributes {
    displayType
    traitType
    value
  }
}
    ${MediaFieldsFragmentDoc}`;
var Erc20FieldsFragmentDoc = gql`
    fragment Erc20Fields on Erc20 {
  name
  symbol
  decimals
  address
}
    `;
var CollectModuleFieldsFragmentDoc = gql`
    fragment CollectModuleFields on CollectModule {
  __typename
  ... on FreeCollectModuleSettings {
    type
    followerOnly
    contractAddress
  }
  ... on FeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
  }
  ... on LimitedTimedFeeCollectModuleSettings {
    type
    collectLimit
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on RevertCollectModuleSettings {
    type
  }
  ... on TimedFeeCollectModuleSettings {
    type
    amount {
      asset {
        ...Erc20Fields
      }
      value
    }
    recipient
    referralFee
    endTimestamp
  }
  ... on UnknownCollectModuleSettings {
    type
    contractAddress
    collectModuleReturnData
  }
}
    ${Erc20FieldsFragmentDoc}`;
var ReferenceModuleFieldsFragmentDoc = gql`
    fragment ReferenceModuleFields on ReferenceModule {
  ... on FollowOnlyReferenceModuleSettings {
    type
    contractAddress
  }
  ... on UnknownReferenceModuleSettings {
    type
    contractAddress
    referenceModuleReturnData
  }
  ... on DegreesOfSeparationReferenceModuleSettings {
    type
    contractAddress
    commentsRestricted
    mirrorsRestricted
    degreesOfSeparation
  }
}
    `;
var PostFieldsFragmentDoc = gql`
    fragment PostFields on Post {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}`;
var MirrorBaseFieldsFragmentDoc = gql`
    fragment MirrorBaseFields on Mirror {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  hasCollectedByMe
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}`;
var CommentBaseFieldsFragmentDoc = gql`
    fragment CommentBaseFields on Comment {
  id
  profile {
    ...ProfileFields
  }
  stats {
    ...PublicationStatsFields
  }
  metadata {
    ...MetadataOutputFields
  }
  createdAt
  collectModule {
    ...CollectModuleFields
  }
  referenceModule {
    ...ReferenceModuleFields
  }
  appId
  hidden
  reaction(request: null)
  mirrors(by: null)
  hasCollectedByMe
}
    ${ProfileFieldsFragmentDoc}
${PublicationStatsFieldsFragmentDoc}
${MetadataOutputFieldsFragmentDoc}
${CollectModuleFieldsFragmentDoc}
${ReferenceModuleFieldsFragmentDoc}`;
var CommentMirrorOfFieldsFragmentDoc = gql`
    fragment CommentMirrorOfFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
    }
  }
}
    ${CommentBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}`;
var CommentFieldsFragmentDoc = gql`
    fragment CommentFields on Comment {
  ...CommentBaseFields
  mainPost {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorBaseFields
      mirrorOf {
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentMirrorOfFields
        }
      }
    }
  }
}
    ${CommentBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorBaseFieldsFragmentDoc}
${CommentMirrorOfFieldsFragmentDoc}`;
var MirrorFieldsFragmentDoc = gql`
    fragment MirrorFields on Mirror {
  ...MirrorBaseFields
  mirrorOf {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${MirrorBaseFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var NewCollectNotificationFieldsFragmentDoc = gql`
    fragment NewCollectNotificationFields on NewCollectNotification {
  __typename
  createdAt
  wallet {
    ...WalletFields
  }
  collectedPublication {
    __typename
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${WalletFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var NewMirrorNotificationFieldsFragmentDoc = gql`
    fragment NewMirrorNotificationFields on NewMirrorNotification {
  __typename
  createdAt
  profile {
    ...ProfileFields
  }
  publication {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var CommentWithCommentedPublicationFieldsFragmentDoc = gql`
    fragment CommentWithCommentedPublicationFields on Comment {
  ...CommentFields
  commentOn {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${CommentFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
var NewCommentNotificationFieldsFragmentDoc = gql`
    fragment NewCommentNotificationFields on NewCommentNotification {
  __typename
  createdAt
  profile {
    ...ProfileFields
  }
  comment {
    ...CommentWithCommentedPublicationFields
  }
}
    ${ProfileFieldsFragmentDoc}
${CommentWithCommentedPublicationFieldsFragmentDoc}`;
var NewMentionNotificationFieldsFragmentDoc = gql`
    fragment NewMentionNotificationFields on NewMentionNotification {
  __typename
  mentionPublication {
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
  createdAt
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var NewReactionNotificationFieldsFragmentDoc = gql`
    fragment NewReactionNotificationFields on NewReactionNotification {
  __typename
  createdAt
  profile {
    ...ProfileFields
  }
  reaction
  publication {
    ... on Post {
      ...PostFields
    }
    ... on Mirror {
      ...MirrorFields
    }
    ... on Comment {
      ...CommentFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var AddReactionDocument = gql`
    mutation addReaction($request: ReactionRequest!) {
  addReaction(request: $request)
}
    `;
var GenerateModuleCurrencyApprovalDataDocument = gql`
    query generateModuleCurrencyApprovalData($request: GenerateModuleCurrencyApprovalDataRequest!) {
  generateModuleCurrencyApprovalData(request: $request) {
    to
    from
    data
  }
}
    `;
var ApprovedModuleAllowanceAmountDocument = gql`
    query approvedModuleAllowanceAmount($request: ApprovedModuleAllowanceAmountRequest!) {
  approvedModuleAllowanceAmount(request: $request) {
    currency
    module
    contractAddress
    allowance
  }
}
    `;
var AuthenticateDocument = gql`
    mutation authenticate($request: SignedAuthChallenge!) {
  authenticate(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
function useAuthenticateMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(AuthenticateDocument, options);
}
var BroadcastDocument = gql`
    mutation Broadcast($request: BroadcastRequest!) {
  broadcast(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreateBurnProfileTypedDataDocument = gql`
    mutation createBurnProfileTypedData($request: BurnProfileRequest!) {
  createBurnProfileTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        BurnWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        tokenId
      }
    }
  }
}
    `;
var ChallengeDocument = gql`
    query Challenge($request: ChallengeRequest!) {
  challenge(request: $request) {
    text
  }
}
    `;
function useChallengeLazyQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useLazyQuery(ChallengeDocument, options);
}
var CreateCollectTypedDataDocument = gql`
    mutation createCollectTypedData($request: CreateCollectRequest!) {
  createCollectTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        CollectWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        pubId
        data
      }
    }
  }
}
    `;
function useCreateCollectTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateCollectTypedDataDocument, options);
}
var CreateCommentTypedDataDocument = gql`
    mutation createCommentTypedData($request: CreatePublicCommentRequest!) {
  createCommentTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        CommentWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
        referenceModuleData
      }
    }
  }
}
    `;
function useCreateCommentTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateCommentTypedDataDocument, options);
}
var CreateCommentViaDispatcherDocument = gql`
    mutation CreateCommentViaDispatcher($request: CreatePublicCommentRequest!) {
  createCommentViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreateMirrorViaDispatcherDocument = gql`
    mutation CreateMirrorViaDispatcher($request: CreateMirrorRequest!) {
  createMirrorViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreatePostViaDispatcherDocument = gql`
    mutation CreatePostViaDispatcher($request: CreatePublicPostRequest!) {
  createPostViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreateProfileDocument = gql`
    mutation createProfile($request: CreateProfileRequest!) {
  createProfile(request: $request) {
    ... on RelayerResult {
      txHash
    }
    ... on RelayError {
      reason
    }
    __typename
  }
}
    `;
function useCreateProfileMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateProfileDocument, options);
}
var CreateSetProfileImageUriViaDispatcherDocument = gql`
    mutation CreateSetProfileImageURIViaDispatcher($request: UpdateProfileImageRequest!) {
  createSetProfileImageURIViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreateSetProfileMetadataViaDispatcherDocument = gql`
    mutation CreateSetProfileMetadataViaDispatcher($request: CreatePublicSetProfileMetadataURIRequest!) {
  createSetProfileMetadataViaDispatcher(request: $request) {
    ... on RelayerResult {
      txHash
      txId
    }
    ... on RelayError {
      reason
    }
  }
}
    `;
var CreateSetDispatcherTypedDataDocument = gql`
    mutation CreateSetDispatcherTypedData($request: SetDispatcherRequest!) {
  createSetDispatcherTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetDispatcherWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        dispatcher
      }
    }
  }
}
    `;
var DoesFollowDocument = gql`
    query doesFollow($request: DoesFollowRequest!) {
  doesFollow(request: $request) {
    followerAddress
    profileId
    follows
  }
}
    `;
var EnabledModuleCurrenciesDocument = gql`
    query enabledModuleCurrencies {
  enabledModuleCurrencies {
    name
    symbol
    decimals
    address
  }
}
    `;
var EnabledModulesDocument = gql`
    query enabledModules {
  enabledModules {
    collectModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
    followModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
    referenceModules {
      moduleName
      contractAddress
      inputParams {
        name
        type
      }
      redeemParams {
        name
        type
      }
      returnDataParms {
        name
        type
      }
    }
  }
}
    `;
var ExploreProfilesDocument = gql`
    query exploreProfiles($request: ExploreProfilesRequest!) {
  exploreProfiles(request: $request) {
    items {
      ...ProfileFields
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var ExplorePublicationsDocument = gql`
    query ExplorePublications($request: ExplorePublicationRequest!) {
  explorePublications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var CreateFollowTypedDataDocument = gql`
    mutation createFollowTypedData($request: FollowRequest!) {
  createFollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        FollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        datas
      }
    }
  }
}
    `;
function useCreateFollowTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateFollowTypedDataDocument, options);
}
var FollowerNftOwnedTokenIdsDocument = gql`
    query followerNftOwnedTokenIds($request: FollowerNftOwnedTokenIdsRequest!) {
  followerNftOwnedTokenIds(request: $request) {
    followerNftAddress
    tokensIds
  }
}
    `;
var FollowersDocument = gql`
    query followers($request: FollowersRequest!) {
  followers(request: $request) {
    items {
      wallet {
        ...WalletFields
      }
      totalAmountOfTimesFollowed
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${WalletFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var FollowingDocument = gql`
    query following($request: FollowingRequest!) {
  following(request: $request) {
    items {
      profile {
        ...ProfileFields
      }
      totalAmountOfTimesFollowing
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var DefaultProfileDocument = gql`
    query defaultProfile($request: DefaultProfileRequest!) {
  defaultProfile(request: $request) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
var ProfileDocument = gql`
    query profile($request: SingleProfileQueryRequest!) {
  profile(request: $request) {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
function useProfileQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useQuery(ProfileDocument, options);
}
var ProfilesDocument = gql`
    query profiles($request: ProfileQueryRequest!) {
  profiles(request: $request) {
    items {
      ...ProfileFields
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
function useProfilesQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useQuery(ProfilesDocument, options);
}
var PublicationDocument = gql`
    query publication($request: PublicationQueryRequest!) {
  publication(request: $request) {
    __typename
    ... on Post {
      ...PostFields
    }
    ... on Comment {
      ...CommentFields
    }
    ... on Mirror {
      ...MirrorFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
function usePublicationQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useQuery(PublicationDocument, options);
}
var PublicationsDocument = gql`
    query publications($request: PublicationsQueryRequest!) {
  publications(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
function usePublicationsQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useQuery(PublicationsDocument, options);
}
var NftsDocument = gql`
    query nfts($request: NFTsRequest!) {
  nfts(request: $request) {
    items {
      contractName
      contractAddress
      symbol
      tokenId
      owners {
        amount
        address
      }
      name
      description
      contentURI
      originalContent {
        uri
        metaType
      }
      chainId
      collectionName
      ercType
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var GlobalProtocolStatsDocument = gql`
    query globalProtocolStats($request: GlobalProtocolStatsRequest) {
  globalProtocolStats(request: $request) {
    totalProfiles
    totalBurntProfiles
    totalPosts
    totalMirrors
    totalComments
    totalCollects
    totalFollows
    totalRevenue {
      asset {
        name
        symbol
        decimals
        address
      }
      value
    }
  }
}
    `;
var HasTxHashBeenIndexedDocument = gql`
    query hasTxHashBeenIndexed($request: HasTxHashBeenIndexedRequest!) {
  hasTxHashBeenIndexed(request: $request) {
    __typename
    ... on TransactionIndexedResult {
      indexed
      txReceipt {
        ...TxReceiptFields
      }
      metadataStatus {
        status
        reason
      }
    }
    ... on TransactionError {
      reason
      txReceipt {
        ...TxReceiptFields
      }
    }
  }
}
    ${TxReceiptFieldsFragmentDoc}`;
function useHasTxHashBeenIndexedLazyQuery(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useLazyQuery(HasTxHashBeenIndexedDocument, options);
}
var HidePublicationDocument = gql`
    mutation hidePublication($request: HidePublicationRequest!) {
  hidePublication(request: $request)
}
    `;
var CreateMirrorTypedDataDocument = gql`
    mutation createMirrorTypedData($request: CreateMirrorRequest!) {
  createMirrorTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        MirrorWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        profileIdPointed
        pubIdPointed
        referenceModuleData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
    `;
function useCreateMirrorTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateMirrorTypedDataDocument, options);
}
var MutualFollowersProfilesDocument = gql`
    query MutualFollowersProfiles($request: MutualFollowersProfilesQueryRequest!) {
  mutualFollowersProfiles(request: $request) {
    items {
      ...ProfileFields
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var NftOwnershipChallengeDocument = gql`
    query nftOwnershipChallenge($request: NftOwnershipChallengeRequest!) {
  nftOwnershipChallenge(request: $request) {
    id
    text
  }
}
    `;
var PendingApprovalFollowsDocument = gql`
    query pendingApprovalFollows($request: PendingApprovalFollowsRequest!) {
  pendingApprovalFollows(request: $request) {
    items {
      ...ProfileFields
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var PingDocument = gql`
    query ping {
  ping
}
    `;
var CreatePostTypedDataDocument = gql`
    mutation createPostTypedData($request: CreatePublicPostRequest!) {
  createPostTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        PostWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        contentURI
        collectModule
        collectModuleInitData
        referenceModule
        referenceModuleInitData
      }
    }
  }
}
    `;
function useCreatePostTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreatePostTypedDataDocument, options);
}
var ProfileFeedDocument = gql`
    query ProfileFeed($request: FeedRequest!) {
  feed(request: $request) {
    items {
      root {
        __typename
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
      }
      electedMirror {
        mirrorId
        profile {
          id
          handle
        }
        timestamp
      }
      mirrors {
        profile {
          id
          handle
        }
        timestamp
      }
      collects {
        profile {
          id
          handle
        }
        timestamp
      }
      reactions {
        profile {
          id
          handle
        }
        reaction
        timestamp
      }
      comments {
        ...CommentFields
      }
    }
    pageInfo {
      prev
      next
      totalCount
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}`;
var ProfileFollowRevenueDocument = gql`
    query ProfileFollowRevenue($request: ProfileFollowRevenueQueryRequest!) {
  profileFollowRevenue(request: $request) {
    revenues {
      total {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
    }
  }
}
    `;
var ProfilePublicationRevenueDocument = gql`
    query ProfilePublicationRevenue($request: ProfilePublicationRevenueQueryRequest!) {
  profilePublicationRevenue(request: $request) {
    items {
      publication {
        __typename
        ... on Post {
          ...PostFields
        }
        ... on Comment {
          ...CommentFields
        }
        ... on Mirror {
          ...MirrorFields
        }
      }
      revenue {
        total {
          asset {
            name
            symbol
            decimals
            address
          }
          value
        }
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var ProfilePublicationsForSaleDocument = gql`
    query ProfilePublicationsForSale($request: ProfilePublicationsForSaleRequest!) {
  profilePublicationsForSale(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var ProxyActionStatusDocument = gql`
    query ProxyActionStatus($proxyActionId: ProxyActionId!) {
  proxyActionStatus(proxyActionId: $proxyActionId) {
    ... on ProxyActionStatusResult {
      txHash
      txId
      status
    }
    ... on ProxyActionError {
      reason
      lastKnownTxId
    }
    ... on ProxyActionQueued {
      queuedAt
    }
  }
}
    `;
var ProxyActionDocument = gql`
    mutation ProxyAction($request: ProxyActionRequest!) {
  proxyAction(request: $request)
}
    `;
var PublicationRevenueDocument = gql`
    query PublicationRevenue($request: PublicationRevenueQueryRequest!) {
  publicationRevenue(request: $request) {
    publication {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    revenue {
      total {
        asset {
          name
          symbol
          decimals
          address
        }
        value
      }
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}`;
var RecommendedProfilesDocument = gql`
    query recommendedProfiles {
  recommendedProfiles {
    ...ProfileFields
  }
}
    ${ProfileFieldsFragmentDoc}`;
var RefreshDocument = gql`
    mutation Refresh($request: RefreshRequest!) {
  refresh(request: $request) {
    accessToken
    refreshToken
  }
}
    `;
var RemoveReactionDocument = gql`
    mutation removeReaction($request: ReactionRequest!) {
  removeReaction(request: $request)
}
    `;
var ReportPublicationDocument = gql`
    mutation reportPublication($request: ReportPublicationRequest!) {
  reportPublication(request: $request)
}
    `;
var SearchProfilesDocument = gql`
    query SearchProfiles($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on ProfileSearchResult {
      __typename
      items {
        ... on Profile {
          ...ProfileFields
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfoFields
      }
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var SearchPublicationsDocument = gql`
    query SearchPublications($request: SearchQueryRequest!) {
  search(request: $request) {
    ... on PublicationSearchResult {
      __typename
      items {
        __typename
        ... on Comment {
          ...CommentFields
        }
        ... on Post {
          ...PostFields
        }
      }
      pageInfo {
        ...CommonPaginatedResultInfoFields
      }
    }
  }
}
    ${CommentFieldsFragmentDoc}
${PostFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var CreateSetDefaultProfileTypedDataDocument = gql`
    mutation createSetDefaultProfileTypedData($request: CreateSetDefaultProfileRequest!) {
  createSetDefaultProfileTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetDefaultProfileWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        wallet
        profileId
      }
    }
  }
}
    `;
var CreateSetFollowModuleTypedDataDocument = gql`
    mutation createSetFollowModuleTypedData($request: CreateSetFollowModuleRequest!) {
  createSetFollowModuleTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetFollowModuleWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        followModule
        followModuleInitData
      }
    }
  }
}
    `;
var CreateSetFollowNftUriTypedDataDocument = gql`
    mutation createSetFollowNFTUriTypedData($request: CreateSetFollowNFTUriRequest!) {
  createSetFollowNFTUriTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetFollowNFTURIWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        profileId
        deadline
        followNFTURI
      }
    }
  }
}
    `;
var CreateSetProfileImageUriTypedDataDocument = gql`
    mutation createSetProfileImageURITypedData($request: UpdateProfileImageRequest!) {
  createSetProfileImageURITypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        SetProfileImageURIWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        imageURI
        profileId
      }
    }
  }
}
    `;
var CreateSetProfileMetadataTypedDataDocument = gql`
    mutation createSetProfileMetadataTypedData($request: CreatePublicSetProfileMetadataURIRequest!) {
  createSetProfileMetadataTypedData(request: $request) {
    id
    expiresAt
    typedData {
      types {
        SetProfileMetadataURIWithSig {
          name
          type
        }
      }
      domain {
        name
        chainId
        version
        verifyingContract
      }
      value {
        nonce
        deadline
        profileId
        metadata
      }
    }
  }
}
    `;
function useCreateSetProfileMetadataTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateSetProfileMetadataTypedDataDocument, options);
}
var TimelineDocument = gql`
    query timeline($request: TimelineRequest!) {
  timeline(request: $request) {
    items {
      __typename
      ... on Post {
        ...PostFields
      }
      ... on Comment {
        ...CommentFields
      }
      ... on Mirror {
        ...MirrorFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${PostFieldsFragmentDoc}
${CommentFieldsFragmentDoc}
${MirrorFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var CreateToggleFollowTypedDataDocument = gql`
    mutation createToggleFollowTypedData($request: CreateToggleFollowRequest!) {
  createToggleFollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        ToggleFollowWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        profileIds
        enables
      }
    }
  }
}
    `;
var CreateUnfollowTypedDataDocument = gql`
    mutation createUnfollowTypedData($request: UnfollowRequest!) {
  createUnfollowTypedData(request: $request) {
    id
    expiresAt
    typedData {
      domain {
        name
        chainId
        version
        verifyingContract
      }
      types {
        BurnWithSig {
          name
          type
        }
      }
      value {
        nonce
        deadline
        tokenId
      }
    }
  }
}
    `;
function useCreateUnfollowTypedDataMutation(baseOptions) {
  const options = { ...defaultOptions2, ...baseOptions };
  return Apollo.useMutation(CreateUnfollowTypedDataDocument, options);
}
var NotificationsDocument = gql`
    query notifications($request: NotificationRequest!) {
  notifications(request: $request) {
    items {
      ... on NewFollowerNotification {
        notificationId
        ...NewFollowerNotificationFields
      }
      ... on NewMirrorNotification {
        notificationId
        ...NewMirrorNotificationFields
      }
      ... on NewCollectNotification {
        notificationId
        ...NewCollectNotificationFields
      }
      ... on NewCommentNotification {
        notificationId
        ...NewCommentNotificationFields
      }
      ... on NewMentionNotification {
        notificationId
        ...NewMentionNotificationFields
      }
      ... on NewReactionNotification {
        notificationId
        ...NewReactionNotificationFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${NewFollowerNotificationFieldsFragmentDoc}
${NewMirrorNotificationFieldsFragmentDoc}
${NewCollectNotificationFieldsFragmentDoc}
${NewCommentNotificationFieldsFragmentDoc}
${NewMentionNotificationFieldsFragmentDoc}
${NewReactionNotificationFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var VerifyDocument = gql`
    query verify($request: VerifyRequest!) {
  verify(request: $request)
}
    `;
var WhoCollectedPublicationDocument = gql`
    query whoCollectedPublication($request: WhoCollectedPublicationRequest!) {
  whoCollectedPublication(request: $request) {
    items {
      ...WalletFields
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${WalletFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;
var WhoReactedPublicationDocument = gql`
    query WhoReactedPublication($request: WhoReactedPublicationRequest!) {
  whoReactedPublication(request: $request) {
    items {
      reactionId
      reaction
      reactionAt
      profile {
        ...ProfileFields
      }
    }
    pageInfo {
      ...CommonPaginatedResultInfoFields
    }
  }
}
    ${ProfileFieldsFragmentDoc}
${CommonPaginatedResultInfoFieldsFragmentDoc}`;

// src/hooks/use-auth.ts
import { useState as useState2 } from "react";

// src/utils/ethers.service.ts
import { ethers, utils } from "ethers";

// src/utils/helpers.ts
import omitDeep from "omit-deep";
var sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
var omit = (object, name) => {
  return omitDeep(object, name);
};

// src/utils/ethers.service.ts
var getSigner = () => {
  if (typeof window === "undefined") {
    const privateKey = process.env.PRIVATE_KEY;
    const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_RPC);
    const singer = new ethers.Wallet(privateKey, provider);
    return singer;
  } else {
    const p = window.ethereum;
    const provider = new ethers.providers.Web3Provider(p);
    return provider.getSigner();
  }
};
var getAddressFromSigner = async () => {
  return await getSigner().getAddress();
};
var signedTypeData = (domain, types, value) => {
  const signer = getSigner();
  return signer._signTypedData(
    omit(domain, "__typename"),
    omit(types, "__typename"),
    omit(value, "__typename")
  );
};
var splitSignature = (signature) => {
  return utils.splitSignature(signature);
};
var signText = (text) => {
  return getSigner().signMessage(text);
};

// src/hooks/use-auth.ts
var useAuth = () => {
  const [token, setAuthToken] = useState2(getAuthenticationToken() || "");
  const [generateChallenge] = useChallengeLazyQuery();
  const [authenticate] = useAuthenticateMutation();
  const [error, setError] = useState2(null);
  const auth = async (address) => {
    var _a, _b, _c, _d;
    const token2 = getAuthenticationToken();
    if (token2) {
      setAuthToken(token2);
      return token2;
    }
    try {
      const challengeResponse = await generateChallenge({
        variables: {
          request: {
            address
          }
        }
      });
      const text = (_b = (_a = challengeResponse.data) == null ? void 0 : _a.challenge) == null ? void 0 : _b.text;
      if (!text) {
        throw new Error("No challenge text");
      }
      const signature = await signText(text);
      const accessTokens = await authenticate({ variables: { request: { address, signature } } });
      const token3 = (_d = (_c = accessTokens.data) == null ? void 0 : _c.authenticate) == null ? void 0 : _d.accessToken;
      if (!token3) {
        throw new Error("No access token");
      }
      setAuthenticationToken(token3);
      setAuthToken(token3);
      return token3;
    } catch (e) {
      setError(e);
    }
    return null;
  };
  return {
    auth,
    token,
    error
  };
};

// src/hooks/use-collect.ts
import { useCallback as useCallback2, useEffect as useEffect2, useState as useState4 } from "react";

// src/utils/lens-hub.ts
import { ethers as ethers2 } from "ethers";

// src/utils/config.ts
var LENS_HUB_CONTRACT = "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82";
var LENS_PERIPHERY_CONTRACT = "0xD5037d72877808cdE7F669563e9389930AF404E8";
var INFURA_PROJECT_ID = "2HThEo0XYu95Jx48yIn2AszMQ3E";
var INFURA_SECRET = "45b2675137d1cc5f2921784f7b2a1689";
var LENS_FOLLOW_NFT_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "BlockNumberInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error"
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error"
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address"
      }
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegator",
        type: "address"
      },
      {
        internalType: "address",
        name: "delegatee",
        type: "address"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getDelegatedSupplyByBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256"
      }
    ],
    name: "getPowerByBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96"
          }
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var LENS_HUB_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "followNFTImpl",
        type: "address"
      },
      {
        internalType: "address",
        name: "collectNFTImpl",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "CallerNotCollectNFT",
    type: "error"
  },
  {
    inputs: [],
    name: "CallerNotFollowNFT",
    type: "error"
  },
  {
    inputs: [],
    name: "CannotInitImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "EmergencyAdminCannotUnpause",
    type: "error"
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error"
  },
  {
    inputs: [],
    name: "NotGovernance",
    type: "error"
  },
  {
    inputs: [],
    name: "NotGovernanceOrEmergencyAdmin",
    type: "error"
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error"
  },
  {
    inputs: [],
    name: "NotProfileOwner",
    type: "error"
  },
  {
    inputs: [],
    name: "NotProfileOwnerOrDispatcher",
    type: "error"
  },
  {
    inputs: [],
    name: "Paused",
    type: "error"
  },
  {
    inputs: [],
    name: "ProfileCreatorNotWhitelisted",
    type: "error"
  },
  {
    inputs: [],
    name: "ProfileImageURILengthInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "PublicationDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "PublishingPaused",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "collect",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "collector",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubId",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.CollectWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "collectWithSig",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "contentURI",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "profileIdPointed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubIdPointed",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "referenceModuleData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "collectModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "collectModuleInitData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          }
        ],
        internalType: "struct DataTypes.CommentData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "comment",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "contentURI",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "profileIdPointed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubIdPointed",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "referenceModuleData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "collectModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "collectModuleInitData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.CommentWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "commentWithSig",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            internalType: "string",
            name: "handle",
            type: "string"
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string"
          },
          {
            internalType: "address",
            name: "followModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "followModuleInitData",
            type: "bytes"
          },
          {
            internalType: "string",
            name: "followNFTURI",
            type: "string"
          }
        ],
        internalType: "struct DataTypes.CreateProfileData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "createProfile",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet",
        type: "address"
      }
    ],
    name: "defaultProfile",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "collectNFTId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "emitCollectNFTTransferEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "followNFTId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      }
    ],
    name: "emitFollowNFTTransferEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "profileIds",
        type: "uint256[]"
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]"
      }
    ],
    name: "follow",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "follower",
            type: "address"
          },
          {
            internalType: "uint256[]",
            name: "profileIds",
            type: "uint256[]"
          },
          {
            internalType: "bytes[]",
            name: "datas",
            type: "bytes[]"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.FollowWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "followWithSig",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getCollectModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getCollectNFT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getCollectNFTImpl",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getContentURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getDispatcher",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getFollowModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getFollowNFT",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getFollowNFTImpl",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getFollowNFTURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getGovernance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getHandle",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getProfile",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pubCount",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "followModule",
            type: "address"
          },
          {
            internalType: "address",
            name: "followNFT",
            type: "address"
          },
          {
            internalType: "string",
            name: "handle",
            type: "string"
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string"
          },
          {
            internalType: "string",
            name: "followNFTURI",
            type: "string"
          }
        ],
        internalType: "struct DataTypes.ProfileStruct",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "handle",
        type: "string"
      }
    ],
    name: "getProfileIdByHandle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getPub",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileIdPointed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubIdPointed",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "contentURI",
            type: "string"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "address",
            name: "collectModule",
            type: "address"
          },
          {
            internalType: "address",
            name: "collectNFT",
            type: "address"
          }
        ],
        internalType: "struct DataTypes.PublicationStruct",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getPubCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getPubPointer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getPubType",
    outputs: [
      {
        internalType: "enum DataTypes.PubType",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256"
      }
    ],
    name: "getReferenceModule",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "address",
        name: "newGovernance",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collectModule",
        type: "address"
      }
    ],
    name: "isCollectModuleWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "followModule",
        type: "address"
      }
    ],
    name: "isFollowModuleWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "profileCreator",
        type: "address"
      }
    ],
    name: "isProfileCreatorWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referenceModule",
        type: "address"
      }
    ],
    name: "isReferenceModuleWhitelisted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "profileIdPointed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubIdPointed",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "referenceModuleData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          }
        ],
        internalType: "struct DataTypes.MirrorData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "mirror",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "profileIdPointed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "pubIdPointed",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "referenceModuleData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.MirrorWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "mirrorWithSig",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8"
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32"
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32"
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256"
          }
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple"
      }
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "contentURI",
            type: "string"
          },
          {
            internalType: "address",
            name: "collectModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "collectModuleInitData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          }
        ],
        internalType: "struct DataTypes.PostData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "post",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "contentURI",
            type: "string"
          },
          {
            internalType: "address",
            name: "collectModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "collectModuleInitData",
            type: "bytes"
          },
          {
            internalType: "address",
            name: "referenceModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "referenceModuleInitData",
            type: "bytes"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.PostWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "postWithSig",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "setDefaultProfile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "wallet",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetDefaultProfileWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setDefaultProfileWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "dispatcher",
        type: "address"
      }
    ],
    name: "setDispatcher",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "dispatcher",
            type: "address"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetDispatcherWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setDispatcherWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newEmergencyAdmin",
        type: "address"
      }
    ],
    name: "setEmergencyAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "followModule",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "followModuleInitData",
        type: "bytes"
      }
    ],
    name: "setFollowModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "address",
            name: "followModule",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "followModuleInitData",
            type: "bytes"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetFollowModuleWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setFollowModuleWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "followNFTURI",
        type: "string"
      }
    ],
    name: "setFollowNFTURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "followNFTURI",
            type: "string"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetFollowNFTURIWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setFollowNFTURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGovernance",
        type: "address"
      }
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "imageURI",
        type: "string"
      }
    ],
    name: "setProfileImageURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "imageURI",
            type: "string"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetProfileImageURIWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setProfileImageURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "newState",
        type: "uint8"
      }
    ],
    name: "setState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96"
          }
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256"
      }
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "collectModule",
        type: "address"
      },
      {
        internalType: "bool",
        name: "whitelist",
        type: "bool"
      }
    ],
    name: "whitelistCollectModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "followModule",
        type: "address"
      },
      {
        internalType: "bool",
        name: "whitelist",
        type: "bool"
      }
    ],
    name: "whitelistFollowModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "profileCreator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "whitelist",
        type: "bool"
      }
    ],
    name: "whitelistProfileCreator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "referenceModule",
        type: "address"
      },
      {
        internalType: "bool",
        name: "whitelist",
        type: "bool"
      }
    ],
    name: "whitelistReferenceModule",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var LENS_PERIPHERY_ABI = [
  {
    inputs: [
      {
        internalType: "contract ILensHub",
        name: "hub",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error"
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "NotProfileOwnerOrDispatcher",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error"
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error"
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error"
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "contract ILensHub",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      }
    ],
    name: "getProfileMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string"
      }
    ],
    name: "setProfileMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.SetProfileMetadataWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "setProfileMetadataURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "profileIds",
        type: "uint256[]"
      },
      {
        internalType: "bool[]",
        name: "enables",
        type: "bool[]"
      }
    ],
    name: "toggleFollow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "follower",
            type: "address"
          },
          {
            internalType: "uint256[]",
            name: "profileIds",
            type: "uint256[]"
          },
          {
            internalType: "bool[]",
            name: "enables",
            type: "bool[]"
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "v",
                type: "uint8"
              },
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32"
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32"
              },
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256"
              }
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple"
          }
        ],
        internalType: "struct DataTypes.ToggleFollowWithSigData",
        name: "vars",
        type: "tuple"
      }
    ],
    name: "toggleFollowWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/utils/lens-hub.ts
function getLensHub() {
  return new ethers2.Contract(LENS_HUB_CONTRACT, LENS_HUB_ABI, getSigner());
}
function getLensPeriphery() {
  return new ethers2.Contract(LENS_PERIPHERY_CONTRACT, LENS_PERIPHERY_ABI, getSigner());
}

// src/hooks/use-indexed-tx.ts
import { useCallback, useEffect, useState as useState3 } from "react";
function useIndexedTx(txHash) {
  const [tx, setTx] = useState3(null);
  const [error, setError] = useState3(null);
  const [hasTxHashBeenIndexedQuery] = useHasTxHashBeenIndexedLazyQuery();
  const pollUntilIndexed = useCallback(
    async (txHash2) => {
      var _a, _b;
      if (!txHash2) {
        return;
      }
      while (true) {
        const result = await hasTxHashBeenIndexedQuery({
          variables: {
            request: {
              txHash: txHash2
            }
          },
          fetchPolicy: "network-only"
        });
        console.log("polling for tx", txHash2, (_a = result.data) == null ? void 0 : _a.hasTxHashBeenIndexed);
        const response = (_b = result.data) == null ? void 0 : _b.hasTxHashBeenIndexed;
        if ((response == null ? void 0 : response.__typename) === "TransactionIndexedResult") {
          if (response.metadataStatus) {
            if (response.metadataStatus.status === "SUCCESS") {
              setTx(response.txReceipt);
              return response.txReceipt;
            }
            if (response.metadataStatus.status === "METADATA_VALIDATION_FAILED") {
              setError(new Error(response.metadataStatus.reason || "Metadata validation failed"));
              setTx(response == null ? void 0 : response.txReceipt);
              return response.txReceipt;
            }
          } else {
            if (response.indexed) {
              setTx(response.txReceipt);
              return response.txReceipt;
            }
          }
          await sleep(1500);
        } else {
          setError(new Error(response == null ? void 0 : response.reason));
        }
      }
    },
    [hasTxHashBeenIndexedQuery]
  );
  useEffect(() => {
    if (txHash) {
      pollUntilIndexed(txHash);
    }
  }, [pollUntilIndexed, txHash]);
  return { tx, error };
}

// src/hooks/use-collect.ts
function useCollect() {
  const [error, setError] = useState4(null);
  const [createCollectTypedDataMutation] = useCreateCollectTypedDataMutation();
  const { auth } = useAuth();
  const [txHash, setTxHash] = useState4(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const [loading, setLoading] = useState4(false);
  const collect = useCallback2(async (publicationId) => {
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await auth(address);
      const result = await createCollectTypedDataMutation({
        variables: {
          request: {
            publicationId
          }
        }
      });
      const typedData = result.data.createCollectTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensHub().collectWithSig(
        {
          collector: address,
          profileId: typedData.value.profileId,
          pubId: typedData.value.pubId,
          data: typedData.value.data,
          sig: {
            v,
            r,
            s,
            deadline: typedData.value.deadline
          }
        },
        { gasLimit: 1e6 }
      );
      console.log("collect: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);
  useEffect2(() => {
    if (txHash && tx) {
      setLoading(false);
    }
  }, [txHash, tx]);
  return { collect, tx, loading, error: error || indexError };
}

// src/hooks/use-comment.ts
import { BigNumber, utils as utils2 } from "ethers";
import { useEffect as useEffect3, useState as useState5 } from "react";

// src/utils/ipfs.ts
import { create } from "ipfs-http-client";
var projectId = INFURA_PROJECT_ID;
var secret = INFURA_SECRET;
if (!projectId || !secret) {
  throw new Error("Must define INFURA_PROJECT_ID and INFURA_SECRET in the .env to run this");
}
var client2 = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: `Basic ${Buffer.from(`${projectId}:${secret}`, "utf-8").toString("base64")}`
  }
});
var uploadIpfs = async (data) => {
  const result = await client2.add(JSON.stringify(data));
  console.log("upload result ipfs", result);
  return result;
};

// src/hooks/use-comment.ts
function useComment() {
  const [publicationId, setPublicationId] = useState5(null);
  const [loading, setLoading] = useState5(false);
  const [error, setError] = useState5(null);
  const [createCommentTypedDataMutation] = useCreateCommentTypedDataMutation();
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState5(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const comment = async (profileId, publicationId2, metadata) => {
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await login(address);
      const ipfsResult = await uploadIpfs(metadata);
      const createCommentRequest = {
        profileId,
        publicationId: publicationId2,
        contentURI: "ipfs://" + ipfsResult.path,
        collectModule: {
          revertCollectModule: true
        },
        referenceModule: {
          followerOnlyReferenceModule: false
        }
      };
      const result = await createCommentTypedDataMutation({
        variables: {
          request: createCommentRequest
        }
      });
      const typedData = result.data.createCommentTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensHub().commentWithSig(
        {
          profileId: typedData.value.profileId,
          contentURI: typedData.value.contentURI,
          profileIdPointed: typedData.value.profileIdPointed,
          pubIdPointed: typedData.value.pubIdPointed,
          collectModule: typedData.value.collectModule,
          collectModuleInitData: typedData.value.collectModuleInitData,
          referenceModule: typedData.value.referenceModule,
          referenceModuleInitData: typedData.value.referenceModuleInitData,
          referenceModuleData: typedData.value.referenceModuleData,
          sig: {
            v,
            r,
            s,
            deadline: typedData.value.deadline
          }
        },
        { gasLimit: 5e5 }
      );
      console.log("create comment: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect3(() => {
    if (tx) {
      const logs = tx.logs;
      const topicId = utils2.id(
        "CommentCreated(uint256,uint256,string,uint256,uint256,bytes,address,bytes,address,bytes,uint256)"
      );
      const commentCreatedLog = logs.find((l) => l.topics[0] === topicId);
      let commentCreatedEventLog = commentCreatedLog.topics;
      const publicationId2 = utils2.defaultAbiCoder.decode(["uint256"], commentCreatedEventLog[2])[0];
      setPublicationId(BigNumber.from(publicationId2).toHexString());
      setLoading(false);
    }
  }, [tx]);
  return { comment, publicationId, loading, error: error || indexError };
}

// src/hooks/use-create-profile.ts
import { BigNumber as BigNumber2, utils as utils3 } from "ethers";
import { useCallback as useCallback3, useEffect as useEffect4, useState as useState6 } from "react";
function useCreateProfile() {
  const [profileId, setProfileId] = useState6(null);
  const [createProfileMutation] = useCreateProfileMutation();
  const { auth } = useAuth();
  const [txHash, setTxHash] = useState6(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const [error, setError] = useState6(null);
  const [loading, setLoading] = useState6(false);
  const createProfile = useCallback3(async (handle) => {
    var _a, _b;
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await auth(address);
      const createProfileResult = await createProfileMutation({
        variables: {
          request: {
            handle
          }
        }
      });
      if (((_a = createProfileResult.data) == null ? void 0 : _a.createProfile.__typename) === "RelayerResult") {
        const { txHash: txHash2 } = createProfileResult.data.createProfile;
        setTxHash(txHash2);
      } else {
        throw new Error((_b = createProfileResult.data) == null ? void 0 : _b.createProfile.reason);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);
  useEffect4(() => {
    if (tx) {
      const logs = tx.logs;
      const topicId = utils3.id(
        "ProfileCreated(uint256,address,address,string,string,address,bytes,string,uint256)"
      );
      const profileCreatedLog = logs.find((l) => l.topics[0] === topicId);
      let profileCreatedEventLog = profileCreatedLog.topics;
      const profileId2 = utils3.defaultAbiCoder.decode(["uint256"], profileCreatedEventLog[1])[0];
      setProfileId(BigNumber2.from(profileId2).toHexString());
      setLoading(false);
    }
  }, [tx]);
  return { createProfile, profileId, loading, error: error || indexError };
}

// src/hooks/use-follow.ts
import { useCallback as useCallback4, useEffect as useEffect5, useState as useState7 } from "react";
function useFollow() {
  const [error, setError] = useState7(null);
  const [createFollowTypedDataMutation] = useCreateFollowTypedDataMutation();
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState7(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const [loading, setLoading] = useState7(false);
  const follow = useCallback4(async (profileId) => {
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await login(address);
      const result = await createFollowTypedDataMutation({
        variables: {
          request: {
            follow: [
              {
                profile: profileId
              }
            ]
          }
        }
      });
      const typedData = result.data.createFollowTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensHub().followWithSig({
        follower: getAddressFromSigner(),
        profileIds: typedData.value.profileIds,
        datas: typedData.value.datas,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline
        }
      });
      console.log("follow: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);
  useEffect5(() => {
    if (txHash && tx) {
      setLoading(false);
    }
  }, [txHash, tx]);
  return { follow, tx, loading, error: error || indexError };
}

// src/hooks/use-mirror.ts
import { BigNumber as BigNumber3, utils as utils4 } from "ethers";
import { useEffect as useEffect6, useState as useState8 } from "react";
function useMirror() {
  const [publicationId, setPublicationId] = useState8(null);
  const [loading, setLoading] = useState8(false);
  const [error, setError] = useState8(null);
  const [createMirrorTypedDataMutation] = useCreateMirrorTypedDataMutation();
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState8(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const mirror = async (profileId, publicationId2) => {
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await login(address);
      const result = await createMirrorTypedDataMutation({
        variables: {
          request: {
            profileId,
            publicationId: publicationId2
          }
        }
      });
      const typedData = result.data.createMirrorTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      console.log("create mirror: signature", signature);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensHub().mirrorWithSig({
        profileId: typedData.value.profileId,
        profileIdPointed: typedData.value.profileIdPointed,
        pubIdPointed: typedData.value.pubIdPointed,
        referenceModuleData: typedData.value.referenceModuleData,
        referenceModule: typedData.value.referenceModule,
        referenceModuleInitData: typedData.value.referenceModuleInitData,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline
        }
      });
      console.log("create mirror: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect6(() => {
    if (tx) {
      const logs = tx.logs;
      const topicId = utils4.id(
        "MirrorCreated(uint256,uint256,uint256,uint256,bytes,address,bytes,uint256)"
      );
      const mirrorCreatedLog = logs.find((l) => l.topics[0] === topicId);
      let mirrorCreatedEventLog = mirrorCreatedLog.topics;
      const publicationId2 = utils4.defaultAbiCoder.decode(["uint256"], mirrorCreatedEventLog[2])[0];
      setPublicationId(BigNumber3.from(publicationId2).toHexString());
      setLoading(false);
    }
  }, [tx]);
  return { mirror, publicationId, loading, error: error || indexError };
}

// src/hooks/use-post.ts
import { BigNumber as BigNumber4, utils as utils5 } from "ethers";
import { useEffect as useEffect7, useState as useState9 } from "react";
function usePost() {
  const [publicationId, setPublicationId] = useState9(null);
  const [loading, setLoading] = useState9(false);
  const [error, setError] = useState9(null);
  const [createPostTypedDataMutation] = useCreatePostTypedDataMutation();
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState9(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const post = async (profileId, metadata) => {
    try {
      const address = await getAddressFromSigner();
      await login(address);
      const ipfsResult = await uploadIpfs(metadata);
      const createPostRequest = {
        profileId,
        contentURI: "ipfs://" + ipfsResult.path,
        collectModule: {
          freeCollectModule: { followerOnly: false }
        },
        referenceModule: {
          followerOnlyReferenceModule: false
        }
      };
      const result = await createPostTypedDataMutation({
        variables: {
          request: createPostRequest
        }
      });
      const typedData = result.data.createPostTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensHub().postWithSig({
        profileId: typedData.value.profileId,
        contentURI: typedData.value.contentURI,
        collectModule: typedData.value.collectModule,
        collectModuleInitData: typedData.value.collectModuleInitData,
        referenceModule: typedData.value.referenceModule,
        referenceModuleInitData: typedData.value.referenceModuleInitData,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline
        }
      });
      console.log("create post: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect7(() => {
    if (tx) {
      const logs = tx.logs;
      const topicId = utils5.id(
        "PostCreated(uint256,uint256,string,address,bytes,address,bytes,uint256)"
      );
      const profileCreatedLog = logs.find((l) => l.topics[0] === topicId);
      let profileCreatedEventLog = profileCreatedLog.topics;
      const publicationId2 = utils5.defaultAbiCoder.decode(["uint256"], profileCreatedEventLog[2])[0];
      setPublicationId(BigNumber4.from(publicationId2).toHexString());
      setLoading(false);
    }
  }, [tx]);
  return { post, publicationId, loading, error: error || indexError };
}

// src/hooks/use-profile.ts
function useProfile(profileId) {
  const { data, loading, error } = useProfileQuery({
    variables: {
      request: {
        profileId
      }
    }
  });
  return {
    profile: data == null ? void 0 : data.profile,
    loading,
    error
  };
}

// src/hooks/use-profiles.ts
function useProfiles(profileIds) {
  const { data, loading, error } = useProfilesQuery({
    variables: {
      request: {
        profileIds
      }
    }
  });
  return {
    profiles: data == null ? void 0 : data.profiles.items,
    loading,
    error
  };
}

// src/hooks/use-publication.ts
function usePublication(publicationId) {
  const { data, loading, error } = usePublicationQuery({
    variables: {
      request: {
        publicationId
      }
    }
  });
  return {
    publication: data == null ? void 0 : data.publication,
    loading,
    error
  };
}

// src/hooks/use-publications.ts
function usePublications(profileId, publicationTypes) {
  const { data, loading, error } = usePublicationsQuery({
    variables: {
      request: {
        profileId,
        publicationTypes
      }
    }
  });
  return {
    publications: data == null ? void 0 : data.publications,
    loading,
    error
  };
}

// src/hooks/use-set-profile.ts
import { useEffect as useEffect8, useState as useState10 } from "react";
var useSetProfileMetadata = () => {
  const [loading, setLoading] = useState10(false);
  const [error, setError] = useState10(null);
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState10(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const [createSetProfileMetadataTypedDataMutation] = useCreateSetProfileMetadataTypedDataMutation();
  const setProfileMetadata = async (profileId, metadata) => {
    try {
      setLoading(true);
      const address = await getAddressFromSigner();
      await login(address);
      const ipfsResult = await uploadIpfs(metadata);
      const createProfileMetadataRequest = {
        profileId,
        metadata: "ipfs://" + ipfsResult.path
      };
      const result = await createSetProfileMetadataTypedDataMutation({
        variables: {
          request: createProfileMetadataRequest
        }
      });
      console.log("create profile metadata: createCommentTypedData", result);
      const typedData = result.data.createSetProfileMetadataTypedData.typedData;
      console.log("create profile metadata: typedData", typedData);
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      console.log("create profile metadata: signature", signature);
      const { v, r, s } = splitSignature(signature);
      const tx2 = await getLensPeriphery().setProfileMetadataURIWithSig({
        profileId: createProfileMetadataRequest.profileId,
        metadata: createProfileMetadataRequest.metadata,
        sig: {
          v,
          r,
          s,
          deadline: typedData.value.deadline
        }
      });
      console.log("create profile metadata: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };
  useEffect8(() => {
    if (txHash && tx) {
      setLoading(false);
    }
  }, [txHash, tx]);
  return { setProfileMetadata, tx, loading, error: error || indexError };
};

// src/hooks/use-unfollow.ts
import { ethers as ethers3 } from "ethers";
import { useCallback as useCallback5, useEffect as useEffect9, useState as useState11 } from "react";
function useUnfollow() {
  const [error, setError] = useState11(null);
  const [createUnfollowTypedDataMutation] = useCreateUnfollowTypedDataMutation();
  const { auth: login } = useAuth();
  const [txHash, setTxHash] = useState11(null);
  const { tx, error: indexError } = useIndexedTx(txHash);
  const [loading, setLoading] = useState11(false);
  const unfollow = useCallback5(async (profileId) => {
    setLoading(true);
    try {
      const address = await getAddressFromSigner();
      await login(address);
      const result = await createUnfollowTypedDataMutation({
        variables: {
          request: {
            profile: profileId
          }
        }
      });
      const typedData = result.data.createUnfollowTypedData.typedData;
      const signature = await signedTypeData(typedData.domain, typedData.types, typedData.value);
      const { v, r, s } = splitSignature(signature);
      const followNftContract = new ethers3.Contract(
        typedData.domain.verifyingContract,
        LENS_FOLLOW_NFT_ABI,
        getSigner()
      );
      const sig = {
        v,
        r,
        s,
        deadline: typedData.value.deadline
      };
      const tx2 = await followNftContract.burnWithSig(typedData.value.tokenId, sig);
      console.log("follow: tx hash", tx2.hash);
      setTxHash(tx2.hash);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }, []);
  useEffect9(() => {
    if (txHash && tx) {
      setLoading(false);
    }
  }, [txHash, tx]);
  return { unfollow, tx, loading, error: error || indexError };
}

// src/types/generic.ts
var MetadataDisplayType = /* @__PURE__ */ ((MetadataDisplayType2) => {
  MetadataDisplayType2["number"] = "number";
  MetadataDisplayType2["string"] = "string";
  MetadataDisplayType2["date"] = "date";
  return MetadataDisplayType2;
})(MetadataDisplayType || {});

// src/types/publication.ts
var PublicationContentWarning = /* @__PURE__ */ ((PublicationContentWarning2) => {
  PublicationContentWarning2["NSFW"] = "NSFW";
  PublicationContentWarning2["SENSITIVE"] = "SENSITIVE";
  PublicationContentWarning2["SPOILER"] = "SPOILER";
  return PublicationContentWarning2;
})(PublicationContentWarning || {});
var PublicationMainFocus = /* @__PURE__ */ ((PublicationMainFocus2) => {
  PublicationMainFocus2["VIDEO"] = "VIDEO";
  PublicationMainFocus2["IMAGE"] = "IMAGE";
  PublicationMainFocus2["ARTICLE"] = "ARTICLE";
  PublicationMainFocus2["TEXT_ONLY"] = "TEXT_ONLY";
  PublicationMainFocus2["AUDIO"] = "AUDIO";
  PublicationMainFocus2["LINK"] = "LINK";
  PublicationMainFocus2["EMBED"] = "EMBED";
  return PublicationMainFocus2;
})(PublicationMainFocus || {});
export {
  LensKitButton,
  LensKitProvider,
  MetadataDisplayType,
  PublicationContentWarning,
  PublicationMainFocus,
  PublicationTypes,
  useAuth,
  useCollect,
  useComment,
  useCreateProfile,
  useFollow,
  useIndexedTx,
  useMirror,
  usePost,
  useProfile,
  useProfiles,
  usePublication,
  usePublications,
  useSetProfileMetadata,
  useUnfollow
};
