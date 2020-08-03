import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonIcon, IonText, IonCardTitle, IonCardSubtitle } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons';
import './Post.css'

const Post: React.FC = () => {
    return (
        <IonCard>
            <IonCardHeader>
                <div className="post-header-container">
                    <div className="post-header-icon">
                        <IonIcon icon={personCircleOutline} size="large"></IonIcon>
                    </div>
                    <div className="post-header-name">
                        <IonCardSubtitle color="secondary">John Smith</IonCardSubtitle>
                    </div>
                </div>

            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>This is a post!</IonCardSubtitle>


            </IonCardContent>
        </IonCard>
    )
}

export default Post