import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItemDivider, IonItem, IonInput, IonCard, IonLabel, IonText } from '@ionic/react';
import './Billing.css';

const Billing: React.FC = () => {
    const [text, setText] = useState('');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Store</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                <IonText><h1>Settings</h1></IonText>
                    <IonItem>
                        <IonLabel position="floating">First Name</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Last Name</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Street</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Suburb</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">City</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Postcode</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Phone Number</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email Address</IonLabel>
                        <IonInput value={text}></IonInput>
                    </IonItem>
                </IonCard>
            </IonContent>
        </IonPage>
    );
};

export default Billing;
