import React, { useState } from "react";
import { Content } from "./style";
import MyImage from '../MainContent/images/profileImage.png';
import TextBox from "../TextBox";


//const [isHovering, setIsHovering] = useState(false)

const MainContent = () => {
    
    const [isShow, setIsShow] = useState(false)

    return (
        <Content>
           
            <>
                {isShow && (<TextBox /> )}
                <img onMouseEnter={() => setIsShow(true)}
                     onMouseLeave={() => setIsShow(false)} 
                     src={MyImage}>
                </img>
            </>
                
            <div>
                <h2>Hello,</h2>
                <h1>I'm Rafael Jordão</h1>
                <p>You can see my work in the links below.</p>
                <ul>
                    <a href="https://www.behance.net/rafaeljord7623" target="_blank"><li>Graphic Designer</li></a>
                    <a href="https://github.com/rafael-jordao" target="_blank"><li>Front-End Developer</li></a>
                </ul>
            </div>

        </Content>

    )
}

export default MainContent;

                
                           

