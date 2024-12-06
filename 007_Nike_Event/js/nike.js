/* Video Control Button */
/* CSS */
$('figure').find('button').css({
    position: 'absolute',
    right: '400px',
    top: '50px',
    cursor: 'pointer',
    background: 'none',
    outline: 'none'
});
$('figure').find('i').css({
    fontSize: '30px',
    color: '#fff'
});
$('figure').find('button').eq(0).css({
    right: '540px'
})
$('figure').find('button').eq(1).css({
    right: '470px'
})
/* Video Control Script */
$('figure button').eq(0).click(function(){
    $('figure').find('video').get(0).play();
});
$('figure button').eq(1).click(function(){
    $('figure').find('video').get(0).pause();
});
$('figure button').eq(2).click(function(){
    $('figure').find('video').get(0).load();
});