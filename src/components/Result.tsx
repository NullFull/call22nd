'use client'

import React from 'react';
import client from '@/utils/client'
import './result.css'
import { useCandidates } from './Ask';

const Response = ({member}: any) => (
    <div className="member">
        <h3 className="name">{member.name}</h3>
        <div className="affiliation">
            <p className="party">{member.party}</p>
            <p className="region">{member.region === '비례' ? '비례대표' : member.region.name}</p>
        </div>
    </div>
)

const Result = () => {
    const [agrees, setAgrees] = React.useState<any[]>([])
    const [disagrees, setDisagrees] = React.useState<any[]>([])

    const fetchResponses = async () => {
        const { data: responses } = await client().get(`/api/responses`)
        const agreedCandidates = await joinPersonalInfo(responses.agreed)
        const disagreedCandidates = await joinPersonalInfo(responses.disagreed)
        setAgrees(agreedCandidates)
        setDisagrees(disagreedCandidates)
    }

    async function joinPersonalInfo(candidates: any) {
        return Promise.all(candidates.map(async (candidate: any) => {
            const candidateInfo = await fetch(`/candidates/${candidate.id}.json`).then((res) => res.json())
            const { choice, id } = candidate
            return { candidate: candidateInfo, choice, id }
        }))
    }

    React.useEffect(() => {
        fetchResponses()
    }, [])

    return (
        <div>
            {/* <div>
                <h3 className="title">찬성한 당선자 목록</h3>
                <ul className="list">
                    {agrees.filter(e => e.candidate.elected).map(response => (
                        <li key={`elected-${response.id}`} style={{padding: '5px 0'}}>
                            <Response member={response.candidate}/>
                        </li>
                    ))}
                </ul>
            </div> */}

            {agrees.length > 0 &&
                <div>
                    <h3 className="listTitle">동의한 후보 {agrees.length}명</h3>
                    <ul className="list">
                        {agrees.map(response => (
                            <li key={`agree-${response.id}`} style={{padding: '10px 0'}}>
                                <Response member={response.candidate}/>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {disagrees.length > 0 &&
                <div>
                    <h3 className="listTitle">반대한 후보 {disagrees.length}명</h3>
                    <ul className="list">
                        {disagrees.map(response => (
                            <li key={`disagree-${response.id}`} style={{padding: '5px 0'}}>
                                <Response member={response.candidate} />
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Result;
