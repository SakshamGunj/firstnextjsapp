import React from 'react'
import styles from '../../styles/header.module.css'
import { Heading1, Heading3_gray, Heading2 } from '../utils/Heading'

export function HeaderImage() {
    return (
        <div className={styles.header_image}>
            <Heading1 content='Air, Sleep, Dream,' />
        </div>
    )
}

function Input({content, input_type, placeholder, to_change}) {
    const focusChangeHandler = (e, input_type) => {
        e.target.type = 'date'
    }
    const nonFocusChangeHandler = (e) => {
    }
    return ( 
        <div className={styles.form}>
        <label className={styles.label}>{content}</label>
        <input type={input_type} className={styles.input} placeholder={placeholder} onFocus={to_change?focusChangeHandler:nonFocusChangeHandler}></input>
        </div>
    )
}

export function HeaderContent(){
    return (
        <div className={styles.header_content}>
         <div className={styles.header_content_options}>
             <Heading3_gray content='Stays' />
             <Heading3_gray content='Cars' />
             <Heading3_gray content='Flights' />
             <Heading3_gray content='Things to do' />
         </div>
         <div className={styles.header_content_input}>
             <Input type='search' content = 'Location' placeholder='Where are you going' />
             <Input type='text' content= 'Check In' placeholder='Add Date' to_change={true}/>
             <Input type= 'text' content='Check Out' placeholder='Add Date' to_change={true}/>
             <Input type = 'number' content='Number' placeholder='No. of people'/>
         </div>
        </div>
    )
}