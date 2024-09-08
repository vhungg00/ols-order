import { Global, css } from '@emotion/react'

/**
 * GlobalStyle
 * @constructor
 */
export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
          width: 100%;
          display: flex;
        }

        body {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        }

        body {
          position: relative;
          min-height: 100%;
          margin: 0;
          
        }

        #root {
          min-height: 100%;
          min-width: 100%;
        }

        p,
        label {
          font-family: Georgia, Times, 'Times New Roman', serif;
          line-height: 1.5em;
        }
          
        input,
        select {
          font-family: inherit;
          font-size: inherit;
        }
        .flex-1 {
          flex: 1;
        }
        .absolute-fill {
          position: absolute;
          flex: 1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .overflow-x-hidden {
          overflow-x: hidden;
        }
      `}
    />
  )
}
