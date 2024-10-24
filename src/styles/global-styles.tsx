import { Global, css } from '@emotion/react'

/**
 * GlobalStyle
 * @constructor
 */
export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        p,
        div,
        span,
        a {
          -webkit-text-size-adjust: none;
          text-size-adjust: none;
        }

        html,
        body {
          height: 100%;
          width: 100%;
          color: #444444;
          font-size: 14px;
        }

        body {
          font-family: 'Roboto', sans-serif;
          font-optical-sizing: auto;
          height: max-content;
          overscroll-behavior: none;
          overflow-x: hidden;
          overflow-y: auto;
        }

        p,
        label {
          font-family: 'Roboto', sans-serif;
          line-height: 1.5em;
        }

        input,
        select {
          font-family: 'Roboto', sans-serif;
          font-size: inherit;
        }

        .flex-1 {
          flex: 1;
        }
      `}
    />
  )
}
