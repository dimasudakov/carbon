const rootStyles = getComputedStyle(document.documentElement);
const notification = document.getElementById('notification')
const notificationCloseButton = document.getElementById('notification-close-button')
const notificationContent = document.getElementById('notification-content')

let notificationCloseTimer;

notificationCloseButton.addEventListener('click', () => {
    closeNotification()
})

function showNotification() {
    if (window.innerWidth < 600) {
        notification.style.opacity = "1";
    } else {
        notification.style.left = rootStyles.getPropertyValue('--left-offset');
    }
    notificationCloseTimer = setTimeout(() => {
        closeNotification()
    }, 5000)
}

function closeNotification() {
    if (window.innerWidth < 600) {
        notification.style.opacity = "0";
    } else {
        notification.style.left = '100vw';
    }
    clearTimeout(notificationCloseTimer)

    setTimeout(() => {
        notificationContent.innerText = ""
    }, 300)
}