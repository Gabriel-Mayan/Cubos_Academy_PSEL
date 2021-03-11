function solucao(velocidade, aceleracao, distanciaObjeto) 
{
    derrapagem = -(velocidade*velocidade)/(2*aceleracao)
    
    if(distanciaObjeto < derrapagem)
    {
        console.log("COLISAO A FRENTE")
    }
    if(distanciaObjeto === derrapagem)
    {
        console.log("NAO ACELERE")
    }
    if(distanciaObjeto > derrapagem)
    {
        console.log("CAMINHO SEGURO")
    }
}