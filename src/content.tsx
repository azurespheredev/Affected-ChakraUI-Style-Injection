import "./main.css";

import ReactDOM from "react-dom/client";

import ScreenContainer from "./contexts/ScreenContainer";
import ChakraUIProvider from "./contexts/ChakraUIProvider";
import ContentPage from "./pages/ContentPage";

const rootContainer = document.createElement("div");
rootContainer.id = "chrome-extension";
document.body.appendChild(rootContainer);

const style = document.createElement("style");
style.textContent = `
  @font-face {
    font-family: "Plus Jakarta Sans";
    src: url("${chrome.runtime.getURL("assets/PlusJakartaSans-Regular.ttf")}") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;
document.head.appendChild(style);

ReactDOM.createRoot(rootContainer).render(
  <ScreenContainer>
    <ChakraUIProvider>
      <ContentPage />
    </ChakraUIProvider>
  </ScreenContainer>
);
