
async function calculajuros(event){
    //obtendo os valores dos campos
    event.preventDefault()
    const nome = document.getElementById('nome').value
    const check = document.getElementById('termos').checked
    const inicial = document.getElementById('monti').value
    const final = document.getElementById('montf').value
    const mes = document.getElementById('mes').value
    // Verificação dos campos obrigatórios
    if (!nome ||!inicial || !final || !mes) {
        var alerta = "O campo deve ser informado";
        var aviso,innerHTML = alerta;
        alert('Preencha todos os campos')
    }else{

    // Verificação do campo de checkbox e em siguida o calculo da taxa de juros
    let taxa 
    if(check){
    taxa = (final - inicial) / (inicial * mes)
   } else {
    console.log('não está')
    aceite.textContent = ' Aceite os termos'
    return
   }
   
   taxa = taxa * 100
    //Mostrando o resultado
    document.getElementById('resultado').innerHTML = `${nome}, a taxa de juros é: ${taxa.toFixed(3)}%`
    }
}
