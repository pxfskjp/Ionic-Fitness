import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Store.css';

const Store: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Store</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Store</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
        <IonRow>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item1.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$24.90</IonCardSubtitle>
                  <IonCardTitle>MUTANT ZM8+</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item2.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$87.90</IonCardSubtitle>
                  <IonCardTitle>PHARMAFREAK TEST FREAK 2.0 180CAP</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item3.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$68.90</IonCardSubtitle>
                  <IonCardTitle>PHARMAFREAK TEST FREAK</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item4.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$49.90</IonCardSubtitle>
                  <IonCardTitle>OPTIMUM ZMA 180CAPS</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item5.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$29.90</IonCardSubtitle>
                  <IonCardTitle>OPTIMUM ZMA 90CAPS</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item6.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$99.90</IonCardSubtitle>
                  <IonCardTitle>DR KETO KETONES</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item7.png"} />
                <IonCardContent>
                  <IonCardSubtitle>$67.80</IonCardSubtitle>
                  <IonCardTitle>PHARMAFREAK ANABOLIC FREAK TEST BOOSTER</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol size="6">
              <IonCard>
              <IonImg src={"./assets/images/item8.jpg"} />
                <IonCardContent>
                  <IonCardSubtitle>$64.90</IonCardSubtitle>
                  <IonCardTitle>NUTREX T UP BLACK TEST BOOSTER</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer name="Store page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Store;
