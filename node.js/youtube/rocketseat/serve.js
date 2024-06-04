// import { createServer} from 'node:http'

// //request - obter dados
// //response - respostas do usuario
// const server = createServer((request, response)=>{
//   response.write('oi')
//   return response.end()
// })

// server.listen(3333)
//localhost:3333

//post localhost:3333/videos
// delete localhost:3333/videos/1

import {fastify} from 'fastify'

const server = fastify()
//quando chamar a porta padraão
// server.get('/', ()=>{
//   return 'Hello World!'
// })


server.post('/videos', ()=>{
  return 'Hello RocketSeatt!'
})

//quando chamar a porta localhost:3333/videos
server.get('/videos', ()=>{
  return 'Hello RocketSeatt!'
})
//quando chamar a porta localhost:3333/get
server.put('/videos/:id', ()=>{
  return 'Hello my Sweet!'
})
server.listen({port:3333})