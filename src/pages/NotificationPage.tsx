import { css } from '@emotion/react'
import { useState } from 'react'
import { MdAdd, MdRemove } from 'react-icons/md'
import IconButton from '../components/IconButton'
import Layout from '../components/Layout'
import Notification from '../components/Notification'

const NotificationPage = () => {
  const [count, setCount] = useState(1)

  return (
    <Layout
      style={{
        justifyContent: 'flex-start',
        paddingTop: '50%',
        boxSizing: 'border-box',
      }}
    >
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
        <Notification key={i} />
      ))}
    </Layout>
  )
}

export default NotificationPage
