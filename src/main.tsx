import ReactDom from "react-dom/client";
import { App } from "./App";

const initialize = async () => {
  ReactDom.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />
  );
};

initialize();
