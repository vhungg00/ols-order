import { Icon, IconProps } from '@chakra-ui/react'

export const IconSimpleHeart = (props: IconProps) => (
  <Icon
    fill={'none'}
    height={'20px'}
    viewBox="0 0 19 20"
    width={'19px'}
    {...props}
    style={{ marginTop: '5px' }}
  >
    <path
      clipRule="evenodd"
      d="M1.33058 9.01867C0.376711 6.04061 1.49148 2.63674 4.618 1.62953C6.26259 1.09882 8.07787 1.41173 9.44511 2.44027C10.7386 1.44018 12.6205 1.10237 14.2633 1.62953C17.3899 2.63674 18.5117 6.04061 17.5588 9.01867C16.0742 13.7391 9.44511 17.375 9.44511 17.375C9.44511 17.375 2.86494 13.7942 1.33058 9.01867Z"
      fill="transparent"
      fillRule="evenodd"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </Icon>
)
