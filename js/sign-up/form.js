const REGISTER_PATH = "https://registration.karb0n.ru/api/register"

signUpButton.addEventListener('click', () => {
    handleSignUpClick().then(r => {})
})

async function handleSignUpClick() {
    const userData = getUser()
    const validationMessage = validateUserData(userData)
    if (validationMessage !== '') {
        setUpNotificationMessage(validationMessage)
        showNotification()
        return;
    }
    const response = await sendRequest(userData)
    setUpNotificationMessage(response)
    showNotification()
}


function setUpNotificationMessage(msg) {
    notificationContent.textContent = msg
}

async function sendRequest(userData) {
    try {
        const formData = new FormData()
        formData.append('file_abstract_of_report', selectedFile)
        formData.append('language', currentLang.toLowerCase())
        Object.keys(userData).forEach(key => {
            formData.append(key, userData[key]);
        });
        const response = await fetch(REGISTER_PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    } catch (error) {
        console.error('Ошибка:', error);
        return "Не получилось выполнить запрос";
    }
    return "success registration"
}

function getUser() {
    const usernameInput = document.getElementById('username'); // fio
    const phoneNumberInput = document.getElementById('phone-number');
    const emailInput = document.getElementById('email');
    const geoInput = document.getElementById('geo'); // city
    const universityTextarea = document.getElementById('university');

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const selectedOptions = {};

    radioButtons.forEach(radioButton => {
        if (radioButton.checked) {
            selectedOptions[radioButton.name] = radioButton.id;
        }
    });

    return {
        fio: usernameInput.value,
        phone_number: phoneNumberInput.value,
        email: emailInput.value,
        city: geoInput.value,
        organization: universityTextarea.value,
        attendance_type: selectedOptions["attendance"],
        section: selectedOptions["section"],
        participation_in_roundtable_discussion: selectedOptions["masterClasses"],
        conference_participation_format: selectedOptions["participationFormat"]
    };
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateUserData(userData) {
    if(userData.fio === '') {
        return "Заполните ФИО"
    }
    if(userData.phone_number === '') {
        return "Заполните номер телефона"
    }
    if(userData.email === '') {
        return "Заполните email"
    }
    if(userData.organization === '') {
        return "Заполните наименование организации и учебного заведения"
    }
    if (!validateEmail(userData.email)) {
        return "Неверный email"
    }
    if(userData.conference_participation_format === "participant" && selectedFile == null) {
        return "Загрузите тезис своей работы"
    }
    return ""
}
