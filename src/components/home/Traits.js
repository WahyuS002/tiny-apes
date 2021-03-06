import React from 'react'
import TraitsImage from '../../assets/images/Traits.png'

export default function Traits() {
    return (
        <div className="px-6 md:px-24">
            <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-center">Traits</h2>
            <div className="flex justify-center mt-4 md:mt-6">
                <p className="max-w-md text-center text-gray-100 leading-relaxed text-sm md:text-base">
                    All 1000 Apes are programmatically generated from over XXX items. Apes will have access to the following traits: background, fur, expression, eyewear, headwear, clothes.
                </p>
            </div>
            <div className="flex justify-center mt-10">
                <img className="md:w-3/4 md:-mr-16" src={TraitsImage} alt="" />
            </div>
        </div>
    )
}
