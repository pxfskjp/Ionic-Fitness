import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonAlert } from '@ionic/react';
import './SettingsPage.css';
import { useHistory } from 'react-router';

const SettingsPage: React.FC = () => {
  const history = useHistory()
  const [showLogout, setShowlogout] = useState(false)

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
        <IonItem button onClick={() => setShowlogout(true)} color="danger">Log out</IonItem>
        <IonAlert 
          isOpen={showLogout}
          onDidDismiss={() => setShowlogout(false)}
          header="Logout"
          message="Are you sure you want to logout?"
          buttons={[
            {
              text:'Yes',
              handler: () => {}
            }, 
            {
              text:'No',
              handler: () => {}
            }]}/>

      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;