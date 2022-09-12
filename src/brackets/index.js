/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */

function isValid(str){    
    let stack=[];

    for (let i = 0; i < str.length; i++) {
        let x=str[i]
        console.log(x)

        if(x=='(' || x=='{' || x=='['){
            stack.push(x)
            continue;
        }

        if(stack.length==0){
            return false;
        }
        
        let checkValues;
        switch(x){
            case ')':
                checkValues=stack.pop()
                if(checkValues=='}' || checkValues==']'){
                    return false;
                }
                break;
            case '}':
                checkValues=stack.pop()
                if(checkValues==')' || checkValues==']'){
                    return false
                }
                break;

            case ']':
                    checkValues=stack.pop()
                    if(checkValues==')' || checkValues=='}'){
                        return false
                    }
                    break;

        }
        
        
        
    
    
    }
 return stack;
    
    


}

let str=('({[}])}')

if(isValid(str)){
    console .log('valid')
}else{
    console.log("invalid")
}


module.exports = isValid;
