import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput, IonText, IonItemGroup, IonItemDivider, IonIcon } from '@ionic/react'
import { arrowBack } from 'ionicons/icons';
import './ChangePasswordModal.css'

interface Props {
  showPasswordModal: boolean
  setShowPasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ChangePasswordModal: React.FC<Props> = (props: Props) => {
  return (
    <IonModal isOpen={props.showPasswordModal}>
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={() => props.setShowPasswordModal(false)} >
              <IonIcon slot="icon-only" icon={arrowBack} />
            </IonButton>
          </IonButtons>
          <IonTitle>Change Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemGroup>
          <IonItem>
            <IonLabel position="stacked"><IonText>Current Password</IonText></IonLabel>
            <IonInput type="password"></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItemGroup>
            <IonItem>
              <IonLabel position="stacked"><IonText>New Password</IonText></IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked"><IonText>Confirm Password</IonText></IonLabel>
              <IonInput type="password"></IonInput>
            </IonItem>
          </IonItemGroup>
        </IonItemGroup>
        <IonButton className="changepasswordmodal-changepassword-button" expand="block">Change Password</IonButton>
      </IonContent>
    </IonModal>
  )
}

export default ChangePasswordModal