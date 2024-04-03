"use client"

import * as styles from '../stats.module.css'
import { useEffect, useState } from "react"

export default function StatsByCity() {
    const [loading, setLoading] = useState(false)
    const [requestsByCities, setRequestsByCities] = useState([])

    async function fetchCandidatesRequestsByCity(city) {
      const response = await fetch(`/cities/${city}/regions.json`)
      const data = await response.json()
      const candidatesRequests = await data.reduce(async (acc, {name}) => {
        const response = await fetch(`/cities/${city}/regions/${name}/candidates.json`)
        const candidatesByRegions = await response.json()
        const requests = await Promise.all(candidatesByRegions.map(async (candidate) => {
          const response = await fetch(`/api/candidates/${candidate.id}/stats`)
          const {data} = await response.json()
          return data.requests
        }))
        
        const sum = requests.reduce((acc, counter) => acc + counter, 0)
        return await acc + sum
      }, 0)
      return candidatesRequests
    }

    const getRequestsByCities = async () => {
      setLoading(true)
      const response = await fetch(`/cities.json`)
      const cities = await response.json()
      const citiesRequests = await Promise.all(cities.map(async ({name}) => {
        const requests = await fetchCandidatesRequestsByCity(name)
        return { city: name, requests }
      }))
      setRequestsByCities(citiesRequests)
      setLoading(false)
    }

    useEffect(() => {
      getRequestsByCities()
    }, [])

    const hasData = !loading && requestsByCities.length > 0
    const cityWithMaxRequest = requestsByCities.reduce((acc, {city, requests}) => {
      return requests > acc.requests ? { city, requests } : acc
    }, { city: '', requests: 0 })
    const cityWithMinRequest = requestsByCities.reduce((acc, {city, requests}) => {
      return requests < acc.requests ?{ city, requests } : acc
    }, { city: '', requests: Number.MAX_SAFE_INTEGER })
  
    return (
        <div className={styles.statsContainer}>
            <section>
              <h3>지역별 질문 수</h3>
              {loading && <p>Loading...</p>}
              {hasData && requestsByCities.map(({city, requests}) => (
                <div key={city}>
                  <p>{city} : {requests}</p>
                </div>
              ))}
            </section>
            <section>
              <h3>가장 질문이 많은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMaxRequest.city} : {cityWithMaxRequest.requests}</p>}
            </section>
            <section>
              <h3>가장 질문이 적은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMinRequest.city} : {cityWithMinRequest.requests}</p>}
            </section>
        </div>
    )
}