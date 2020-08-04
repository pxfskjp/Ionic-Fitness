import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea } from '@ionic/react'
import './NewPostModal.css'

interface Props {
    showNewPostModal: boolean
    setShowNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewPostModal: React.FC<Props> = (props: Props) => {

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
                        <IonTextarea />
                    </IonItem>
                    <IonItem>
                        <IonButton expand="full">Add Image</IonButton>
                    </IonItem>
                </IonItemGroup>
                <IonButton style={{ float: 'right', marginRight: '5px' }}>Post</IonButton>
            </IonContent>
        </IonModal>
    )
}

export default NewPostModal