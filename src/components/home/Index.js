import React from 'react'
import HeroImage from '../../assets/images/Hero.png'
import DropdownMenu from '../public/DropdownMenu'

export default function Index() {
    return (
        <div>
            <div className="px-12 md:px-20" id="home">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                    <div className="w-full md:w-[40%] space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight upper">
                            Welcome To <br></br> Tiny Apes 🍌
                        </h1>
                        <p className="text-gray-400">
                            A collection of 1000 Apes created by the mad genius known as @DegenScientist! Our goal with the Tiny Apes is to grow as a DAO with a community of fellow Artists,
                            Innovators, and Creators of various Algorand NFT projects.
                        </p>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                            <DropdownMenu />
                            <a
                                href="https://www.nftexplorer.app/collection/tiny-ape"
                                target={'_blank'}
                                className="bg-semi-black hover:bg-gray-800 transition-all duration-300 ease-in-out px-8 py-4 rounded-xl md:text-lg font-semibold text-white items-center block"
                                rel="noreferrer"
                            >
                                <div className="flex justify-center md:justify-start w-full md:w-auto">
                                    NFT Explorer
                                    <span className="ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-12 md:mb-0 animate-infinite-up-and-down">
                        <img className="rounded-xl md:rounded-3xl" src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
