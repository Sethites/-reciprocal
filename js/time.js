var str = location.href

var nstr = Number(str.slice(-2))
console.log(nstr);
var nd = new Date()
switch (nstr) {
    case 00:
        nd.setFullYear(2021)
        nd.setMonth(0, 4)
        break

    case 01:
    case 02:
    case 03:
    case 04:
        nd.setMonth(11, 31)
        break

    case 05:
        nd.setMonth(11, 30)
        break

    case 06:
        nd.setMonth(11, 29)
        break

    case 07:
        nd.setMonth(11, 28)
        break

    case 08:
    case 09:
    case 10:
        nd.setMonth(11, 25)
        break

    case 11:
        nd.setMonth(11, 24)
        break

    case 12:
        nd.setMonth(11, 23)
        break

    case 13:
        nd.setMonth(11, 22)
        break

    case 14:
        nd.setMonth(11, 21)
        break

    case 15:
        nd.setMonth(11, 18)
        break
}
nd.setHours(0)
var count = countDate(nd)
nd.setHours(18)
nd.setMinutes(0)
nd.setSeconds(0)

function countDate(ndTime) {
    var d = new Date()

    var t = ndTime - d
    var tsec = Math.floor(t / 1000)
    var sec = Math.floor(tsec % 60)

    var tmin = Math.floor(tsec / 60)
    var min = Math.floor(tmin % 60)

    var thour = Math.floor(tmin / 60)
    var hour = Math.floor(thour % 24)

    var tday = Math.floor(thour / 24)

    var d1 = new Date()

    var wd = d1.getDate()

    var count = 0

    console.log(tday);
    for (var i = 0; i < tday + 2; i++) {
        if (wd % 7 == 0 || wd % 7 == 1) {
            count += 0
        } else {
            count += 1
        }
        wd += 1
    }

    if (tday+2 <= 0 && thour <= 0) {
        count = 0
    }
    return count
}

function recip() {
    var d = new Date()

    var t = nd - d
    var tsec = Math.floor(t / 1000)
    tsec = setZero(tsec)
    var sec = Math.floor(tsec % 60)

    var tmin = Math.floor(tsec / 60)
    var min = Math.floor(tmin % 60)

    var thour = Math.floor(tmin / 60)
    var hour = Math.floor(thour % 24)

    var tday = Math.floor(thour / 24)

    function setZero(varName) {
        if (varName <= 0) {
            varName = 0
        }
        return varName
    }



    var timedom = document.getElementById('time')
    timedom.innerHTML = tday + '天' + hour + '時' + min + '分' + sec + '秒' + '（在營' + count + '天）'
}


setInterval(function () {
    recip()
}, 1000)