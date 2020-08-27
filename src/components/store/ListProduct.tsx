import React, { useState } from 'react';
import { IonItem, IonThumbnail, IonLabel, IonButtons, IonImg, IonIcon, IonButton, IonActionSheet } from '@ionic/react';
import { add, remove } from 'ionicons/icons';
import './ListProduct.css';

interface Props {
    name: string;
    price: number;
    image: string;
    render: boolean;
    setRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListProduct: React.FC<Props> = (props: Props) => {
    const [amount, setAmount] = useState(getAmount(props.name))
    const [showActionSheet, setShowActionSheet] = useState(false)

    function changeAmount(name: string, change: number) {
        let amount = getAmount(name)
        let quantity = JSON.parse(localStorage.getItem("quantity") || '[]')
        let item = { name: name, amount: amount }
        let i = quantity.indexOf(item)
        quantity.splice(i, 1)
        amount += change
        if (amount === 0) {
            setShowActionSheet(true)
        } else {
            item = { name: name, amount: amount }
            setAmount(amount)
            quantity.push(item)
            localStorage.setItem("quantity", JSON.stringify(quantity))
            props.setRender(true)
        }
    }

    function removeCart(name: string) {
        let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    
        let i = cart.find((item: any) => item.name === name)
        cart.splice(i, 1)
    
        localStorage.setItem("cart", JSON.stringify(cart))
        props.setRender(true)
    }

    return (
        <IonItem>
            <IonActionSheet
                header={`Remove '${props.name}' from cart?`}
                isOpen={showActionSheet}
                onDidDismiss={() => { setShowActionSheet(false) }}
                buttons={[{
                    text: 'Confirm',
                    handler: () => {
                        removeCart(props.name)
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }]}
            >
            </IonActionSheet>
            <IonThumbnail slot="start">
                <IonImg src={props.image} />
            </IonThumbnail>
            <IonLabel>{props.name}</IonLabel>
            <IonLabel>${props.price} × {amount}</IonLabel>
            <IonButtons>
                <IonButton disabled={amount >= 10} onClick={() => changeAmount(props.name, 1)} >
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>
                <IonButton disabled={amount <= 0} onClick={() => changeAmount(props.name, -1)} >
                    <IonIcon slot="icon-only" icon={remove} />
                </IonButton>
            </IonButtons>
        </IonItem>
    );
};

function getAmount(name: string) {
    let quantity = JSON.parse(localStorage.getItem("quantity") || '[]')
    let amount = -1
    for (let i = 0; i < quantity.length; i++) {
        if (quantity[i].name === name) {
            amount = quantity[i].amount
        }
    }

    let item;

    if (amount === -1) {
        amount = 1
    } else {
        item = { name: name, amount: amount }
        let i = quantity.indexOf(item)
        quantity.splice(i, 1)
    }
    item = { name: name, amount: amount }
    quantity.push(item)

    localStorage.setItem("quantity", JSON.stringify(quantity))
    return amount
}

export default ListProduct;
