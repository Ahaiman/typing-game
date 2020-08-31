
export const setTime = (time = 10) => ({
    type: "SET_TIME",
    payload: time
})

const timeReducer = (time = 0, action) => {
    switch(action.type){
        case "SET_TIME":
            return action.payload
        default:
            return time
    }
}

export default timeReducer