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
      const length = candidatesByParties.length
      return {requests: sum, candidates: length}
    }

    const getRequestsByParties = async () => {
      setLoading(true)
      const response = await fetch(`/parties.json`)
      const parties = await response.json()
      const partiesRequests = await Promise.all(parties.map(async ({name}) => {
        const requests = await fetchCandidatesRequestsByParty(name)
        return { party: name, ...requests }
      }))
      setRequestsByParties(partiesRequests)
      setLoading(false)
    }

    useEffect(() => {
      getRequestsByParties()
    }, [])

    const hasData = !loading && requestsByParties.length > 0
    const partyWithMaxRequest = requestsByParties.reduce((acc, cur) => {
      return cur.requests > acc.requests ? cur : acc
    }, { party: '', requests: Number.MIN_SAFE_INTEGER, candidates: 0 })
    const partyWithMinRequest = requestsByParties.reduce((acc, cur) => {
      return cur.requests < acc.requests ? cur : acc
    }, { party: '', requests: Number.MAX_SAFE_INTEGER, candidates: 0 })

    const partyWithMaxAverage = requestsByParties.reduce((acc, cur) => {
      return (cur.requests / cur.candidates) > (acc.requests / acc.candidates) ? cur : acc
    }, { party: '', requests: Number.MIN_SAFE_INTEGER, candidates: 0 })
    const partyWithMinAverage = requestsByParties.reduce((acc, cur) => {
      return (cur.requests / cur.candidates) < (acc.requests / acc.candidates) ? cur : acc
    }, { party: '', requests: Number.MAX_SAFE_INTEGER, candidates: 0 })

    function getAverage(requests, candidates) {
      return (requests / candidates).toFixed()
    }
  
    return (
        <div className={styles.statsContainer}>
            <section>
              <h3>정당별 질문 수</h3>
              {loading && <p>Loading...</p>}
              {hasData && requestsByParties.map(({party, requests, candidates}) => (
                <div key={party}>
                  <p>{party} : {requests} / {candidates} =&gt; 후보 한 명당 평균 {getAverage(requests, candidates)}개</p>
                </div>
              ))}
            </section>
            <section>
              <h3>가장 많은 질문을 받은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMaxRequest.party} : {partyWithMaxRequest.requests}</p>}
            </section>
            <section>
              <h3>가장 적은 질문을 받은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMinRequest.party} : {partyWithMinRequest.requests}</p>}
            </section>
            <section>
              <h3>후보 한 명당 가장 많은 질문을 받은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMaxAverage.party} : {getAverage(partyWithMaxAverage.requests, partyWithMaxAverage.candidates)}</p>}
            </section>
            <section>
              <h3>후보 한 명당 가장 적은 질문을 받은 정당</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{partyWithMinAverage.party} : {getAverage(partyWithMinAverage.requests, partyWithMinAverage.candidates)}</p>}
            </section>
        </div>
    )
}