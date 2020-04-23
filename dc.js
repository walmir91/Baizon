function calcularEstrelas() {
    var inFragmentos = document.getElementById('inFragmentos');
    var inStar = document.getElementById('inStar');
    var outResposta = document.getElementById('outResposta');
    var iniFrag = Number(inFragmentos.value);
    var iniStar = Number(inStar.value);
    var estrelas = [10, 15, 25, 40, 60, 90, 130, 180, 240, 310];
    var frag = 0;
    var n = estrelas[(iniStar)];
    frag = iniFrag;
    while (frag >= n) {
        frag = frag - n;
        iniStar = iniStar + 1;
        n = estrelas[(iniStar)];
    }
    if (iniStar > 9) {
        outResposta.textContent = 'Seu personagem ficará lendário ' + (iniStar / 2) + ' Estrela(s).';
    }
    if (iniStar > 5 && iniStar <= 9) {
        outResposta.textContent = 'Seu personagem ficará lendário ' + (iniStar - 5) + ' Estrela(s).';
    }
    if(iniStar <= 5){
        outResposta.textContent = 'Seu personagem ficará com: ' + iniStar + ' Estrela(s).';
     }
}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularEstrelas);
