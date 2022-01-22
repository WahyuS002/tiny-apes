import React from 'react'
import { TeamImages } from '../../utils'

const teams = [
    {
        name: 'Edgmeri',
        position: 'Founder',
        pfp: TeamImages.Meri,
    },
    {
        name: 'Degen Scientist',
        position: 'Artist / Creator',
        pfp: TeamImages.DegenScientist,
    },
    {
        name: 'Algonaut',
        position: 'Head of Marketing',
        pfp: TeamImages.Algonaut,
    },
    {
        name: 'TermosEs',
        position: 'Technical support',
        pfp: TeamImages.Termoses,
    },
    {
        name: 'Wahyu',
        position: 'Web Developer',
        pfp: TeamImages.Wahyu,
    },
]

export default function Team() {
    return (
        <div className="md:mt-12 px-6 md:px-24">
            <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-16">
                <div className="md:w-3/6">
                    <h1 className="text-3xl md:text-5xl font-semibold">Tiny Apes Team</h1>
                    <p className="mt-4 text-gray-500 leading-relaxed tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quam exercitationem nesciunt, culpa debitis iste? Earum eligendi facilis nam.
                    </p>
                </div>
                <div className="md:w-5/6">
                    <div className="grid grid-rows-1 md:grid-cols-2 md:gap-x-3 gap-y-12 md:gap-y-16">
                        {teams.map((team) => (
                            <div>
                                <div className="flex items-center">
                                    <div className="w-28 h-28 relative">
                                        <img src={team.pfp} alt="" className="rounded-full  object-cover border-primary border-[3px] border-dashed p-1" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="text-lg font-medium">{team.name}</h5>
                                        <p className="text-primary">{team.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
