import React from 'react';
import "../css/Carousel.css"
import photo1 from "../assets/1.jpg"
import photo2 from "../assets/2.jpg"



function Carousel() {
    return(
    <div id="slider">
            <ul id="slideWrap"> 
                <li><img src={photo1} alt=""/></li>
                <li><img src={photo2} alt=""/></li>
                
            </ul>

    </div>
    );
}

export default Carousel;