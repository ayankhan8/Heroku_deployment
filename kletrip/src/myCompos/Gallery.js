import React from 'react';
import {
    useRouteMatch
  } from "react-router-dom";
import "@fontsource/andada-pro";
import Image from 'react-bootstrap/Image';


export default function Gallery({post}) {
    let match = useRouteMatch();
    let number = parseInt(match.params.id , 10 );
    console.log(number);
    const heading = {
        fontSize : "50px",
        //paddingTop  : "30px",
        fontWeight  : "bold",
        fontFamily  : "Andada Pro",
        color : "white"
    };
    const image ={
        position: "relative",
        left: "850px",
    };
    const footer ={
        //paddingLeft  : "190px",
        paddingRight  : "190px",
        fontFamily  : "Andada Pro",
        color : "black",
        fontSize : "25px",
        fontWeight  : "bold",
        paddingTop  : "30px",
    };

    return (
        
        <div>
        <pre style={{heading,backgroundColor: "black",fontSize: "40px",color: "gold",fontWeight:"bold", alignContent:"center"}}>           {post[number].nameDep}</pre>

        <Image src={post[number].imgLink} style={{image,width: 1350, height: 750, position: "center"}}/>
        <div>
        <p style={{footer,backgroundColor: "black",fontSize: "25px",color: "gold",fontWeight:"bold"}}>{post[number].desc}</p>
</div>
        </div>
        
    )
}
