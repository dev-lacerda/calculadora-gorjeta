function calculateTip (event) {
    event.preventDefault(); 
    // para de recarregar a pag
    let bill = document.getElementById('bill').value;
    let serviceQual = document.getElementById('serviceQual').value;
    let people = document.getElementById('people').value;

    if(bill <= 0 || people <= 0){
        alert("Por favor, preencha os valores maior que 0")
        location.reload();
        return;
    }else{
        if(people <= 1){
            document.getElementById('each').style.display = 'none'
        }else{
            document.getElementById('each').style.display = 'block'
        }}

            let result = bill * serviceQual / people;
            result = result.toFixed(2);
            document.getElementById('tip').innerHTML = result;
            document.getElementById('total').style.display = "block";
        
}

document.getElementById('total').style.display = "none";

document.getElementById('tipsform').addEventListener('submit', calculateTip);