import React, { useState } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea, IonImg, IonProgressBar, IonIcon, IonPage } from '@ionic/react'
import useFirebaseUpload from "../../../hooks/useFirebaseUpload";
import useFirebaseDatabasePush from "../../../hooks/useFirebaseDatabasePush"
import { imageOutline, arrowBack } from 'ionicons/icons'
import './NewPost.css'
import { useHistory } from 'react-router';
import { db } from '../../../firebase';
import firebase from 'firebase'

const NewPost: React.FC = () => {

    const history = useHistory()

    const[name, setName] = useState<string>('guest')

    // need username
    const [caption, setCaption] = useState<string>('')
    const [{ dataResponse, isLoading, isError, progress }, setFileData, setDataResponse] = useFirebaseUpload();
    const [pushPosts] = useFirebaseDatabasePush(name, caption, dataResponse?.downloadUrl)

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          // User is signed in
          db.collection('users').doc(user.uid).get().then(doc => {
            setName(doc.get('firstName'))
          })
        }
      });

    const handlePostUpload = () => {
        pushPosts();
        history.push('/home')
    }
    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {
                            history.push('/home')
                            setDataResponse(null)
                            setCaption('')
                        }} >
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Create New Post</IonTitle>
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

export default NewPost