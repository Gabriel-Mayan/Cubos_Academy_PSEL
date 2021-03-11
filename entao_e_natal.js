function solucao(produtos, distanciaRestaurante, cupomDesconto, ehPrimeiraCompra) 
{
    var totalPagar = 0, valorParcial = 0, valorFrete = 0, somaSalgado = 0, somaDoce = 0, somaBebida = 0, freteGratis
    
    for(x = 0;x < produtos.length;x++)
    {
        if(produtos[x].categoria === "SALGADO")
        {
            somaSalgado = somaSalgado + (produtos[x].valor * produtos[x].quantidade) * 0.9
        }
        else if(produtos[x].categoria === "DOCE")
        {
            somaDoce = somaDoce + (produtos[x].valor * produtos[x].quantidade) * 0.85
        }
        else if(produtos[x].categoria === "BEBIDA")
        {
            somaBebida = somaBebida + (produtos[x].valor * produtos[x].quantidade) * 0.7
        }
    } 
    
    valorParcial = (somaSalgado + somaDoce + somaBebida)
    
    if(cupomDesconto !== null)
    {
        if(ehPrimeiraCompra === true)
        {
            if(cupomDesconto === "NATAL10" & valorParcial >= 3000)
            {
                valorParcial = valorParcial * 0.9
            }
            else if(cupomDesconto === "NATAL20" & valorParcial >= 4500)
            {
                valorParcial = valorParcial * 0.8
            }
            else if(cupomDesconto === "NATAL30" & valorParcial >= 6000)
            {
                valorParcial = valorParcial * 0.7
            }
            else if(cupomDesconto === "NATALSUPREMO" & valorParcial >= 8000)
            {
                valorParcial = valorParcial * 0.7
                freteGratis = 1
            }
        }   
    } 
    
    if(freteGratis === 1)
    {
            valorFrete = 0    
    }
    else
    {
        valorFrete = distanciaRestaurante * 120
    }    
    totalPagar = valorParcial+valorFrete
    console.log(totalPagar)    
}