import { css, Interpolation, Theme } from '@emotion/react'
import { CSSProperties } from 'react'

const Layout = ({
  children,
  ...props
}: {
  children?: React.ReactNode
  style?: CSSProperties
  css?: Interpolation<Theme>
}) => {
  return (
    <div
      className='Layout'
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: inherit;
        box-sizing: border-box;
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default Layout
