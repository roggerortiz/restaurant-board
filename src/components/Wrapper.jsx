import { DndContext } from '@dnd-kit/core'
import PropTypes from 'prop-types'
import { useBoard } from '../hooks/useBoard'

function Wrapper({ children }) {
  const { tables, setTables } = useBoard()

  const handleDragEnd = (event) => {
    const { active, delta } = event

    const newTables = tables.map((table) => {
      if (table.id !== active.id) {
        return table
      }

      return {
        ...table,
        coordinates: {
          x: table.coordinates.x + delta.x,
          y: table.coordinates.y + delta.y
        }
      }
    })

    setTables(newTables)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='w-full h-full overflow-hidden border rounded-lg bg-white dark:bg-zinc-800 text-zinc-800 dark:text-white text-sm p-4'>
        <div className='relative w-full h-full overflow-auto light-scrollbars'>
          {children}
        </div>
      </div>
    </DndContext>
  )
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Wrapper
