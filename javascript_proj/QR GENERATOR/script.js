const qrinput=document.getElementById("qr-input");
const qrimg=document.getElementById("qr-img");
const qrbutton=document.getElementById("qr-btn");
console.log(qrinput,qrimg,qrbutton);
qrbutton.addEventListener('click',()=>{
    const inputValue=qrinput.value; // it is the text or URL passed by user to generate QR

    if(! inputValue){
        alert("Please enter valid URL or text  !!"); // if the input field is empty showing alert.
        return;
    }else{
        qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`; // here the link of an other qr-gereator website is placed ,which generates the QR code for inputValue
        qrimg.alt=`QR code FOR ${inputValue}`;  
        //similary updating the alt field for img
    }

});