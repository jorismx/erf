 function playVideo() {
    console.log('triggered')
    setTimeout(function() {
        $('.splashscreen').css({
            position: 'fixed',
        })
        $('.splashscreen').fadeOut(1000)
        console.log('time out triggered')
    }, 5000)
}