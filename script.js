var data = ['welcome to the quiz',
{ que: 'what is Javascript', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'a language' },
{ que: 'what is python', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'a language' },
{ que: 'what is java', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'a concept' },
{ que: 'what is css', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'none' },
{ que: 'what is html', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'a platform' },
{ que: 'what is dom', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'a concept' },
{ que: 'what is dsa', o1: 'a language', o2: 'a platform', o3: 'a concept', o4: 'none', ro: 'none' },
]
function show(n) {
if (n == 7) {
    return 0;
}
setTimeout(function () {

    document.getElementById('maindiv').innerHTML = (`<h3> ${data[n]["que"]}</h3> <form> <input type="radio" name="csk" value="${data[n]['o1']}" id="e1">${data[n]['o1']} <input type="radio" name="csk" value="${data[n]['o2']}" id="e2">${data[n]['o2']} <input type="radio" name="csk" value="${data[n]['o3']}" id="e3">${data[n]['o3']} <input type="radio" name="csk" value="${data[n]['o4']}" id="e4">${data[n]['o4']}</form>`)
}, n * 1000 * 10);
n = n + 1;     
show(n)
}
show(0)
function times() {
for (var i = 0; i < 10; i++) {
    setTimeout(function (n) {
        document.getElementById('r').innerHTML = n
    }, 1000 * i, i)

}
}
function reach() {
for (var j = 0; j <= 6; j++) {
    setTimeout(function () {
        times()
    }, 10000 * j)
}
}
reach()

function check() {

var c = 0
for (var lol = 1; lol <= 7; lol++) {
    var jo = setTimeout(function (nak) {
        if (document.getElementById('e1').checked) {
            var har = document.getElementById('e1').value
            var pu = data[nak]['ro']
            if (har == pu) {
                
                c = c + 1
            }
        }
        else if (document.getElementById('e2').checked) {
            var har = document.getElementById('e2').value
            
            var pu = data[nak]['ro']
            if (har == pu) {
                c = c + 1
            }
        }
        else if (document.getElementById('e3').checked) {
            var har = document.getElementById('e3').value
            var pu = data[nak]['ro']
            if (har == pu) {
                c = c + 1
            }
        }
        else if (document.getElementById('e4').checked) {
            var har = document.getElementById('e4').value
            var pu = data[nak]['ro']
           if (har == pu) {
                c = c + 1
            }
        }
        else {
            console.log('kk')
        }
    }, 9999 * lol,lol)
}
var ch=setTimeout(function(){
    console.log(c)
    document.write("your score is "+c)
},70500)
}

check()


