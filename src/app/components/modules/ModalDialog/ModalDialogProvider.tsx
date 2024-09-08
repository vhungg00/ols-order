import React from 'react'
import { ModalDialogContext, useModalDialogState } from './hook'

export const ModalDialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { modalDialogState, showModalDialog, closeMain, closeSub, unmount } =
    useModalDialogState()

  return (
    <ModalDialogContext.Provider
      value={{
        modalDialogState,
        showModalDialog,
        closeMain,
        closeSub,
        unmount,
      }}
    >
      {children}
    </ModalDialogContext.Provider>
  )
}
