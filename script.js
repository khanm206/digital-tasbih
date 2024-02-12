const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahFullTasbih = document.getElementById('subhanAllahFullTasbih');
const subhanAllahIncreBtn = document.getElementById('subhanAllahIncreBtn');
const subhanAllahDecreBtn = document.getElementById('subhanAllahDecreBtn');
const subhanAllahResetBtn = document.getElementById('subhanAllahResetBtn');

const alhamdulillahDisplay = document.getElementById('alhamdulillahDisplay');
const alhamdulillahFullTasbih = document.getElementById('alhamdulillahFullTasbih');
const alhamdulillahIncreBtn = document.getElementById('alhamdulillahIncreBtn');
const alhamdulillahDecreBtn = document.getElementById('alhamdulillahDecreBtn');
const alhamdulillahResetBtn = document.getElementById('alhamdulillahResetBtn');

const allahuakbarDisplay = document.getElementById('allahuakbarDisplay');
const allahuakbarFullTasbih = document.getElementById('allahuakbarFullTasbih');
const allahuakbarIncreBtn = document.getElementById('allahuakbarIncreBtn');
const allahuakbarDecreBtn = document.getElementById('allahuakbarDecreBtn');
const allahuakbarResetBtn = document.getElementById('allahuakbarResetBtn');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahValue = 0;
let subhanAllahFullValue = 0;

let alhamdulillahValue = 0;
let alhamdulillahFullValue = 0;

let allahuakbarValue = 0;
let allahuakbarFullValue = 0;

// SubhanAllah
subhanAllahIncreBtn.addEventListener('click', function () {
    subhanAllahValue += 1;
    if (subhanAllahValue >= 33) {
        subhanAllahFullValue += 1;
        subhanAllahValue = 0;
        subhanAllahFullTasbih.innerText = subhanAllahFullValue;
    };
    subhanAllahDisplay.innerText = subhanAllahValue;
});

subhanAllahDecreBtn.addEventListener('click', function () {
    subhanAllahValue -= 1;
    if (subhanAllahValue < 0) {
        subhanAllahFullValue -= 1;
        subhanAllahValue = 32;
        if(subhanAllahFullValue < 0){
            subhanAllahValue = 0;
            subhanAllahFullValue = 0;
            return alert("You can't decrement anymore!")
        }
        
    }
 
    subhanAllahDisplay.innerText = subhanAllahValue;
    subhanAllahFullTasbih.innerText = subhanAllahFullValue;
});

subhanAllahResetBtn.addEventListener('click', function () {
    subhanAllahValue = 0;
    subhanAllahDisplay.innerText = subhanAllahValue;
    subhanAllahFullValue = 0;
    subhanAllahFullTasbih.innerText = subhanAllahFullValue;
});


// Alhamdulillah
alhamdulillahIncreBtn.addEventListener('click', function () {
    alhamdulillahValue += 1;
    if (alhamdulillahValue >= 33) {
        alhamdulillahFullValue += 1;
        alhamdulillahValue = 0;
        alhamdulillahFullTasbih.innerText = alhamdulillahFullValue;
    };
    alhamdulillahDisplay.innerText = alhamdulillahValue;
});


alhamdulillahDecreBtn.addEventListener('click', function () {
    alhamdulillahValue -= 1;
    if (alhamdulillahValue < 0) {
        alhamdulillahFullValue -= 1;
        alhamdulillahValue = 32;
        if(alhamdulillahFullValue < 0){
            alhamdulillahValue = 0;
            alhamdulillahFullValue = 0;
            return alert("You can't decrement anymore!")
        }

    }
    alhamdulillahDisplay.innerText = alhamdulillahValue;
    alhamdulillahFullTasbih.innerText = alhamdulillahFullValue;
});

alhamdulillahResetBtn.addEventListener('click', function () {
    alhamdulillahValue = 0;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
    alhamdulillahFullValue = 0;
    alhamdulillahFullTasbih.innerText = alhamdulillahFullValue;
});

// Allahuakbar
allahuakbarIncreBtn.addEventListener('click', function () {
    allahuakbarValue += 1;
    if (allahuakbarValue >= 34) {
        allahuakbarFullValue += 1;
        allahuakbarValue = 0;
        allahuakbarFullTasbih.innerText = allahuakbarFullValue;
        
    };
    allahuakbarDisplay.innerText =  allahuakbarValue;
});



allahuakbarDecreBtn.addEventListener('click', function () {
    allahuakbarValue -= 1;
    if (allahuakbarValue < 0) {
        allahuakbarFullValue -= 1;
        allahuakbarValue = 33;
        if(allahuakbarFullValue < 0){
            allahuakbarFullValue = 0;
            allahuakbarValue = 0;
            return alert("You can't decrement anymore!")
        }

    }
    allahuakbarDisplay.innerText = allahuakbarValue;
    allahuakbarFullTasbih.innerText = allahuakbarFullValue;

});

allahuakbarResetBtn.addEventListener('click', function () {
    allahuakbarValue = 0;
    allahuakbarDisplay.innerText = allahuakbarValue;
    allahuakbarFullValue = 0;
    allahuakbarFullTasbih.innerText = allahuakbarFullValue;
});


// Reset all
resetBtn.addEventListener('click', function () {
    subhanAllahValue = 0;
    subhanAllahDisplay.innerText = subhanAllahValue;
    subhanAllahFullValue = 0;
    subhanAllahFullTasbih.innerText = subhanAllahFullValue;

    alhamdulillahValue = 0;
    alhamdulillahDisplay.innerText = alhamdulillahValue;
    alhamdulillahFullValue = 0;
    alhamdulillahFullTasbih.innerText = alhamdulillahFullValue;

    allahuakbarValue = 0;
    allahuakbarDisplay.innerText = allahuakbarValue;
    allahuakbarFullValue = 0;
    allahuakbarFullTasbih.innerText = allahuakbarFullValue;
});