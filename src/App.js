import "./App.css";
import Router from "./routes/routes";
import { useContext } from "react";
import { Theme } from "./contexts/Theme";

function App() {
  const { themeColor } = useContext(Theme);

  return (
    <>
      <div className={themeColor === "dark" ? "backgroundDark" : null}>
        <Router />
      </div>
    </>
  );
}

export default App;
