var hd = new Date()

console.log(hd.getDay());

var i = hd.getDay()

if(i==6) {
    var ht = '今天放假'
}else if(i==0) {
    var ht = '今天收假'
}else {
    var ht = '還有'+(6-i)+'個晚上才到下一次放假。'
}

var hdom = document.getElementById('holiday')

hdom.innerHTML=ht