function submitform() {
    var address = document.getElementById('addressinput').value;
    var addresserr = document.getElementById('adderror');

    var amount = document.getElementById('amountinput').value;
    var amounterr = document.getElementById('amterror');

    var otp = document.getElementById('otpinput').value;
    var otperr = document.getElementById('otperror');

    var errcount = 0;
    if (address == ''){
        addresserr.innerHTML = 'Please enter your address';
        errcount+=1;
    }
    if (amount == ''){
        amounterr.innerHTML = 'Please enter your amount';
        errcount+=1;
    }
    if (otp == ''){
        otperr.innerHTML = 'Please enter your OTP';
        errcount+=1;
    }

    if (errcount > 0){
        return false;
    }
    else{
        document.getElementById('overlay').style.display = 'block';
        document.getElementById('loader').style.display = 'block';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
            document.getElementById('success').style.display = 'block';
            
        }, "2000")    
    }
}    

function ok(){
    window.location.reload();
}