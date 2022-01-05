import React from "react";
import styles from '../../styles/somewhere.module.css'
import SectionHeading from "../utils/SectionHeading";
import { Heading3_black, Heading3_gray } from "../utils/Heading";

export function SomewhereHeading(){
    return(
        <div className={styles.somewhere_heading}>
         <SectionHeading h1='Go somewhere' h2 = "Let's go to adventure" />
        </div>
    
    )
}


export function SomewhereContentCard({image, hotelName, hotelLocation, price, date, star}){
    return(
    <div className={styles.card}>
        <div className={styles.card_image}>
            <img src={image} />
        </div>
        <div className={styles.card_content}>
           <div className = {styles.hotel}>
           <Heading3_black content = {hotelName}/>
           </div>
           <div className={styles.location}>
           <Heading3_gray content = {hotelLocation}/>
           </div>
            <h3 className={styles.price}>${price}</h3>
            <div className={styles.date}>
            <Heading3_gray content={date} className = {styles.date} />
            </div>
            <div className={styles.star}>
            <Heading3_gray content={star}/>
            </div>
        </div>
    </div>
    )
}

export function SomewhereContent(){
    return (
        <div className={styles.somewhere_content}>
         <SomewhereContentCard image='layout.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
         <SomewhereContentCard image='layout6.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
         <SomewhereContentCard image='layout5.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
         <SomewhereContentCard image='layout4.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
         <SomewhereContentCard image='layout3.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
         <SomewhereContentCard image='layout2.jpg' hotelName = 'The Grand Resort' hotelLocation='Near Barricate' price='456' date = 'Aug 3 To Sep 30' star = '⭐3.9'  />
       </div>
    )
}