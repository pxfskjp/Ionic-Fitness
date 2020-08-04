import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonItem, IonLabel, IonInput, IonText, IonItemGroup, IonItemDivider } from '@ionic/react'
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
          <IonTitle size="small">Change Password</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => props.setShowPasswordModal(false)}>Close</IonButton>
          </IonButtons>
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