import { NextApiRequest, NextApiResponse } from 'next'
import { publish } from 'redis'
type AddVoteData = {}

export default async function AddVote(
  req: NextApiRequest,
  res: NextApiResponse<AddVoteData>
) {
  if (req.method === 'POST') {
    try {
      const result = publish({ message: 'Hello', channel: 'cats' })
      res.status(200).json({ result })
    } catch (err) {
      res.status(500).json({ error: 'failed to publish message' })
    }
  } else {
    // Handle any other HTTP method
    res.status(405)
  }
}
