const initialState = {list:[]};


function reducerSearch (state = initialState, action) {

  switch (action.type)  {

    case 'SEARCH': 
            
                return {  list: action.info  };
            
   
              
    default:
              return state;
            
  }         

}

export default reducerSearch;









