import {combineReducers} from 'redux';
import cuentaReducers from './cuentaReducers';


const reducer = combineReducers({
    contador: cuentaReducers
})

export default reducer;