import React from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonIcon, IonCardSubtitle, IonItem } from '@ionic/react'
import { barbellOutline, bicycleOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';
import './Post.css'

interface Props {
    username: string,
    caption: string,
    imageURL: string
}

const Post: React.FC<Props> = ({username, caption, imageURL}) => {
    return (
        <IonCard>
            <IonCardHeader style={{paddingLeft: "0px", paddingBottom: "0px"}}>
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
                <IonCardSubtitle style={{paddingTop: "10px", paddingBottom: "5px"}}>{caption}</IonCardSubtitle>
                <IonIcon icon={barbellOutline} size="large" />
                <IonIcon icon={bicycleOutline} size="large" />
                <IonIcon icon={barbellOutline} size="large" />
                <IonIcon icon={bicycleOutline} size="large" />
                <IonIcon icon={barbellOutline} size="large" />
                <IonIcon icon={bicycleOutline} size="large" />
            </IonCardContent>
        </IonCard>
    )
}

export default Post