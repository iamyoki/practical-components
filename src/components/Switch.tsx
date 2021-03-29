import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { CSSProperties, useState } from 'react'

interface SwitchContainerProps {
  width: number
}

interface SwitchCircleProps {
  circleSize: number
}

interface SwitchProps {
  width?: number
  initialOpen?: boolean
}

const Switch = ({ width = 60, initialOpen = false }: SwitchProps) => {
  const [open, setOpen] = useState(initialOpen)

  // 圆形大小
  const circleSize = width / 2 - 8

  const circleStyle: CSSProperties = {
    transition: '.2s',
    // 打开
    ...(open && {
      left: width - circleSize - 4,
    }),
    // 关闭
    ...(!open && {
      left: 4,
      background: 'lavender',
      border: '1px solid rgba(0,0,0,.1)',
    }),
  }

  return (
    <SwitchContainer
      className='SwitchContainer'
      width={width}
      onClick={() => setOpen(!open)}
    >
      <SwitchCircle circleSize={circleSize} style={circleStyle} />
    </SwitchContainer>
  )
}

const SwitchContainer = styled.div<SwitchContainerProps>`
  background-color: white;
  border: 1px solid lavender;
  border-radius: 999px;
  width: ${({ width }) => width}px;
  height: ${({ width }) => width / 2}px;
  /* box-sizing: border-box; */
  position: relative;
  cursor: pointer;
`

const SwitchCircle = styled.div<SwitchCircleProps>`
  background-color: slateblue;
  border-radius: 50%;
  width: ${({ circleSize }) => circleSize}px;
  height: ${({ circleSize }) => circleSize}px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 4px;
`

export default Switch
