// screen.js
//
// Automatically figures out the proper screen sizing
// and applies the necessary padding/margins

import device from "@system.device";

export function getSafeStyle(callback) {
  device.getInfo({
    success: (info) => {
      const safeMargin = info.screenWidth / 2;

      const style = {
        height: info.screenHeight - 2 * safeMargin + "px",
        width: info.screenWidth + "px",
      };

      if (info.screenShape === "circle") {
        style.height = info.screenHeight - safeMargin + "px";
        style.width = info.screenWidth - safeMargin / 2 + "px";
      }

      callback(style);
    },
  });
}
