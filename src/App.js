import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Menu from './component/Home/Menu';
import SinglePost from './component/Home/SinglePost';

function App() {
  return (
    <div>
    <Menu/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/service/:serviceId' element={<SinglePost/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
