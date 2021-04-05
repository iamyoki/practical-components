import React, { CSSProperties, useContext, useReducer } from 'react'

type Action =
  | { type: 'show'; message: string; style?: CSSProperties }
  | { type: 'clear' }
type Dispatch = (aciton: Action) => void
type State = { message: string; timestamp: number; style?: CSSProperties }
type CountProviderProps = { children: React.ReactNode }

const ToastContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

function toastReducer(state: State, action: Action): State {
  const { type } = action
  switch (action.type) {
    case 'show':
      return {
        message: action.message,
        timestamp: Date.now(),
        ...(action.style && { style: action.style }),
      }
    case 'clear':
      return { message: '', timestamp: Date.now() }
    default:
      throw new Error(`Unhandled action type: ${type}`)
  }
}

const ToastProvider = ({ children }: CountProviderProps) => {
  const [state, dispatch] = useReducer(toastReducer, {
    message: '',
    timestamp: Date.now(),
  })

  const value = { state, dispatch }

  return <ToastContext.Provider {...{ value, children }} />
}

function useToast() {
  const context = useContext(ToastContext)

  if (context === undefined)
    throw new Error('useToast must be used within a ToastProvider')

  const { state, dispatch } = context

  function show(message: string, style?: CSSProperties) {
    dispatch({ type: 'show', message, ...(style && { style }) })
  }

  function clear() {
    dispatch({ type: 'clear' })
  }

  return {
    ...state,
    show,
    clear,
  }
}

export { ToastProvider, useToast }
