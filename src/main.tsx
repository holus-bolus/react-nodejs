import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { WorkoutsContextProvider } from "./context/WorkoutContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <WorkoutsContextProvider>
    <App />
  </WorkoutsContextProvider>,
);
