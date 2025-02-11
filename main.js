const imagens = [
    'img4.jpg', 
    'img2.jpg', 
    'img3.jpg',
    'img1.jpg'
     
    
]

let indiceAtual = 0;

document.getElementById('trocar-imagem').addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    
    document.body.style.backgroundImage = `url(${imagens[indiceAtual]})`
})