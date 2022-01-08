import { Button, VoteButton } from 'ui'
import superagent from 'superagent'

export default function Web() {
  const addVote = async (e) => {
    e.preventDefault()
    /* Post('/api/add-vote', {
      message: 'Hello World',
    }) */

    try {
      const res = await superagent
        .post('/api/add-vote')
        .send({ name: 'Manny', species: 'cat' })
      // res.body, res.headers, res.status
      return res
    } catch (err) {
      // err.message, err.response

      return err
    }
  }
  return (
    <div>
      <h1>Vote</h1>

      <button onClick={addVote}>AddVote</button>
    </div>
  )
}
