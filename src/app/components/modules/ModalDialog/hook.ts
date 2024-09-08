import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { NOP } from 'utils/function'

export type TCloseMain = () => void
export type TCloseSub = () => void
export type TModalDialogAction = 'main' | 'sub' | 'abort'

type TModalDialogState = {
  isOpen: boolean
  name: string | null
}

type TModalDialogController = {
  modalDialogState: TModalDialogState
  closeMain: TCloseMain
  closeSub: TCloseSub
  unmount: () => void
  showModalDialog: (name: string) => Promise<TModalDialogAction>
}

const initializeModalDialogState: TModalDialogState = {
  isOpen: false,
  name: null,
} as const

const initialDialogController: TModalDialogController = {
  modalDialogState: initializeModalDialogState,
  closeMain: NOP,
  closeSub: NOP,
  unmount: NOP,
  showModalDialog: () =>
    new Promise<TModalDialogAction>(resolve => resolve('abort')),
}

export const ModalDialogContext = createContext<TModalDialogController>(
  initialDialogController,
)

export const useModalDialogState = (): TModalDialogController => {
  const [modalDialogState, setModalDialogState] = useState<TModalDialogState>(
    initializeModalDialogState,
  )
  const mutableModalDialogState = useRef<TModalDialogState>(modalDialogState)

  const updateModalDialogState = useCallback<
    (value: TModalDialogState) => void
  >(value => {
    setModalDialogState(value)
    mutableModalDialogState.current = value
  }, [])
  const resolveRef =
    useRef<
      (value: TModalDialogAction | PromiseLike<TModalDialogAction>) => void
    >(NOP)

  const showModalDialog = useCallback(
    (name: string) => {
      if (mutableModalDialogState.current.isOpen) {
        return new Promise<TModalDialogAction>(resolve => resolve('abort'))
      }
      updateModalDialogState({ isOpen: true, name })
      const modalDialogPromise = new Promise<TModalDialogAction>(resolve => {
        resolveRef.current = resolve
      })
      return modalDialogPromise
    },
    [updateModalDialogState],
  )

  const closeMain = useCallback(() => {
    resolveRef.current('main')
    updateModalDialogState({ isOpen: false, name: null })
  }, [updateModalDialogState])

  const closeSub = useCallback(() => {
    resolveRef.current('sub')
    updateModalDialogState({ isOpen: false, name: null })
  }, [updateModalDialogState])

  const unmount = useCallback(() => {
    if (!mutableModalDialogState.current.isOpen) return
    resolveRef.current('abort')
    updateModalDialogState({ isOpen: false, name: null })
  }, [updateModalDialogState])

  return {
    modalDialogState,
    showModalDialog,
    closeMain,
    closeSub,
    unmount,
  }
}

export const useModalDialog = (): Pick<
  TModalDialogController,
  'showModalDialog'
> => {
  const { showModalDialog } = useContext(ModalDialogContext)
  return { showModalDialog }
}

export const useModalDialogContext = (): TModalDialogController =>
  useContext(ModalDialogContext)
