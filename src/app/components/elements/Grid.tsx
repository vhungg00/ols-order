'use client'

import styled, { CSSObject } from '@emotion/styled'
import { FC, ReactNode } from 'react'

type Props = {
  row?: string
  column?: string
  rowGap?: {
    base?: string
    sm?: string
  }
  columnGap?: string
  className?: string
  justifyContent?:
    | 'legacy'
    | 'left'
    | 'right'
    | 'normal'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-end'
    | 'flex-start'
    | 'last baseline'
    | 'initial'
    | 'inherit'
  alignItems?:
    | 'normal'
    | 'stretch'
    | 'start'
    | 'end'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'last baseline'
    | 'initial'
    | 'inherit'
  children?: ReactNode
  sx?: CSSObject
  padding?: {
    base?: string
    sm?: string
  }
}

export const Grid: FC<Props> = ({
  children,
  className,
  column,
  row,
  rowGap,
  columnGap,
  justifyContent,
  alignItems,
  sx,
  padding,
}) => {
  return (
    <CustomGrid
      alignItems={alignItems}
      className={className}
      column={column}
      columnGap={columnGap}
      justifyContent={justifyContent}
      padding={padding}
      row={row}
      rowGap={rowGap}
      sx={sx}
    >
      {children}
    </CustomGrid>
  )
}

const CustomGrid = styled('div')<Props>`
  display: grid;
  column-gap: 15px;
  align-items: stretch;
  width: 100%;
  grid-template-columns: ${props => props.column};
  grid-template-rows: ${props => props.row};
  column-gap: ${props => props.columnGap};
  row-gap: ${props => props?.rowGap?.base};

  align-items: ${props => props.alignItems};
  padding: ${props => props?.padding?.base};
  ${({ theme }) => theme.breakpoints.down('sm')} {
    row-gap: ${props => props?.rowGap?.sm};
    padding: ${props => props?.padding?.sm};
  }
`
