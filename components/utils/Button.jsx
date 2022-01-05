import react from "react";
import styles from '../../styles/button.module.css'


export function PrimaryButtton({content}) {
    return (
        <button className={styles['primary_button']}>{content}</button>
    )
}

export function PrimaryButtton_white({content}) {
    return (
        <button className={styles['primary_button_white']}>{content}</button>
    )
}

export function PrimaryButtton_white_large({content}) {
    return (
        <button className={styles['primary_button_white_large']}>{content}</button>
    )
}