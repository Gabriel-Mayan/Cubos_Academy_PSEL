function solucao(palpite, palavra) 
{
    var resultado = palavra.split("")
    var acerto = 0
    
    for(x = 0; x < resultado.length; x++)
    {
        if(resultado[x] === palpite)
        {
            acerto++
        }
    }
    
    console.log(acerto)
}