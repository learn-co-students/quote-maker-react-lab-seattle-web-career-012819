export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      const newState = state.filter(quote => quote.id !== action.quoteId)
      return [...newState]
    case 'UPVOTE_QUOTE':
      let idx = state.findIndex(quote => quote.id === action.quoteId)
      if (idx > -1) {
        const copiedState = state.slice()
        const upvotedQuote = Object.assign({}, state[idx])
        upvotedQuote.votes++
        copiedState[idx] = upvotedQuote
        return copiedState
      } else {
        return state
      }
    case 'DOWNVOTE_QUOTE':
      idx = state.findIndex(quote => quote.id === action.quoteId)
      if (idx > -1) {
        const copiedState = state.slice()
        const downvotedQuote = Object.assign({}, state[idx])
        if (downvotedQuote.votes > 0) downvotedQuote.votes--
        copiedState[idx] = downvotedQuote
        return copiedState
      } else {
        return state
      }

    default:
      return state;
  }
}