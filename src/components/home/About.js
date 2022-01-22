import React from 'react'
import TabAnimation from './TabAnimation'

export default function About() {
    return (
        <div className="px-6 md:px-24">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="w-full md:w-4/12">
                    <TabAnimation />
                </div>
                <div className="md:w-7/12 mb-8 md:mb-0">
                    <p className="text-base md:text-lg text-gray-300 text-justify leading-relaxed">
                        Welcome to Tiny Apes Official! A collection of <span className="bg-primary px-2 py-1 rounded-lg text-black font-semibold">1000 Apes</span> created by the mad genius known as
                        @DegenScientist! Our goal with the Tiny Apes is to grow as a DAO with a community of fellow Artists, Innovators, and Creators of various Algorand NFT projects. We aim to bring
                        several indie artists together and shine a spotlight on the amazing Algorand NFT community! We are a derivative from a previous NFT project known as the 8bit Mates! 150 Mates
                        were minted and sold/gifted by @DegenScientist to members of Algorand who were looking to grow with the project! As a reward for being an OG of the 8bit Mates and because he
                        will be busy with the @DegenGOATS project.
                    </p>
                </div>
            </div>
        </div>
    )
}
