import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { Show } from '../elements/Show'
import { HeaderApp } from '../elements/HeaderApp'

type Props = {
  hasHeader?: boolean
  children?: ReactNode
}

export const Layout: FC<Props> = ({ hasHeader = true, children }) => {
  return (
    <LayoutWrapper>
      <Show if={hasHeader}>
        <HeaderApp />
      </Show>
      <div className={'flex-1'}>{children || <Outlet />}</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white}}
`
