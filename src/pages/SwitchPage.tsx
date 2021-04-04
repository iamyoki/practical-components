import { ChangeEvent, useState } from 'react'
import Layout from '../components/Layout'
import Switch from '../components/Switch'

const SwitchPage = () => {
  const [width, setWidth] = useState(60)

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    setWidth(+ev.target.value)
  }

  return (
    <Layout>
      <input
        type='number'
        style={{ marginBottom: 12 }}
        value={width}
        onChange={handleChange}
      />
      <Switch width={width} />
    </Layout>
  )
}

export default SwitchPage
