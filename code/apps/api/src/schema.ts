import { makeExecutableSchema } from '@graphql-tools/schema'
import { Resolvers } from './resolver-types'

const typeDefs = /* GraphQL */ `
  type Dogs {
    votes: Int!
  }

  type Cats {
    votes: Int!
  }

  type Query {
    cats: Int!
    dogs: Int!
  }

  type Mutation {
    upvoteCats: Cats!
    upvoteDogs: Dogs!
  }

  type Subscription {
    count(to: Int!): Int
  }
`

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const resolvers: Resolvers = {
  Query: {
    dogs: 12,
    cats: 15,
  },
  Mutation: {
    upvoteCats: (_, {}) => {
      const cats = find(posts)
      if (!post) {
        throw new Error(`Couldn't find post with id ${postId}`)
      }
      post.votes += 1
      return post
    },
  },

  Subscription: {
    count: {
      subscribe: async function* (_, { to }) {
        for (let i = 0; i <= to; i++) {
          yield { count: i }
          console.log({ count: i })
          sleep(1000)
        }
      },
    },
  },
}

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
