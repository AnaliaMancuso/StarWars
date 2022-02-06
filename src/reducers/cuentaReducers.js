import { SUMA } from "../types";


const initialState = 1;


export default function cuentaReducers(state = initialState, action) {
    switch (action.type){
      case SUMA:
        if (state < 9) {
        return state +1;}
      default:
        return state;      
    }
}

// const initialStateUrl = 1;

// export default function setUrl(state = initialStateUrl, action) {
//   switch (action.type){
//     case SET_URL:
//       return state +1;
//     default:
//       return state;      
//   }
// }