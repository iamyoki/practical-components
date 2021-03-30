import Layout from '../components/Layout'
import LoremIpsum from '../components/LoremIpsum'
import ScrollProgressBar from '../components/ScrollProgressBar'

const ScrollPage = () => {
  return (
    <Layout
      style={{
        justifyContent: 'flex-start',
        padding: 20,
        boxSizing: 'content-box',
      }}
    >
      <LoremIpsum />
      <ScrollProgressBar />
    </Layout>
  )
}

export default ScrollPage
