import './App.css';
import { GeneralProvider } from "./context/GeneralContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ViewUsers from './pages/ViewUsers';
import DeleteUser from './pages/DeleteUser';


function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/users' element={<ViewUsers />} />
        <Route path='/users/delete' element={<DeleteUser />} />
      </Routes>
    </BrowserRouter>
    </GeneralProvider >
  );
}

export default App;
