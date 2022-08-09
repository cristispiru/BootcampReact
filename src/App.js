import './App.css';
import { GeneralProvider } from "./context/GeneralContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ViewUsers from './pages/ViewUsers';
import DeleteUser from './pages/DeleteUser';
import Login from './pages/Login';


function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<ViewUsers />} />
          <Route path='/profile' element={<DeleteUser />} />
        </Routes>
    </BrowserRouter>
    </GeneralProvider >
  );
}

export default App;
