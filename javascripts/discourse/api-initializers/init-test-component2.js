import { apiInitializer } from "discourse/lib/api";
import { h } from 'virtual-dom';

export default apiInitializer("0.8", (api) => {
    debugger;
  api.createWidget("test-component-widget2", {
    tagName: "div.test-component-widget2",

    html() {
      const result = [];
      result.push(h("div.sample1","sample 1"));
      result.push(h("div.sample2","sample 2"));
      result.push(h("div.sample3","sample 3"));
      return result;
    },
  });
});
