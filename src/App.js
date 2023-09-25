import './App.css';
import FormOne from './components/FormOne';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormTwo from './components/FormTwo';
import Dashboard from './components/Dashboard';
import TotalDownloads from './components/TotalDownloads';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/totaldownloads' element={<TotalDownloads/>} ></Route>
    <Route path='/' element={<FormOne/>} />
    <Route path='formTwo'  element={<FormTwo/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
