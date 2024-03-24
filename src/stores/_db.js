import admin from 'firebase-admin'

const pkey = JSON.parse(process.env.FIREBASE_PKEY)
? process.env.FIREBASE_PKEY.replace(/\\n/g, "\n")
: undefined;

const getDB = () => {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                "type": "service_account",
                "project_id": process.env.FIREBASE_PROJECT_ID,
                "private_key_id": process.env.FIREBASE_PKEY_ID,
                "private_key": pkey,
                "client_email": process.env.FIREBASE_EMAIL,
                "client_id": process.env.FIREBASE_CLIENT_ID,
                "auth_uri": "https://accounts.google.com/o/oauth2/auth",
                "token_uri": "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url": process.env.FIREBASE_CLIENT_X509_CERT_URL
            })
        })
    }

    return admin.firestore()
}


export default getDB
