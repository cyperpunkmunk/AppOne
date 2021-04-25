
// getting the input type
const ssn = document.getElementById('inputSSN')

console.log(ssn)

// getting the edit button

const edit = document.getElementById('editNShowBtn')

edit.addEventListener('click' , showCon)

// showCon function

function showCon(){
    switch(ssn.type){
        case ssn.type = 'password':
            ssn.type = 'text'
        break;

        case ssn.type = 'text':
            ssn.type = 'password'
        break;
    }
    console.log(ssn.type)
    return ssn.type
    
}
