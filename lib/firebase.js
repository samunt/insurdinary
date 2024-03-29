import admin from 'firebase-admin';

try {
    console.log('HERE================');
    admin.initializeApp({
        credential: admin.credential.cert({
            project_id: process.env.FIREBASE_PROJECT_ID,
            private_key: process.env.FIREBASE_PRIVATE_KEY,
            client_email: process.env.FIREBASE_CLIENT_EMAIL
        }),
        databaseURL: 'https://insurdinary-a02d7.firebaseio.com'
    });
} catch (error) {
    /*
     * We skip the "already exists" message which is
     * not an actual error when we're hot-reloading.
     */
    if (!/already exists/u.test(error.message)) {
        // eslint-disable-next-line no-console
        console.error('Firebase admin initialization error', error.stack);
    }
}

export default admin.firestore();
