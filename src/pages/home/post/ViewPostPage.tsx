import React, { useContext, useEffect } from 'react'
import { IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonImg, IonItem, IonText, IonPage } from '@ionic/react'
import { PostContext } from '../../../state/PostState'
import { useHistory } from 'react-router'

const ViewPostModal: React.FC = () => {

    const {username, caption, imageURL} = useContext(PostContext)
    const history = useHistory()

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {
                            history.push('/home')
                        }}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonImg src={imageURL} />
                </IonItem>
                <IonItem>
                    <div>
                        <div style={{}}>
                            <IonText color='primary' style={{ fontWeight: 'bold' }}><p>{username}</p></IonText>
                        </div>
                        <div style={{}}>
                            <IonText><p>{caption}</p></IonText>
                        </div>
                    </div>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}

export default ViewPostModal
