import React from 'react';
import { IonCol, IonCard, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
    price: string;
    image: string;
}


//<ExploreContainer name="Tab 1 page" />
const Item: React.FC<ContainerProps> = ({ name, price, image }) => {
    return (
        <IonCol size="6">
            <IonCard>
                <IonImg src={image} />
                <IonCardContent>
                    <IonCardSubtitle>{price}</IonCardSubtitle>
                    <IonCardTitle>{name}</IonCardTitle>
                </IonCardContent>
            </IonCard>
        </IonCol>
    );
};

export default Item;
