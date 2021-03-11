function solucao(produtos, valorMaximo, avaliacaoMinima) 
{
    var resultado = []
    
    for(x = 0;x < produtos.length;x++)
    {
        if(produtos[x].valor <= valorMaximo & produtos[x].avaliacao >= avaliacaoMinima)
        {  
            resultado.push(produtos[x])
        }
    }
    
    console.log(resultado)
}