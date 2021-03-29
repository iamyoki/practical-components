import { css } from '@emotion/react'
import { ReactNode } from 'react'

const IconButton = ({
  children,
  onClick = undefined,
}: {
  children?: ReactNode
  onClick?: () => void
}) => {
  return (
    <div
      className='IconButton'
      role='button'
      tabIndex={0}
      css={css`
        padding: 8px 12px;
        display: inline-flex;
        background-color: whitesmoke;
        border-radius: 99px;
        margin: 4px;
        cursor: pointer;
      `}
      onClick={onClick}
      onKeyDown={() => {}}
    >
      {children}
    </div>
  )
}

export default IconButton
