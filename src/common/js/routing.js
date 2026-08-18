// routing.js
//
// Handles navigation between pages and adds debug logging

import router from "@system.router";

export function navigateTo(pagename) {
  console.log("navigating to", pagename);
  router.push({
    uri: "/pages/" + pagename,
  });
}

export function goBack() {
  console.log("back clicked");
  router.back();
}
