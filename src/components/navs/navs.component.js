import React, { useState } from "react";
import { SVG } from "../../assets";
import { Link, useLocation } from "react-router-dom";
import {
    NavGroup,
    NavItems,
    NavList,
    NavTitle,
    NavWrapper,
} from "./navs.styled";

const Navs = (props) => {
    const location = useLocation();

    const [openNavs, setOpenNavs] = useState(false);
    const toggleNovbar = () => {
        const [ currentPath ] = location.pathname
            .split("/")
            .filter((item) => item !== "");
        
        console.log(currentPath);
        setOpenNavs(!openNavs);
    };

    return (
        <NavWrapper>
            Browse
            <NavTitle onClick={toggleNovbar}>
                {props.title} <SVG.ArrowDown />
                <NavGroup className={openNavs ? "show" : "hide"}>
                    <NavList>
                        <NavItems>
                            <Link to="/anime">Anime</Link>
                        </NavItems>
                        <NavItems>
                            <Link to="/collection">Collection</Link>
                        </NavItems>
                    </NavList>
                </NavGroup>
            </NavTitle>
        </NavWrapper>
    );
};

export default Navs;
