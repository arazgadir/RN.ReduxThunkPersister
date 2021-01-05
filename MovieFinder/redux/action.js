

const url1 = 'https://api.tvmaze.com/search/shows?q=';


export const searching =  (dispatch, text) => {
 

    return async () => {
     try {
   
         if (text != '') {
           
              const response = await fetch(url1 + text);
              const data = await response.json();
              dispatch(adding(data))
           
          }
     }

      catch (e) {
              console.log('url is wrong' + url1 + text);
      }
    }
};



export const adding = data => ({

     type: 'SEARCH',
     info: data,
  
});



 

export const compareFav =  (dispatch, text, list1) => {
 
  return  () => {
    try {

   
         const checkFavButton =  (list1.some(element  => { 

              if (element.id == text.id){

                   {return true}
              }

               return false
          }))
          
               if (checkFavButton == false) {

          dispatch(addingToFav(text))

          }
        }

   catch (e) {
          console.log('operation is wrong');
             }

  }
  
};
  

export const addingToFav = text => { 
  
  return(
  {
  
       type: 'ADD_TO_FAV',
       payload: text


  })
}



