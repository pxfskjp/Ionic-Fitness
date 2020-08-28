import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonToggle, IonAlert, IonIcon } from '@ionic/react';
import { moon } from 'ionicons/icons'
import firebase from 'firebase';
import { useHistory } from 'react-router';

const SettingsPage: React.FC = () => {
  const [showLogout, setShowlogout] = useState<boolean>(false)
  const [checked, setChecked] = useState<boolean>(false)

  const history = useHistory()
  
  const toggleTheme = () => {
    document.body.classList.toggle("dark")
    setChecked(!checked)
  }

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
          <IonIcon icon={moon} style={{marginRight: '20px'}}/>
          <IonLabel>Dark Mode</IonLabel>
          <IonToggle onIonChange={toggleTheme} checked={checked}></IonToggle>
        </IonItem>
        <IonItem button routerLink="/settings/account" color="primary">
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
              text: 'Yes',
              handler: () => { 
                firebase.auth().signOut().then(function() {
                  // Sign-out successful.
                  console.log("user signed out")
                }).catch(function(error) {
                  // An error happened.
              });
              history.push('/loadpage');
            }
          },
            {
              text: 'No',
              handler: () => { }
            }]} />

      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;