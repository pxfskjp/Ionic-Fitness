import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonList, IonItem, IonLabel, IonIcon, IonToggle, IonRadio, IonCheckbox, IonImg, IonThumbnail } from '@ionic/react';
import Item from '../components/Item';
import './Checkout.css';
import { add, remove } from 'ionicons/icons';

const Checkout: React.FC = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="store" />
                    </IonButtons>
                    <IonTitle>Checkout</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList lines="full">
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src="./assets/images/item1.jpg" />
                        </IonThumbnail>
                        <IonLabel>MUTANT ZM8+</IonLabel>
                        <IonLabel>$24.90 × 1</IonLabel>
                        <IonButtons>
                            <IonIcon slot="icon-only" icon={add} />
                            <IonIcon slot="icon-only" icon={remove} />
                        </IonButtons>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src="./assets/images/item2.jpg" />
                        </IonThumbnail>
                        <IonLabel>PHARMAFREAK TEST FREAK 2.0 180CAP</IonLabel>
                        <IonLabel>$87.90 × 1</IonLabel>
                        <IonButtons>
                            <IonIcon slot="icon-only" icon={add} />
                            <IonIcon slot="icon-only" icon={remove} />
                        </IonButtons>
                    </IonItem>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src="./assets/images/item3.jpg" />
                        </IonThumbnail>
                        <IonLabel>PHARMAFREAK TEST FREAK</IonLabel>
                        <IonLabel>$68.90 × 2</IonLabel>
                        <IonButtons>
                            <IonIcon slot="icon-only" icon={add} />
                            <IonIcon slot="icon-only" icon={remove} />
                        </IonButtons>
                    </IonItem>
                    <IonItem>
                        <IonLabel slot="start">Total</IonLabel>
                        <IonLabel slot="end">$68.90</IonLabel>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Checkout;
