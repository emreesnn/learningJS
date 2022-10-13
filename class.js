let btn1 = document.querySelector("button#btn1");
let btn2 = document.querySelector("button#btn2");
document.querySelector("button#btn1").addEventListener("click",classEkle)
document.querySelector("button#btn2").addEventListener("click",classRemove)

function classEkle() {
    console.log('asd');
    btn1.classList.add('btnColor','btnVisible');
    btn2.classList.add('btnColor','btnVisible2');
    console.log(btn1.classList)
}

function classRemove()
{
    btn1.classList.remove('btnVisible');
    btn2.classList.remove('btnVisible2')
}

