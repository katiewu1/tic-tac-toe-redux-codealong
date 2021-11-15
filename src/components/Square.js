import React from 'react'
import { useDispatch } from 'react-redux'
import { game } from 'reducers/game'
import { Player } from 'components/Player'

export const Square = ({ value, index }) => {
  const dispatch = useDispatch()

  const handleClick = () => {
    // TODO send the captureSquare action
    // dispatching this action by invoking this function called captureSquare
    // with index - tell Redux which square user has clicked on.
    // index - it's a payload, we send an object with a key of index & value of whatever number it's
    // shorthand: "index", instead of: "index: index"
    dispatch(game.actions.captureSquare({ index }))
  }

  return (
    <button
      className={value === null ? 'square clickable' : 'square'}
      type='button'
      onClick={handleClick}
    >
      <Player value={value} />
    </button>
  )
}
