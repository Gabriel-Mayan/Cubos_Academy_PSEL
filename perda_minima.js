function solucao(precos) 
{
    var valorCompra = 0, resultado = 0
    
    for(x=0;x < precos.length;x++)
    {        
        valorCompra = precos[x]
           
        for(y = x + 1; y < precos.length;y++)
        {
            if(valorCompra > precos[y])
            {
                if(resultado === 0)
                {
                    resultado = valorCompra - precos[y]
                }
                
                else if(resultado > valorCompra - precos[y])
                {
                    resultado = valorCompra - precos[y]
                }
            }
        }                 
    }

    console.log(resultado)           
}