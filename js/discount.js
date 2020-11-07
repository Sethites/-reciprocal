var lh = location.href

var lhstr = Number(lh.slice(-2))

var countlh = 0

for(i=0;i<=15;i++){
    if(lhstr==i){
        countlh+=1
    }    
}

if(countlh!=1){
    disc()
}


function disc() {
    var discount = prompt('請輸入折抵的日期（1~15）')

var mdc = Math.floor(Number(discount)) 
console.log(mdc);
var count = 0

for(i=0;i<=15;i++){
    if(mdc==i){
        count+=1
    }    
}

if(0<=mdc&&mdc<10){
    location.href="#"+'0'+mdc
}else if(count==0){
    alert('請輸入1~15')
    location.reload()
}else{
    location.href='#'+mdc
}

}

