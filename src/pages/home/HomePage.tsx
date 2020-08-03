import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './HomePage.css';
import Post from '../../components/home/Post';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>FitnessApp</IonTitle>
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
