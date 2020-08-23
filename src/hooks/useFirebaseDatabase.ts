import { db, firebase } from '../firebase'
import { useState, useEffect } from 'react';

const FirebaseFileDatabaseApi = (): [
    {
        posts: firebase.firestore.DocumentData[] | undefined
    },
    Function
] => {

    const [posts, setPosts] = useState<firebase.firestore.DocumentData[]>()

    const pullPosts = () => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data()
            })))
        })
    }

    return [
        { posts },
        pullPosts
    ]

}

export default FirebaseFileDatabaseApi