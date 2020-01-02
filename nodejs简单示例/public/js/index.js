$('.for-click').click(function(e){
    var li = $('.for-click');
    var div = $('.detail-text-right>div');

    for(var i = 0;i<li.length;i++){
        if(li[i]==this){
            $(li[i]).addClass('active');
            $(div[i]).removeClass('hid');
            $(div[i]).addClass('show')
        }else{
            $(li[i]).removeClass('active');
            $(div[i]).removeClass('show');
            $(div[i]).addClass('hid')
        }
    }
})