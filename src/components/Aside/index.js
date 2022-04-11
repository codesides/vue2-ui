import Aside from "./Aside";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Aside);
  },
};

use(Plugin);

export default Plugin;

export { Aside as HcAside };
