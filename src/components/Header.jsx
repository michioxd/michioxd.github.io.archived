import clsx from "clsx";
import Style from './Header.module.css';

import HeaderBanner from './../assets/header.png';
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Header() {

    const pageCurrentLocation = useLocation();

    const headerTitle = {
        '/': "mashiro's main page",
        '/blog': "mashiro's blog",
        '/library': "mashiro's library",
        '/contact': "contact with mashiro"
    };

    useEffect(() => {
        document.title = (headerTitle[pageCurrentLocation.pathname] !== undefined ? headerTitle[pageCurrentLocation.pathname] : "page not found :(");
    }, [pageCurrentLocation]);

    return (
        <div className={clsx(Style.Header)}>
            <img src={HeaderBanner} className={clsx(Style.HeaderImage)} alt="" srcset="" />
            <div className={clsx(Style.HeaderNav)}>
                <h3 className={clsx(Style.HeaderNavTitle)}>{
                    (headerTitle[pageCurrentLocation.pathname] !== undefined ? headerTitle[pageCurrentLocation.pathname] : "page not found :(")
                }</h3>
                <div className={clsx(Style.HeaderNavLink)}>
                    <NavLink end to="/">home</NavLink>
                    <NavLink to="/blog">blog</NavLink>
                    <NavLink to="/library">library</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                </div>
            </div>
        </div>
    )
}