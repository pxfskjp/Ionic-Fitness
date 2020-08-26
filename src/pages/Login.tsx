import React, { useState } from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';

const Login: React.FC = () => {


  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>        
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
        <IonItem>
            <IonLabel position = "stacked">E-mail Address</IonLabel>
            <IonInput value = {email} type = "email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>   
          </IonItem>

          <IonItem>
            <IonLabel position = "stacked" >Password</IonLabel>
            <IonInput value = {password} type = "password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>   
          </IonItem>
        </IonList>
        <IonButton expand = "block" color = "dark">Login</IonButton>
      </IonContent>
      
    </IonPage>
  )
}

export default Login;
