// CSS
import { createTheme } from "@mui/material";
import "./App.css";

// React
import { useEffect, useState } from "react";

// Custom components
import TabPanel from "./components/materials/TabPanel";
import { loadStrings } from "./lib/Strings";


function App() {
  const defaultLanguage = "en";
  const [content, setContent] = useState({});
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    setContent(loadStrings(language));
  }, [language])

  const handleLanguage = () => {
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
        main: "#96c",
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

  // first load
  //loadStrings(defaultLanguage);

  return (
    <>
      <div>
        <h1 id="main_title">yuriel.dev</h1>
        <button id="ex_btn" onClick={handleLanguage}>Example</button>
        <TabPanel content={content} theme={theme} />
      </div>
    </>
  );
}

export default App;
