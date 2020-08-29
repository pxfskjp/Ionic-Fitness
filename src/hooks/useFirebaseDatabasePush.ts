import { db, firebase } from '../firebase'

const FirebaseFileDatabaseApi = (name: string, caption: string, downloadURL: any): [
    Function
] => {

    const pushPosts = () => {
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: name,
            caption: caption,
            imageURL: downloadURL
        })
    }

    return [
        pushPosts
    ]

}

export default FirebaseFileDatabaseApi