import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow } from '@ionic/react';
import Item from '../components/Item';
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
            <Item name="MUTANT ZM8+" price="$24.90" image="./assets/images/item1.jpg" />
            <Item name="PHARMAFREAK TEST FREAK 2.0 180CAP" price="$87.90" image="./assets/images/item2.jpg" />
          </IonRow>
          <IonRow>
            <Item name="PHARMAFREAK TEST FREAK" price="$68.90" image="./assets/images/item3.jpg" />
            <Item name="OPTIMUM ZMA 180CAPS" price="$49.90" image="./assets/images/item4.jpg" />
          </IonRow>
          <IonRow>
          <Item name="OPTIMUM ZMA 90CAPS" price="$29.90" image="./assets/images/item5.jpg" />
            <Item name="DR KETO KETONES" price="$99.90" image="./assets/images/item6.jpg" />
          </IonRow>
          <IonRow>
          <Item name="PHARMAFREAK ANABOLIC FREAK TEST BOOSTER" price="$67.80" image="./assets/images/item7.png" />
            <Item name="NUTREX T UP BLACK TEST BOOSTER" price="$64.90" image="./assets/images/item8.jpg" />
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer name="Store page" /> */}
      </IonContent>
    </IonPage>
  );
};

export default Store;
