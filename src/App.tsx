import { Theme, ThemePanel } from "@radix-ui/themes";
import SignIn from "./pages/SignIn";

const App = () => {
  return (
    <Theme>
      <SignIn />
      <ThemePanel />
    </Theme>
  );
};

export default App;
