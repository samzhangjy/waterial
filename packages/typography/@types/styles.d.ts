import "styled-components";
import { WaterialTheme } from "@waterial/base";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends WaterialTheme {}
}
