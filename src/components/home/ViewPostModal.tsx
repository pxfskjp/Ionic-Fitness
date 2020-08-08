import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonImg } from '@ionic/react'

interface Props {
    image: string
    showViewPostModal: boolean
    setShowViewNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ViewPostModal: React.FC<Props> = (props: Props) => {

    return (
        <IonModal isOpen={props.showViewPostModal}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonTitle size="small">Create New Post</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={() => {
                            props.setShowViewNewPostModal(false)
                        }}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonImg src={props.image}/>
                
            </IonContent>
        </IonModal>
    )
}

export default ViewPostModal