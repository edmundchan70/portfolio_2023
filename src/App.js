import Header from "./component/header/Header";
import "./App.css";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Skills from "./component/skills/Skills";
import Project from "./component/Project/Project";
import ContactMe from "./component/ContactMe/ContactMe";
import { useState } from "react";
import { createContext } from "react";
export const ThemeContext = createContext(null);
function App() {
  const [darkMode,setDarkMode] = useState("light");
  const handle = ()=>  {
    darkMode ==="light" ? setDarkMode("dark") : setDarkMode("light");
  }
  
  
  return (
    <>
    <ThemeContext.Provider value={{ darkMode,handle}}>
            <Header />
            <main className="main" id={darkMode}>
               <Home /> 
               <About />
              <Skills />
               <Project />
               <ContactMe />
           
            </main>
    </ThemeContext.Provider>
      
    </>
    
     
    
 
  );
}

export default App;
