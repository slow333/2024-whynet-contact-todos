import {BrowserRouter, Routes, Route} from "react-router-dom";
import WhynetContact from "./components/WhynetContact";
import Global8Contact from "./components/Global8Contact";
import Homepage from "./pages/Homepage";
import PageNotFount from "./components/PageNotFount";
import TodoNav from "./pages/TodoNav";

function App() {

  return (
       <BrowserRouter>
         <Routes>
           <Route index element={<Homepage />}/>
           <Route path='todos' element={<TodoNav />}/>
           <Route path='whynet' element={<WhynetContact/>}/>
           <Route path='Global8' element={<Global8Contact/>}/>
           <Route path='*' element={<PageNotFount/>}/>
         </Routes>
       </BrowserRouter>
  );
}

export default App;
