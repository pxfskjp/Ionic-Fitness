import React, { useState } from 'react';
import { IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonModal, IonButton, IonToolbar, IonButtons, IonHeader, IonIcon, IonContent, IonText, IonGrid, IonCol, IonRow } from '@ionic/react';
import './ViewProduct.css';
import { arrowBack } from 'ionicons/icons';

interface Props {
    item: any;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    inCart: boolean;
    setInCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewProduct: React.FC<Props> = (props: Props) => {
    return (
        <IonModal isOpen={props.visible}>
            <IonHeader translucent>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton onClick={() => { props.setVisible(false) }}>
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonImg src={props.item.image} />
                    <IonCardContent>
                        <IonCardSubtitle>${props.item.price}</IonCardSubtitle>
                        <IonCardTitle>{props.item.name}</IonCardTitle>
                        <IonGrid>
                            <IonRow>
                                <IonCol size="6">
                                    <IonButton color={props.inCart ? "success" : "primary" } expand="block" fill="solid" onClick={() => { props.setInCart(!props.inCart); toggleCart(props.item.name) }}>{ props.inCart ? "Added to cart" : "Buy"}</IonButton>
                                </IonCol>
                                <IonCol size="6">
                                    <IonButton color="secondary" expand="block" fill="solid" href="checkout">Checkout</IonButton>
                                </IonCol>
                            </IonRow>
                        </IonGrid>
                        <IonCardContent>
                            <IonText>{props.item.description}</IonText>
                        </IonCardContent>
                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonModal>
    );
};

function toggleCart(name: string) {
    let cart = JSON.parse(localStorage.getItem("cart") ||  '[]')
    if (!cart.includes(name)) {
        cart.push(name)
    } else {
        let i = cart.indexOf(name)
        cart.splice(i, 1)
    }
    localStorage.setItem("cart", JSON.stringify(cart))
}

export default ViewProduct;
