'use client'

import React from 'react';
import client from '@/utils/client'
import './result.css'

const Response = ({member}: any) => (
    <div className="member">
        <h3 className="name">{member.name}</h3>
        <p className="party">{member.party}</p>
        <p className="region">{member.region === '비례' ? '비례대표' : member.region.name}</p>
    </div>
)

const Result = () => {
    const [agrees, setAgrees] = React.useState<any[]>([])
    const [disagrees, setDisagrees] = React.useState<any[]>([])

    React.useEffect(() => {
        const fetchResponses = async () => {
            const { data } = await client().get(`/api/responses`)

            setAgrees(data.agreed)
            setDisagrees(data.disagreed)
        }
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
                    <h3 className="listTitle">전체 찬성한 후보 목록</h3>
                    <ul className="list">
                        {agrees.map(response => (
                            <li key={`agree-${response.id}`} style={{padding: '5px 0'}}>
                                <Response member={response.candidate}/>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {disagrees.length > 0 &&
                <div>
                    <h3 className="listTitle">반대한 후보 목록</h3>
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
