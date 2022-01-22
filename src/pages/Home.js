import React from 'react'
import Index from '../components/home/Index'
import About from '../components/home/About'
import Roadmap from '../components/home/Roadmap'
import JoinUs from '../components/home/JoinUs'

import Navbar from '../components/public/Navbar'
import Footer from '../components/public/Footer'
import BackgroundStory from '../components/home/BackgroundStory'
import Team from '../components/home/Team'
import Traits from '../components/home/Traits'

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="mt-4">
                <Index />
            </div>
            <div className="mt-36">
                <BackgroundStory />
            </div>
            <div className="mt-12 md:mt-44">
                <Traits />
            </div>
            <div className="mt-12 md:mt-44">
                <About />
            </div>
            <div className="mt-12 md:mt-44">
                <Roadmap />
            </div>
            <div className="mt-12 md:mt-44">
                <Team />
            </div>
            <div className="mt-12 md:mt-44">
                <JoinUs />
            </div>
            <div className="mt-12 md:mt-44">
                <Footer />
            </div>
        </div>
    )
}
