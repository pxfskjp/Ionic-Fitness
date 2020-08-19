import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonText, IonInput, IonIcon } from '@ionic/react';
import { logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';


const Register: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonCol><IonTitle>Register</IonTitle></IonCol>         
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position = "stacked">First Name<IonText color ="danger">*</IonText></IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">Last Name<IonText color ="danger">*</IonText></IonLabel>
            <IonInput></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">E-mail Address<IonText color ="danger">*</IonText></IonLabel>
            <IonInput type = "email"></IonInput>       
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked" >Password<IonText color ="danger">*</IonText></IonLabel>
            <IonInput type = "password"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">Birthday<IonText color ="danger">*</IonText></IonLabel>
            <IonInput type = "date"></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoFacebook}></IonIcon><IonInput></IonInput></IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoInstagram}></IonIcon><IonInput></IonInput></IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoGoogle}></IonIcon><IonInput></IonInput></IonLabel>
          </IonItem>

        </IonList>
        <IonButton expand = "block">Create Account</IonButton>
      </IonContent>
    </IonPage>
);
};

export default Register;