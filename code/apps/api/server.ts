import { schema } from './src/schema'
import { createServer } from 'graphql-yoga'
import fastify from 'fastify'
import healthCheck from 'fastify-healthcheck'

// This is the fastify instance you have created
const app = fastify({ logger: true })

app.register(healthCheck, {
  exposeUptime: true,
})

const graphQLServer = createServer({
  schema,
  // Integrate Fastify logger
  logger: app.log,
})

app.route({
  url: '/graphql',
  method: ['GET', 'POST', 'OPTIONS'],
  handler: async (req, reply) => {
    const response = await graphQLServer.handleIncomingMessage(req)
    response.headers.forEach((value, key) => {
      reply.header(key, value)
    })

    reply.status(response.status)
    reply.send(response.body)
  },
})

app.listen(4000)

app.ready(() => {
  const routes = app.printRoutes()
  console.log(`Available Routes:\n${routes}`)
})
