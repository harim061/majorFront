window.addEventListener("wheel", function(e){
    e.preventDefault();
},{passive : false});

var $html = $("html");

var page = 1;

var lastPage = $(".content").length;

$html.animate({scrollTop:0},10);
$(window).on("wheel", function(e){

    if($html.is(":animated")) return;

    if(e.originalEvent.deltaY > 0){
        if(page== lastPage) return;

        page++;
    }else if(e.originalEvent.deltaY < 0){
        if(page == 1) return;

        page--;
    }
    var posTop = (page-1) * $(window).height();

    $html.animate({scrollTop : posTop});

});

jQuery(document).ready(function($){

    var bArray = [];
    var sArray = [4,6,8,10];
    
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    setInterval(function(){

        var size = randomValue(sArray);
        
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
    
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity' : '-=0.7'
        }, 3000, function(){
            $(this).remove()
        }
        );

    }, 350);

});

$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
});

// 로드맵 자바스크립트
function tgSw(){
    var status = document.getElementById("sw");
    if(status.style.visibility=='hidden'){
    status.style.visibility='visible';
    }
    else{
        status.style.visibility='hidden';
    }
}

function tgDb(){
    var status = document.getElementById("db");
    if(status.style.display=='none'){
    status.style.display='block';
    }
    else{
        status.style.display='none';
    }
}

function tgWa(){
    var status = document.getElementById("wa");
    if(status.style.display=='none'){
    status.style.display='block';
    }
    else{
        status.style.display='none';
    }
}

function tgNs(){
    var status = document.getElementById("ns");
    if(status.style.display=='none'){
    status.style.display='block';
    }
    else{
        status.style.display='none';
    }
}

//한이음 자바스크립트
$("#han2").on('mousewheel',function(e){
            var wheelDelta = e.originalEvent.wheelDelta;
            if(wheelDelta > 0){
                console.log("up");
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
            else{
                console.log("down");
                $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());
            }
});
