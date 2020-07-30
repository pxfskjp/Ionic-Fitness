import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/react';
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
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 1</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 2</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 3</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 4</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 5</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 6</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 7</IonCardTitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  Image goes here
                  <IonCardSubtitle>$20</IonCardSubtitle>
                  <IonCardTitle>Item 8</IonCardTitle>
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
