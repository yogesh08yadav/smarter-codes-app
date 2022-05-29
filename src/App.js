import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Starred from './components/Starred';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{display:'flex'}}>
        <BrowserRouter>
      <Sidebar/>
        <Routes>
      <Route path='/chat/:chatId' element={<Chat/>} />
      <Route path='/chat/:chatId/starred' element={<Starred/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
