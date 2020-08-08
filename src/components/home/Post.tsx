import React, { useState } from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonIcon, IonCardSubtitle, IonItem, IonImg, IonPopover } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons';
import './Post.css'
import ViewPostModal from './ViewPostModal';

interface Props {
    username: string,
    caption: string,
    imageURL: string
}

const Post: React.FC<Props> = ({ username, caption, imageURL }: Props) => {

    const [showViewPostModal, setShowViewPostModal] = useState<boolean>(false)

    return (
        <IonCard>
            <IonCardHeader style={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <IonItem>
                    <div className="post-header-container">
                        <div className="post-header-icon">
                            <IonIcon icon={personCircleOutline} size="large"></IonIcon>
                        </div>
                        <div className="post-header-name">
                            <IonCardSubtitle color="secondary">{username}</IonCardSubtitle>
                        </div>
                    </div>
                </IonItem>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle style={{ paddingTop: "10px", paddingBottom: "5px" }}>{caption}</IonCardSubtitle>
                <IonImg src={imageURL} onClick={() => setShowViewPostModal(true)} />
            </IonCardContent>

            <ViewPostModal 
                image={imageURL}
                showViewPostModal={showViewPostModal} 
                setShowViewNewPostModal={setShowViewPostModal} 
            />
        </IonCard>
    )
}

export default Post