import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle } from '@ionic/react';
import './SettingsPage.css';
import { useHistory } from 'react-router';

const SettingsPage: React.FC = () => {
  const history = useHistory()

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
        <IonItem button onClick={() => history.push('/settings/account')} color="primary">
            <IonLabel>Account Settings</IonLabel>
        </IonItem>

      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;