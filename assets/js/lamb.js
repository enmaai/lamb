(function(){
    var cache = {};
    //get a dom node
    function _get(selector){
        if(!cache[selector]){
            cache[selector] = $(selector);
        }
        return cache[selector];
    }

    function welcome(){
        _get('#page').height($(window).height());
        _get('#page').show();
        _get('.cloud1').animate({
            left : 0
        },2000,'linear');
        _get('.cloud2').animate({
            right : 0
        },2000,'linear');
        setTimeout(function(){
           _get('.title').animate({
                opacity : 1
            },3000);
            _get('.sub-title').animate({
                opacity : 1
            },3000); 
        },1000);
        _get('.sub-title').tap(function(){
            menu();
        });
    }

    function menu(){
        _get('#welcome').hide();
        _get('#menu').show();
        _get('.start').tap(function(){
            act1();
        });
    }

    function act1(){
        _get('#menu').hide();
        _get('#act1').show();
    }

    welcome();
})()
