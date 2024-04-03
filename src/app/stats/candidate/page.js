"use client"

import * as styles from '../stats.module.css'
import { useEffect, useState } from "react"

export default function StatsByCandidate() {
    const [loading, setLoading] = useState(false)
    const [requestsByCandidate, setRequestsByCandidate] = useState([])

    const getRequestsByCandidate = async () => {
      setLoading(true)
      const response = await fetch(`/candidates.json`)
      const candidates = await response.json()
      const candidatesRequests = await Promise.all(candidates.map(async (candidate) => {
        const response = await fetch(`/api/candidates/${candidate.id}/stats`)
        const {data} = await response.json()
        return { name: candidate.name, requests: data.requests, party: candidate.party }
      }))
      setRequestsByCandidate(candidatesRequests)
      setLoading(false)
    }

    useEffect(() => {
      getRequestsByCandidate()
    }, [])

    const hasData = !loading && requestsByCandidate.length > 0
    const candidateWithMaxRequest = requestsByCandidate.reduce((acc, cur) => {
      return cur.requests > acc.requests ? cur : acc
    }, { name: '', requests: 0, party: '' })
  
    return (
        <div className={styles.statsContainer}>
            <section>
              <h3>가장 많은 질문을 받은 후보</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{candidateWithMaxRequest.name}({candidateWithMaxRequest.party}) : {candidateWithMaxRequest.requests}</p>}
            </section>
        </div>
    )
}