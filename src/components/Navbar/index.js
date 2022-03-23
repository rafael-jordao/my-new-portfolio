import React from "react";
import { MenuButton } from "../MenuButton";
import { NavMenu, Logo } from "./style";


export default function Navbar() {
    return (
        <header>
            <NavMenu>
                <Logo>
                    <a href="#">Rafael Jordão</a>
                </Logo>
                <div>
                <a href="https://linktr.ee/_rafaeljordao" target="_blank"><li>Contact me</li></a>
                <MenuButton />
                </div>
            </NavMenu>
        </header>
              
    )
}

