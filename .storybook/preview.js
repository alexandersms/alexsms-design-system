import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/components/particles/globlaStyles";
import themeDefault from "../src/components/particles/themeDefault";

const GlobalWrapper = (storyFn) => (
  <ThemeProvider theme={themeDefault}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

addDecorator(GlobalWrapper);
