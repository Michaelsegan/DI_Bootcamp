let form = document.querySelectorAll('#form input');
let btn = document.getElementById('btn-save');
// arrying the node list 
let arrForm = Array.from(form);
//looping through the array

//add event listener to btn and function to get data


const addToLocals = (e) => {
    e.preventDefault();
    for(const value in arrForm){
        console.log(`${arrForm[value].value}`);
        


    }




        


    
        
    
}
btn.addEventListener('click',addToLocals);








