import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { pencilOutline } from 'ionicons/icons'
import Post from '../../components/home/Post';
import NewPostModal from '../../components/home/NewPostModal';
import { db } from '../../firebase';
import './HomePage.css';


const Home: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false)

  const [posts, setPosts] = useState<firebase.firestore.DocumentData[]>([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="homepage-header-container">
            <div className="homepage-header-name" >
              <IonTitle>FitnessApp</IonTitle>
            </div>
            <div className="homepage-header-button">
              <IonButton onClick={() => setShowNewPostModal(true)} color="light">
                <IonIcon size='default' icon={pencilOutline} />
              </IonButton>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">FitnessApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <NewPostModal showNewPostModal={showNewPostModal} setShowNewPostModal={setShowNewPostModal} />

        {
          posts.map(({ username, caption, imageURL }) => (
            <Post username={username} caption={caption} imageURL={imageURL} />
          ))
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
