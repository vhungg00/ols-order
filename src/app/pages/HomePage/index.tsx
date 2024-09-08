import { useEffect, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { messages } from 'app/pages/HomePage/messages'
import { User } from 'types'
import { ModalDialog } from 'app/components/modules/ModalDialog'
import { useModalDialog } from 'app/components/modules/ModalDialog/hook'

/**
 * @returns Component Home Page
 */
export function HomePage() {
  const { t } = useTranslation()
  const [users, setUsers] = useState<User[]>([])
  const { showModalDialog } = useModalDialog()

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
      <div>
        <Title>Hello World</Title>
        <ButtonStyled>{t(messages.routingTitle())}</ButtonStyled>
        <ButtonStyled onClick={() => showModalDialog('modal')}>Open Modal</ButtonStyled>
      </div>
      <p>{t(messages.routingDescription())}</p>
      <div>
        <h2>List user</h2>
        <div>
          {users.map((user: User) => (
            <div key={user.id}>{user.name}</div>
          ))}
        </div>
      </div>
      <ModalDialog name="modal">
        {({ closeMain, closeSub }) => {
          console.log({ closeMain, closeSub })

          return <div>modal</div>
        }}
      </ModalDialog>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`

const Title = styled.h1`
  text-align: center;
`

const ButtonStyled = styled(Button)(({ theme }) => {
  return css`
    background-color: ${theme.colors.blue['500']};
  `
})
