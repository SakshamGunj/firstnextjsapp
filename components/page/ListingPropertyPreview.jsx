import React from 'react'
import styles from '../../styles/listingproperty.module.css'
import {SomewhereContentCard} from '../page/Somewhere'
import { Heading2, Heading1_small } from '../utils/Heading'

function ListingPropertyPreview() {
    return (
        <div className={styles.preview}>
            <Heading2 content='Preview' />
            <SomewhereContentCard hotelName='The Samundra' hotelLocation='Lalpur' star= '⭐1'  price='1256' image='layout2.jpg' date='Jan 22 to Feb 10' /> 
        </div>
    )
}

export default ListingPropertyPreview
