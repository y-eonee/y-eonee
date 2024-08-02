import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';
import Header from './components/Header';

function App() {

  return <Router>
    <Header />
    <Routes>
      <Route path="/movie/:id" element = {<Detail/>} /> //movie id별 route 설정
      <Route path="/" element={<Home/>} /> //home route 설정
    </Routes>
  </Router>;
  
}

export default App;
