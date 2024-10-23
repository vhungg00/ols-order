import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import styled from '@emotion/styled'
import { User } from 'types'
import ProductList from './components/elements/ProductList'

/**
 * @returns Component Home Page
 */
export function HomePage() {
  const { t } = useTranslation()
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchUsers = useCallback(async () => {
    const usersResponse = await axios.get<User[]>('/users')
    setUsers(usersResponse.data)
  }, [])

  return (
    <Wrapper>
      <Helmet>
        <title>Home Page</title>
        <meta content="A Boilerplate application homepage" name="description" />
      </Helmet>
      <div>heelo</div>
      <ProductList />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  flex: 1;
`
