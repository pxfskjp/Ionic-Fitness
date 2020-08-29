import React from 'react';
import { IonContent, IonCard, IonIcon, IonModal, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/react';
import { checkmarkCircle } from 'ionicons/icons';
import './Success.css';

interface Props {
    id: string;
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Success: React.FC<Props> = (props: Props) => {
    return (
        <IonModal isOpen={props.visible}>
            <IonContent>
                <IonCard id="card">
                    <IonIcon id="success" icon={checkmarkCircle} />
                    <IonCardTitle id="title">Payment Successful</IonCardTitle>
                    <IonCardSubtitle id="subtitle">Transaction ID: {props.id}</IonCardSubtitle>
                    <IonButton id="button" routerLink="/store" color="primary" expand="block" fill="solid" onClick={() => props.setVisible(false)}>Close</IonButton>
                    {/* <IonCardContent id="text">
                            <IonText>Products purchased: </IonText>
                    </IonCardContent> */}
                </IonCard>
            </IonContent>
        </IonModal>
    );
};

export default Success;
