const getPlayerSave = async () => {
  const response = await localStorage.getItem('ppc-southpark-player')
  if (!response) return null
  return response
}
const setPlayerSave = async (player) => {
  localStorage.setItem('ppc-southpark-player', player)
}
export { getPlayerSave, setPlayerSave }
