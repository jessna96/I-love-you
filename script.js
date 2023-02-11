const textArr = [
    "Hey, it's your girlfriend...",
    "I know I haven’t said this much...",
    "So here it goes...",
    "I love that you love to cuddle...",
    "I love that you’re propably as crazy as I am...",
    "I love kissing your soft lips and touching your skin...",
    "I love when you play with my hair...",
    "I love that you are soo cute...",
    "Also.. you showed me what it means to be passionate...",
    "I just wanted to let you know..."
]

const render = () => {

    textArr.forEach((text, index) => {
        document.querySelector('.content_container').innerHTML += `<div class="content_container_${index}">
        </div>`
        const text_arr = text.split('');
        let text_html = "";
        const text_html_arr = text_arr.map((letter) => {
            return `<span class="span text_${index}" style="display: none">${letter}</span>`;
        });
        text_html = `<p class='p_text_${index}'>` + text_html_arr.join('') + "</p>";
        document.querySelector(`.content_container_${index}`).innerHTML += text_html;
    });

    document.querySelector('.content_container').innerHTML += `<div class="last"  style="display: none"><div class="love"><p>I love you</p><br/><img class="heartImg" src="assets/heart_white.png" alt="Heart <3" width="100hv" height="100hv"></div></div>`;

}

// function playMusic() {
//     const audio = new Audio('assets/Calum_Scott_-_You_Are_The_Reason.mp3');
//     audio.play();
// }

render();

fadeText();

function fadeText(counter = 0) {
    if (counter === textArr.length) {
        return;
    }
    const textClass = 'text_' + counter;
    let effect = () => $("." + textClass).each(function (index) {
        $(this).delay(150 * index).fadeIn(100);
    });
    $.when(effect()).done(function () {
        if (counter === textArr.length - 1) {
            $(".p_" + textClass).fadeOut(500);
            setTimeout(() => {
                $(".last").fadeIn(2000);
            }, 1500)

        }
        else {
            setTimeout(() => {
                $(".p_" + textClass).fadeOut(1000);
                setTimeout(() => {
                    fadeText(++counter);
                }, 1500)
            }, 1200)
        }
    });
}
