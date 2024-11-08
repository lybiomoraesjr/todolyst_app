import { Theme, ThemePanel } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext, AuthContextProvider } from "./contexts/AuthContext";
import { TaskContextProvider } from "./contexts/TaskContext";

const App = () => {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <Theme
          accentColor="blue"
          grayColor="sand"
          radius="small"
          scaling="100%"
        >
          <BrowserRouter>
            <Router />
          </BrowserRouter>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* <ThemePanel /> */}
        </Theme>
      </TaskContextProvider>
    </AuthContextProvider>
  );
};

export default App;
