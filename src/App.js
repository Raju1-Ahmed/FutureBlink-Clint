import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import AddPost from './component/Home/AddPost';
import Home from './component/Home/Home';
import Menu from './component/Home/Menu';
import SinglePost from './component/Home/SinglePost';
import RequireAuth from './component/RequireAuth';
import Signup from './component/Signup';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
    <Menu/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/service/:serviceId' element={ <RequireAuth><SinglePost/></RequireAuth> }/>
        <Route path='addpost' element={ <RequireAuth> <AddPost/> </RequireAuth> }/>
      </Routes>
      <Footer/>
      <ToastContainer />

    </div>
  );
}

export default App;
