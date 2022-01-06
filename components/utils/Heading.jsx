import react from "react";
import styles from '../../styles/heading.module.css'

export function Heading1({content}){
    return (
        <h1 className={styles['h1']}>
        {content}
        </h1>
    )
}

export function Heading3_gray({content}){
    return (
        <h3 className={styles.gray_h3}>
            {content}
        </h3>
    )
}

export function Heading3_gray_thin({content}){
    return (
        <h3 className={styles.gray_h3_thin}>
            {content}
        </h3>
    )
}

export function Heading2({content}){
    return (
        <h2 className={styles.h2}>{content}</h2>
    )
}

export function Heading1_small({content}){
    return (
        <h1 className={styles['h1_small']}>
        {content}
        </h1>
    )
}

export function Heading3_black({content}){
    return (
        <h3 className={styles.black_h3}>
            {content}
        </h3>
    )
}
