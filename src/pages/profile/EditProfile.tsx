import React, { useState, useEffect } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonText, IonList, IonItem, IonLabel, IonInput, IonBackButton, IonButtons, IonThumbnail, IonProgressBar } from '@ionic/react';
import { imageOutline, logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';
import { db, firebase } from '../../firebase';
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import { getEnabledCategories } from 'trace_events';
import { useHistory } from 'react-router';

const EditProfile: React.FC = () => {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //User is signed in.
      db.collection('users').doc(user.uid).get().then(doc => {
        if(email == null) setEmail(doc.get('email')); 
        if(firstName == null) setFirstname(doc.get('firstName')); 
        if(lastName == null) setLastname(doc.get('lastName')); 
        if(birthday == null) setBirthday(doc.get('birthday')); 
        if(facebook == null) setFacebook(doc.get('facebook')); 
        if(instagram == null) setInstagram(doc.get('instagram')); 
        if(google == null) setGoogle(doc.get('google')); 
        if(profilepic == null) setProfilepic(doc.get("image")); 
      });
    } else {
      // No user is signed in.
    }
  });

  const history = useHistory()
  
  const [email, setEmail] = useState<string | null>(null)
  const [firstName, setFirstname] = useState<string | null>(null)
  const [lastName, setLastname] = useState<string | null>(null)
  const [birthday, setBirthday] = useState<string | null >(null)
  const [facebook, setFacebook] = useState<string | null >(null)
  const [instagram, setInstagram] = useState<string | null>(null)
  const [google, setGoogle] = useState<string | null>(null)
  const [profilepic, setProfilepic] = useState<string | null>(null)


  const [{ dataResponse, isLoading, progress }, setFileData] = useFirebaseUpload();

  
  

  function commitChanges() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var img = profilepic
        if (dataResponse?.downloadUrl !== undefined) {
          img = dataResponse?.downloadUrl;
        }
          try {
            db.collection('users').doc(user.uid).set({
              uid: user.uid,
              email: email,
              firstName: firstName,
              lastName: lastName,
              birthday: birthday,
              facebook: facebook,
              instagram: instagram,
              google: google,
              image: img,
            }).then(()=> history.push('/profile'))
            return;
          } catch (error) {
            console.log(error.message)
          }
      }
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="profile" />
          </IonButtons>
          <IonTitle>Edit Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="end" slot="fixed">
          <label htmlFor="file-upload">
            <IonFabButton color="dark">
              <IonIcon icon={imageOutline} />
            </IonFabButton>
          </label>
          <input id="file-upload" type="file" onChange={(e: any) => { setFileData(e.target.files[0]) }} />
        </IonFab>
        {isLoading && progress && (
          <IonProgressBar value={progress.value}></IonProgressBar>
        )}
        {dataResponse?.downloadUrl !== undefined &&
          <IonItem><IonThumbnail><img src={dataResponse?.downloadUrl} /></IonThumbnail></IonItem>
        }
        <IonList>
          <IonItem>
            <IonLabel position="stacked">First Name <IonText color="danger"></IonText></IonLabel>
            <IonInput value={firstName} onIonChange={e => setFirstname(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput value={lastName} onIonChange={e => setLastname(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email Address</IonLabel>
            <IonInput type = "email" value={email} onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Birthday</IonLabel>
            <IonInput type = "date" value={birthday} onIonChange={e => setBirthday(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem><IonIcon icon={logoFacebook}></IonIcon><IonInput value={facebook} onIonChange={e => setFacebook(e.detail.value!)}></IonInput></IonItem>
          <IonItem><IonIcon icon={logoInstagram}></IonIcon><IonInput value={instagram} onIonChange={e => setInstagram(e.detail.value!)}></IonInput></IonItem>
          <IonItem><IonIcon icon={logoGoogle}></IonIcon><IonInput value={google} onIonChange={e => setGoogle(e.detail.value!)}></IonInput></IonItem>
        </IonList>
        <IonButton expand="block" onClick={commitChanges}>Confirm Changes</IonButton>
        <IonButton expand="block" color="danger" href="profile">Cancel</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default EditProfile;
