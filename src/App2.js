import {BrowserRouter, Routes, Route} from "react-router-dom";
import WhynetContact from "./components/WhynetContact";
import Global8Contact from "./components/Global8Contact";
import NoteForProj from "./components/NoteForProj2";
import Homepage from "./pages/Homepage";
import PageNotFount from "./components/PageNotFount";

function App() {

  return (
       <BrowserRouter>
         <Routes>
           <Route index element={<Homepage />}/>
           <Route path='todos' element={<NoteForProj/>}/>
           <Route path='whynet' element={<WhynetContact/>}/>
           <Route path='Global8' element={<Global8Contact/>}/>
           <Route path='*' element={<PageNotFount/>}/>
         </Routes>
       </BrowserRouter>
  );
}

export default App;
