import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle } from '@ionic/react';
import { Redirect } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle></IonToggle>
        </IonItem>
        <IonItem button onClick={() => <Redirect to="/account" />} color="primary">
            <IonLabel>Account Settings</IonLabel>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;