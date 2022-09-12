/**
 * Implement the solution in this function
 *
 * @param {string} roman The all-caps Roman numeral between 1 and 3999 (inclusive).
 * @returns {number} The decimal equivalent.
 */

 
 
function romanToDecimal(roman) {
    let numera={
        I:1,
        V:5,
        X:10,
        
        L:50,
     
        C:100,
       
        D:500,
        
        M:1000
     }

   let total=0;
   for(let i=0; i< roman.length; i++){
   

        let initialValue=numera[roman.charAt(i)]
        //console.log(initialValue)
        let finalValue=numera[roman.charAt(i+1)]
      

        if(finalValue){
            if(initialValue>=finalValue){
                total+=initialValue;
            }else{
                total+=finalValue-initialValue;
                    i++;
        
               }  
            
        }else{
            total+=initialValue;
        }
    
   }

   console.log(total)
    
        
}
romanToDecimal('III')

module.exports = romanToDecimal;
