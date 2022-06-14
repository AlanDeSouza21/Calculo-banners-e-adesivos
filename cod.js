// DADOS DE ENTRADA
let id_Quant = document.getElementById('Quant')
let id_Lar = document.getElementById('lar')
let id_Alt = document.getElementById('alt')
let id_radio = document.getElementsByName('Rad')
let id_divRes = document.getElementById('res')
var id_escritaRES = document.getElementById('escritaRES')
let material = ''
let TOTAL = []

let data = new Date()
let hora = data.getHours()

// BOAS VINDAS 
if (hora >= 3 && hora < 12){
    let cria_Let = document.createElement("let")
    let cria_BR = document.createElement("br")
    cria_Let.innerHTML = "Bom dia! <br> Tudo bom?"
    document.getElementById('escrita').appendChild(cria_Let).appendChild(cria_BR)
}
else if (hora >= 12 && hora < 18){
    let cria_Let = document.createElement("let")
    let cria_BR = document.createElement("br")
    cria_Let.innerHTML = "Boa tarde! <br> Tudo bom?"
    document.getElementById('escrita').appendChild(cria_Let).appendChild(cria_BR)
}
else{
    let cria_Let = document.createElement("let")
    let cria_BR = document.createElement("br")
    cria_Let.innerHTML = "Boa noite! <br> Tudo bom?"
    document.getElementById('escrita').appendChild(cria_Let).appendChild(cria_BR)
}

function calcular(){
// CALCULO METRO QUADRADO
    let resultado = Number(id_Alt.value) / 100 * Number(id_Lar.value) / 100

// RESTRIÇÃO QUANTIDADE
    if (Number(id_Quant.value) < 1){
        window.alert('ERRO: favor especificar a quantidade')
    }
    else{
        // RESTRIÇÃO E INSERÇÃO DE MATERIAIS
        if(id_radio[0].checked){
            material = 'Banner'
        }
        else if(id_radio[1].checked){
            material = 'Faixa com ilhois'
        }
        else if(id_radio[2].checked){
            material = 'Lona sem acabamento'
        }
        else{
            window.alert('ERRO: favor selecionar um material')
            return false
        }
        // CRIA VARIAVEL
        let valor = ''
        var criouVAR = document.createElement("let")
        var criouBR = document.createElement("br")
       
        // RESTRIÇÃO 
        if(Number(resultado) <= 0.09){
            window.alert(`ERRO: tamanho de metro quadrado ${Number(resultado)} especificado é menor que o permitido`)
        }
        else if(Number(resultado) >= 0.10 && Number(resultado) <= 0.47){
            valor = 65 * Number(id_Quant.value)
            TOTAL.push(valor)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm R$ ${valor},00`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else if(Number(resultado) >= 0.48 && Number(resultado) <= 0.62){
            valor = 70 * Number(id_Quant.value)
            TOTAL.push(valor)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm R$ ${valor},00`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else if(Number(resultado) >= 0.63 && Number(resultado) <= 0.87){
            valor = 75 * Number(id_Quant.value)
            TOTAL.push(valor)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm R$ ${valor},00`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else if(Number(resultado) >= 0.88 && Number(resultado) <= 0.99){
            valor = 85 * Number(id_Quant.value)
            TOTAL.push(valor)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm R$ ${valor},00`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        // CALCULO DE VALORES ACIMA DE 1 METRO QUADRADO
        else if(Number(resultado) >= 1 && Number(resultado) <= 1.99){
            valor = 85 * Number(resultado) 
            // ARREDONDAMENTO DO VALOR 
            let valor_Arredon = Math.ceil(valor) * Number(id_Quant.value)
            TOTAL.push(valor_Arredon)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm ${valor_Arredon.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else if(Number(resultado) >= 2 && Number(resultado) <= 2.99){
            valor = 80 * Number(resultado) 
            // ARREDONDAMENTO DO VALOR 
            let valor_Arredon = Math.ceil(valor) * Number(id_Quant.value)
            TOTAL.push(valor_Arredon)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm ${valor_Arredon.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else if(Number(resultado) >= 3){
            valor = 75 * Number(resultado) 
            // ARREDONDAMENTO DO VALOR 
            let valor_Arredon = Math.ceil(valor) * Number(id_Quant.value)
            TOTAL.push(valor_Arredon)
            criouVAR.innerHTML = `${Number(id_Quant.value)} Uni. ${material} ${Number(id_Lar.value)}x${Number(id_Alt.value)}cm ${valor_Arredon.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
            document.getElementById('escritaRES').appendChild(criouVAR).appendChild(criouBR)
        }
        else{
            window.alert('ERRO NO CÓDIGO')
        }
        // VOLTA Á QUANTIDADE
        id_Quant.value = ''
        id_Quant.focus()
    } 
}
var somaLonas = ''
function calcularTotal(){
    somaLonas = 0
    for (var b = 0; b < TOTAL.length; b++){
        somaLonas += parseInt(TOTAL[b]);
        console.log(somaLonas)
    }
    var criaVAR_LONA = document.createElement("var")
    var QuebraLinha_LONA = document.createElement("br")
    criaVAR_LONA.innerHTML = `<strong>*TOTAL ${somaLonas.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}*</strong>`
    document.getElementById('escritaRES').appendChild(criaVAR_LONA).appendChild(QuebraLinha_LONA)
}

function apagar(){
id_escritaRES.innerHTML = ''
somaLonas = ''
TOTAL = []
}