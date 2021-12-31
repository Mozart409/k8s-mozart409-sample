import fastify from 'fastify'
import {
  getGraphQLParameters,
  processRequest,
  renderGraphiQL,
  sendResult,
  shouldRenderGraphiQL,
} from 'graphql-helix'
import { schema } from './schema'
import healthCheck from 'fastify-healthcheck'
const app = fastify()

app.register(healthCheck, {
  // healthcheckUrl: '/custom-health',
  // healthcheckUrlDisable: true,
  // healthcheckUrlAlwaysFail: true,
  // exposeUptime: true,
  // underPressureOptions: { } // no under-pressure specific options set here
  exposeUptime: true, // enable, as a sample
})

app.route({
  method: ['GET', 'POST'],
  url: '/graphql',
  async handler(req, res) {
    const request = {
      body: req.body,
      headers: req.headers,
      method: req.method,
      query: req.query,
    }

    if (shouldRenderGraphiQL(request)) {
      res.type('text/html')
      res.send(renderGraphiQL({}))
    } else {
      const request = {
        body: req.body,
        headers: req.headers,
        method: req.method,
        query: req.query,
      }
      const { operationName, query, variables } = getGraphQLParameters(request)
      const result = await processRequest({
        operationName,
        query,
        variables,
        request,
        schema,
      })

      sendResult(result, res.raw)
    }
  },
})

const port = process.env.PORT || 4000

app.listen(port, () => {
  const routes = app.printRoutes()
  console.log(`Available Routes:\n${routes}`)
  console.log(`GraphQL server is running on port localhost:${port}`)
})
