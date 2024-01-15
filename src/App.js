import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import useRouter from "./routing";
import theme from "./theme";
import { PathProvider } from "./utils/PathContext";
import { AuthProvider } from "./utils/AuthContext";

const App = () => {
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <PathProvider>
          <RouterProvider router={router} />
        </PathProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
