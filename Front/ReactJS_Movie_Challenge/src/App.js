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
      <Route path="/movie/:id" element = {<Detail/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>;
  
}

export default App;
