export function reducerUser(state = null, action) {
  switch (action.type) {
    case 'ADD_USER':
      return action.payload

    default:
      return state
  }
}