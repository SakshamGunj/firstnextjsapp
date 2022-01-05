import React from "react";
import styles from '../../styles/live.module.css'
import { Heading1_small, Heading2, Heading3_black, Heading3_gray } from "../utils/Heading";
import SectionHeading from "../utils/SectionHeading";

function Live_card({src, card_heading, card_number}){
    return(
        <div className={styles.card}>
            <img src = {src} />
            <Heading3_black content={card_heading} />
            <Heading3_gray content={card_number} />
        </div>
    )
}

export function Live_Heading() {
    return (
        <div className={styles.live_heading}>
        <SectionHeading h1 = 'Live Anywhere🧐' h2 = 'Keep calm & travel on' />
        </div>
    )
}

export function Live_Option(){
    return(
        <div className={styles.live_option}>
         <Live_card src='live1.jpg' card_heading = 'Enjoy the great cold' card_number = '2345 properties' />
         <Live_card src='live2.jpg' card_heading = 'Pickup the earliest sunrise' card_number = '4500 properties' />
         <Live_card src='live3.jpg' card_heading = 'Unique stay' card_number = '1000 properties' />
         </div>
    )
}