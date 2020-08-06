import React, { useState } from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea, IonImg, IonProgressBar } from '@ionic/react'
import { Plugins, CameraResultType, CameraPhoto } from '@capacitor/core'
import { storage, db } from '../../firebase'
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import './NewPostModal.css'

interface Props {
    showNewPostModal: boolean
    setShowNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewPostModal: React.FC<Props> = (props: Props) => {
    const { Camera } = Plugins;



    // need username
    const [caption, setCaption] = useState<string>('')
    const [image, setImage] = useState(null)

    const [{ dataResponse, isLoading, isError, progress }, setFileData] = useFirebaseUpload();

    const handlePostUpload = () => {
        db.collection('posts').add({
            username: 'Temp Name',
            caption: caption,
            imageURL: dataResponse?.downloadUrl
        })
    }

    // const handleChange = (e: any) => {
    //     if (e.target.files[0]) {
    //         setImage(e.target.files[0])
    //         console.log(image)
    //     }
    // }

    // const handlePostUpload = () => {
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image)
    //     uploadTask.on('state_changed', (snapshot: any) => {
    //         const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
    //         setProgress(progress)
    //     },
    //         (error) => {
    //             console.log(error)
    //         },
    //         () => {
    //             storage.ref('images').child(image.name).getDownloadURL()
    //                 .then((url) => {
    //                     db.collection('posts').add({
    //                         caption: caption,
    //                         imageURL: url,
    //                         username: "Temp Name"
    //                     })
    //                 })
    //         })
    //     setProgress(0)
    //     setCaption('')
    //     setImage(null)
    // }

    return (
        <IonModal isOpen={props.showNewPostModal}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle size="small">Create New Post</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => props.setShowNewPostModal(false)}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItemGroup>
                    <IonItem>
                        <IonLabel position="stacked"><IonText>Caption</IonText></IonLabel>
                        <IonTextarea value={caption}
                            onIonChange={(e) => setCaption((e.target as HTMLInputElement).value)} />
                    </IonItem>
                    {isError && <div>ERROR: {isError.message}</div>}
                    {isLoading && progress && (
                        <IonProgressBar value={progress.value}></IonProgressBar>
                    )}
                    {/* {image !== null &&
                        <IonItem><IonImg src={image.name} /></IonItem>
                    } */}
                    <IonItem>
                        <input type="file" onChange={(e: any) => setFileData(e.target.files[0])} />
                    </IonItem>
                </IonItemGroup>
                <IonButton onClick={handlePostUpload} style={{ float: 'right', marginRight: '5px' }}>Post</IonButton>
            </IonContent>
        </IonModal>
    )
}

export default NewPostModal