import Header from "./component/header/Header";
import "./App.css";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Skills from "./component/skills/Skills";
import ContactMe from "./component/ContactMe/ContactMe";
function App() {
  return (
    <>
            <Header />
            <main className="main">
               <Home /> 
               <About />
               <Skills />
               <ContactMe />
            </main>
    </>
    
     
    
 
  );
}

export default App;
