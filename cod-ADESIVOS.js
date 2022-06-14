// DADOS DE ENTRADA
let id_Quant_ADS = document.getElementById('Quant_ADS')
let id_lar_ADS = document.getElementById('lar_ADS')
let id_alt_ADS = document.getElementById('alt_ADS')
let id_BotaoUni_ADS = document.getElementById('botao_Uni_ADS')
let id_botao_Uni_ADS = document.getElementById('botao_Uni_ADS')
let id_comum_ADS = document.getElementById('botaoImpressao_ADS') 
let BASEcem = ''
let LARG_FIM = ''
let RES_METROquad = ''
let RES_METROquad_ = ''
let BASEcem_MAIOR = ''
var id_res_ADS = document.getElementById("res_ADS")
var juntaTotal = []

/*------------------------------------- BOAS VINDAS ---------------------------*/
let data_ADS = new Date()
let hora_ADS = data_ADS.getHours()

if (hora_ADS >= 3 && hora_ADS < 12){
    let cria_LetHORA = document.createElement("let")
    let cria_BrHORA = document.createElement("br")
    cria_LetHORA.innerHTML = "Bom dia! <br> Tudo bom?"
    document.getElementById('comprimentar').appendChild(cria_LetHORA).appendChild(cria_BrHORA)
}
else if (hora_ADS >= 12 && hora_ADS < 18){
    let cria_LetHORA = document.createElement("let")
    let cria_BrHORA = document.createElement("br")
    cria_LetHORA.innerHTML = "Bom dia! <br> Tudo bom?"
    document.getElementById('comprimentar').appendChild(cria_LetHORA).appendChild(cria_BrHORA)
}
else{
    let cria_LetHORA = document.createElement("let")
    let cria_BrHORA = document.createElement("br")
    cria_LetHORA.innerHTML = "Bom dia! <br> Tudo bom?"
    document.getElementById('comprimentar').appendChild(cria_LetHORA).appendChild(cria_BrHORA)
}

/*------------------------------------- IMPRESSÃO COMUM E UNIDIRECIONAL ---------------------------*/
let VALOR_UNI = ''
function Acao_Uni(){
    id_botao_Uni_ADS.style.background = 'black';
    id_botao_Uni_ADS.style.color = 'white';
    id_comum_ADS.style.background = 'white';
    id_comum_ADS.style.color = 'black';
    VALOR_UNI = 10
}
function Cancela_Uni(){
    id_botao_Uni_ADS.style.background = 'white';
    id_botao_Uni_ADS.style.color = 'black';
    id_comum_ADS.style.background = 'black';
    id_comum_ADS.style.color = 'white';
    VALOR_UNI = 0
}


