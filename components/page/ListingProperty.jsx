import React from 'react'
import Navbar from './Navbar'
import styles from '../../styles/listingproperty.module.css'
import ListingPropertyNavigation from './ListingPropertyNavigation'
import ListingPropertyPreview from './ListingPropertyPreview'
import {ListingPropertyInput} from './ListingPropertyInput'

function ListingProperty() {
    return (
        <main className={styles.main}>
            <Navbar />
            <ListingPropertyNavigation />
            <ListingPropertyPreview />
            <ListingPropertyInput />
        </main>
    )
}

export default ListingProperty
