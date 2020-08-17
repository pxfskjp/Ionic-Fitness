import React, { useState } from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea, IonImg, IonProgressBar, IonIcon } from '@ionic/react'
import { db, firebase } from '../../firebase'
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import { imageOutline } from 'ionicons/icons'
import './NewPostModal.css'

interface Props {
    showNewPostModal: boolean
    setShowNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewPostModal: React.FC<Props> = (props: Props) => {

    // need username
    const [caption, setCaption] = useState<string>('')
    const [{ dataResponse, isLoading, isError, progress }, setFileData, setDataResponse] = useFirebaseUpload();

    const handlePostUpload = () => {
        console.log(dataResponse?.downloadUrl)
        db.collection('posts').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: 'Temp Name',
            caption: caption,
            imageURL: dataResponse?.downloadUrl
        })
    }

    return (
        <IonModal isOpen={props.showNewPostModal}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle size="small">Create New Post</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {
                            props.setShowNewPostModal(false)
                            setDataResponse(null)
                            setCaption('')
                        }}>Close</IonButton>
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
                    {dataResponse?.downloadUrl !== null &&
                        <IonItem><IonImg src={dataResponse?.downloadUrl} /></IonItem>
                    }
                    <IonItem color="primary">
                        <label htmlFor="file-upload" className="newpost-fileinput">
                            <IonIcon color="light" size="large" icon={imageOutline} />
                        </label>
                        <input id="file-upload" type="file" onChange={(e: any) => setFileData(e.target.files[0])} />
                    </IonItem>
                </IonItemGroup>
                <IonButton onClick={handlePostUpload} style={{ float: 'right', marginRight: '5px' }}>Post</IonButton>
            </IonContent>
        </IonModal>
    )
}

export default NewPostModal