import React, {
  CSSProperties,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react'
import { createPortal } from 'react-dom'
import { TCloseMain, TCloseSub, useModalDialogContext } from './hook'
import { Box, Flex } from '@chakra-ui/react'
import { addClass, removeClass } from 'utils/function'

export type TConnect = {
  name: string
  styleContent?: CSSProperties
  classNameContent?: string
  isBottom?: boolean
  height?: number | string
  paddingTop?: string | number
  overlayClickable?: boolean
  children: (params: {
    closeMain: TCloseMain
    closeSub: TCloseSub
  }) => React.ReactNode
}

const animatedActive = (isOpen?: boolean, isBottom?: boolean) => ({
  opacity: Number(isOpen),
  transform: `translateY(${isOpen ? 0 : isBottom ? 100 : -50}%)`,
})

const Connect: React.FC<TConnect> = props => {
  const {
    name,
    styleContent,
    classNameContent,
    isBottom,
    height,
    paddingTop,
    overlayClickable,
    children,
  } = props
  const refBody = useRef<HTMLDivElement>(null)
  const refBoxModal = useRef<HTMLDivElement>(null)
  const refWrapPortal = useRef<HTMLDivElement>(null)
  const { modalDialogState, closeMain, closeSub, unmount } =
    useModalDialogContext()
  useEffect(() => () => unmount(), [unmount])
  const [animated, setAnimated] = useState<CSSProperties>({
    opacity: 0,
    transform: `translateY(${isBottom ? 100 : -50}%)`,
  })
  const isOpen = modalDialogState.isOpen && modalDialogState.name === name

  const refTimeout = useRef<NodeJS.Timeout>()

  const [isShow, setIsShow] = useState<boolean>(isOpen)

  useEffect(() => {
    if (modalDialogState.isOpen) setIsShow(true)
    if (isShow) {
      const body = document.querySelector('body')
      addClass(body!, 'overflow-hidden')
      setTimeout(
        () => setAnimated(animatedActive(modalDialogState.isOpen, isBottom)),
        0,
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalDialogState.isOpen, isBottom])

  useEffect(() => {
    return () => {
      const body = document.querySelector('body')
      removeClass(body!, 'overflow-hidden')
    }
  }, [])

  useEffect(() => {
    if (!isShow) return
    setTimeout(() => {
      const body = document.querySelector('body')
      addClass(body!, 'overflow-hidden')
      setAnimated(animatedActive(modalDialogState.isOpen, isBottom))
    }, 10)
  }, [isBottom, isShow])

  const onClickOverlay = useCallback(
    (event?: MouseEvent<HTMLDivElement>) => {
      if (!overlayClickable) return
      if (event && refBody.current?.contains(event.target as Node)) return
      clearTimeout(refTimeout.current)
      setAnimated(animatedActive(false, isBottom))
      // refTimeout.current = setTimeout(() => onCloseModal?.(), 300)
    },
    [isBottom, overlayClickable],
  )

  useEffect(() => {
    if (!refWrapPortal.current) return
    clearTimeout(refTimeout.current)
    if (isOpen) {
      refWrapPortal.current.style.display = 'flex'
    }
  }, [isOpen, isShow, onClickOverlay])

  if (!isShow) return

  return createPortal(
    <Box
      ref={refWrapPortal}
      className="modal-ols-order"
      display={'none'}
      height={0}
      left={0}
      position={'absolute'}
      width={0}
    >
      <Box
        height={'100dvh'}
        position={'absolute'}
        width={'100dvw'}
        onClick={onClickOverlay}
      ></Box>
    </Box>,
    document.querySelector('body')!,
  )
}

export const ModalDialog = memo(Connect)
