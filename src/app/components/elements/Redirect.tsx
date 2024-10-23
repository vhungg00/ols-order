import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  to: string
}

export const Redirect: FC<Props> = ({ to }) => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate(to, { replace: true })
  }, [navigate, to])

  return null
}
