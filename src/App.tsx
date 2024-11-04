import { Theme, ThemePanel } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

const App = () => {
  return (
    <Theme accentColor="blue" grayColor="sand" radius="small" scaling="100%">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ThemePanel />
    </Theme>
  );
};

export default App;
