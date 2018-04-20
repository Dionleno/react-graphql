const INITIAL_STATE = {
    user:{
        id: '',
        name:'',
        email: '',
        password: ''
    }, 
    message: [],
 }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){    
        case 'CHANGE_FIELD_USER':
            return {...state, user:{...state.user ,[action.objectItem]: action.payload }}
        case 'CHANGE_MODE_ITEM':
            return {...state, nova_categoria: action.payload}  
        default:
            return state  
    }
}


