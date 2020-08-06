import React, { useState } from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItemGroup, IonItem, IonLabel, IonText, IonTextarea } from '@ionic/react'
import { Plugins, CameraResultType } from '@capacitor/core'
import './NewPostModal.css'

interface Props {
    showNewPostModal: boolean
    setShowNewPostModal: React.Dispatch<React.SetStateAction<boolean>>
}

const NewPostModal: React.FC<Props> = (props: Props) => {
    const { Camera } = Plugins;

    // need username
    const [caption, setCaption] = useState<string>('')
    const [imageURL, setImageURL] = useState<string>('')
    const [progress, setProgress] = useState<number>(0)

    const getImage = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: false,
            resultType: CameraResultType.Uri
        })

        const imageLocation = image.webPath
        
    }
    
    const handlePostUpload = (e: any) => {
        
    }

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
                    <IonItem>
                        <IonButton expand="full">Add Image</IonButton>
                    </IonItem>
                </IonItemGroup>
                <IonButton onClick={handlePostUpload} style={{ float: 'right', marginRight: '5px' }}>Post</IonButton>
            </IonContent>
        </IonModal>
    )
}

export default NewPostModal