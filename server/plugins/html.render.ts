export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook("render:html", (html, { event }) => {
    html.htmlAttrs.push("data-bs-theme='dark'");
  });
});
