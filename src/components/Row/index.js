import Row from "./Row";

import { use, registerComponent } from "../../utils/plugins";

const Plugin = {
  install(Vue) {
    registerComponent(Vue, Row);
  },
};

use(Plugin);

export default Plugin;

export { Row as HcRow };
