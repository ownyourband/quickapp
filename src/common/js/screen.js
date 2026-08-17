// screen.js
//
// Automatically figures out the proper screen sizing
// and generates the content box size

import device from "@system.device";

export function getScreenSize() {
  return new Promise((resolve, reject) => {
    device.getInfo({
      success: (info) => {
        resolve(ComputeScreenProp(info));
      },

      fail: (err) => {
        console.error("getInfo failed: ", err);
        reject(err);
      },
    });
  });
}

export async function getContentSize(screenProp) {
  return computeContentProp(screenProp);
}

async function ComputeScreenProp(info) {
  const screen = {
    width: info.screenWidth,
    height: info.screenHeight,
    radius: info.screenWidth / 2,
    isCircle: info.screenShape === "circle",
  };
  return screen;
}

async function computeContentProp(screenProp) {
  // Calculate safe margin based on screen width
  // radius of the screen for circular screens,
  // and the radius of the top/bottom edges for pill-shaped screens
  const radius = screenProp.radius;

  const contentProp = {
    // Removing the radius from the height calculation to
    // account for the top/bottom edges (pill-shaped screens)
    height: screenProp.height - 2 * radius + "px",
    width: screenProp.width + "px",
  };

  if (screenProp.isCircle) {
    // For circular screens, extract radius once since
    // the radius is the real radius of the screen
    // Extracting twice like the pill-shaped screens makes the
    // content 0px high and 0px wide, so we need to account for the geometry
    contentProp.height = screenProp.height - radius + "px";
    // for some reason, this width fits great
    contentProp.width = screenProp.width - radius / 2 + "px";
  }

  return contentProp;
}
