const news = document.getElementById('ras')
const ni = document.getElementById('ras2')
const x = document.getElementById('hih')
const o = document.getElementById('o')
news.onclick = function(){
    ni.className = 'rassnov22'
    news.className = 'rassnov2'
}
hih.onclick = function (){
    ni.className = 'rassnov2'
    news.className = 'rassnov'
}
o.onclick = function (){
    ni.className = 'rassnov2'
    news.className = 'rassnov'
    alert('Спасибо, что прошли форму. Нажмите ОК, чтобы продолжить.');
}
