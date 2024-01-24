import { useEffect } from 'react'
import { useBoard } from '../hooks/useBoard'
import Table from './Table'

function Tables() {
  const { tables, setTables } = useBoard()

  useEffect(() => {
    const max = 10
    const gap = 40
    const size = 80
    const translate = size + gap

    let row = -1
    let col = -1

    const newTables = Array.from({ length: 20 }, (_, index) => {
      const breakLine = (col + 1) % max === 0
      col = breakLine ? 0 : col + 1
      row = breakLine ? row + 1 : row

      return {
        id: (index + 1).toString(),
        label: `Table ${index + 1}`,
        coordinates: {
          x: col * translate,
          y: row * translate
        }
      }
    })

    setTables(newTables)
  }, [])

  if (!tables?.length) {
    return <></>
  }

  return (
    <>
      {tables.map(({ id, label, coordinates }) => (
        <Table
          key={id}
          id={id}
          label={label}
          coordinates={coordinates}
        />
      ))}
    </>
  )
}

export default Tables
