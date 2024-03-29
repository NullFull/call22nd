import getDB from '@/stores/_db'
import statsStore from '@/stores/stats'
import firestore from '@google-cloud/firestore'


export default {
    create: async (candidateId, content) => {
        if (!content) {
            content = '후보님의 생각이 궁금합니다.'
        }

        const db = getDB()

        const created = await db.collection('requests').add({
            candidate: candidateId,
            content: content,
            created: firestore.FieldValue.serverTimestamp(),
        })

        await statsStore.increment('requests')

        const exists = await db.collection('requests')
            .where('candidate', '==', candidateId)
            .limit(1)
            .get()

        if (!exists.docs.length < 1) {
            await statsStore.increment('targets')
        }

        await getDB()
            .doc(`requests-counter/${candidateId}`)
            .set({
                count: firestore.FieldValue.increment(1)
            }, {
                merge: true
            })

        return created.id
    }
}
