import React from 'react'
import { useState } from 'react'
import styles from '../../styles/listingproperty.module.css'
import {Heading1, Heading1_small, Heading2, Heading3_gray_thin} from '../utils/Heading'
import { ImageInput, Longrectangleinput, LongBroadrectangleinput, OptionInput } from '../utils/Input'

export function ListingPropertyInput() {
    const [imageName, setImageName] = useState('Select')
    const descriptionOnChangeHandler = (e) => {
        console.log(e.target.value)
    }
    const titleChangeHandler = (e) => {
        console.log(e.target.value)
    }
    function printFile(file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }
    const imageChangeHandler = (e) => {
        let imagename = e.target.files[0].name
        setImageName(imagename)
        printFile(e.target.files[0])
    }
    return (
        <div className={styles.listing_input}>
           <div className={styles.heading}>
           <h1>List Your Property</h1>
           </div>
           <div className={styles.property_picture}>
            <InputHeading content = 'Upload' />
            <Heading3_gray_thin content='Add image of your sweet property' />
            <ImageInput label = 'Pick image for you sweet property' onChange={imageChangeHandler} imageAreaContent={imageName}/>
           </div>
           <div className={styles.property_details}>
            <InputHeading content = 'Property Details'/>
            <div className={styles.title}>
                <Heading3_gray_thin content='Title'/>
                <Longrectangleinput type='text' placeholder='eg.. The Grand Resort' onChange={titleChangeHandler}/>
            </div>
            <div className={styles.location}>
                <Heading3_gray_thin content='Location'/>
                <Longrectangleinput type='text' placeholder='eg.. Near Barricate, Groud store, Maldives' />
            </div>
            <div className={styles.description}>
                <Heading3_gray_thin content='Description'/>
                <LongBroadrectangleinput type='text' placeholder='eg.. Near Barricate, Groud store, Maldives' onChange={descriptionOnChangeHandler} />
            </div>
            <div className={styles.bedroom}>
                <Heading3_gray_thin content='Bedrooms' />
                <OptionInput content={['1', '2', '3', '4']}/>
            </div>
            <div className={styles.kitchen}>
                <Heading3_gray_thin content='Kitchens' />
                <OptionInput content={['1', '2', '3', '4']}/>
            </div>
            <div className={styles.livingroom}>
                <Heading3_gray_thin content='Living Rooms' />
                <OptionInput content={['1', '2', '3', '4']}/>
            </div>
            <div className={styles.discount}>
                <div className={styles.discount_heading}> <Heading3_gray_thin content='Discount' /></div>
                <div className={styles.discount_percent}><Longrectangleinput type='number' placeholder = 'e.g. 10' /></div>
                <div className = {styles.discount_currency}><OptionInput content={['₹', '$']}/></div>
            </div>
            <div className={styles.price}>
              <div className={styles.price_heading}><Heading3_gray_thin content='Price' /></div>
              <div className={styles.money}><Longrectangleinput type='number' placeholder = 'e.g. 180' /></div>  
              <div className={styles.currency}> <OptionInput content={['₹ Ruppee', '$ Dollar']}/></div> 
              <div className={styles.period}><OptionInput content={['Per Night', 'Per Day', 'Per Week']}/></div>
            </div>
           </div>
        </div>
    )
}

export function InputHeading({content}){
    return(
        <div className = {styles.input_heading}>
            <Heading2 content = {content} />
        </div>
    )
}

