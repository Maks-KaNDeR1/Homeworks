

const initState = {
   loading: false
}



export const loadingReducer = (state = initState, action: loadingACType): typeof initState => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state, 
                loading: action.loading
            }
        }
        default: return state
    }
}

type loadingACType = {
    type: 'SET_LOADING'
    loading: boolean
}

export const loadingAC = (loading: boolean): loadingACType => ({type: 'SET_LOADING', loading}) // fix any