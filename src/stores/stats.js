import getDB from '@/stores/_db'
import firestore from '@google-cloud/firestore'


const statStore = {
    all: async () => {
        const query = await getDB()
            .collection('counter')
            .get()

        let stats = {}
        query.forEach(snapshot => {
            stats[snapshot.id] = snapshot.data()['count']
        })

        return stats
    },

    candidates: async candidateId => {
        const query = await getDB()
            .doc(`requests-counter/${candidateId}`)
            .get()

        const queryData = query.data()
        const count = queryData.count
        return {
            requests: count
        }
    },

    increment: async key => {
        const query = await getDB()
            .doc(`counter/${key}`)
            .update({
                count: firestore.FieldValue.increment(1)
            })
    }
}

export default statStore