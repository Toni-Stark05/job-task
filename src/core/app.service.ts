import { async } from "rxjs"
import api from "./app.api.js"
import db, { TonyStak } from "./db.js"

interface IInfo {
    count: number
    pages: number
    next: string
    prev: unknown
}

interface IPerson {
    id: number
    name: string
    status: string
    species: string
    type: string
    origin: object
    location: object
    image: string
    episode: string[]
    url: string
    created: string
}

interface IData {
    info: IInfo
    results: IPerson[]
}

class AppService {
    async task(): Promise<void> {
        const character = await this.getCharacter()
        if(character === null) {
            throw new Error('404')
        }
        const pages = character.info.pages
        for (let i = 1; i <= pages; i++) {
            const res = await this.getCaracterPage(i)
            if(res === null) {
                throw new Error('404')
            }
            const persons = res.results
            persons.forEach(async (pers) => {
                const charact = new TonyStak({
                    name: pers.name,
                    data: pers,
                })
                await charact.save()
            })
        }
    }

    private async getCharacter(): Promise<IData | null> {
        const res = await api.get('character')
        let data: IData | null = null
        if(this.isCharacter(res.data)) data = res.data
        return data
    }

    private async getCaracterPage(page: number): Promise<IData | null> {
        const res = await api.get('character', {
            params: {
                page: page
            }
        })
        let data: IData | null = null
        if(this.isCharacter(res.data)) data = res.data
        return data
    }

    private isCharacter(obj: any): obj is IData {
        return (
            typeof obj === 'object' && 
            obj !== null
            )
    }
}

export default new AppService()