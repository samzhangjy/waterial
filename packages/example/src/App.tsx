import { Button, ThemeProvider, Container, Text } from "@waterial/core";
import { useState } from "react";
import { MdAdd } from "react-icons/md";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={theme} withGlobalStyles>
      <Container>
        <Text size="large">Buttons</Text>
        <Button icon={<MdAdd size="18" />}>Elevated button</Button>
        <Button>Elevated button</Button>
        <Button icon={<MdAdd size="18" />} variant="filled">
          Filled button
        </Button>
        <Button variant="filled">Filled button</Button>
        <Button icon={<MdAdd size="18" />} variant="tonal">
          Tonal button
        </Button>
        <Button variant="tonal">Tonal button</Button>
        <Button icon={<MdAdd size="18" />} variant="outlined">
          Outlined button
        </Button>
        <Button variant="outlined">Outlined button</Button>
        <Button icon={<MdAdd size="18" />} variant="text">
          Text button
        </Button>
        <Button variant="text">Text button</Button>
        <Button onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}>
          Toggle theme
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
