function calcularEstrelas(){
    var inFragmentos = document.getElementById('inFragmentos');
    var inStar = document.getElementById('inStar');
    var outResposta = document.getElementById('outResposta');
    var iniFrag = Number(inFragmentos.value);
    var iniStar = Number(inStar.value);
    var estrelas = [10, 25, 50, 90, 150, 240, 370, 550, 790, 1100];
    var frag = 0;
    var n = estrelas[(iniStar)];
    frag = iniFrag;
    while(frag > n){
        frag = frag - n;
        iniStar = iniStar + 1;
        n = estrelas[(iniStar)];
    }
    outResposta.textContent = "Seu heroi ficará com: " + estrelas[(iniStar)];

}
var btCalcular = document.getElementById('btCalcular');
btCalcular.addEventListener('click', calcularEstrelas);
