import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonRefresher, IonRefresherContent } from '@ionic/react';
import { pencilOutline, barbellOutline } from 'ionicons/icons'
import Post from '../../components/home/Post';
import NewPostModal from '../../components/home/NewPostModal';
import { db } from '../../firebase';
import './HomePage.css';


const Home: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false)
  const [posts, setPosts] = useState<firebase.firestore.DocumentData[]>()

  useEffect(() => {
    pullPosts()
  }, [])

  const doRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      pullPosts()
      event.detail.complete();
    }, 2000);
  }

  const pullPosts = () => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        post: doc.data()
      })))
    })
  }

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

        <IonRefresher slot="fixed" onIonRefresh={doRefresh} pullFactor={0.5} pullMin={100} pullMax={200}>
          <IonRefresherContent
            pullingIcon={ barbellOutline }
            pullingText="Pull to refresh"
            refreshingSpinner="circles"
            refreshingText="">
          </IonRefresherContent>
        </IonRefresher>

        {posts &&
          posts.map(({ id, post }) => (
            <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL} />
          ))
        }

      </IonContent>
    </IonPage>
  );
};

export default Home;
