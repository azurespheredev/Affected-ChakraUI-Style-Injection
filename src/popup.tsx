import ReactDOM from "react-dom/client";

import ChakraUIProvider from "./contexts/ChakraUIProvider";
import PopupContainer from "./contexts/PopupContainer";
import PopupPage from "./pages/PopupPage";

function renderDOM() {
  const rootContainer = document.getElementById("chrome-extension-popup");
  if (!rootContainer) return;

  ReactDOM.createRoot(rootContainer).render(
    <PopupContainer>
      <ChakraUIProvider>
        <PopupPage />
      </ChakraUIProvider>
    </PopupContainer>
  );
}

renderDOM();
