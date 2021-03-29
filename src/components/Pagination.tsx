import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import { ReactNode, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import useEffectSkipMount from '../hooks/useEffectSkipMount'

interface PaginationProps {
  /** 初始页面 默认第一页 1 */
  initialPage?: number
  /** 当前页 */
  curPage?: number | null
  /** 全部页数 不小于1 */
  totalPage: number
  /** 显示的页数 默认10 */
  displayPageRange?: number
  size?: 'normal' | 'large' | 'small'
  onChange?: (pageIndex: number) => void
}

const Pagination = ({
  initialPage = 1,
  curPage = undefined,
  totalPage,
  displayPageRange = 5,
  size = 'normal',
  onChange,
}: PaginationProps) => {
  // 当前页
  const [activeIndex, setActive] = useState(
    initialPage - 1 < 0 ? 0 : initialPage - 1
  )

  // 点击页码按钮
  function handleClickBtn(index: number) {
    setActive(index)
  }

  // 点击上一页
  function handleClickPrev() {
    if (activeIndex > 0) setActive((cur) => cur - 1)
  }

  // 点击下一页
  function handleClickNext() {
    if (activeIndex < totalPage - 1) setActive((cur) => cur + 1)
  }

  // 当前active
  function isActive(index: number) {
    return {
      active: index === (curPage || activeIndex) - 1,
    }
  }

  // 监听切页
  useEffectSkipMount(() => {
    if (onChange) onChange(activeIndex + 1)
  }, [activeIndex])

  return (
    <div
      className='Pagination'
      css={css`
        display: grid;
        grid-auto-flow: column;
        gap: 8px;
        grid-gap: 8px;
      `}
    >
      <PaginationBtn
        className='prev'
        size={size}
        disabled={activeIndex <= 0}
        onClick={handleClickPrev}
      >
        <MdChevronLeft />
      </PaginationBtn>

      {[...Array(totalPage)].map((item, i) => (
        <PaginationBtn
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          size={size}
          onClick={() => handleClickBtn(i)}
          {...isActive(i)}
        >
          {i + 1}
        </PaginationBtn>
      ))}

      <PaginationBtn
        className='next'
        size={size}
        disabled={activeIndex >= totalPage - 1}
        onClick={handleClickNext}
      >
        <MdChevronRight />
      </PaginationBtn>
    </div>
  )
}

interface PaginationBtnProps {
  children: ReactNode
  active?: boolean
  size?: 'normal' | 'large' | 'small'
  disabled?: boolean
}
const PaginationBtn = styled.div<PaginationBtnProps>`
  height: 40px;
  min-width: 40px;
  font-size: 14px;
  cursor: pointer;
  padding: 6px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: whitesmoke;
  color: slateblue;
  border-radius: 8px;
  user-select: none;

  &:hover {
    ${({ disabled, active }) =>
      !disabled && !active && `background-color: ${rgba('slateblue', 0.2)}`};
  }

  /* Props Dynamic */
  ${({ active }) =>
    active && {
      color: 'white',
      backgroundColor: 'mediumslateblue',
    }}

  ${({ size }) =>
    size === 'small' && {
      height: 28,
      minWidth: 28,
      fontSize: 12,
      borderRadius: 4,
    }}

  ${({ disabled }) =>
    disabled && {
      backgroundColor: '#ddd',
      opacity: 0.6,
    }}
`

export default Pagination
