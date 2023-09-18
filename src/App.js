import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { router } from "./routing";
import theme from "./theme";
import ModalProvider from "mui-modal-provider";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
