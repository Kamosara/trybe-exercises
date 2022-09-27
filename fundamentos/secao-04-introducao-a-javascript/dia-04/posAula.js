let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

  console.log('-------------------------------------------');
console.log('Bem-vinda,', info.personagem);
console.log('-------------------------------------------');
console.log(info['recorrente'] = info.recorrente );
console.log('-------------------------------------------');

for(let key in info){
    console.log(key);
}

console.log('-------------------------------------------');

for(let key in info){
    console.log(info[key]);
}

let info2 = {
    personagem: 'Tio patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
}

for(let key in info, info2){
    console.log(info[key] + ' e ' + info2[key]);
}

console.log('-------------------------------------------');

    /* FOGUETINHO */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
        },
        {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
        },
    ],
    };    

let livro = leitor.livrosFavoritos[0];
console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se Chama', livro['titulo']);

let conta = leitor.livrosFavoritos;

console.log('Júlia tem ', conta.length, 'livros favoritos.');