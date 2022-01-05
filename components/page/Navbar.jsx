import React from 'react'
import styles from '../../styles/navbar.module.css'
import { PrimaryButtton_white, PrimaryButtton_white_large } from '../utils/Button'

function Navbar() {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                <h1>FindNore🧐</h1>
            </div>
            <div className={styles.listing_property}>
             <PrimaryButtton_white content='List Your property' />
            </div>
            <div className={styles.menu}>
                <PrimaryButtton_white_large content='👩' />
            </div>
        </div>
    )
}

export default Navbar
