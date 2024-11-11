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
      maxWidth={{ base: '100%', md: '600px', xl: '1170px' }}
      mx={'auto'}
      {...rest}
    >
      {children}
    </Box>
  )
}
