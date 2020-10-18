const initialState = {
    count: 0,    
  };
  
  const CountReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_STATE":
        return {...state, ...action.payload};
  
      default:
        return state;
    }
  };
  export default CountReducer;
  