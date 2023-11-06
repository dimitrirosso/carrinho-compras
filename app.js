let totalgeral;
limpar();

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeproduto = produto.split('-')[0];
    let valorunitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    let preco = quantidade * valorunitario;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeproduto} <span class="texto-azul">R$${preco}</span>
    </section>
    </section>`;

    let campototal = document.getElementById('valor-total');

    totalgeral = totalgeral + preco;
    campototal.textContent = `R$${totalgeral}`;
    document.getElementById('quantidade').value = "";

}


function limpar(){
    totalgeral = 0;
    document.getElementById('lista-produtos').innerHTML = ""
    document.getElementById('valor-total').textContent = 'R$ 0';
}