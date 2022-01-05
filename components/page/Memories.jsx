import React from "react";
import styles from '../../styles/memories.module.css'
import SectionHeading from "../utils/SectionHeading";
import { Heading3_gray, Heading2, Heading3_black } from "../utils/Heading";

export function Memories_Heading() {
    return(
    <div className={styles.memories_heading}>
            <SectionHeading h1 = 'Travel to make memories all around the world🧐' h2 = 'Find trips that fit a flexible lifestyle' />
    </div>
    )
}

function Memories_Content_number({number}){
    return (
        <button className={styles.number}>{number}</button>
    )
}

export function MemoriesContentCard({number, h2, h1}){
    return(
        <div className={styles.card}>
               <Memories_Content_number number={number} />
               <Heading2 content={h1} />
               <Heading3_black content={h2} />
        </div>
    )
}

export function Memories_Content(){
    return(
    <div className={styles.memories_content}>
        <div className={styles.memories_content_items}>
         <MemoriesContentCard number='01' h2 = 'Be with family and enjoy you beautiful life' h1 = 'Find trips that fit a flexible lifestyle' />
         <MemoriesContentCard number='02' h2 = 'Have everything you need no need to carry something and anythingeeytgetyeyteete' h1 = 'Travel with more confidence' />
         <MemoriesContentCard number='03' h2 = "So much, all you need is adventurious mind " h1 = 'See what’s really included' />
        </div>
        <div className={styles.memories_content_image}>
            <img src = 'memories1.jpg' className={styles.image1}/>
        </div>
    </div>
    )
}