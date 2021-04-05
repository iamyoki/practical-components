import { RouteComponentProps } from '@reach/router'
import { useState } from 'react'
import Layout from '../components/Layout'
import Toast from '../components/Toast'
import { useToast } from '../contexts/toast-context'

const ToastPage = (props: RouteComponentProps) => {
  const [input, setInput] = useState('🌈 Wonderful Day.')
  const { show } = useToast()

  function handleClick() {
    show(input)
  }

  function showError(message: string) {
    show(message, {
      background: 'orangered',
    })
  }

  function handleClickError() {
    showError(`Error ${input}`)
  }

  return (
    <Layout>
      <input
        type='text'
        value={input}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <button type='button' onClick={handleClick}>
        show toast
      </button>
      <br />
      <br />
      <button onClick={handleClickError} type='button'>
        show error
      </button>

      <Toast />
    </Layout>
  )
}

export default ToastPage
