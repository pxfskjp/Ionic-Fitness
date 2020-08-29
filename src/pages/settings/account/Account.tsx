import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonButtons, IonButton, IonIcon } from '@ionic/react';
import Header from '../../../components/settings/account/Header';
import ChangePasswordModal from '../../../components/settings/account/ChangePasswordModal';
import { arrowBack } from 'ionicons/icons';

const Account: React.FC = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton routerLink="/settings">
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Account Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem button onClick={() => setShowPasswordModal(true)} color="primary">
          <IonLabel>Change Password</IonLabel>
        </IonItem>
        <ChangePasswordModal showPasswordModal={showPasswordModal} setShowPasswordModal={setShowPasswordModal} />
      </IonContent>
    </IonPage>
  );
};

export default Account;