// CSS
import { createTheme } from '@mui/material'
import './App.css'

// Custom components
import TabPanel from './components/materials/TabPanel'

function App() {
  const content = {
    "About me": "Hi, it's a me, Yuriel.",
    "Career field": "Computer Science graduate, Jr. Systems Analyst with solid footing in both sides of DevOps.",
    "Hobbies": "Cooking, cycling, developing and maintaining software solutions, playing games, reading manga.",
  }

  const theme = createTheme({
    palette: {
      background: '#111',
      // how weird, the 'primary' key in 'text' is ignored,
      // so we have to change it like this
      primary: {
        main: '#639'
      },
      // but the 'secondary' key is ignored in 'palette',
      // so we have to change it like this
      text: {
        secondary: '#fff'
      },
      action: {
        active: '#96c'
      },
    },
  });

  return (
    <>
      <div>
        <h1 id='main_title'>yuriel.dev</h1>
        <button id='ex_btn'>Example</button>
        <TabPanel content={content} theme={theme} />
      </div>
    </>
  )
}

export default App
