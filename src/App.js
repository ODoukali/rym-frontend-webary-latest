import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useRouter from "./routing";
import theme from "./theme";
import { PathProvider } from "./utils/PathContext";

const App = () => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PathProvider>
        <RouterProvider router={router} />
      </PathProvider>
    </ThemeProvider>
  );
};

export default App;
