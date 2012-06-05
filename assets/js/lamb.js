(function(){
    var cache = {},
        _current;
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
        _get('.sub-title').click(function(){
            menu();
        });
    }

    function showAndHide(theShow,theHide){
        _get(theShow).show();
        _get(theHide).hide();
        _current = theShow;
    }

    function menu(){
        showAndHide('#menu','#welcome');
        _get('.main').show();
        _get('.start').click(function(){
            act1();
        });
    }

    function act1(){
        showAndHide('#act1','#menu');
        setTimeout(function(){
            act2();
        },1000);
    }

    function act2(){
        renderSheep();
        showAndHide('#act2','#act1');
    }

    function renderSheep(){
        var w = _get(window).width()-50,
            h = _get(window).height()-50,
            str = '';
        for(var i=0;i<10;i++){
            var tmp = randomPosition(w,h);
            str += '<div class="sheep" id="sheep' + i + '" style="left:'+tmp[0]+'px;top:'+tmp[1]+'px"></div>';
        }
        _get('#act2').html(str);
    }

    function randomPosition(w,h){
        return [Math.random()*w,Math.random()*h];
    }

    _get('.main').click(function(e){
        _get(this).hide();
        showAndHide('#welcome',_current);
    });

    welcome();
})()