function clicarCalculo_ADS(){

    /* ------------------------------------- RESTRIÇÕES -------------------------------------------------------*/

    if(Number(id_Quant_ADS.value) < 1){
        window.alert('ERRO: favor especificar a quantidade')
        return false
    }
    else if(id_lar_ADS.value < 3 || id_alt_ADS.value < 3){
        window.alert('ERRO: tamanhos da largura e/ou altura não especificado ou menor que o permitido')
        return false
    }
    else{
        if(VALOR_UNI == 0){
            if(id_lar_ADS.value >= 3 && id_lar_ADS.value < 8 || id_alt_ADS.value >= 3 && id_alt_ADS.value < 8){
                window.alert('É aconcelhável usar impressão Unidirecional em tamanhos menores que 8cm')
            }
        }
        else if(id_lar_ADS.value > 100 && id_alt_ADS.value > 100){
            window.alert('O limite de tamanho máximo para impressão é 100cm')
        }
        else{
            true
        }        
    }
    


    /* -------------------------------------- 1º OPÇÃO DE CALCULO ------------------------------------------------*/
    
    let metroQuadrado = id_lar_ADS.value / 100 * id_alt_ADS.value / 100 // ---> Variavel criada para impredir que adesivos grandes sejam impressos em quantidade acima do desejado
    let DivLAR = 100 / Number(id_lar_ADS.value) // ---> Pega quantidade de adesivos que cabe dentro de 100cm 
    let Quant_Lar = ''
    let QUANTxLARG = Number(id_Quant_ADS.value) * Number(id_lar_ADS.value) // ---> Descobre o tamanho que adesivos em pequenas quantidades ocuparão
    let DIVLxLARG = Math.floor(DivLAR) * Number(id_lar_ADS.value) // ---> Descobre tamanho que os adesivos ocuparão dentro de 100cm

    // Função para controlar tamanho mínimo da largura 
    if(QUANTxLARG <= 95 || DIVLxLARG <= 95){
        BASEcem = 95
        BASEcem_MAIOR = 95 
    }
    else{
        BASEcem = QUANTxLARG
        BASEcem_MAIOR = DIVLxLARG
    }

    // Ação para quantidades pequenas
    if(Number(id_Quant_ADS.value) <= Math.floor(DivLAR) && metroQuadrado < 0.04){
        Quant_Lar = 2 * Number(id_alt_ADS.value) // ----> Encontra a altura 
        RES_METROquad = BASEcem / 100 * Quant_Lar / 100 // ----> Calcula o metro quadrado
    }

    // Ação para quantidades grandes
    else{
        Quant_Lar = Number(id_Quant_ADS.value) / Math.floor(DivLAR) // ----> Quantas fileiras deve ter para completar a quantidade desejada
        let DIVxQUANT = Math.floor(DivLAR) * Math.floor(Quant_Lar) // -----> Assegura quantidade mínima de adesivos
        if(Math.floor(DIVxQUANT) < Number(id_Quant_ADS.value) || Number(id_lar_ADS.value) < 20 || Number(id_alt_ADS.value) < 20){
            LARG_FIM = (Math.floor(Quant_Lar) + 1) * Number(id_alt_ADS.value) // ---> ALTURA DEFINIDA
        }
        else{
            LARG_FIM = Math.floor(Quant_Lar) * Number(id_alt_ADS.value) // ---> ALTURA DEFINIDA
        }
        RES_METROquad = BASEcem_MAIOR / 100 * LARG_FIM / 100 // -----> Calcula o metro quadrado
    }


    /* -------------------------------------- 2º OPÇÃO DE CALCULO ------------------------------------------------*/

    metroQuadrado = id_alt_ADS.value / 100 * id_lar_ADS.value / 100 // ---> Variavel criada para impredir que adesivos grandes sejam impressos em quantidade acima do desejado
    DivLAR = 100 / Number(id_alt_ADS.value) // ---> Pega quantidade de adesivos que cabe dentro de 100cm 
    Quant_Lar = ''
    QUANTxLARG = Number(id_Quant_ADS.value) * Number(id_alt_ADS.value) // ---> Descobre o tamanho que adesivos em pequenas quantidades ocuparão
    DIVLxLARG = Math.floor(DivLAR) * Number(id_alt_ADS.value) // ---> Descobre tamanho que os adesivos ocuparão dentro de 100cm

    // Função para controlar tamanho mínimo da largura 
    if(QUANTxLARG <= 95 || DIVLxLARG <= 95){
        BASEcem = 95
        BASEcem_MAIOR = 95 
    }
    else{
        BASEcem = QUANTxLARG
        BASEcem_MAIOR = DIVLxLARG
    }

    // Ação para quantidades pequenas
    if(Number(id_Quant_ADS.value) <= Math.floor(DivLAR) && metroQuadrado < 0.04){
        Quant_Lar = 2 * Number(id_lar_ADS.value) // ----> Encontra a altura 
        RES_METROquad_ = BASEcem / 100 * Quant_Lar / 100 // ----> Calcula o metro quadrado
    }

    // Ação para quantidades grandes
    else{
        Quant_Lar = Number(id_Quant_ADS.value) / Math.floor(DivLAR) // ----> Quantas fileiras deve ter para completar a quantidade desejada
        let DIVxQUANT = Math.floor(DivLAR) * Math.floor(Quant_Lar) // -----> Assegura quantidade mínima de adesivos
        if(Math.floor(DIVxQUANT) < Number(id_Quant_ADS.value) || Number(id_alt_ADS.value) < 20 || Number(id_lar_ADS.value) < 20){
            LARG_FIM = (Math.floor(Quant_Lar) + 1) * Number(id_lar_ADS.value) // ---> ALTURA DEFINIDA
        }
        else{
            LARG_FIM = Math.floor(Quant_Lar) * Number(id_lar_ADS.value) // ---> ALTURA DEFINIDA
        }
        RES_METROquad_ = BASEcem_MAIOR / 100 * LARG_FIM / 100 // -----> Calcula o metro quadrado
    }


/* -------------------------------------- MENOR OPÇÃO DE METRO QUADRADO -------------------------------------*/
    let M_valido = '' 
    if(RES_METROquad < RES_METROquad_){
        M_valido = RES_METROquad
    }
    else if(RES_METROquad > RES_METROquad_){
        M_valido = RES_METROquad_ 
    }
    else{
        M_valido = RES_METROquad_
    }


/* --------------------------------------------- CORTE ----------------------------------------------------*/
    let valorCorte = ''
    if(id_Quant_ADS.value > 0 && id_Quant_ADS.value <= 19){
        valorCorte = 0
    }
    else if(id_Quant_ADS.value >= 20 && id_Quant_ADS.value <= 49){
        valorCorte = 10
    }
    else if(id_Quant_ADS.value >= 50 && id_Quant_ADS.value <= 79){
        valorCorte = 15
    }
    else if(id_Quant_ADS.value >= 80 && id_Quant_ADS.value <= 119){
        valorCorte = 20
    }
    else if(id_Quant_ADS.value >= 120 && id_Quant_ADS.value <= 159){
        valorCorte = 25
    }
    else if(id_Quant_ADS.value >= 160 && id_Quant_ADS.value <= 199){
        valorCorte = 30
    }
    else if (id_Quant_ADS.value >= 200 && id_Quant_ADS.value <= 500){
        let Calc_valorCorte = (id_Quant_ADS.value - 200) / 10 * 5
        valorCorte = 40 + Calc_valorCorte
    }
    else{
    window.alert('quantidade máxima permitida é 500 unidades')
    return false
    }

/* --------------------------- TABELA DE CALCULO M2 + AMOSTRA DE RESULTADOS -------------------------------*/

    var criaLET_ADS = document.createElement("var")
    var criaBrake_ADS = document.createElement("br")
    let val_Final = ''
    if(M_valido >= 0.0569 && M_valido < 0.2499){
        val_Final = 35 + valorCorte + VALOR_UNI
        juntaTotal.push(val_Final)
        criaLET_ADS.innerHTML = `${id_Quant_ADS.value} Uni. - Adesivo(s) ${Number(id_lar_ADS.value)}x${Number(id_alt_ADS.value)}cm R$ ${val_Final},00`
        id_res_ADS.appendChild(criaLET_ADS).appendChild(criaBrake_ADS)
    }
    else if(M_valido >= 0.25 && M_valido <= 0.8499){
        val_Final = 55 + valorCorte + VALOR_UNI
        juntaTotal.push(val_Final)
        criaLET_ADS.innerHTML = `${id_Quant_ADS.value} Uni. - Adesivo(s) ${Number(id_lar_ADS.value)}x${Number(id_alt_ADS.value)}cm R$ ${val_Final},00`
        id_res_ADS.appendChild(criaLET_ADS).appendChild(criaBrake_ADS)
    }
    else if(M_valido >= 0.85 && M_valido <= 1.9999){
        val_Final = (70 + VALOR_UNI) * M_valido
        let arredonda = Math.ceil(val_Final)
        juntaTotal.push(arredonda)
        criaLET_ADS.innerHTML = `${id_Quant_ADS.value} Uni. - Adesivo(s) ${Number(id_lar_ADS.value)}x${Number(id_alt_ADS.value)}cm ${arredonda.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
        id_res_ADS.appendChild(criaLET_ADS).appendChild(criaBrake_ADS)
    }
    else if(M_valido >= 2 && M_valido <= 2.9999){
        val_Final = (65 + VALOR_UNI) * M_valido
        let arredonda = Math.ceil(val_Final)
        juntaTotal.push(arredonda)
        criaLET_ADS.innerHTML = `${id_Quant_ADS.value} Uni. - Adesivo(s) ${Number(id_lar_ADS.value)}x${Number(id_alt_ADS.value)}cm ${arredonda.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
        id_res_ADS.appendChild(criaLET_ADS).appendChild(criaBrake_ADS)
    }
    else if(M_valido >= 3){
        val_Final = (60 + VALOR_UNI) * M_valido
        let arredonda = Math.ceil(val_Final)
        juntaTotal.push(arredonda)
        criaLET_ADS.innerHTML = `${id_Quant_ADS.value} Uni. - Adesivo(s) ${Number(id_lar_ADS.value)}x${Number(id_alt_ADS.value)}cm ${arredonda.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}`
        id_res_ADS.appendChild(criaLET_ADS).appendChild(criaBrake_ADS)
    }
    else{
        window.alert('ERRO DE PROGRAMAÇÃO')
    }

    id_Quant_ADS.value = ''
    id_Quant_ADS.focus()
}

/* --------------------------- SOMA TOTAL -------------------------------*/
var criaVAR_ADS = document.createElement("var")
var pulaTotal_ADS = document.createElement("br")
var somaTotal = ''
function clicarTotal_ADS(){
    somaTotal = 0
    for (var z = 0; z < juntaTotal.length; z++){
        somaTotal += parseInt(juntaTotal[z]);
    }
    criaVAR_ADS.innerHTML = `<strong>*TOTAL ${somaTotal.toLocaleString('pt-br',{style:'currency',currency:'BRL'})}*</strong>`
    id_res_ADS.appendChild(criaVAR_ADS).appendChild(pulaTotal_ADS)
}

/* --------------------------- APAGA TUDO -------------------------------*/

function clicarApagar_ADS(){
id_res_ADS.innerHTML = ''
juntaTotal = []
somaTotal = ''
}

