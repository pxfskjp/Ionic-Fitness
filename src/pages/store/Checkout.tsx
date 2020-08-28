import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonLabel, IonIcon, IonToast, IonButton } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';
import { PayPal, PayPalConfiguration, PayPalPayment } from '@ionic-native/paypal';
import ListProduct, { getAmount } from '../../components/store/ListProduct';
import GenericContainer from '../../components/GenericContainer';

const Checkout: React.FC = () => {
    const [error, setError] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        setRender(false)
    })

    function pay(total: number) {
        PayPal.init({
            PayPalEnvironmentProduction: '',
            PayPalEnvironmentSandbox: 'EE4yfDgtUHDngiABQwZ68uh-RqFGIUXf9XbpvJ14sY74ImouHo6ftXjkG6-_1iwI-pI52grW9ySaX4Hd'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            PayPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
                // Only needed if you get an "Internal Service Error" after PayPal login!
                // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new PayPalPayment(total.toString(), 'NZD', 'Purchase from FitnessApp', 'sale');
                PayPal.renderSinglePaymentUI(payment).then((res) => {
                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   "client": {
                    //     "environment": "sandbox",
                    //     "product_name": "PayPal iOS SDK",
                    //     "paypal_sdk_version": "2.16.0",
                    //     "platform": "iOS"
                    //   },
                    //   "response_type": "payment",
                    //   "response": {
                    //     "id": "PAY-1AB23456CD789012EF34GHIJ",
                    //     "state": "approved",
                    //     "create_time": "2016-10-03T13:33:33Z",
                    //     "intent": "sale"
                    //   }
                    // }
                }, () => {
                    // Error or render dialog closed without being successful
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
            setError(true);
        });
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton routerLink="/store" >
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Checkout</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonToast isOpen={error} color="danger" onDidDismiss={() => setError(false)} message="PayPal is not supported for web browsers" duration={2000} position="bottom" />
            <IonContent>
                {displayCart(render, setRender, pay)}
            </IonContent>
        </IonPage>
    );
};

function displayCart(render: any, setRender: any, pay: any) {
    let total = 0;

    if (JSON.parse(localStorage.getItem("cart") || '[]').length > 0) {
        return (
            <div>
            <IonList lines="full">
                {
                    JSON.parse(localStorage.getItem("cart") || '[]') &&
                    JSON.parse(localStorage.getItem("cart") || '[]').map((item: any) => {
                        total += (item.price * getAmount(item.name))
                        return <ListProduct key={Math.random()} name={item.name} price={item.price} image={item.image} render={render} setRender={setRender} />;
                    })
                }
                <IonItem>
                    <IonLabel slot="start">Total</IonLabel>
                    <IonLabel slot="end">${Math.round(total * 100) / 100}</IonLabel>
                </IonItem>
            </IonList>
            <IonButton color="primary" expand="block" fill="solid" onClick={() => pay(total)}>Pay with PayPal</IonButton>
            </div>
        );
    } else {
        let name = <strong>Whoops, your cart is empty!</strong>
        let information = <p>Add a product from the store to get started</p>
        return <GenericContainer name={name} information={information} />
    }
}

export default Checkout;
