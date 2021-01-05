const initialState1 = {list1:[]};

function reducerFav (state = initialState1, action) {

  switch (action.type)  {

    case 'ADD_TO_FAV': 
            
              return {list1: [ ...state.list1, action.payload ] };
            
    default:
           
              return state
           
  }         

}

export default reducerFav;


