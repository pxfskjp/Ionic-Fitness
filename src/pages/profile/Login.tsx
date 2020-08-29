import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonItem, IonLabel, IonInput, IonImg, IonBackButton, IonButtons, IonIcon, IonText } from '@ionic/react';
import './Login.css';
import firebase from 'firebase';
import { useHistory } from 'react-router';
import "@codetrix-studio/capacitor-google-auth";
import { db } from '../../firebase';
import { logoGoogle } from 'ionicons/icons';

var provider = new firebase.auth.GoogleAuthProvider();

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory()

  function logIn() {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
      // Handle Errors here.
      //  var errorCode = error.code;
      //  var errorMessage = error.message;
      // ...
    });
  }

  function logInWithGoogle(){
    firebase.auth().signInWithPopup(provider).then(async function(result) {
      var user = result.user;
      console.log(user)
      const userRef = db.collection('users');
      const snapshot = await userRef.where('uid', '==', user?.uid).get();
      if (snapshot.empty) {
        db.collection('users').doc(user?.uid).set({
          uid: user?.uid,
          email: user?.email,
          firstName: '',
          lastName: '',
          birthday: '',
          facebook: '',
          instagram: '',
          google: user?.displayName,
          image: './assets/images/defaultProfilePic.png'
        }).then(()=> history.push('/home'))
        return;
      }  
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="loadpage" />
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="tools">
        <IonImg src="./assets/images/logoedited (1).png" className="img" />
        <IonItem className="inputs">
          <IonLabel position="stacked" >E-mail Address</IonLabel>
          <IonInput value={email} type="email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem className="inputs">
          <IonLabel position="stacked" >Password</IonLabel>
          <IonInput value={password} type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        </IonItem>
        <IonButton expand="block" color="dark" onClick={logIn}>Login</IonButton>
        <IonText className = "or"> Or </IonText>
        <IonButton expand = "block" color = "light" onClick = {logInWithGoogle}><IonIcon icon = {logoGoogle} slot = 'start'/><IonLabel>Log in with Google</IonLabel></IonButton>
      </IonContent>
    </IonPage>
  )
}

 export default Login;
