import { Box } from '@chakra-ui/layout'
import { BoxProps } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React from 'react'

const LayoutWrapper = styled(Box)`
  display: grid;
  grid-template:
    'header header'
    'sidebar main';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
`

export const LayoutHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 100;
  height: 56px;
  max-height: 56px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #161616;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.3);
`

export const LayoutSideBar = styled(Box)`
  grid-area: sidebar;
  z-index: 100;
  top: 56px;
  height: calc(100vh - 56px);
  position: sticky;
`

export const LayoutMain = styled.main`
  grid-area: main;
  background: #fff;
  height: 100%;
  overflow: hidden;
`

interface ILayoutProps extends BoxProps {}

/**
 * @returns Component Layout
 */
export const Layout: React.FC<ILayoutProps> = ({
  children,
  ...props
}): JSX.Element => {
  return <LayoutWrapper {...props}>{children}</LayoutWrapper>
}
