import React from 'react'
import { Heading1_small, Heading2 } from './Heading'
import styles from '../../styles/sectionheading.module.css'

function SectionHeading({h1, h2}) {
    return (
        <React.Fragment>
         <Heading1_small content={h1} />
         <Heading2 content = {h2} />
        </React.Fragment>
    )
}

export default SectionHeading
