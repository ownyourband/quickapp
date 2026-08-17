import router from "@system.router";

export function navigateTo(pagename) {
  console.log("navigating to", pagename);
  router.push({
    uri: "/pages/" + pagename,
  });
}

export function goDebug() {
  navigateTo("debug");
}

export function goBack() {
  console.log("back clicked");
  router.back();
}
