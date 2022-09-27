export const loadStorage = () => {

   const storage = localStorage.getItem('state')

   return JSON.parse(storage)
}

export const updateStorage = (state) => {

   if (!state) {
      return undefined
   }

   const stateToByUpdated = JSON.stringify(state)

   localStorage.setItem('state', stateToByUpdated)
}