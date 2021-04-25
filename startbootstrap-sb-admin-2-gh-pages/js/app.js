
// getting the input

const ssn = document.getElementById('inputSSN')
const ssn2 = document.getElementById('inputSSN2')


// getting the edit button

const edit = document.getElementById('editNShowBtn')
const edit2 = document.getElementById('editNShowBtn2')
edit.addEventListener('click' , showCon)
edit2.addEventListener('click' , showCon2)



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
function showCon2(){
    switch(ssn2.type){
        case ssn2.type = 'password':
            ssn2.type = 'text'
        break;

        case ssn2.type = 'text':
            ssn2.type = 'password'
        break;
    }
    console.log(ssn2.type)
    return ssn2.type
    
}