const btn = document.getElementById('btn')
const container = document.getElementById('container')

btn.addEventListener('click', function(){
    createNotification()
})

function createNotification(){
    const notif = document.createElement('div')
    notif.setAttribute('class', 'toast')
    container.appendChild(notif)
    notif.innerHTML = 'Je te remercie du fond du coeur !!!'

    setTimeout(() => {
        notif.remove()
    }, 2000)
}