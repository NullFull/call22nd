import React from 'react'
import client from '@/utils/client'
import { useRouter } from 'next/router'
import './answer.css'
import './layout.css'


const LoadingSpinner = () => {
    return (
        <div className="loader">
            <div />
        </div>
    )
}


const Answer = () => {
    const router = useRouter()
    const query = router.query
    const [choice, setChoice] = React.useState(null)
    const [loading, setLoading] = React.useState(false)

    const response = async () => {
        if (!choice) {
            alert('동의 여부를 선택해주세요.')
            return
        }

        try {
            setLoading(true)
            await client().post(`/api/responses`, {
                token: query.token,
                choice
            })
            alert('답변이 저장되었습니다.\n답변이 홈페이지에 반영되기까지 다소 시간이 걸릴 수 있습니다.')
        } catch (e) {
            alert('오류가 발생했습니다. 다시 시도해주세요.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div style={{color: '#463E39', marginTop: '8px'}}>
            <div className="logo">
                <h3>
                    <span>제22대 국회의원 후보자에게 묻습니다</span>
                </h3>
            </div>
            <hr />
            <div className="container">
                {/* <h3>답변할 수 있는 시한이 지났습니다.</h3> */}
                <h3>강간죄 구성요건을 &apos;동의&apos;여부로 바꾸는데 동의하십니까?</h3>
                <div style={{margin: '6px 0', fontSize: '1.2rem'}}>
                    <label>
                        <input
                            type="radio"
                            value={'yes'}
                            checked={choice === 'yes'}
                            onChange={e => setChoice(e.target.value)}
                        />
                        동의합니다.
                    </label>
                </div>
                <div style={{margin: '6px 0', fontSize: '1.2rem'}}>
                    <label>
                        <input
                            type="radio"
                            value={'no'}
                            checked={choice === 'no'}
                            onChange={e => setChoice(e.target.value)}
                        />
                        동의하지 않습니다.
                    </label>
                </div>

                <div style={{marginTop: '20px'}}>
                    <button className="submit" onClick={() => response()}>저장</button>
                </div>
                {loading && <LoadingSpinner />}
            </div>
        </div>
    )
}

export default Answer;
