import React from 'react'
import { StoryImages } from '../../utils'

const images = [
    { src: StoryImages.Hero1, alt: 'Hero1' },
    { src: StoryImages.Hero2, alt: 'Hero2' },
    { src: StoryImages.Hero3, alt: 'Hero3' },
    { src: StoryImages.Hero4, alt: 'Hero4' },
    { src: StoryImages.Hero5, alt: 'Hero5' },
    { src: StoryImages.Hero6, alt: 'Hero6' },
    { src: StoryImages.Hero7, alt: 'Hero7' },
]

export default function BackgroundStory() {
    return (
        <div>
            <div className="px-12 md:px-20" id="background_story">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/5">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">Background Story</h2>
                    </div>
                    <div className="w-full md:w-3/5 mt-4 md:mt-0">
                        <p className="text-gray-400 text-justify">
                            Tiny Ape #1 is the first to be experimented on by @DegenScientist! He was taken from his jungle along with many other Tiny Apes. After being experimented on; Tiny Apes
                            gained intelligence that exceeded that of normal humans! They tricked @DegenScientist and finally escaped from the Degen Laboratory! After many days of perilous journeys,
                            they arrived at their "Promise Land" also known as The Algorand blockchain! They decided to make this place their lair! What they need now is a place to call home, and a
                            few friends to lean on! Their high intelligence has brought them much success in the business world and their sense of community forbids them to leave any Tiny Ape behind!
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full overflow-hidden relative mt-16">
                <div className="w-[3500px] flex animate-infinite-carousel">
                    {images.map((image) => (
                        <div className="w-[250px] mx-2" key={image.src}>
                            <img className="rounded-xl" src={image.src} alt={image.alt} />
                        </div>
                    ))}
                    {images.map((image) => (
                        <div className="w-[250px] mx-2" key={image.src}>
                            <img className="rounded-xl" src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
