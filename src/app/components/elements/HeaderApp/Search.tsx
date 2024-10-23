import { Box } from '@chakra-ui/react'
import { IconSearch } from '../Icons/IconSearch'

export const Search = () => {
  return (
    <Box
      className={'flex-1'}
      width={'99%'}
      flexDirection={'row'}
      height={'42px'}
      minHeight={'42px'}
      backgroundColor={'white'}
      borderRadius={'50px'}
      padding={'6px'}
      maxW={'380px'}
      __css={{
        '& input': {
          flex: 1,
          outline: 'none',
          border: 'unset',
          px: '10px',
        },
      }}
    >
      <input name={'search'} type={'text'} placeholder="Tìm kiếm sản phẩm" />
      <IconSearch />
    </Box>
  )
}
