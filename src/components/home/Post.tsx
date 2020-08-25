import React, { useContext } from 'react'
import { IonCard, IonCardContent, IonCardHeader, IonIcon, IonCardSubtitle, IonItem, IonImg } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons';
import './Post.css'
import { savePost, PostContext } from '../../state/PostState';
import { useHistory } from 'react-router';

interface Props {
    username: string,
    caption: string,
    imageURL: string
}

const Post: React.FC<Props> = ({ username, caption, imageURL }: Props) => {

    const context = useContext(PostContext)
    const history = useHistory()

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
            <IonCardContent >
                <IonCardSubtitle style={{ paddingTop: "10px", paddingBottom: "5px" }}>{caption}</IonCardSubtitle>
                <IonImg src={imageURL} onClick={() => {
                    context.username = username
                    context.caption = caption
                    context.imageURL = imageURL
                    savePost(context.username, context.caption, context.imageURL).then(() => history.push('/home/post'))
                }} />
            </IonCardContent>
        </IonCard>
    )
}

export default Post
