import React from "react";
import styles from '../../styles/input.module.css'

export function Longrectangleinput({placeholder, type, onChange}){
    return(
        <React.Fragment>
            <input type = {type} className={styles.lri} placeholder={placeholder} onChange={onChange}/>
        </React.Fragment>
    )
}

export function LongBroadrectangleinput({placeholder, type, onChange}){
    return(
        <React.Fragment>
            <textarea className={styles.lbri} placeholder={placeholder} onChange={onChange} />
        </React.Fragment>
    )
}

export function ImageInput({label, onChange, imageAreaContent}){
    return(
        <div className={styles.ii}>
            <button className={styles.iib}>{imageAreaContent}</button>
            <input type = 'file' className={styles.iii} onChange={onChange}/>
        </div>
    )
}

export function OptionInput({content = Array}){
    return(
        <select id="cars" name="cars" className={styles.oi}>
         {content.map((o) => {
           return<option className={styles.oio} value="volvo">{o}</option>
         })}
           </select>
    )
}
