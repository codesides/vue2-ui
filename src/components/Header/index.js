import Header from "./Header.vue";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Header);
  },
};

use(Plugin);

export default Plugin;

export { Header as HcHeader };
