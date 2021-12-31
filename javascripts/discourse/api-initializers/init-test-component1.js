import { apiInitializer } from "discourse/lib/api";
import { h } from 'virtual-dom';

export default apiInitializer("0.8", (api) => {
    debugger;
  api.createWidget("test-component-widget1", {
    tagName: "div.test-component-widget1",

    html() {
      return h("span.test", "this is test widget1");
    },
  });
});
