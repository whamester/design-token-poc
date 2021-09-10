import React, { useEffect } from 'react'
import axios from 'axios'

const SyncStyleToken = () => {
  useEffect(() => {
    const dispatchAction = async () => {
      const { REPO_OWNER: owner, REPO_NAME: repo, GITHUB_TOKEN: token } = process.env

      console.log(process.env)

      if (!owner || !repo || !token) {
        throw new Error('Owner and repo required')
      }

      const payload = {
        event_type: 'run-main',
        client_payload: {
          command: 'main',
        },
      }

      const dispatchUrl = `https://api.github.com/repos/${owner}/${repo}/dispatches`

      console.log(`Dispatching ${dispatchUrl} with paylaod`, payload)
      const res = await axios.post(dispatchUrl, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
      })
      return res
    }

    const data = dispatchAction()
    console.log(data)
  })
  return <div>Style token</div>
}

export default SyncStyleToken
