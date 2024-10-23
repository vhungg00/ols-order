import { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'

const slogans: string[] = [
  'Stationery lựa chọn số 1 cho bạn',
  'Stationery lựa chọn số 1 cho bạn - Hãy đến với chúng tôi',
]

export const SloganGenerator = () => {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)

      // After fade-out, change the slogan and show it again
      setTimeout(() => {
        setIndex(prevIndex => (prevIndex + 1) % slogans.length)
        setVisible(true)
      }, 500)
    }, 4000)

    // Clean up interval on component unmount
    return () => clearInterval(interval)
  }, [index])

  return (
    <Box className="block-slogan">
      <Box
        as={'span'}
        transition={'opacity 0.5s ease-in-out'}
        style={{
          opacity: visible ? 1 : 0,
        }}
      >
        {slogans[index]}
      </Box>
    </Box>
  )
}
