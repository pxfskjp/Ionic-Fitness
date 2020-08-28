import React, { useState, useEffect } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonButton, IonLabel, IonItem, IonList, IonInput, IonText, IonGrid, IonRow, IonCol, IonIcon, IonBadge, IonMenu, IonTextarea, IonRefresher, IonRefresherContent, IonThumbnail, IonImg, IonFab, IonFabButton } from '@ionic/react';
import './Profile.css';
import { logoFacebook, logoInstagram, logoGoogle, barbellOutline, colorWand, createOutline, image, imageOutline, cogSharp } from 'ionicons/icons';
import { db, firebase} from '../firebase'
import { auth } from 'firebase';
import { getHeapSnapshot } from 'v8';
import './Register'
import { create } from 'domain';
import useFirebaseUpload from "../hooks/useFirebaseUpload";
import { profile } from 'console';



const Tab2: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstname] = useState<string>('')
  const [lastName, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
  const [profilepic, setProfilepic] = useState<string>("./assets/images/defaultProfilePic.png")

  // const [{ dataResponse, isLoading, isError, progress }, setFileData, setDataResponse] = useFirebaseUpload();


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
            setProfilepic(doc.get('image'))
          })
      } else {
        console.log("No user is signed in.")
      }
    });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonRow>
              <IonCol><IonTitle>Profile</IonTitle></IonCol>
              <IonCol><IonButton size = "small" expand = "block" href="editprofile" color = "dark">Edit</IonButton></IonCol>
              
              
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonImg src={profilepic}/>

        <IonList lines="full" class="ion-no-margin ion-no-padding">

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
