
import Home from './Pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  redirect,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Loop from './Components/Loop';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';
import NetflixCrousel from './Components/NetflixCrousel';
import NetDemo from './Components/NetDemo';
import Listitem from './Components/ListItem/Listitem';
import List from './Components/List/List';
import Watch from './Pages/watch/Watch';
import Login from './Pages/Login/Login';
import Detail from './Pages/Detail/Detail';
import Feature from './Components/Feature/Feature';


function App() {


  const router=createBrowserRouter([

    {path:"/home",element:<Home/>},
    {path:"/Movies",element:<Home type="movies"/>},
    {path:"/Series",element:<Home type="series"/>},

    {path:"/Navbar",element:<Navbar/>},
    {path:"/Loop",element:<Loop/>},
    {path:"/Demo",element:<Demo/>},
    {path:"/Demo2",element:<Demo2/>},
    {path:"/NetflixCrousel",element:<NetflixCrousel/>},
    {path:"/NetDemo",element:<NetDemo/>},
    {path:"/ListItem",element:<Listitem/>},
    {path:"/List",element:<List/>},
    {path:"/Watch",element:<Watch/>},
    {path:"/Login",element:<Login/>},
    {path:"/Detail",element:<Detail/>},
    {path:"/feature",element:<Feature/>},

  ])

  return (
  <>
 


  <RouterProvider router={router}/>
  <ToastContainer />
  </>
  );
}

export default App;

