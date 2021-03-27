import { css } from '@emotion/react'
import { Link, RouteComponentProps } from '@reach/router'
import Layout from '../components/Layout'
import { pages } from '../routes/config'

const HomePage = (props: RouteComponentProps) => {
  if (!pages?.length) return <h1>No Pages Found.</h1>

  return (
    <Layout>
      <div>
        {pages.map((page) => (
          <div
            key={page.path}
            css={css`
              font-size: 20px;
              cursor: pointer;
              margin: 12px;

              &:hover {
                color: slateblue;
              }
            `}
          >
            <Link
              to={page.path}
              css={css`
                color: currentColor;
              `}
            >
              {page.meta?.title}
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default HomePage
