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

let UsernameContext = createContext({} as Post)

const UsernameContextProvider = (props: { children: React.ReactNode }) => {

    const [initialUsername, setInitialUsername] = useState('' as string)
    const [initialCaption, setInitialCaption] = useState('' as string)
    const [initialImageURL, setInitialImageURL] = useState('' as string)

    useEffect(() => {
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
                    setInitialUsername(result.value as string)
                }
            },
            (reason) => console.log("failed: " + reason)
        )
        Promise.resolve(Storage.get({ key: 'imageURL' })).then(
            (result) => {
                if (typeof result.value === 'string') {
                    setInitialUsername(result.value as string)
                }
            },
            (reason) => console.log("failed: " + reason)
        )
    }, [])

    return (
        <UsernameContext.Provider value={{
            username: initialUsername,
            caption: initialCaption,
            imageURL: initialImageURL
        }}>{props.children}</UsernameContext.Provider>
    )
}

let UsernameContextConsumer = UsernameContext.Consumer

export { UsernameContext, UsernameContextProvider, UsernameContextConsumer }