import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { isDocumentDarkTheme, setDocumentTheme } from './helpers/theme'
import { useBoard } from './hooks/useBoard'

function Layout({ children }) {
  const { setTheme } = useBoard()

  useEffect(() => {
    const theme = isDocumentDarkTheme() ? 'dark' : 'light'
    setDocumentTheme(theme)
    setTheme(theme)
  }, [])

  return (
    <main className='w-screen h-screen p-2 justify-center items-center bg-zinc-100 dark:bg-zinc-900 overflow-auto light-scrollbars'>
      {children}
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Layout
