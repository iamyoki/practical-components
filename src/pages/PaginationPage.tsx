import { useEffect } from 'react'
import { NumberParam, useQueryParam } from 'use-query-params'
import Layout from '../components/Layout'
import Pagination from '../components/Pagination'

const PaginationPage = () => {
  const [curPage, setCurPage] = useQueryParam('page', NumberParam)
  const initialPage = 2

  useEffect(() => {
    if (!curPage) setCurPage(initialPage, 'replace')
  }, [])

  return (
    <Layout>
      <Pagination
        totalPage={10}
        initialPage={initialPage}
        curPage={curPage}
        onChange={(index) => setCurPage(index)}
      />
    </Layout>
  )
}

export default PaginationPage
