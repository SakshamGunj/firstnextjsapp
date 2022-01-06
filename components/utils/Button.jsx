import react from "react";
import styles from '../../styles/button.module.css'
import Link from "next/link";
import { useRouter } from "next/router";


export function PrimaryButtton({content}) {
    return (
        <button className={styles['primary_button']}>{content}</button>
    )
}

export function PrimaryButtton_white({content, link}) {
    const router = useRouter()
    return (
        <Link passHref href={link}>
          <a><button className={styles[router.pathname === link?'active_link':'primary_button_white']}>{content}</button></a>
        </Link>
    )
}

export function PrimaryButtton_white_large({content, link}) {
    return (
        <button className={styles['primary_button_white_large']}>{content}</button>
    )
}