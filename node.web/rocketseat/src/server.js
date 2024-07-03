import {fastify} from 'fastify';
import { databaseMemory } from './database-memory.js';
const server = fastify()

server.get('/',()=>{
    return 'hello world'
})

const database = new databaseMemory()
//CRUD

// create read update delete
server.post('/videos',(req,res)=>{
    const {title, description, duration} = req.body
    database.create({
        title,
        description,
        duration,
    })

    console.log(database.list())

    return res.status(201).send()
})


server.get('/videos',()=>{
    const videos = database.list()

    return videos
})
server.put('/videos/:id',()=>{
    return 'hello node.js /node'
})
server.delete('/videos/:id',()=>{
    return 'hello node.js /node'
})

const porta = 3333
server.listen({port:porta},()=>{console.log(`Servidor iniciado: http://localhost:${porta}`)})

