import React, { useEffect } from "react";
import "./assets/css/style.css";
import "./index.css";
import MainRoutes from "./routes";
import { useRoutes, useLocation } from "react-router-dom"; // Import useLocation
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LazyLoader from "./components/LazyLoader";
import { local } from "./helpers/projectHelpers";
import { addToFavorites } from "./redux/slicers/productSlice";
import { useDispatch } from "react-redux";
import SignupForm from "./signup/SignupForm";

const App = () => {
  const route = useRoutes(MainRoutes);
  const dispatch = useDispatch();
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins",
    },
  });

  const location = useLocation(); // Get the current location

  useEffect(() => {
    const favorites = local.get("favorites");
    favorites?.forEach((item) => {
      dispatch(addToFavorites(item));
    });
  }, [dispatch]);

  // Check if the current location matches the route where the signup form should be displayed
  const isSignupPage = location.pathname === "/signup";

  return (
    <div>
      <ThemeProvider theme={theme}>
        <LazyLoader>
          <CssBaseline />
          {/* Conditionally render the signup form only on the signup page */}
          {isSignupPage && (
            <div>
              <h1>Sign Up</h1>
              <SignupForm />
            </div>
          )}
          {route}
        </LazyLoader>
      </ThemeProvider>
    </div>
  );
};

export default App;
