//Covert fro Euro to dollar
const form = document.querySelector('#form');
const resultDiv = document.querySelector('#result-div')

form.addEventListener('submit', function(e){
    e.preventDefault()
    const targetForm = e.target
    const eur = targetForm.eur.value
    const usd = eur*1.08
    console.log(usd)
    resultDiv.innerHTML = `<p>Today, ${eur} EURO  =  ${usd} USD.</p>`;

})
//Convert fro Dollar to Euro
const formTwo = document.querySelector('#form-two');
const resultDivTwo = document.querySelector('#result-div-two')

formTwo.addEventListener('submit', function(f){
    f.preventDefault()
    const targetFormTwo = f.target
    const dollar = targetFormTwo.dollar.value
    const euro = dollar*0.92
    resultDivTwo.innerHTML = `<p>Today, ${dollar} USD  =  ${euro} EURO.</p>`;
})