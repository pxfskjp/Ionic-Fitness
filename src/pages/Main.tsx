import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonGrid, IonRow, IonCol, IonTitle, IonButton, IonContent, IonImg, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
import "./Main.css"

const Main: React.FC = () => {
  return(
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonRow>
          <IonCol><IonTitle><IonImg src={"./assets/images/GJLogoWords.png"}></IonImg></IonTitle></IonCol>  
          <IonCol><IonButton size = "small" expand = "block" color = "dark" href = "login">Login</IonButton></IonCol>       
          </IonRow>
        </IonToolbar>
      </IonHeader>

      <IonContent class = 'homepage-bg'>
        <IonImg src={"./assets/images/Logoedited (1).png"} className = "logo"></IonImg>

        <IonGrid>
          <IonRow>
            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Gym Junkies and co.</IonCardSubtitle>
                <IonCardTitle>About us</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                A Gym Junkie is someone who dedicates their free time to 
                working out and make sacrifices to better themselves and 
                get absoloutely yolked.
                
                Established in 2020, we aim to provide 
                a way for fitness enthusiasts and casual gym-goers to network 
                and track progress as well as buy supplements and equipment that 
                will elevate the quality of your gym experience.
              </IonCardContent>
            </IonCard>

            <IonCard>
              <IonCardHeader>
                <IonCardSubtitle>Register</IonCardSubtitle>
              </IonCardHeader>

              <IonCardContent>
                New to Gym Junkies? Register your new account below to get involved!
                <IonButton expand = "block" color = "success" href="register">Register</IonButton>
                Already have an existing Gym Junkies account? Login below
                <IonButton expand = "block" color = "dark" href = "login">Login</IonButton>
              </IonCardContent>
            </IonCard>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
)
}

export default Main;