import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Home/Home";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register/Register";
import Errorpage from "../Errorpage/Errorpage";
import Singlebrand from "../../Home/Singlebrand/Singlebrand";
import Singledetails from "../../Home/Singlebrand/Singledetails";
import Addcart from "../../Addcart/Addcart";
import Private from "../../Authentication/Private/Private";
import Singleupdate from "../../Home/Singlebrand/Singleupdate";
import Mycart from "../../Mycart/Mycart";

const routes =createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Errorpage></Errorpage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/brand/:name',
                element:<Singlebrand></Singlebrand>
            },{
                path:'/details/:id',
                element:<Private><Singledetails></Singledetails></Private>
            },{
                path:'/addcart',
                element:<Private><Addcart></Addcart></Private>
            },{
                path:'/update/:id',
                element:<Private><Singleupdate></Singleupdate></Private>
            },{
                path:'/mycart',
                element:<Private><Mycart></Mycart></Private>
            }
        ]
    },{
        path:'/login',
        element:<Login></Login>
    },{
        path:'/register',
        element:<Register></Register>
    }
])
export default routes;