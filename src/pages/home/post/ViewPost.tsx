import React, { useContext } from 'react'
import { IonHeader, IonToolbar, IonButtons, IonButton, IonContent, IonImg, IonItem, IonText, IonPage } from '@ionic/react'
import { PostContext } from '../../../state/PostState'
import { useHistory } from 'react-router'

const ViewPostModal: React.FC = () => {

    const context = useContext(PostContext)
    const history = useHistory()

    return (
        <IonPage>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {
                            history.push('/home')
                            context.imageURL = ''
                        }}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonImg src={context.imageURL} />
                </IonItem>
                <IonItem>
                    <div>
                        <div style={{}}>
                            <IonText color='primary' style={{ fontWeight: 'bold' }}><p>{context.username}</p></IonText>
                        </div>
                        <div style={{}}>
                            <IonText><p>{context.caption}</p></IonText>
                        </div>
                    </div>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}

export default ViewPostModal
