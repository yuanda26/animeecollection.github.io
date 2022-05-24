import React, { useState } from "react";
import { SVG } from "../../assets";
import { Link } from "react-router-dom";
import {
    NavGroup,
    NavItems,
    NavList,
    NavTitle,
    NavWrapper,
} from "./navs.styled";

const Navs = (props) => {
    const [openNavs, setOpenNavs] = useState(false);
    const toggleNovbar = () => {
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
