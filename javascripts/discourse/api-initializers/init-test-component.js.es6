import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
    debugger;
  api.createWidget("test-component-widget", {
    tagName: "div.test-component-widget",

    html() {
      return h("span.test", "this is test widget");
    },
  });
});