import React from 'react'
import { PrimaryButtton_white } from '../utils/Button'
import { Heading3_gray, Heading2, Heading3_black } from "../utils/Heading";
import styles from '../../styles/listingproperty.module.css'


function ListingPropertyNavigation() {
    return (
        <div className={styles.navigation}>
            <PrimaryButtton_white link= '/' content = '< Go home' />
            <Heading3_gray content='List your property' />
        </div>
    )
}

export default ListingPropertyNavigation
