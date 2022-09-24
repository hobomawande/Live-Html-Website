function SendEmail(){
debugger
    let timerInterval
    Swal.fire({
        title: 'Finding shortest route ...',
        allowOutsideClick: false,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
                const content = Swal.getHtmlContainer()
                if (content) {
                    const b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 1000)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }

    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('I was closed by the timer')
        }
    })
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Route discovered.',
        showConfirmButton: false,
        timer: 1800
    })
    var name          = $('#txtName').val()
    var emailAddress  = $('#txtEmail').val()
    var message       = $('#txtMessage').val()
    if(name.length > 3){

if(emailAddress.length > 5){
if(message.length > 10 ){

// send email
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'message sent.',
    showConfirmButton: false,
    timer: 1800
})

}else{
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Try to describe your inquiry',
        showConfirmButton: false,
        timer: 1800
    })
    return false;
}


}else{
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Invalid email.',
        showConfirmButton: false,
        timer: 1800
    })
    return false;
}

    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Enter a correct name.',
            showConfirmButton: false,
            timer: 1800
        })
        return false;
    }

}