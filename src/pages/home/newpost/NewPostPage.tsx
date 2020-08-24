import React, { useState } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea, IonImg, IonProgressBar, IonIcon, IonPage } from '@ionic/react'
import useFirebaseUpload from "../../../hooks/useFirebaseUpload";
import useFirebaseDatabasePush from "../../../hooks/useFirebaseDatabasePush"
import { imageOutline } from 'ionicons/icons'
import './NewPostPage.css'
import { useHistory } from 'react-router';

const NewPostPage: React.FC = () => {

    const history = useHistory()

    // need username
    const [caption, setCaption] = useState<string>('')
    const [{ dataResponse, isLoading, isError, progress }, setFileData, setDataResponse] = useFirebaseUpload();
    const [pushPosts] = useFirebaseDatabasePush(caption, dataResponse?.downloadUrl)

    const handlePostUpload = () => {
        pushPosts()
    }

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle size="small">Create New Post</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {
                            history.push('/home')
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
        </IonPage>
    )
}

export default NewPostPage