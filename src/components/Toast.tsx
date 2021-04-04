import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { useToast } from '../contexts/toast-context'

const root = document.getElementById('root') as HTMLDivElement

const Toast = () => {
  const { message, clear, timestamp } = useToast()
  const domRef = useRef<HTMLDivElement>(null)
  const portalDOMRef = useRef(document.createElement('div'))

  useEffect(() => {
    root.appendChild(portalDOMRef.current)

    // eslint-disable-next-line no-void
    return () => void root.removeChild(portalDOMRef.current)
  }, [])

  useEffect(() => {
    if (domRef.current) {
      const savedAnimation = domRef.current?.style.animation
      domRef.current.style.animation = ''
      // eslint-disable-next-line no-void
      void domRef.current.offsetHeight
      domRef.current.style.animation = savedAnimation
    }
  }, [timestamp])

  if (!message) return null

  return ReactDOM.createPortal(
    <div
      className='Toast'
      onAnimationEnd={(ev) => clear()}
      style={{
        position: 'fixed',
        bottom: '4%',
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        animation: 'toast 4s',
        animationFillMode: 'forwards',
      }}
      ref={domRef}
    >
      <div
        className='Toast'
        style={{
          background: 'rgba(0,0,0,.8)',
          color: 'white',
          padding: '10px 16px',
          borderRadius: 999,
          lineHeight: 1.5,
        }}
      >
        {message}
      </div>
    </div>,
    portalDOMRef.current
  )
}

export default Toast
