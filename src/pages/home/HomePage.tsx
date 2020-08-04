import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { pencilOutline } from 'ionicons/icons'
import Post from '../../components/home/Post';
import './HomePage.css';
import NewPostModal from '../../components/home/NewPostModal';

const Home: React.FC = () => {
  const [showNewPostModal, setShowNewPostModal] = useState<boolean>(false)

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

        <Post username="John Smith" caption="This is a caption!" imageURL="temp.url" />

      </IonContent>
    </IonPage>
  );
};

export default Home;
