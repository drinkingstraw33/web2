var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a, .js');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i += 1;
        }
    }
}

function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value === '야간 모드로 전환') {
        self.value = '야간 모드 해제';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
        alert('야간 모드!');
    } else {
        self.value = '야간 모드로 전환';
        Body.setBackgroundColor('lightgoldenrodyellow');
        Body.setColor('black');
        Links.setColor('black');
        alert('야간 모드 해제!');
    }
}
