let from = document.getElementById('from');
let to = document.getElementById('to')
let textBox = document.getElementById('text-box');
let convertBtn = document.getElementById('convert');
let output = document.getElementById('output');


async function takeData (){
    
    const getJson = await fetch('http://api.currencylayer.com/list?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1');
    const getData = await getJson.json();
    const name = getData.currencies;
    

    for (const key in name) {
        // const option = document.createElement('option');
        // const nodeTooption = document.createTextNode(`${curenncys[key]}`)
        // option.append(nodeTooption);
        // from.append(option);
        // to.append(option);
        from.innerHTML += `<option value="${key}">${key} : ${name[key]}</option>`;
        to.innerHTML += `<option value="${key}">${key} : ${name[key]}</option>`;
     }
}
takeData();

convertBtn.addEventListener('click',userData);
function userData(){
    try { 
    const fromValue = from.value;
    const toValue = to.value;
    const amountValue = textBox.value;
    console.log(amountValue,toValue,fromValue);
    fetchNumber(fromValue,toValue,amountValue);
    }
    catch (error) {
        throw new Error('hello you are erroring')
    }
}


async function fetchNumber (fromValue,toValue,amountValue){
    const getCurency = await fetch('http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&format=1');
    const dataCurency = await getCurency.json();
    const theNumber = dataCurency.quotes;
    const muliply = theNumber[`USD${toValue}`] * amountValue;
    const result = muliply / theNumber[`USD${fromValue}`];
    output.textContent = result.toFixed(2);



    
}



