import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'

function Table({ id, label, coordinates }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useDraggable({ id })

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{
        left: coordinates?.x ?? 0,
        top: coordinates?.y ?? 0,
        transform: CSS.Transform.toString(transform),
        transition
      }}
      className='absolute flex justify-center items-center border h-20 w-20 bg-green-800'
    >
      {label}
    </div>
  )
}

Table.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  coordinates: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  })
}

export default Table
