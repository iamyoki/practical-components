import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const PaginationPage = () => {
  return (
    <Layout>
      <Pagination totalPage={10} initialPage={3} />
    </Layout>
  )
}

export default PaginationPage
