function selecionar(elemento) {
    const parente = elemento.parentNode;
    const escolheu = parente.querySelector('.quero-esse');

    const icone_elemento = elemento.lastElementChild;
    const todos_icones_parente = parente.querySelectorAll('.icone');
    let array_icones = Array.from(todos_icones_parente);
    
    for (let i =0; i<4;i++){
        console.log(array_icones[i]);
        array_icones[i].classList.add('display_none');

    }   
    icone_elemento.classList.remove('display_none');
    

    if (escolheu !== null) {
        escolheu.classList.remove('quero-esse');
    }
    elemento.classList.add("quero-esse");
    
    trocarBotao();
}


function trocarBotao() {
    const botaocinza = document.querySelector(".pedidos-nao-selecionados")
    const botaoverde = document.querySelector(".pedidos-selecionados")
    
    const escolheu_prato = document.querySelector('.prato_principal .quero-esse');
    const escolheu_bebida = document.querySelector('.bebida .quero-esse');
    const escolheu_sobremesa = document.querySelector('.sobremesa .quero-esse');
    
    if (escolheu_prato !== null && escolheu_bebida !== null && escolheu_sobremesa !== null) {
        botaocinza.classList.add('display_none');
        botaoverde.classList.remove('display_none');
    }
}

function confirmar() {
    const tela_confirmacao = document.querySelector('.tela_confirmacao');
    tela_confirmacao.classList.remove('display_none');

    const element_prato = document.querySelector('.prato_principal .quero-esse .nome-comida');
    const prato = element_prato.innerHTML;
    
    const element_preco_prato = document.querySelector('.prato_principal .quero-esse .preco-comida');
    let preco_prato = element_preco_prato.innerHTML;

    const element_bebida = document.querySelector('.bebida .quero-esse .nome-comida');
    const bebida = element_bebida.innerHTML;

    const element_preco_bebida = document.querySelector('.bebida .quero-esse .preco-comida');
    let preco_bebida = element_preco_bebida.innerHTML;

    const element_sobremesa = document.querySelector('.sobremesa .quero-esse .nome-comida');
    const sobremesa = element_sobremesa.innerHTML;

    const element_preco_sobremesa = document.querySelector('.sobremesa .quero-esse .preco-comida');
    let preco_sobremesa = element_preco_sobremesa.innerHTML;

    const confirm_prato = document.querySelector('.prato_confirm')
    confirm_prato.innerHTML = prato;

    const confirm_bebida = document.querySelector('.bebida_confirm')
    confirm_bebida.innerHTML = bebida;

    const confirm_sobremesa = document.querySelector('.sobremesa_confirm')
    confirm_sobremesa.innerHTML = sobremesa;

    const confirm_prato_preco = document.querySelector('.preco_prato')
    confirm_prato_preco.innerHTML = preco_prato;

    const confirm_bebida_preco = document.querySelector('.preco_bebida')
    confirm_bebida_preco.innerHTML = preco_bebida;

    const confirm_sobremesa_preco = document.querySelector('.preco_sobremesa')
    confirm_sobremesa_preco.innerHTML = preco_sobremesa;

    preco_prato = preco_prato.replace('R$', '');
    preco_bebida = preco_bebida.replace('R$','');
    preco_sobremesa = preco_sobremesa.replace('R$','');
    preco_prato = parseFloat(preco_prato.replace(',','.'));
    preco_bebida = parseFloat(preco_bebida.replace(',','.'));
    preco_sobremesa = parseFloat(preco_sobremesa.replace(',','.'));
    console.log(preco_prato);
    let total = preco_prato + preco_bebida + preco_sobremesa;
    total = total.toFixed(2)

    const confirm_total = document.querySelector('.valor')
    confirm_total.innerHTML = 'R$' + total;

}

function cancelar() {
    const tela_confirm = document.querySelector('.tela_confirmacao');
    tela_confirm.classList.add('display_none');
}

function chamar_zap() {
    const nome = prompt('Digite seu nome: ');
    const endereco = prompt('Digite seu endereço: ');

    
    const element_prato = document.querySelector('.prato_principal .quero-esse .nome-comida');
    const prato = element_prato.innerHTML;
    
    const element_preco_prato = document.querySelector('.prato_principal .quero-esse .preco-comida');
    let preco_prato = element_preco_prato.innerHTML;

    const element_bebida = document.querySelector('.bebida .quero-esse .nome-comida');
    const bebida = element_bebida.innerHTML;

    const element_preco_bebida = document.querySelector('.bebida .quero-esse .preco-comida');
    let preco_bebida = element_preco_bebida.innerHTML;

    const element_sobremesa = document.querySelector('.sobremesa .quero-esse .nome-comida');
    const sobremesa = element_sobremesa.innerHTML;

    const element_preco_sobremesa = document.querySelector('.sobremesa .quero-esse .preco-comida');
    let preco_sobremesa = element_preco_sobremesa.innerHTML;
    
    //preco_prato = parseFloat(preco_prato.replace(/\D/g,''));
    preco_prato = preco_prato.replace('R$', '');
    preco_bebida = preco_bebida.replace('R$','');
    preco_sobremesa = preco_sobremesa.replace('R$','');
    preco_prato = parseFloat(preco_prato.replace(',','.'));
    preco_bebida = parseFloat(preco_bebida.replace(',','.'));
    preco_sobremesa = parseFloat(preco_sobremesa.replace(',','.'));
    console.log(preco_prato);
    const total = preco_prato + preco_bebida + preco_sobremesa;

    

    const pedidoURI = encodeURI(`Olá, gostaria de fazer o pedido:\n
        - Prato: ${prato}\n
        - Bebida: ${bebida}\n
        - Sobremesa: ${sobremesa}\n
        - Total: R$${total.toFixed(2)}\n
        - Nome: ${nome}\n
        - Endereço: ${endereco}`)

    //Pegar as informações do pedido, transformar em URL code, e jogar dentro do href

    window.location.href = 'https://wa.me/+5532988871289?text=' + pedidoURI;
}