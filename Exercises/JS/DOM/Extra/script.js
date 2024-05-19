
const form = document.getElementById('form');
const numList = Array.from(form.querySelectorAll('input[type="text"]'));
const hidCode = document.getElementById('hid-code');
const visCode = document.getElementById('vis-code');
const sms = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let smsCode = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        smsCode += characters[randomIndex];
    }
    return smsCode;
}

const newSms = sms().toUpperCase();
visCode.value = newSms;


numList[0].focus();


const fillCode = (el) => {
    if (/^[a-zA-Z0-9]$/.test(el.value)) {
        const codeStr = numList.map(input => input.value).join('').toLowerCase();
        hidCode.value = codeStr;
        const currentIndex = numList.indexOf(el);
        if (currentIndex < numList.length - 1) {
            numList[currentIndex + 1].focus();
        }
    } else {
        el.value = '';
    }
}


const fillFromClipboard = (event) => {
    event.preventDefault();
    const paste = (event.clipboardData || window.clipboardData).getData('text');

    if (paste.length !== 6 || !/^[a-zA-Z0-9]+$/.test(paste)) {
        return false;
    }

    for (let i = 0; i < paste.length; i++) {
        numList[i].value = paste[i];
    }

    const codeStr = numList.map(input => input.value).join('').toLowerCase();
    hidCode.value = codeStr;

    
    if (paste.length === 6) {
        numList[paste.length - 1].blur();
    }
}


const checkAndSubmit = () => {
    if (visCode.value === hidCode.value) {
        form.submit();
    } else {
        return false;
    }
}


const checkValue = (el) => {
    if (/^[a-zA-Z0-9]$/.test(el.value)) {
        el.classList.remove('error');
    } else {
        el.classList.add('error');
    }
}


numList.forEach(input => {
    input.addEventListener('keyup', () => {
        fillCode(input);
        checkValue(input);
        checkAndSubmit();
    });

    input.addEventListener('paste', fillFromClipboard);
});
 

