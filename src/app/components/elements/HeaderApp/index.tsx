import { Flex, Box, List, ListItem } from '@chakra-ui/react'
import { logoApp, logoAppMB } from 'assets/images'
import { FC, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScreenUrlPaths } from 'types/ScreenUrlPath'
import { Search } from './Search'
import { IconHotline } from '../Icons/IconHotline'
import { Container } from '../Responsive/Container'
import { IconSimpleHeart } from '../Icons/IconSimpleHeart'
import { IconCard } from '../Icons/IconCard'
import { IconUser } from '../Icons/IconUser'

export const HeaderApp: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onRedirect = useCallback(() => {
    if (location.pathname.includes(ScreenUrlPaths.Root)) return null
    navigate(ScreenUrlPaths.Root)
  }, [])

  return (
    <Flex flexDirection={'column'}>
      {/* middle-header */}
      <Flex backgroundColor={'black.300'}>
        <Container>
          <Flex
            flexDirection={'row'}
            alignItems={'center'}
            py={'10px'}
            gap={'20px'}
            width={'full'}
          >
            <Box
              onClick={onRedirect}
              data-event={Boolean(onRedirect())}
              backgroundImage={{
                base: `url(${logoAppMB})`,
                md: `url(${logoApp})`,
              }}
              width={{ base: '29px', md: '207px' }}
              height={{ base: '36px', md: '55px' }}
              backgroundRepeat={'no-repeat'}
              backgroundSize={'cover'}
              cursor={'default'}
              __css={{
                '&[data-event="true"]': {
                  cursor: 'pointer',
                },
              }}
            />
            <Flex className="flex-1" justifyContent={'end'} gap={'20px'}>
              <Search />
              <Flex className={'flex-1'} maxWidth={'380px'}>
                <Flex
                  alignItems={'center'}
                  gap={'5px'}
                  height={'full'}
                  backgroundColor={'primary.100'}
                  borderRadius={'50px'}
                  justifyContent={'center'}
                  px={'12px'}
                  className={'flex-1'}
                >
                  <IconHotline />
                  <Box
                    color={'white'}
                    fontSize={'16px'}
                    lineHeight={'18px'}
                    __css={{
                      '& strong': {
                        fontWeight: 600,
                        letterSpacing: '1px',
                      },
                      '& span': {
                        fontWeight: 400,
                        '&:hover': {
                          color: 'black.200',
                          cursor: 'pointer',
                          transition: 'all .3s ease-in-out',
                        },
                      },
                    }}
                  >
                    <strong>{'Hotline:'}</strong>
                    <span> 19006778</span>
                  </Box>
                </Flex>
                <List
                  className={'flex-1'}
                  display={'flex'}
                  gap={'6px'}
                  alignItems={'center'}
                  justifyContent={'space-evenly'}
                >
                  <ListItem>
                    <IconSimpleHeart />
                  </ListItem>
                  <ListItem>
                    <IconCard />
                  </ListItem>
                  <ListItem>
                    <IconUser />
                  </ListItem>
                </List>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Flex>

      {/* sub-header */}
      <Flex>
        <Container>sub header</Container>
      </Flex>
    </Flex>
  )
}
