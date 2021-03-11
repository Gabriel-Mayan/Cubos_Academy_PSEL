function solucao(ganhos, serasaScore, mesesParaPagar) 
{
    var juros;
    var parcela;
    
    if(serasaScore<300)
    {
        juros = 3;
    }
    else if(serasaScore<700)
    {
        juros = 9;
    }
    else if(serasaScore>=700)
    {
        juros = 15;
    }
       
    parcela = ((ganhos*3)+(ganhos*(juros/100)))/mesesParaPagar
    
    console.log(parcela)
}
