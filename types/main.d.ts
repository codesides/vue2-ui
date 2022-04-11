import Vue, { PluginObject } from "vue";

import { HcAlert } from "./alert";
import { HcAside } from "./aside";
import { HcButton } from "./button";

export class Alert extends HcAlert {}
export class Aside extends HcAside {}
export class Button extends HcButton {}
