import { ElementUIComponent } from "./component";

/** Button type */
export type ButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "text";

/** Button Component */
export declare class HcButton extends ElementUIComponent {
  /** Title */
  title: string;
  type: ButtonType;
}
