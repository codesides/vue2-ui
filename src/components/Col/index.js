import Col from "./Col";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Col);
  },
};

use(Plugin);

export default Plugin;

export { Col as HcCol };
