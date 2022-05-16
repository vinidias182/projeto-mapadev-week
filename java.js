const personagens = document.querySelectorAll ('.personagem')

personagens.forEach ((personagem) => {
    personagem.addEventListener('mouseenter', () =>{
        const personagemselect = document.querySelector('.selecionado')
        personagemselect.classList.remove('selecionado')
        
        personagem.classList.add ('selecionado');


        const idselect= personagem.attributes.id.value;

        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `yuyu.img/${idselect}.png`;


        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name')

        nomeJogador1.innerHTML = nomeSelecionado;
    });
})