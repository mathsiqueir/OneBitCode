import {randomUUID} from 'node:crypto'

export class databaseMemory{
    //fazer o video receber um id proprio
    //SET, MAP
    #videos = new Map()


    list(){
        return this.#videos.values()
    }


    create(video){
        const videoId = randomUUID()
        //uuid unique universal id
        this.#videos.set(videoId, video)
    }

    update(id, video){
        this.#videos.set(id, video)
    }
    
    delete(id){
        this.#videos.delete(id)
    }
}