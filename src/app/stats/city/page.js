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
        const length = candidatesByRegions.length
        const {requests: accRequests, candidates: accCandidates} = await acc
        return await { requests: accRequests + sum, candidates: accCandidates + length }
      }, ({requests: 0, candidates: 0}))
      return candidatesRequests
    }

    const getRequestsByCities = async () => {
      setLoading(true)
      const response = await fetch(`/cities.json`)
      const cities = await response.json()
      const citiesRequests = await Promise.all(cities.map(async ({name}) => {
        const requests = await fetchCandidatesRequestsByCity(name)
        return { city: name, ...requests}
      }))
      setRequestsByCities(citiesRequests)
      setLoading(false)
    }

    useEffect(() => {
      getRequestsByCities()
    }, [])

    const hasData = !loading && requestsByCities.length > 0
    const cityWithMaxRequest = requestsByCities.reduce((acc, cur) => {
      return cur.requests > acc.requests ? cur : acc
    }, { city: '', requests: Number.MIN_SAFE_INTEGER, candidates: 0 })
    const cityWithMinRequest = requestsByCities.reduce((acc, cur) => {
      return cur.requests < acc.requests ? cur : acc
    }, { city: '', requests: Number.MAX_SAFE_INTEGER, candidates: 0 })

    const cityWithMaxAverage = requestsByCities.reduce((acc, cur) => {
      return (cur.requests / cur.candidates) > (acc.requests / acc.candidates) ? cur : acc
    }, { city: '', requests: Number.MIN_SAFE_INTEGER, candidates: 0 })
    const cityWithMinAverage = requestsByCities.reduce((acc, cur) => {
      return (cur.requests / cur.candidates) < (acc.requests / acc.candidates) ? cur : acc
    }, { city: '', requests: Number.MAX_SAFE_INTEGER, candidates: 0 })

    function getAverage(requests, candidates) {
      return (requests / candidates).toFixed()
    }
  
    return (
        <div className={styles.statsContainer}>
            <section>
              <h3>지역별 질문 수</h3>
              {loading && <p>Loading...</p>}
              {hasData && requestsByCities.map(({city, requests, candidates}) => (
                <div key={city}>
                  <p>{city} : {requests} / {candidates} =&gt; 후보 한 명당 평균 {getAverage(requests, candidates)}개 </p>
                </div>
              ))}
            </section>
            <section>
              <h3>가장 많은 질문을 받은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMaxRequest.city} : {cityWithMaxRequest.requests}</p>}
            </section>
            <section>
              <h3>가장 적은 질문을 받은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMinRequest.city} : {cityWithMinRequest.requests}</p>}
            </section>
            <section>
              <h3>후보 한 명당 가장 많은 질문을 받은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMaxAverage.city} : {getAverage(cityWithMaxAverage.requests, cityWithMaxAverage.candidates)}</p>}
            </section>
            <section>
              <h3>후보 한 명당 가장 적은 질문을 받은 지역</h3>
              {loading && <p>Loading...</p>}
              {hasData && <p>{cityWithMinAverage.city} : {getAverage(cityWithMinAverage.requests, cityWithMinAverage.candidates)}</p>}
            </section>
        </div>
    )
}