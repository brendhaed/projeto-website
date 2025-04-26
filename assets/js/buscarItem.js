function Pesquisar() {
    const termo = document.getElementById('pesquisa').value.trim();
    const resultadoDiv = document.getElementById('resultado-pesquisa');

    if (termo) {
        resultadoDiv.textContent = `Você buscou por: '${termo}'`;
        resultadoDiv.style.display = 'block';
    } else {
        resultadoDiv.style.display = 'none';
    }

    return false;
}

document.addEventListener('click', function(event) {
    const resultadoDiv = document.getElementById('resultado-pesquisa');
    const form = document.getElementById('form-pesquisa');

    const clicouDentro = resultadoDiv.contains(event.target) || form.contains(event.target);

    if (!clicouDentro) {
        resultadoDiv.style.display = 'none';
    }
});
