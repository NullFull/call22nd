"use client"

import * as styles from '../stats.module.css'
import { useEffect, useState } from "react"

export default function StatsByParty() {
    const [loading, setLoading] = useState(false)
    const [requestsByParties, setRequestsByParties] = useState([])

    async function fetchCandidatesRequestsByParty(party) {
      const response = await fetch(`/parties/${party}/candidates.json`)
      const candidatesByParties = await response.json()
      const requests = await Promise.all(candidatesByParties.map(async (candidate) => {
        const response = await fetch(`/api/candidates/${candidate.id}/stats`)
        const {data} = await response.json()
        return data.requests
      }))
      const sum = requests.reduce((acc, counter) => acc + counter, 0)
      return sum
    }

    const getRequestsByParties = async () => {
      setLoading(true)
      const response = await fetch(`/parties.json`)
      const parties = await response.json()
      const partiesRequests = await Promise.all(parties.map(async ({name}) => {
        const requests = await fetchCandidatesRequestsByParty(name)
        return { party: name, requests }
      }))
      setRequestsByParties(partiesRequests)
      setLoading(false)
    }

    useEffect(() => {
      getRequestsByParties()
    }, [])

    const hasData = !loading && requestsByParties.length > 0
    const partyWithMaxRequest = requestsByParties.reduce((acc, {party, requests}) => {
      return requests > acc.requests ? { party, requests } : acc
    }, { party: '', requests: 0 })
    const partyWithMinRequest = requestsByParties.reduce((acc, {party, requests}) => {
      return requests < acc.requests ?{ party, requests } : acc
    }, { party: '', requests: Number.MAX_SAFE_INTEGER })
  
    return (
        <div className={styles.statsContainer}>
            <section>
              <h3>정당별 질문 수</h3>
              {loading && <p>Loading...</p>}
              {hasData && requestsByParties.map(({party, requests}) => (
                <div key={party}>
                  <p>{party} : {requests}</p>
                </div>
              ))}
            </section>
            <section>
              <h3>가장 질문이 많은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMaxRequest.party} : {partyWithMaxRequest.requests}</p>}
            </section>
            <section>
              <h3>가장 질문이 적은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMinRequest.party} : {partyWithMinRequest.requests}</p>}
            </section>
        </div>
    )
}