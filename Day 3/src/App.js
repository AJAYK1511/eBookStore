import Login from  './components/Login';
import ReactDOM from "react-dom/client";
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/sign" element={<SignUp />} >
          </ Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
