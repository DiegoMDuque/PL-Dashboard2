import React from 'react';
import image from '../assets/images/logo.png';
import ContentWrapper from './ContentWrapper';
import AllUsers from './AllUsers';
import AllProducts from './AllProducts';
import Targets from './Targets';
import FindProduct from './FindProduct';
import FindUser from './FindUser';
import LastProduct from "./LastProduct";
import LastUser from "./LastUser";
import NotFound from './NotFound';
import AllCategories from './AllCategories';
import { Link, Route, Switch } from 'react-router-dom';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House" />
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Parfum Légende</span></Link>
                </li>
                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Opciones</div>

                {/*<!-- Nav Item - Users -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/allUsers">
                        <span>Lista de Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Products -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/allProducts">
                        <span>Lista de Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Categories -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/allCategories">
                        <span>Lista de Categorías</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/AllUsers">
                    <AllUsers />
                </Route>
                <Route path="/allProducts">
                    <AllProducts />
                </Route>
                <Route path="/allCategories">
                    <AllCategories />
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
                <Route path="/FindUser/:id">
                    <FindUser />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;