import Redis from 'ioredis'
const redis = new Redis(process.env.REDIS_URL)

interface IPublish {
  message: string
  channel: 'dogs' | 'cats'
}
export function publish({ message, channel }: IPublish) {
  // Message can be either a string or a buffer
  redis.publish(channel, JSON.stringify(message))
  console.log('Published %s to %s', message, channel)
}

export function subscribe() {
  redis.subscribe('dogs', 'cats', (err, count) => {
    if (err) {
      // Just like other commands, subscribe() can fail for some reasons,
      // ex network issues.
      console.error('Failed to subscribe: %s', err.message)
    } else {
      // `count` represents the number of channels this client are currently subscribed to.
      console.log(
        `Subscribed successfully! This client is currently subscribed to ${count} channels.`
      )
    }
  })

  redis.on('message', (channel, message) => {
    console.log(`Received ${message} from ${channel}`)
  })
}
