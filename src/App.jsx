// CSS
import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";

// React
import { useEffect, useState } from "react";

// Material UI
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';

// Custom components
import TabPanel from "./components/materials/TabPanel";
import { changeLanguage } from "./lib/Strings";


function App() {
  const defaultLanguage = "en";
  const [content, setContent] = useState({});
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    setContent(changeLanguage(language));
  }, [language])

  const handleLanguageToggle = () => {
    if (language == "en") {
      setLanguage("pt");
    } else {
      setLanguage("en");
    }
  };

  const theme = createTheme({
    palette: {
      background: "#111",
      // how weird, the 'primary' key in 'text' is ignored,
      // so we have to change it like this
      primary: {
        main: "#b8e",
      },
      // but the 'secondary' key is ignored in 'palette',
      // so we have to change it like this
      text: {
        secondary: "#639",
      },
      action: {
        active: "#639",
      },
    },
  });

  return (
    <>
      <div>
        <div id="header">
          <ThemeProvider theme={theme}>
            <IconButton
              id="langButton"
              aria-label="Change language"
              onClick={handleLanguageToggle}
            >
              <LanguageIcon />
            </IconButton>
          </ThemeProvider>
        </div>
        <div>
          <h1 id="mainTitle">yuriel.dev</h1>
        </div>
        <div>
          <TabPanel content={content} theme={theme} />
        </div>
      </div>
    </>
  );
}

export default App;
