import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import UsersInDb from './UsersInDb';
import ProductsInDb from './ProductsInDb';
import RegionsInDb from './RegionsInDb';
import Targets from './Targets';
import FindProduct from './FindProduct';
import LastProduct from "./LastProduct";
import LastUser from "./LastUser";
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
   {/*<!-- Sidebar -->*/}
               <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
               <li className="nav-item active">
                   <Link className="nav-link" to="/">
                       <i className="fas fa-fw fa-tachometer-alt"></i>
                       <span>Dashboard - Parfum Légende</span></Link>
               </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/UsersInDb">
                        <span>Lista de Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ProductsInDb">
                        <span>Lista de Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/UsersInDb">
                    <UsersInDb />
                </Route>
                <Route path="/ProductsInDb">
                    <ProductsInDb />
                </Route>
                <Route path="/RegionsInDb">
                    <RegionsInDb />
                </Route>
                <Route path="/Targets">
                    <Targets />
                </Route>
                <Route path="/LastProduct">
                    <LastProduct />
                </Route>
                <Route path="/LastUser">
                    <LastUser />
                </Route>
                <Route path="/FindProduct/:id">
                    <FindProduct />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;

// import React from 'react';
// import image from '../assets/images/Pl_corto.png';
// import { Link } from "react-router-dom";

// function SideBar(){
//     return(
//         <React.Fragment>
//             {/*<!-- Sidebar -->*/}
//             <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

//                 {/*<!-- Sidebar - Brand -->*/}
//                 <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
//                     <div className="sidebar-brand-icon">
//                         <img className="w-100" src={image} alt="Digital House"/>
//                     </div>
//                 </Link>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider my-0"/>

//                 {/*<!-- Nav Item - Dashboard -->*/}
//                 <li className="nav-item active">
//                     <Link className="nav-link" to="/">
//                         <i className="fas fa-fw fa-tachometer-alt"></i>
//                         <span>Dashboard - Parfum Légende</span></Link>
//                 </li>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider"/>

//                 {/*<!-- Heading -->*/}
//                 <div className="sidebar-heading">Opciones</div>

//                 {/*<!-- Nav Item - Pages -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link collapsed" to="/UsersInDb">
//                         <i className="fas fa-fw fa-folder"></i>
//                         <span>Usuarios</span>
//                     </Link>
//                 </li>

//                 {/*<!-- Nav Item - Charts -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/categories">
//                         <i className="fas fa-fw fa-chart-area"></i>
//                         <span>Categorías</span></Link>
//                 </li>

//                 {/*<!-- Nav Item - Tables -->*/}
//                 <li className="nav-item">
//                     <Link className="nav-link" to="/ProductsInDb">
//                         <i className="fas fa-fw fa-table"></i>
//                         <span>Productos</span></Link>
//                 </li>

//                 {/*<!-- Divider -->*/}
//                 <hr className="sidebar-divider d-none d-md-block"/>
//             </ul>
//             {/*<!-- End of Sidebar -->*/}
            
//         </React.Fragment>
//     )
// }
// export default SideBar;