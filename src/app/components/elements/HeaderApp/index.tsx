import { Flex, Box } from '@chakra-ui/react'
import { logoApp, logoAppMB } from 'assets/images'
import { FC, useCallback } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ScreenUrlPaths } from 'types/ScreenUrlPath'
import { Search } from './Search'

export const HeaderApp: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const onRedirect = useCallback(() => {
    if (location.pathname.includes(ScreenUrlPaths.Root)) return null
    navigate(ScreenUrlPaths.Root)
  }, [])

  return (
    <Box flexDirection={'column'}>
      <Flex backgroundColor={'black.300'}>
        <Flex
          className={'container'}
          flexDirection={'row'}
          alignItems={'center'}
          py={'10px'}
          gap={'20px'}
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
            <Box className={'flex-1'} maxWidth={'380px'}></Box>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <div className={'container'}>s</div>
      </Flex>
    </Box>
  )
}
