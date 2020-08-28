import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonText, IonList, IonItem, IonLabel, IonInput, IonBackButton, IonButtons, IonThumbnail, IonProgressBar } from '@ionic/react';
import { imageOutline, logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';
import { db, firebase } from '../../firebase';
import useFirebaseUpload from "../../hooks/useFirebaseUpload";

const EditProfile: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [firstName, setFirstname] = useState<string>('')
  const [lastName, setLastname] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
  const [profilepic, setProfilepic] = useState<string>('')

  const [{ dataResponse, isLoading, progress }, setFileData] = useFirebaseUpload();

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
      });
    } else {
      console.log("No user is signed in.")
      // No user is signed in.
    }
  });

  function commitChanges() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var img = profilepic
        if (dataResponse?.downloadUrl !== undefined) {
          img = dataResponse?.downloadUrl;
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
            })
          } catch (error) {
            console.log(error.message)
          }
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
            <IonInput value={firstName}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput value={lastName}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Email Address</IonLabel>
            <IonInput value={email}></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Birthday</IonLabel>
            <IonInput value={birthday}></IonInput>
          </IonItem>
          <IonItem><IonIcon icon={logoFacebook}></IonIcon><IonInput value={facebook}></IonInput></IonItem>
          <IonItem><IonIcon icon={logoInstagram}></IonIcon><IonInput value={instagram}></IonInput></IonItem>
          <IonItem><IonIcon icon={logoGoogle}></IonIcon><IonInput value={google}></IonInput></IonItem>
        </IonList>
        <IonButton expand="block" onClick={commitChanges}>Confirm Changes</IonButton>
        <IonButton expand="block" color="danger" href="profile">Cancel</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default EditProfile;
