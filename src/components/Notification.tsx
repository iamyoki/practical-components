import { css } from '@emotion/react'
import { desaturate, lighten } from 'polished'
import { MdClose } from 'react-icons/md'

const Notification = () => {
  return (
    <div
      className='Notification'
      css={css`
        background: linear-gradient(
          to top,
          lavender,
          ${lighten(0.04, 'lavender')}
        );
        padding: 12px;
        min-width: 200px;
        border-radius: 8px;
        border: 1px solid lavender;
        color: ${desaturate(0.4, 'darkslateblue')};
        margin: 4px;
      `}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: 4,
            boxSizing: 'border-box',
            borderRadius: 99,
            color: 'gray',
            cursor: 'pointer',
            boxShadow: '0 4px 10px -4px rgba(0,0,0,.2)',
            width: 26,
            height: 26,
            display: 'grid',
            placeItems: 'center',
          }}
          css={css`
            transition: 0.2s;
            &:hover {
              transform: scale(1.3);
            }
          `}
        >
          <MdClose className='icon' size={14} />
        </div>
      </div>
      111
    </div>
  )
}

export default Notification
