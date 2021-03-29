import { css } from '@emotion/react'

const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div
      className='Layout'
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: inherit;
      `}
    >
      {children}
    </div>
  )
}

export default Layout
