function recip() {
    var d = new Date()
    // console.log(d)

    var nd = new Date()
    nd.setMonth(11, 26)
    nd.setHours(8)
    nd.setMinutes(0)
    nd.setSeconds(0)
    // console.log(nd);

    var t = nd - d
    var tsec = Math.floor(t / 1000)
    var sec = Math.floor(tsec % 60)
    console.log(sec);

    var tmin = Math.floor(tsec / 60)
    var min = Math.floor(tmin % 60)
    console.log(min);

    var thour = Math.floor(tmin / 60)
    var hour = Math.floor(thour % 24)
    console.log(hour);

    var tday = Math.floor(thour / 24)

    console.log(tday);

    var timedom = document.getElementById('time')

    timedom.innerHTML = tday + '天' + hour + '時' + min + '分' + sec + '秒'

}

setInterval(function () {
    recip()
}, 100)