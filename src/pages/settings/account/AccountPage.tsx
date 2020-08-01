import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton, IonItem, IonLabel, IonButtons } from '@ionic/react';
import Header from '../../../components/settings/account/Header';
import './AccountPage.css';
import Modal from '../../../components/settings/account/ChangePasswordModal';

const AccountPage: React.FC = () => {
  const [showPasswordModal, setShowPasswordModal] = useState(false)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <Header />
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
        <Modal showPasswordModal={showPasswordModal} setShowPasswordModal={setShowPasswordModal} />

      </IonContent>
    </IonPage>
  );
};

export default AccountPage;