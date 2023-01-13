import "@emotion/react";
import { WaterialTheme } from "@waterial/base";

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends WaterialTheme {}
}
