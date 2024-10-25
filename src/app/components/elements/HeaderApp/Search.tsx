import { Box, Center } from '@chakra-ui/react'
import { IconSearch } from '../Icons/IconSearch'

export const Search = () => {
  return (
    <Box
      display={'flex'}
      className={'flex-1'}
      alignItems={'center'}
      width={'99%'}
      flexDirection={'row'}
      height={'42px'}
      minHeight={'42px'}
      backgroundColor={'gray.200'}
      borderRadius={'50px'}
      padding={'6px'}
      maxW={'380px'}
      __css={{
        '& input': {
          outline: 'none',
          border: 'unset',
          px: '10px',
          flex: 1,
          '&::placeholder': {
            color: 'text.200',
            fontStyle: 'italic',
          },
        },
      }}
    >
      <input name={'search'} type={'text'} placeholder="Tìm kiếm sản phẩm" />
      <Center
        h={'full'}
        cursor={'pointer'}
        w={'46px'}
        __css={{
          svg: {
            color: 'primary.100',
          },
        }}
      >
        <IconSearch />
      </Center>
    </Box>
  )
}
