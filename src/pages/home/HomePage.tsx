import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonButton } from '@ionic/react';
import { pencilOutline, mail } from 'ionicons/icons'
import Post from '../../components/home/Post';
import './HomePage.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <div className="homepage-header-container">
            <div className="homepage-header-name" >
              <IonTitle>FitnessApp</IonTitle>
            </div>
            <div className="homepage-header-button">
              <IonButton color="light"><IonIcon size='default' icon={pencilOutline} /></IonButton>
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
        <Post />

      </IonContent>
    </IonPage>
  );
};

export default Home;
