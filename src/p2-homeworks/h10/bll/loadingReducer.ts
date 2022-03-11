
export type initStateType = typeof initState

const initState = {
   loading: false
}



export const loadingReducer = (state = initState, action: loadingACType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_LOADING': {
            return {
                ...state, 
                loading: true
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