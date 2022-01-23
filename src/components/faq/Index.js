import React, { useState } from 'react'
import FaqImage from '../../assets/images/FAQ.png'

const latestAnswer = (
    <p>
        <a
            href="https://ab2.gallery/address/APEETNMQ3THVAJAAXM3FXAYLAPKZM7HUK2K4GWML4YFYYG7QR7CMNZ6YOI"
            className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out"
            target={'_blank'}
            rel="noreferrer"
        >
            AB2 Gallery
        </a>{' '}
        <br />
        <br />
        <a
            href="https://www.randgallery.com/algo-collection?address=APEETNMQ3THVAJAAXM3FXAYLAPKZM7HUK2K4GWML4YFYYG7QR7CMNZ6YOI"
            className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out"
            target={'_blank'}
            rel="noreferrer"
        >
            Rand Gallery
        </a>
    </p>
)

const secondAnswer = (
    <p>
        Shuffles will happen every week where 50 Apes will be released through Rand Gallery as a random shuffle. A Link will be provided through our{' '}
        <a href="https://twitter.com/@DegenTinyApes" className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out" target={'_blank'} rel="noreferrer">
            Twitter
        </a>{' '}
        and{' '}
        <a href="https://discord.gg/3tmjtMGy" className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out" target={'_blank'} rel="noreferrer">
            Discord.
        </a>
    </p>
)

const fourthAnswer = (
    <p>
        All available Tiny Apes on the secondary market will be found on{' '}
        <a href="https://www.nftexplorer.app/sellers?collection=tiny-ape" className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out" target={'_blank'} rel="noreferrer">
            NFT explorer
        </a>
    </p>
)

const fifthAnswer = (
    <p>
        Rarity and sales history is also available on{' '}
        <a href="https://www.nftexplorer.app/collection/tiny-ape" className="text-primary hover:text-blue-700 transition-all duration-300 ease-in-out" target={'_blank'} rel="noreferrer">
            NFT explorer{' '}
        </a>
    </p>
)

const faq = [
    {
        number: 1,
        question: 'Where will the Tiny Apes be minted?',
        answer: 'The Tiny Apes will be batch minted on the Algorand Blockchain!',
    },
    {
        number: 2,
        question: 'How to buy a Tiny Ape?',
        answer: secondAnswer,
    },
    {
        number: 3,
        question: 'How much will a Tiny Ape cost?',
        answer: '  Tiny Apes cost 20 Algo in the instant shuffle, with the price subject to change through a community decision.',
    },
    {
        number: 4,
        question: 'Where is the Tiny Apes secondary market?',
        answer: fourthAnswer,
    },
    {
        number: 5,
        question: 'How Can I check the rarity of a Tiny Ape?',
        answer: fifthAnswer,
    },
    {
        number: 6,
        question: 'What is the purpose of the Tiny Apes?',
        answer: 'The Tiny Apes seek to form a DAO with a collective of investors, artists, creators, and all other influential members of the NFT community, in order to help each other grow financially and socially.',
    },
]

export default function Index() {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className="px-6 md:px-24 md:mt-12">
            <div className="md:grid md:grid-cols-6 gap-12 items-center">
                <div className="md:col-span-2">
                    <img className="rounded-2xl" src={FaqImage} alt="" />
                </div>
                <div className="md:col-span-3 md:col-start-4 mt-12 md:mt-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-10">F.A.Q.</h1>
                    {faq.map((item, i) => (
                        <div className="bg-semi-black p-4 mb-4 cursor-pointer" key={item.number} onClick={() => toggle(i)}>
                            <div className="flex items-center justify-between">
                                <div className="text-base md:text-lg">
                                    {item.number}. {item.question}
                                </div>
                                <span>
                                    {selected === i ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    )}
                                </span>
                            </div>
                            <div
                                className={
                                    selected === i
                                        ? 'overflow-hidden transition-all duration-500 ease-[cubic-bezier(1,0,1,0)] h-auto max-h-[999px]'
                                        : 'max-h-0 transition-all duration-300 ease-[cubic-bezier(0,1,0,1)] overflow-hidden'
                                }
                            >
                                <p className="text-gray-300 mt-4 text-sm md:text-base whitespace-pre-line">{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
