import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import TaskForm from "./pages/TaskForm";
import TaskLists from "./pages/TaskLists";
import TaskUpdate from "./pages/TaskUpdate";
import { IdProvider } from "./contexts/IdContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<Layout><TaskForm/></Layout>}/>
            
           <IdProvider>
              <Route path='/lists' element={<Layout><TaskLists/></Layout>}/>
              <Route path='/update' element={<Layout><TaskUpdate/></Layout>}/>
           </IdProvider>

           <Route path="*" element={<Navigate to="/"/>}/>
         </Routes>
      </BrowserRouter>
      {/* <Layout/> */}
    </div>
  );
}

export default App;
