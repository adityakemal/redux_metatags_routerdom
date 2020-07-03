import {createStore} from 'redux'
// 1
const initialState = {
    count : 7,
    x : 0,
    dataApi : []
}



// 3
const reducer = (state = initialState , action) => {
    console.log('reducer berjalan', action);

    // disini eksekusi by action type yg di kirim 
    if (action.type === 'INCREMENT') {
        console.log(state);
       return {...state, count : state.count + 1}
    }

    if (action.type === 'DECREMENT') {
        console.log(state);
       return {...state, count : state.count - 1}
    }

    if (action.type === 'ADD_DATA') {
        console.log(state);
       return {...state, dataApi : action.dataApi}
    }

    return state
}

// 2
const store = createStore(reducer)


//4
export default store