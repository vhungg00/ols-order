import { FC, MouseEvent, useCallback, useState } from 'react'
import { Button as ButtonCustom, ButtonProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useMobile } from 'hooks/useMobile'

type Props = {
  outline?: boolean
  link?: boolean
} & Pick<ButtonProps, Exclude<keyof ButtonProps, 'outline'>>

export const Button: FC<Props> = ({
  disabled,
  onClick,
  fontSize,
  opacity,
  borderRadius,
  ...rest
}) => {
  const { isMobile } = useMobile()
  const [loading, setLoading] = useState(false)

  const handleClick = useCallback(
    async (e: MouseEvent<HTMLButtonElement>) => {
      if (disabled) return
      setLoading(true)
      try {
        await onClick?.(e)
      } finally {
        setLoading(false)
      }
    },
    [onClick, disabled],
  )

  return (
    <ButtonStyled
      {...rest}
      borderRadius={borderRadius}
      disabled={disabled || rest.isDisabled}
      fontSize={fontSize}
      isDisabled={disabled || rest.isDisabled}
      isLoading={loading}
      isMobile={isMobile}
      opacity={opacity as number}
      outline={rest.outline as undefined}
      onClick={handleClick}
    />
  )
}

const ButtonStyled = styled(ButtonCustom, {
  shouldForwardProp: props =>
    props !== 'outline' &&
    props !== 'isDisabled' &&
    props !== 'link' &&
    props !== 'isMobile' &&
    props !== 'height' &&
    props !== 'width' &&
    props !== 'w',
})<{ link?: boolean }>`
  width: ${({ width, w }) => width || w || '100%'};
  height: ${({ height = '40px', link, h = '40px' }) =>
    link ? 'auto' : height || h};
  align-self: center;
  color: white;
  padding: 0;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`
