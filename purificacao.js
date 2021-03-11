function solucao(stringCorrompida) 
{
    
    const digitoCorruptor = ["!","@","#","$","%","&","*",")","(","."]
    
    var controle
    
    var palavra = stringCorrompida.split("")
    
    var palavraCompleta = []
    
    for(x = 0; x < palavra.length; x++)
    {
        controle = 0
        
        for(i = 0; i < digitoCorruptor.length; i++)
        {
            if(palavra[x] === digitoCorruptor[i])
            {
                controle--
            }
            else
            {
                controle++
            }            
        }
        
        if(controle === digitoCorruptor.length)
        {
            palavraCompleta.push(palavra[x])
        }
    }
    console.log(palavraCompleta.join(""))
}
