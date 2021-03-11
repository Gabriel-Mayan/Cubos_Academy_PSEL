function solucao(jogadas) 
{
   var equipe1 = 0, equipe2 = 0
    
   for(x=0; x < jogadas.length;x++)
   {
       if(jogadas[x] === 0)
       {
           equipe1++
       }
       else if(jogadas[x] === 1)
       {
            equipe2++
       }
   }
   
    if(equipe1 === equipe2)
    {
        console.log(true)
    }

    else if(equipe1 !== equipe2)
    {
        console.log(false)
    }
}
