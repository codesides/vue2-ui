import Footer from "./Footer.vue";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Footer);
  },
};

use(Plugin);

export default Plugin;

export { Footer as HcFooter };
