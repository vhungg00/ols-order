import { Box, BoxProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

export const ExtendContend: FC<{ children: ReactNode } & BoxProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box mx={{ base: '-16px', md: '-10px' }} {...rest}>
      {children}
    </Box>
  )
}
