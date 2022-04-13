import Message from "./main.js";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Message);
    Vue.prototype.$message = Message;
  },
};

use(Plugin);

export default Plugin;

export { Message as HcMessage };
