import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonLabel, IonItem, IonList, IonInput, IonText, IonGrid, IonRow, IonCol, IonIcon, IonBadge } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol><IonTitle>Profile</IonTitle></IonCol>
              <IonCol><IonButton size = "small">Edit</IonButton></IonCol>
            </IonRow>
            
          </IonGrid>
          
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol> <IonAvatar>
              <img src="./assets/images/defaultProfilePic.png" />
            </IonAvatar></IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        
        <IonText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</IonText>
        
        <IonList lines="full" class="ion-no-margin ion-no-padding">
          
          <IonGrid>
            <IonRow>
              <IonCol>Posts<IonBadge>1.7k</IonBadge></IonCol>
              <IonCol>Followers<IonBadge>1.5m</IonBadge></IonCol>
              <IonCol>Following<IonBadge>999</IonBadge></IonCol>
            </IonRow>
          </IonGrid>
       
          <IonItem>
            <IonLabel position="stacked">First Name <IonText color="danger"></IonText></IonLabel>
            <IonLabel>Lorem Ipsum</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Last Name <IonText color="danger"></IonText></IonLabel>
            <IonLabel>Lorem Ipsum</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email Address <IonText color="danger"></IonText></IonLabel>
            <IonLabel>LoremIpsum@LoremIpsum.com</IonLabel>
          </IonItem>
        </IonList>

        <IonText><h5>Connections</h5></IonText>
        <IonList>
        <IonGrid>
          <IonItem><IonRow><IonIcon icon = {logoFacebook}></IonIcon><IonLabel>Lorem Ipsum</IonLabel></IonRow></IonItem>
          <IonItem><IonRow><IonIcon icon = {logoInstagram}></IonIcon><IonLabel>@Lorem Ipsum</IonLabel></IonRow></IonItem>
          <IonItem><IonRow><IonIcon icon = {logoGoogle}></IonIcon><IonLabel>Lorem Ipsum</IonLabel></IonRow></IonItem>
        </IonGrid>
        </IonList>
       
        
        
        

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
