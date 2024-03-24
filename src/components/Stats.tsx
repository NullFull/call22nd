'use client'

import React from "react";
import client from "@/utils/client"

const useStats = () => {
    const [stats, setStats] = React.useState(null)

    React.useEffect(() => {
        const fetchStats = async () => {
            const { data } = await client().get('/api/stats')
            
            setStats(data)
        }
        fetchStats()
    }, [])

    return stats
}

const Stats = () => {
    const stats = useStats();

    return (
        <p>
            현재까지 {stats ? stats.responses : 0}개의 질문과<br />
            함께하고 있습니다.
        </p>
    )
}

export default Stats;
