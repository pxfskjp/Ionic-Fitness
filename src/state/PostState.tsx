import React from 'react'
import { createContext, useState, useEffect } from 'react'
import { Plugins } from '@capacitor/core'

export interface Post {
    username: string,
    caption: string,
    imageURL: string
}

const { Storage } = Plugins

export const savePost = async (username: string, caption: string, imageURL: string) => {
    await Storage.set({
        key: 'username',
        value: username
    })
    await Storage.set({
        key: 'caption',
        value: caption
    })
    await Storage.set({
        key: 'imageURL',
        value: imageURL
    })
}

let PostContext = createContext({} as Post)

const PostContextProvider = (props: { children: React.ReactNode }) => {

    const [initialUsername, setInitialUsername] = useState('' as string)
    const [initialCaption, setInitialCaption] = useState('' as string)
    const [initialImageURL, setInitialImageURL] = useState('' as string)

    useEffect(() => {
        console.log('hello')
        Promise.resolve(Storage.get({ key: 'username' })).then(
            (result) => {
                if (typeof result.value === 'string') {
                    setInitialUsername(result.value as string)
                }
            },
            (reason) => console.log("failed: " + reason)
        )
        Promise.resolve(Storage.get({ key: 'caption' })).then(
            (result) => {
                if (typeof result.value === 'string') {
                    setInitialCaption(result.value as string)
                }
            },
            (reason) => console.log("failed: " + reason)
        )
        Promise.resolve(Storage.get({ key: 'imageURL' })).then(
            (result) => {
                if (typeof result.value === 'string') {
                    setInitialImageURL(result.value as string)
                    console.log(initialImageURL)
                }
            },
            (reason) => console.log("failed: " + reason)
        )
    }, [])

    return (
        <PostContext.Provider value={{
            username: initialUsername,
            caption: initialCaption,
            imageURL: initialImageURL
        }}>{props.children}</PostContext.Provider>
    )
}

let PostContextConsumer = PostContext.Consumer

export { PostContext, PostContextProvider, PostContextConsumer }