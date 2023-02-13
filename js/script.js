const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    console.log('loop');

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

    

    if(pipePosition <= 100 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${pipePosition}px`;

        mario.src = "./images/lapide2.png"
        mario.style.width = '140px';
        mario.style.marginLeft = '30px';

        const btn = document.querySelector("#refresh")

        btn.addEventListener("click", () => {
            location.reload()
        })

        clearInterval(loop);
    }



}, 10);
document.addEventListener('keydown', jump);