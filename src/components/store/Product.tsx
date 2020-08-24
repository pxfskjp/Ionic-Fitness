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
    const [inCart, setInCart] = useState(false)

    return (
        <IonCol size={getSize()}>
            <IonCard onClick={() => active ? setVisible(true) : setVisible(false)}>
                <IonImg src={image} />
                <IonCardContent>
                    <IonCardSubtitle>${price}</IonCardSubtitle>
                    <IonCardTitle>{name}</IonCardTitle>
                </IonCardContent>
                </IonCard>
            <IonIcon id="badge" icon={checkmarkCircle} hidden={!inCart}/>
            <ViewProduct item={{ name, price, description, image }} visible={visible} setVisible={setVisible} inCart={inCart} setInCart={setInCart} />
        </IonCol>
    );
};

function getSize() {
    let minWidth = 180
    let size = window.innerWidth / minWidth
    return (12 / Math.floor(size)).toString()
}

export default Product;
