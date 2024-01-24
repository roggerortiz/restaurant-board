import { useBoardStore } from '../store/boardStore'

export const useBoard = () => {
  const props = useBoardStore((state) => state)
  return { ...props }
}
