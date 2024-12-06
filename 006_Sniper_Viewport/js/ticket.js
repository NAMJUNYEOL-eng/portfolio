$('#myBtn').on('click',myFunction);
// EVT
function myFunction(){
    // 변수할당
    const dots = $('#dots');
    const moreButton = $('#more');
    const btnText = $('#myBtn');
    var result = $('#dots').css('display');
    console.log(result);

    if(result === 'none'){ // display가 none이라면
        dots.css({display:'inline'});
        btnText.text('+MORE');
        moreButton.css({display:'none'});
    }else { // display가 none이 아니라면
        dots.css({display:'none'});
        btnText.text('-CLOSE');
        moreButton.css({display:'inline'});
    }


}