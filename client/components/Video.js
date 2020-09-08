import React from 'react';
import { GreySection } from '../styles/components';

export default function Video({text, img}) {
    return (
        <GreySection>
            <h2>{text.heading}</h2>
            <img src={img}/>
        </GreySection>
    )
}
