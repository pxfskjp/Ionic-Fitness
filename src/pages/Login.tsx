import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput, IonAvatar, IonImg, IonBackButton, IonButtons } from '@ionic/react';
import './Login.css';
import firebase from 'firebase';

const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function signIn(){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
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

        <IonContent className = "tools">
            {/* <div style= {{height: '75px', width: '75px', marginLeft:'auto', marginRight: 'auto', marginTop: '75px', marginBottom:'100px'}}> */}
              <IonImg src="./assets/images/logoedited (1).png"  className = "img"/>
            {/* </div> */}
        
        {/* <IonList> */}
        <IonItem className = "inputs">
            <IonLabel position = "stacked" >E-mail Address</IonLabel>
            <IonInput value = {email} type = "email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>   
          </IonItem>

          <IonItem className = "inputs">
            <IonLabel position = "stacked" >Password</IonLabel>
            <IonInput value = {password} type = "password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>   
          </IonItem>
        {/* </IonList> */}
        <IonButton expand = "block" color = "dark" onClick = {signIn}>Login</IonButton>
      </IonContent>
  
    </IonPage>
  )
  
}

export default Login;
