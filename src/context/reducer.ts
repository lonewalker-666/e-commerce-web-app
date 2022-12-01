import { PRODUCTS_DATA } from "./action";
import { defaultGlobalState } from "./defaultGlobalState";



const reducer = (state=defaultGlobalState, action:any) => {
    switch (action.type) {
      case PRODUCTS_DATA:
        return {
          ...state,
          products_data: action.payload
        };
      default:
        return state;
    }
  };
  
  export default reducer;