import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonInput, IonCard, IonLabel, IonCardTitle, IonButton, IonButtons, IonIcon, IonCardContent, IonProgressBar, IonToast } from '@ionic/react';
import useFirebaseDatabasePushTransaction from "../../hooks/useFirebaseDatabasePushTransaction"
import Success from '../../components/store/Success';
import { db, firebase } from '../../firebase'
import './Billing.css';
import { arrowBack } from 'ionicons/icons';

var autofilled = false

const Billing: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [streetNumber, setStreetNumber] = useState('');
    const [street, setStreet] = useState('');
    const [suburb, setSuburb] = useState('');
    const [postcode, setPostcode] = useState('');
    const [city, setCity] = useState('');

    const [paying, setPaying] = useState(false);
    const [id, setId] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [pushTransaction] = useFirebaseDatabasePushTransaction(firstName, lastName, phoneNumber, emailAddress, streetNumber, street, suburb, postcode, city)

    const handleTransactionUpload = () => {
        setId(pushTransaction())
    }

    if (!autofilled) {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                db.collection('users').doc(user.uid).get().then(doc => {
                    setFirstName(doc.get('firstName'))
                    setLastName(doc.get('lastName'))
                    setEmailAddress(doc.get('email'))
                })
                autofilled = true
            }
        });
    }

    function validInput() {
        return firstName.length > 0 &&
            lastName.length > 0 &&
            phoneNumber.length > 0 &&
            emailAddress.length > 0 &&
            streetNumber.length > 0 &&
            street.length > 0 &&
            suburb.length > 0 &&
            postcode.length > 0 &&
            city.length > 0
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/store/checkout" >
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Billing</IonTitle>
                    <IonProgressBar type="indeterminate" hidden={!paying}></IonProgressBar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardContent>
                        <IonCardTitle>Personal details</IonCardTitle>
                    </IonCardContent>
                    <IonItem>
                        <IonLabel position="floating">First Name</IonLabel>
                        <IonInput disabled={autofilled} value={firstName} onIonChange={e => setFirstName(e.detail.value!)}> </IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Last Name</IonLabel>
                        <IonInput disabled={autofilled} value={lastName} onIonChange={e => setLastName(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" >Phone Number</IonLabel>
                        <IonInput value={phoneNumber} onIonChange={e => setPhoneNumber(e.detail.value!)} type="number"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Email Address</IonLabel>
                        <IonInput disabled={autofilled} value={emailAddress} onIonChange={e => setEmailAddress(e.detail.value!)} type="email"></IonInput>
                    </IonItem>
                </IonCard>
                <IonCard>
                    <IonCardContent>
                        <IonCardTitle>Address details</IonCardTitle>
                    </IonCardContent>
                    <IonItem>
                        <IonLabel position="floating">Street Number</IonLabel>
                        <IonInput value={streetNumber} type="number" onIonChange={e => setStreetNumber(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Street</IonLabel>
                        <IonInput value={street} onIonChange={e => setStreet(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Suburb</IonLabel>
                        <IonInput value={suburb} onIonChange={e => setSuburb(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Postcode</IonLabel>
                        <IonInput value={postcode} onIonChange={e => setPostcode(e.detail.value!)} type="number"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">City</IonLabel>
                        <IonInput value={city} onIonChange={e => setCity(e.detail.value!)}></IonInput>
                    </IonItem>
                </IonCard>
                <IonButton disabled={paying} id="wide-button" color="success" expand="block" fill="solid" onClick={() => { if (validInput()) { setPaying(true); handleTransactionUpload(); setSuccess(order()); setPaying(false); } else { setError(true) } }}>Confirm</IonButton>
                <IonToast isOpen={error} color="danger" onDidDismiss={() => setError(false)} message="Please fill out all the fields" duration={2000} position="bottom" />
                <Success id={id} visible={success} setVisible={setSuccess} />
            </IonContent>
        </IonPage>
    );
};

function order() {
    localStorage.removeItem("cart")
    localStorage.removeItem("quantity")
    return true
}

export default Billing;
