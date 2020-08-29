import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonLabel, IonItem, IonList, IonText, IonIcon, IonImg } from '@ionic/react';
import { logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';
import { db, firebase } from '../../firebase'
import './Register'

const Profile: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstname] = useState<string>('')
  const [lastName, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
  const [profilepic, setProfilepic] = useState<string>("./assets/images/defaultProfilePic.png")

  // const [{ dataResponse, isLoading, isError, progress }, setFileData, setDataResponse] = useFirebaseUpload();

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log("User is signed in.")
      // User is signed in
      db.collection('users').doc(user.uid).get().then(doc => {
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
          <IonTitle>Profile</IonTitle>
          <IonButtons slot="end">
            <IonButton size="small" expand="block" href="editprofile" color="dark">Edit</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonImg src={profilepic} />
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
          <IonItem><IonIcon icon={logoFacebook}></IonIcon><IonLabel>{facebook}</IonLabel></IonItem>
          <IonItem><IonIcon icon={logoInstagram}></IonIcon><IonLabel>{instagram}</IonLabel></IonItem>
          <IonItem><IonIcon icon={logoGoogle}></IonIcon><IonLabel>{google}</IonLabel></IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
