import React, { useState } from 'react';
import { IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonIcon } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import './Product.css';
import ViewProduct from './ViewProduct';

interface Props {
    name: string;
    price: number;
    description: string;
    image: string;
    active: boolean;
}

const Product: React.FC<Props> = ({ name, price, description, image, active }) => {
    const [visible, setVisible] = useState(false)

    return (
        <IonCol size={getSize()}>
            <IonCard onClick={() => active ? setVisible(true) : setVisible(false)}>
                <IonImg src={image} />
                <IonCardContent>
                    <IonCardSubtitle>${price}</IonCardSubtitle>
                    <IonCardTitle>{name}</IonCardTitle>
                </IonCardContent>
                </IonCard>
            <IonIcon id="badge" icon={checkmarkCircle} hidden={!getCart({ name, price, description, image })}/>
            <ViewProduct item={{ name, price, description, image }} visible={visible} setVisible={setVisible} inCart={getCart({ name, price, description, image })} />
        </IonCol>
    );
};

function getSize() {
    let minWidth = 180
    let size = window.innerWidth / minWidth
    return (12 / Math.floor(size)).toString()
}

function getCart(product: any) {
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].name === product.name) {
            return true
        }
    }
    return false
}

export default Product;
