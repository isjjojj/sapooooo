const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Dice el hijo de mi mamá que... estas bien sapo')
    alert('Pero también dice tus ojos al chocar con la luz se vuelven un muy bonito paisaje :)')
    alert('Y tu sonrisa es igual de bonita a un atardecer ')
    alert('Y también tu forma de ser es especial ')
    alert('Simplemente eres muy bonita')
    alert('Que tengas una bonita noche <3')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})