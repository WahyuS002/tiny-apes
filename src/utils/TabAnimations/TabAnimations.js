import { FurImages } from '../ImportImages/ImportImages'

export const allTabs = [
    { label: 'Gold', src: FurImages.gold },
    { label: 'Albino', src: FurImages.albino },
    { label: 'Brown', src: FurImages.brown },
    { label: 'Pink', src: FurImages.pink },
    { label: 'Blue', src: FurImages.blue },
    { label: 'Red', src: FurImages.red },
]

const [gold, albino, brown, pink, blue, red] = allTabs
export const initialTabs = [gold, albino, brown, pink, blue, red]

export function getNextTab(tabs) {
    const existing = new Set(tabs)
    return allTabs.find((tab) => !existing.has(tab))
}
