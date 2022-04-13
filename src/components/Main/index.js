import Main from "./Main.vue";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Main);
  },
};

use(Plugin);

export default Plugin;

export { Main as HcMain };
