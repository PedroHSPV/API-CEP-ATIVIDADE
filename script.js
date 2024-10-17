// declarando as variaveis

const inputCep = document.getElementById('cep')
const botaoCep = document.getElementById('pesquisarCEP')
const divHiden = document.getElementById('camposApagados')
const botaoApagar = document.getElementById('apagarConteudo')



// evento do botao para pesquisar
botaoCep.addEventListener('click', (e) => {
    e.preventDefault()
    const endereco = inputCep.value // valor digitado
    pesquisarCEP(endereco).then(valores => { // executa o cep com valor digitado e chama a promisse 
        exibirCep(valores) // exibe os dados retornados
        divHiden.classList.remove('d-none')
        botaoApagar.classList.remove('d-none')
    }) // faz a busca quando clicado
})

botaoApagar.addEventListener('click', () =>{
    inputCep.value =''
    document.getElementById('logradouro').value = ""
    document.getElementById('numero').value = ""
    document.getElementById('complemento').value = ""
    document.getElementById('bairro').value = ""
    document.getElementById('cidade').value = ""
    document.getElementById('estado').value = ""
    divHiden.classList.add('d-none')
    botaoApagar.classList.add('d-none')

})

async function pesquisarCEP(cep) {
    const URL_API = `https://viacep.com.br/ws/${cep}/json/`

    try { 
        const resposta = await fetch(URL_API) // faz a requisição e aguarda a resposta
        
        return await resposta.json() // PROMISE converte para json a resposta

    } catch(error) {
        alert('CEP incorreto') 
    }

}
// função para exibir
function exibirCep(dados) {
    if (dados.erro) {
        documen.getElementById('resultado').innerHTML = `<p> Endereço não encontrado</p> `
    } else {
        document.getElementById('logradouro').value = dados.logradouro
        document.getElementById('numero').value = ""
        document.getElementById('complemento').value = ""
        document.getElementById('bairro').value = dados.bairro
        document.getElementById('cidade').value = dados.localidade
        document.getElementById('estado').value = dados.uf

    }
    
}



