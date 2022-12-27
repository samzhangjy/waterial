import { useTheme } from "styled-components";
import { WaterialTheme } from "@waterial/base";

const useWaterialTheme = (): WaterialTheme => {
  return useTheme();
};

export default useWaterialTheme;
