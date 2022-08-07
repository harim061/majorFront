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

const pTag1 = document.querySelector('.first-parallel')
const pTag2 = document.querySelector('.second-parallel')
const pTag3 = document.querySelector('.third-parallel')
const pTag4 = document.querySelector('.forth-parallel')

const textArr1 = '404 Freshman Not Found 404 Freshman Not Found'.split(' ')
const textArr2 = '403 Forbidden 403 Forbidden 403 Forbidden'.split(' ')
const textArr3 = "500 Internal Brain Error 500 Internal Brain Error".split(' ')
const textArr4 = 'Developers who Achieve Developers who Achieve'.split(' ')

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

initTexts(pTag1, textArr1)
initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)
initTexts(pTag4, textArr4)

function initTexts(element, textArray) {
textArray.push(...textArray)
for (let i = 0; i < textArray.length; i++) {
    element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0\u00A0`
}
}

function marqueeText(count, element, direction) {
if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
}
element.style.transform = `translate3d(${direction * count}px, 0, 0)`

return count
}

function animate() {
count1++
count2++
count3++
count4++

count1 = marqueeText(count1, pTag1, -1)
count2 = marqueeText(count2, pTag2, 1)
count3 = marqueeText(count3, pTag3, -1)
count4 = marqueeText(count4, pTag4, 1)

window.requestAnimationFrame(animate)
}

function scrollHandler() {
count1 += 15
count2 += 15
count3 += 15
count4 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()