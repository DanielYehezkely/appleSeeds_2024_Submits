const triggerPromiseBtn = document.getElementById('triggerPromise');
const triggerRejection = document.getElementById('triggerRejection');
const messageEL = document.getElementById('message');

triggerPromiseBtn.addEventListener('click', ()=>{
    const promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
        if (triggerRejection.checked) {
            reject('The Promise has been rejected!')
        } else {
            resolve('The Promise has been resolved!')
        }
        },1000)
    });

    promise.then((message)=>{
        messageEL.textContent = message;
        messageEL.classList.add('resolved')
        messageEL.classList.remove('rejected')
    })
    promise.catch((error)=>{
        messageEL.textContent = error;
        messageEL.classList.add('rejected')
        messageEL.classList.remove('resolved')
    })
});

