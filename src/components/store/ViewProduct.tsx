import React from 'react';
import { IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonModal, IonButton, IonToolbar, IonButtons, IonHeader, IonIcon, IonContent, IonText, IonGrid, IonCol, IonRow } from '@ionic/react';
import './ViewProduct.css';
import { arrowBack } from 'ionicons/icons';

interface Props {
    item: any;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    inCart: boolean;
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
                                    <IonButton routerLink="/store" color={getCart(props.item) ? "success" : "primary"} expand="block" fill="solid" onClick={() => { toggleCart(props.item); }}>{getCart(props.item) ? "Added to cart" : "Buy"}</IonButton>
                                </IonCol>
                                <IonCol size="6">
                                    <IonButton color="secondary" expand="block" fill="solid" onClick={() => { props.setVisible(false) }} routerLink="../checkout">Checkout</IonButton>
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

function getCart(product: any) {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
            return true
        }
    }
    return false
}

function toggleCart(product: any) {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    let inCart = false
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
            inCart = true
        }
    }

    if (!inCart) {
        cart.push(product)
    } else {
        let i = cart.indexOf(product)
        cart.splice(i, 1)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
}

export default ViewProduct;
export { getCart };
