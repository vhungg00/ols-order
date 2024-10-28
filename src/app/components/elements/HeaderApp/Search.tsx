import { Box, Center } from '@chakra-ui/react'
import { IconSearch } from '../Icons/IconSearch'

import styled from '@emotion/styled'

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
      maxW={'380px'}
      __css={{
        '& input': {
          outline: 'none',
          border: 'unset',
          paddingLeft: '16px',
          flex: 1,
          height: '100%',
          borderTopLeftRadius: '50px',
          borderBottomLeftRadius: '50px',
          '&::placeholder': {
            color: 'text.200',
            fontStyle: 'italic',
          },
        },
      }}
    >
      <InputCustom
        name={'search'}
        type={'text'}
        placeholder="Tìm kiếm sản phẩm"
      />
      <Center
        h={'full'}
        cursor={'pointer'}
        backgroundColor={'white'}
        w={'50px'}
        __css={{
          svg: {
            color: 'primary.100',
          },
        }}
        _hover={{
          svg: {
            color: 'black',
            transition: 'all .3s ease-in-out',
          },
        }}
        borderTopRightRadius={'50px'}
        borderBottomRightRadius={'50px'}
      >
        <IconSearch />
      </Center>
    </Box>
  )
}

const InputCustom = styled('input')``
