document.getElementById('login-submit').addEventListener('click',function()
{
    const userEmail=document.getElementById('user-email').value;
    //console.log(userEmail);
    const userPassword=document.getElementById('user-password').value;
    //console.log(userPassword);
    if(userEmail=='mahed255261@gmail.com' && userPassword=='abcd')
    {
        //console.log('valid');
        window.location.href='bank.html';

    }
})

