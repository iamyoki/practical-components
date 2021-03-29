import { css } from '@emotion/react'
import { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import { CSSTransition } from 'react-transition-group'
import IconButton from '../components/IconButton'
import Layout from '../components/Layout'
import Notification from '../components/Notification'

const NotificationPage = () => {
  const [count, setCount] = useState(1)

  return (
    <Layout>
      <div>
        <IconButton onClick={() => setCount((count > 0 && count - 1) || 0)}>
          <MdRemove />
        </IconButton>
        <IconButton onClick={() => setCount(count + 1)}>
          <MdAdd />
        </IconButton>
      </div>

      {[...Array(count)].map((item, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CSSTransition key={i} in={false} timeout={200} classNames='fade-notif'>
          <div
            className='fade-notif'
            css={css`
              .fade-notif-enter {
                opacity: 0;
              }
              .fade-notif-enter-active {
                opacity: 1;
                transition: opacity 200ms;
              }
              .fade-notif-exit {
                opacity: 1;
              }
              .fade-notif-exit-active {
                opacity: 0;
                transition: opacity 200ms;
              }
            `}
          >
            <Notification />
          </div>
        </CSSTransition>
      ))}
    </Layout>
  )
}

export default NotificationPage
