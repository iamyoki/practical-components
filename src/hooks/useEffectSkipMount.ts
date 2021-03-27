import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export default function useEffectSkipMount(
  callback: EffectCallback,
  dependences: DependencyList
) {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      if (callback) callback()
    } else {
      didMount.current = true
    }
  }, dependences)
}
