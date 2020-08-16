import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonImg, IonCardContent, IonCardSubtitle, IonCardTitle, IonButtons, IonBackButton, IonRippleEffect, IonButton } from '@ionic/react';
import Item from '../components/Item';
import './ProductView.css';

const ProductView: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="store" />
          </IonButtons>
          <IonTitle>Product View</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard>
          <IonImg src="./assets/images/item1.jpg" />
          <IonCardContent>
            <IonCardSubtitle>$24.90</IonCardSubtitle>
            <IonCardTitle>MUTANT ZM8+</IonCardTitle>
            <IonButton expand="block" fill="solid">Buy</IonButton>
            <IonCardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mattis libero, eget tincidunt libero. Suspendisse ut orci consectetur, faucibus lacus in, suscipit libero. Aenean in arcu sit amet enim semper interdum eget at libero. Fusce ut augue ut lectus cursus tincidunt. Proin ac iaculis nulla. Praesent placerat in nibh et maximus. Vestibulum dignissim fringilla massa, eu feugiat magna tincidunt quis. Donec tincidunt in massa vitae imperdiet. In vitae venenatis metus. Proin consectetur sollicitudin lacus ac laoreet. Vivamus nec mauris varius, tempus velit et, euismod dolor. Vivamus vitae nisi imperdiet, lobortis felis in, mattis elit. Phasellus placerat facilisis felis eget tristique.</IonCardContent>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default ProductView;
