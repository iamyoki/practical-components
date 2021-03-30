import { rgba, tint } from 'polished'
import { useState } from 'react'
import { animated } from 'react-spring'
import { useScroll } from 'react-use-gesture'

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0)
  const height = document.documentElement.scrollHeight

  useScroll(
    ({ direction, distance, values, xy: [, y] }) => {
      setProgress((y / (document.body.scrollHeight - window.innerHeight)) * 100)
    },
    { domTarget: window }
  )

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        width: 300,
        position: 'fixed',
        bottom: 100,
      }}
    >
      <animated.div
        className='progress-length'
        style={{
          width: '100%',
          height: 40,
          background: tint(0.6, rgba('slateblue', 0.6)),
          borderRadius: 4,
          position: 'absolute',
          // bottom: 120,
        }}
      />
      <animated.div
        className='progress-bg'
        style={{
          width: `${progress}%`,
          height: 40,
          background: 'slateblue',
          borderRadius: 4,
          position: 'absolute',
          color: 'white',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {progress.toFixed(2)}%
      </animated.div>
    </div>
  )
}

export default ScrollProgressBar
