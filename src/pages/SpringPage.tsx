import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import Layout from '../components/Layout'

const SpringPage = () => {
  const { number } = useSpring({ number: 1, from: { number: 0 } })

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ active, movement: [mx, my] }) => {
    set({ x: active ? mx : 0, y: active ? my : 0 })
  })

  return (
    <Layout>
      <animated.div
        {...bind()}
        style={{
          x,
          y,
          touchAction: 'none',
          width: 40,
          height: 40,
          background: 'royalblue',
        }}
      />
      <animated.div>{number.to((num) => num.toFixed(2))}</animated.div>
      <button type='button' onClick={() => number.reset()}>
        trigger
      </button>
    </Layout>
  )
}

export default SpringPage
