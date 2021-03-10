function solucao(numero, x) 
{
    if(numero % x === 0)
    {
        console.log(true)
    }
    else if(numero % x !== 0)
    {
        console.log(false)
    }
    else if(numero < x)
    {
        console.log("Error")
    }
}
