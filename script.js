// funcao para exibir detalhes dos personagens
function mostrarDetalhes(personagem) {
    const detalhes = {
        'Abigail': {
            titulo: 'Abigail',
            descricao: 'A abigail e uma garota doce que ama jogos...',
            imagem: 'img/abigail.png'
        },
        'Penny': {
            titulo: 'Penny',
            descricao: 'Penny e gentil, sensivel e adora a vida simples...',
            imagem: 'img/penny.png'
        },
        'Maru': {
            titulo: 'Maru',
            descricao: 'Maru e muito inteligente e adora tecnologia...',
            imagem: 'img/maru.png'
        },
        'Leah': {
            titulo: 'Leah',
            descricao: 'Leah e uma artista apaixonada pela natureza...',
            imagem: 'img/leah.png'
        },
        'Alex': {
            titulo: 'Alex',
            descricao: 'Alex e um jovem atleta com grande foco em musculacao...',
            imagem: 'img/alex.png'
        },
        'Harvey': {
            titulo: 'Harvey',
            descricao: 'Harvey e o medico da vila, sempre preocupado...',
            imagem: 'img/harvey.png'
        },
        'Sebastian': {
            titulo: 'Sebastian',
            descricao: 'Sebastian e introvertido e misterioso...',
            imagem: 'img/sebastian.png'
        },
        'Shane': {
            titulo: 'Shane',
            descricao: 'Shane e o cara meio rebelde...',
            imagem: 'img/shane.png'
        },
        'Elliott': {
            titulo: 'Elliott',
            descricao: 'Elliott e o escritor romantico da vila...',
            imagem: 'img/elliott.png'
        },
        'Sam': {
            titulo: 'Sam',
            descricao: 'Sam e o tipico jovem descontraido...',
            imagem: 'img/sam.png'
        },
        'Emily': {
            titulo: 'Emily',
            descricao: 'Emily e alegre, excentrica e adora arte...',
            imagem: 'img/emily.png'
        }
    };

    const modal = document.getElementById('detalhesModal');
    const titulo = document.getElementById('detalhesTitulo');
    const descricao = document.getElementById('detalhesDescricao');
    const imagem = document.getElementById('detalhesImagem');

    titulo.textContent = detalhes[personagem].titulo;
    descricao.textContent = detalhes[personagem].descricao;
    imagem.src = detalhes[personagem].imagem;

    modal.style.display = 'flex';
}

// funcao para fechar o modal
function fecharModal() {
    const modal = document.getElementById('detalhesModal');
    modal.style.display = 'none';
}
