export const search = (searchTerm) => {
  return {
    type: 'SEARCH',
    payload: searchTerm
  }
}
