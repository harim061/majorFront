window.addEventListener("wheel", function slide(e){
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
function goMajor(){
    $html.animate({scrollTop : 1 * $(window).height()});
}

$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
});

function goSl(){
    $html.animate({scrollTop : 2 * $(window).height()});
}

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
        // $html.animate({scrollTop : 4 * $(window).height()});
    }
});

function goEmploy(){
    $html.animate({scrollTop : 5 * $(window).height()});
}

// 취업페이지
const modal1 = document.getElementById("modal1")
const modal2 = document.getElementById("modal2")
const modal3 = document.getElementById("modal3")
const modal4 = document.getElementById("modal4")
const itmodal = document.getElementById("itmodal")
const acamodal = document.getElementById("acamodal")
const finmodal = document.getElementById("finmodal")
const etcmodal = document.getElementById("etcmodal")

const btnModal1 = document.getElementById("it")
btnModal1.addEventListener("click", e => {
    modal1.style.display = "flex";
    itmodal.style.display = "block";
})
const btnModal2 = document.getElementById("aca")
btnModal2.addEventListener("click", e => {
    modal2.style.display = "flex";
    acamodal.style.display = "block";
})
const btnModal3 = document.getElementById("fin")
btnModal3.addEventListener("click", e => {
    modal3.style.display = "flex";
    finmodal.style.display = "block";
})
const btnModal4 = document.getElementById("etc")
btnModal4.addEventListener("click", e => {
    modal4.style.display = "flex";
    etcmodal.style.display = "block";
})

const closeBtn1 = modal1.querySelector("#closeit")
closeBtn1.addEventListener("click", e => {
    modal1.style.display = "none";
    itmodal.style.display=="none";
})
const closeBtn2 = modal2.querySelector("#closeaca")
closeBtn2.addEventListener("click", e => {
    modal2.style.display = "none";
    acamodal.style.display=="none";
})
const closeBtn3 = modal3.querySelector("#closefin")
closeBtn3.addEventListener("click", e => {
    modal3.style.display = "none";
    finmodal.style.display=="none";
})
const closeBtn4 = modal4.querySelector("#closeetc")
closeBtn4.addEventListener("click", e => {
    modal4.style.display = "none";
    etcmodal.style.display=="none";
})