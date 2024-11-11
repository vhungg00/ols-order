import { useState, useEffect } from 'react'
import { FC } from 'react'
import { Box, Center, Flex } from '@chakra-ui/react'
import { Container } from '../Responsive/Container'

export const HeaderApp: FC = () => {
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setShowHeader(false)
      } else {
        setShowHeader(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <Box
    position={'sticky'}
    top={0}
    minHeight={'76px'}
    height={'76px'}
    width={'full'}
    transition={'transform 0.3s ease'}
    style={{
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
    }}
    >
      <Container height={'full'}>
        <Center>Stationary</Center>
        
      </Container>
    </Box>
  )
}
