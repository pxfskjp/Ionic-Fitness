import React, { useState, useEffect } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonLabel, IonItem, IonList, IonInput, IonText, IonGrid, IonRow, IonCol, IonIcon, IonBadge, IonMenu, IonTextarea, IonRefresher, IonRefresherContent, IonThumbnail, IonImg, IonFab, IonFabButton } from '@ionic/react';
import './Profile.css';
import { logoFacebook, logoInstagram, logoGoogle, barbellOutline, colorWand, createOutline, image, imageOutline } from 'ionicons/icons';
import { db, firebase} from '../firebase'
import { auth } from 'firebase';
import { getHeapSnapshot } from 'v8';
import './Register'
import { create } from 'domain';



const Tab2: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstname] = useState<string>('')
  const [lastName, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("User is signed in.")
        // User is signed in
        var doc = db.collection('users').doc(user.uid).get().then(doc => {
            setEmail(doc.get('email'))
            setFirstname(doc.get('firstName'))
            setLastname(doc.get('lastName'))
            setBirthday(doc.get('birthday'))
            setFacebook(doc.get('facebook'))
            setInstagram(doc.get('instagram'))
            setGoogle(doc.get('google'))
            console.log("User Credentials approved")
            console.log(email)
          });
      } else {
        console.log("No user is signed in.")
        // No user is signed in.
      }
    });

  
  console.log(email)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol><IonTitle>Profile</IonTitle></IonCol>
              <IonCol><IonButton size = "small" expand = "block" href="loadpage" color = "dark">Home</IonButton></IonCol>
              
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent>
      <IonFab vertical="top" horizontal="end" slot="fixed">
                <IonFabButton color = "dark">
                  <IonIcon icon = {imageOutline}/>
                </IonFabButton>
              </IonFab>
        <IonImg src={"./assets/images/defaultProfilePic.png"}></IonImg>
        
        <IonText></IonText>
        
        <IonList lines="full" class="ion-no-margin ion-no-padding">
        
          {/* <IonGrid>
            <IonRow>
              <IonCol>Posts<IonBadge color = "danger">1.7k</IonBadge></IonCol>
              <IonCol>Followers<IonBadge color = "danger">1.5m</IonBadge></IonCol>
              <IonCol>Following<IonBadge color = "danger">999</IonBadge></IonCol>
            </IonRow>
          </IonGrid> */}
       
          <IonItem>
            <IonLabel position="stacked">First Name <IonText color="danger"></IonText></IonLabel>
            <IonLabel>{firstName}</IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonLabel>{lastName}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email Address</IonLabel>
            <IonLabel>{email}</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Birthday</IonLabel>
            <IonLabel>{birthday}</IonLabel>
          </IonItem>
        </IonList>

        <IonText><h5>Connections</h5></IonText>
        <IonList>
          <IonItem><IonIcon icon = {logoFacebook}></IonIcon><IonLabel>{facebook}</IonLabel></IonItem>
          <IonItem><IonIcon icon = {logoInstagram}></IonIcon><IonLabel>{instagram}</IonLabel></IonItem>
          <IonItem><IonIcon icon = {logoGoogle}></IonIcon><IonLabel>{google}</IonLabel></IonItem>
        </IonList>
        
      </IonContent>
    </IonPage>
  );
};
export default Tab2;
