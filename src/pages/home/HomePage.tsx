import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton, IonRefresher, IonRefresherContent, IonToast } from '@ionic/react';
import { pencilOutline, barbellOutline } from 'ionicons/icons'
import Post from '../../components/home/Post';
import NewPostModal from '../../components/home/NewPostModal';
import useFirebaseDatabase from "../../hooks/useFirebaseDatabasePull";
import { db, firebase } from '../../firebase';
import './HomePage.css';


const Home: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false)
  const [showNotification, setShowNotification] = useState<boolean>(false)
  const [{ posts }, pullPosts] = useFirebaseDatabase()

  useEffect(() => {
    pullPosts()

    // Look for changes to the firestore
    db.collection("posts").onSnapshot((snapshot) => {
      console.log(snapshot.size)
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          setShowNotification(true)
        }
      })
    })
  }, [])

  const doRefresh = (event: CustomEvent) => {
    setTimeout(() => {
      pullPosts()
      event.detail.complete();
    }, 2000);
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
            pullingIcon={barbellOutline}
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

        <IonToast
          isOpen={showNotification}
          onDidDismiss={() => setShowNotification(false)}
          message="New posts have arrived!"
          animated={true}
          duration={3000}
        />

      </IonContent>
    </IonPage>
  );
};

export default Home;
