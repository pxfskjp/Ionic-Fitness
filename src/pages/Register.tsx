import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonText, IonInput, IonIcon, IonAlert, IonBackButton, IonButtons } from '@ionic/react';
import { logoFacebook, logoInstagram, logoGoogle } from 'ionicons/icons';
import { db, firebase} from '../firebase'
import { auth } from 'firebase';
import { isNull } from 'util';

const Register: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [birthday, setBirthday] = useState<string>('')
  const [facebook, setFacebook] = useState<string>('')
  const [instagram, setInstagram] = useState<string>('')
  const [google, setGoogle] = useState<string>('')
  
  const [showAlert1, setShowAlert1] = useState(false);

    async function registerNewUser() {
      console.log("heelo")
      try {
        const userAuth = await firebase.auth().createUserWithEmailAndPassword(email, password);
        db.collection('users').doc(userAuth.user?.uid).set({
          uid: userAuth.user?.uid,
          email: userAuth.user?.email,
          firstName: firstName,
          lastName: lastName,
          birthday: birthday,
          facebook: facebook,
          instagram: instagram,
          google: google,
          image: './assets/images/defaultProfilePic.png'
        })
      } catch (error){
        console.log(error.message)
      }
  }

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
        getUserData(user.uid)
        console.log(user.uid)
    }
})

function getUserData(uid: string) {
  firebase.database().ref('users/' + uid).once("value", snap => {
      console.log(snap.val())
  })
}

  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="loadpage" />
          </IonButtons>
          <IonTitle>Register</IonTitle>         
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonList>
          <IonItem>
            <IonLabel position = "stacked">First Name<IonText color ="danger">*</IonText></IonLabel>
            <IonInput value = {firstName} onIonChange={e => setFirstName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">Last Name<IonText color ="danger">*</IonText></IonLabel>
            <IonInput value = {lastName} onIonChange={e => setLastName(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">E-mail Address<IonText color ="danger">*</IonText></IonLabel>
            <IonInput value = {email} type = "email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>   
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked" >Password<IonText color ="danger">*</IonText></IonLabel>
            <IonInput value = {password} type = "password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>   
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked">Birthday<IonText color ="danger">*</IonText></IonLabel>
            <IonInput type = "date" value = {birthday} onIonChange={e => setBirthday(e.detail.value!)}></IonInput>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoFacebook}></IonIcon><IonInput value = {facebook} onIonChange={e => setFacebook(e.detail.value!)}></IonInput></IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoInstagram}></IonIcon><IonInput value = {instagram} onIonChange={e => setInstagram(e.detail.value!)}></IonInput></IonLabel>
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked"><IonIcon icon = {logoGoogle}></IonIcon><IonInput value = {google} onIonChange={e => setGoogle(e.detail.value!)}></IonInput></IonLabel>
          </IonItem>

        </IonList>
        {/* <IonButton onClick = {registerNewUser} expand = "block" color = "success">Create Account</IonButton> */}
        <IonButton onClick = {registerNewUser} expand = "block" color = "success">Create Account</IonButton>
      </IonContent>
    </IonPage>
);
};

export default Register;