import React from 'react'
import { IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react'
import './ChangePasswordModal.css'

interface Props {
  showPasswordModal: boolean
  setShowPasswordModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<Props> = (props: Props) => {
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
    </IonModal>
  )
}

export default Modal