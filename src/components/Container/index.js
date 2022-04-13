import Container from "./Container.vue";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Container);
  },
};

use(Plugin);

export default Plugin;

export { Container as HcContainer };
