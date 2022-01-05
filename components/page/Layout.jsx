import React from 'react'
import styles from '../../styles/layout.module.css'
import Image from 'next/image'
import Navbar from './Navbar'
import { HeaderImage, HeaderContent } from './Header'
import { Live_Heading, Live_Option } from './Live'
import { Memories_Heading, Memories_Content } from './Memories'
import { SomewhereHeading, SomewhereContent } from './Somewhere'

function Layout() {
    return (
        <div className={styles.main}>
            <Navbar />
            <HeaderImage />
            <HeaderContent />
            <Live_Heading />
            <Live_Option />
            <Memories_Heading />
            <Memories_Content />
            <SomewhereHeading />
            <SomewhereContent />
        </div>
    )
}

export default Layout
