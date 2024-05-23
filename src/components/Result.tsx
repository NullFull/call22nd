'use client'

import React from 'react';
import client from '@/utils/client'
import './result.css'

const Response = ({member}: any) => (
    <div className="member">
        <h3 className="name">{member.name}</h3>
        <div className="affiliation">
            <p className="party">{member.party}</p>
            <p className="region">{member.city ? `${member.city.name} ${member.region.name}` : '비례대표'}</p>
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
            const { data: candidateInfo } = await client().get(`/api/candidates/${candidate.id}`)
            const { choice, id } = candidate
            return { candidate: candidateInfo, choice, id }
        }))
    }

    const electedAgrees = agrees.filter(e => e.candidate.elected)

    React.useEffect(() => {
        fetchResponses()
    }, [])

    return (
        <div>
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
            {electedAgrees.length > 0 && 
                <div>
                    <h3 className="listTitle">찬성한 후보 중 당선된 후보 {electedAgrees.length}명</h3>
                    <ul className="list">
                        {electedAgrees.map(response => (
                            <li key={`elected-${response.id}`} style={{padding: '5px 0'}}>
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
