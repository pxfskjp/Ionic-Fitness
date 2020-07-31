import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import './AccountPage.css';

const AccountPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="small">Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="small">Account</IonTitle>
          </IonToolbar>
        </IonHeader>


      </IonContent>
    </IonPage>
  );
};

export default AccountPage;