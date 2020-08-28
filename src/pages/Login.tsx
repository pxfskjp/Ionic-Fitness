import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonAvatar, IonImg, IonBackButton, IonButtons } from '@ionic/react';
import './Login.css';
import firebase from 'firebase';
import { useHistory } from 'react-router';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory()

  function signIn(){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    history.push('/home');
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

        <IonContent className = "tools">
              <IonImg src="./assets/images/logoedited (1).png"  className = "img"/>
        
        <IonItem className = "inputs">
            <IonLabel position = "stacked" >E-mail Address</IonLabel>
            <IonInput value = {email} type = "email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>   
          </IonItem>

          <IonItem className = "inputs">
            <IonLabel position = "stacked" >Password</IonLabel>
            <IonInput value = {password} type = "password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>   
          </IonItem>
        <IonButton expand = "block" color = "dark" onClick = {signIn}>Login</IonButton>
      </IonContent>
  
    </IonPage>
  )
  
}

export default Login;
