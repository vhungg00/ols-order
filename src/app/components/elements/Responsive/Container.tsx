import { Box, BoxProps } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

export const Container: FC<{ children: ReactNode } & BoxProps> = ({
  children,
  ...rest
}) => {
  return (
    <Box
      w={'full'}
      px={{ base: '16px', md: '10px' }}
      maxWidth={{ base: '100%', md: '720px', lg: '922px', xl: '1170px' }}
      {...rest}
      mx={'auto'}
    >
      {children}
    </Box>
  )
}
