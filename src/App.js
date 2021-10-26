import { Content } from "./components/content/content";
import Header from "./components/header/header";
import { Container } from "./styles/globalStyledComponents.js";
import { ThemeProvider } from "styled-components";
import GlobalFonts from "./assets/fonts/fonts";
import { Footer } from "./components/footer/footer";

const theme = {
  palette: {
    gold: {
      main: "#D9C287",
      dark: "#BCA56A",
    },
    black: {
      main: "#3D3C3C",
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalFonts />
      <Container>
        <Header />
        <Content />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
