import { db, firebase } from '../firebase'

const FirebaseFileDatabaseApi = (caption: string, downloadURL: any): [
    Function
] => {

    const pushPosts = () => {
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: 'Temp Name',
            caption: caption,
            imageURL: downloadURL
        })
    }

    return [
        pushPosts
    ]

}

export default FirebaseFileDatabaseApi