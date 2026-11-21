function abrirAba(id, botao) {
    document.querySelectorAll('.aba').forEach(a => a.classList.remove('ativa'));
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('ativo'));

    document.getElementById(id).classList.add('ativa');
    botao.classList.add('ativo');
}