/**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 * 
 */
 const array = [
    [9, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 7],
    [1, 3, 1, 5],
  ];
  


function transpose(array) {


    
    const result=Array.from({length: array[0].length}, ()=> new Array(array.length).fill(0))
  for (let i = 0; i < array[0].length; i++) {
      const newArray=[]
      for (let j = 0; j < array.length; j++) {

          newArray.push(array[j][i])
          
      }
      console.log(newArray)
  }

  
    // const result=[]
    // for (let r = 0; r < array.length; r++) {
    //     const newRow=[]
        
    //     for (let c = 0; c < array.length; c++) {
            
    //         newRow.push(array[c][r])
        
    //     }
    //     result.push(newRow)
        
    // }
    // console.log(result)
}

transpose(array)

module.exports = transpose;
