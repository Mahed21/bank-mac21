document.getElementById('diposite-submit').addEventListener('click',function()
{
    //console.log(10);
    const depsoiteTotal=document.getElementById('diposite-input');
    //console.log(depsoiteTotal);
    const depositeAmount=document.getElementById('deposite-amount');
    //console.log(depositeAmount);
    const cureentTotalDeposite=parseFloat(depositeAmount.innerText)+parseFloat(depsoiteTotal.value)
    depositeAmount.innerText=cureentTotalDeposite;

    //adding amount to balance
    const balanceAmount=document.getElementById('balance-amount');
    //console.log(balanceAmount.innerText);
    const currentTotalBalance=parseFloat(balanceAmount.innerText)+parseFloat(depsoiteTotal.value);
    balanceAmount.innerText=currentTotalBalance;

    

    
    depsoiteTotal.value='';
})
//witdraw and reducing balance
document.getElementById('withdraw-submit').addEventListener('click',function()
    {
        
        const withdrawValue=document.getElementById('withdraw-input');
        //console.log(withdrawValue.value);
        const currentWithdraw=document.getElementById('current-withdraw');
        const currentValue=currentWithdraw.innerText;
        const currentBalance=document.getElementById('balance-amount');
        currentWithdraw.innerText=withdrawValue.value;
        const currentNewBalance=parseFloat(currentBalance.innerText)-parseFloat(withdrawValue.value);
        currentBalance.innerText=currentNewBalance;
        currentWithdraw.innerText=parseFloat(withdrawValue.value)+parseFloat(currentValue);

        withdrawValue.value='';
        

    })
