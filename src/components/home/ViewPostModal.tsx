import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg, IonVirtualScroll, IonItem, IonText } from '@ionic/react'

interface Props {
    post: any
    showViewPostModal: boolean
    setShowViewNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ViewPostModal: React.FC<Props> = (props: Props) => {

    return (
        <IonModal isOpen={props.showViewPostModal}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => {
                            props.setShowViewNewPostModal(false)
                        }}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonImg src={props.post.imageURL} />
                </IonItem>
                <IonItem>
                    <div>
                        <div style={{}}>
                            <IonText color='primary' style={{ fontWeight: 'bold' }}><p>{props.post.username}</p></IonText>
                        </div>
                        <div style={{}}>
                            <IonText><p>{props.post.caption}</p></IonText>
                        </div>
                    </div>
                </IonItem>
            </IonContent>
        </IonModal>
    )
}

export default ViewPostModal