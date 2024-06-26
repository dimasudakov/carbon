const REGISTER_PATH = "https://registration.karb0n.ru/api/register/"

signUpButton.addEventListener('click', () => {
    handleSignUpClick().then(r => {
    })
})

async function handleSignUpClick() {
    const signUpButtonText = signUpButton.textContent
    signUpButton.style.minWidth = signUpButton.offsetWidth.toString() + "px";
    signUpButton.innerHTML = "<img src=\"assets/loading-animation.svg\" alt=\"\" class=\"loading\">";

    const defer = function (notificationMsg) {
        setUpNotificationMessage(notificationMsg)
        showNotification()
        signUpButton.textContent = signUpButtonText
        signUpButton.style.minWidth = "unset"
    }
    const userData = getUser()
    const validationMessage = await validateUserData(userData)
    if (validationMessage !== '') {
        defer(validationMessage)
        return;
    }
    const response = await sendRequest(userData)
    defer(response)
}


function setUpNotificationMessage(msg) {
    notificationContent.textContent = msg
}

async function sendRequest(userData) {
    try {
        const formData = new FormData()
        if (selectedFile != null) {
            formData.append('file_abstract_of_report', selectedFile)
        }
        formData.append('language', currentLang.toLowerCase())
        Object.keys(userData).forEach(key => {
            formData.append(key, userData[key]);
        });
        const response = await fetch(REGISTER_PATH, {
            method: 'POST',
            headers: {
                'Origin': "https://karb0n.ru"
            },
            body: formData
        });
    } catch (error) {
        console.error('Ошибка:', error);
        return notificationMessages[currentLang.toLowerCase()].failRegistration
    }
    return notificationMessages[currentLang.toLowerCase()].successRegistration
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
        // attendance_type: selectedOptions["attendance"],
        section: selectedOptions["section"],
        participation_in_roundtable_discussion: selectedOptions["masterClasses"],
        conference_participation_format: selectedOptions["participationFormat"]
    };
}


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function validateUserData(userData) {
    if(userData.fio === '') {
        return notificationMessages[currentLang.toLowerCase()].emptyFIO
    }
    if(userData.phone_number === '') {
        return notificationMessages[currentLang.toLowerCase()].emptyPhoneNumber
    }
    if(userData.email === '') {
        return notificationMessages[currentLang.toLowerCase()].emptyEmail
    }
    if(userData.city === '') {
        return notificationMessages[currentLang.toLowerCase()].emptyCity
    }
    if(userData.organization === '') {
        return notificationMessages[currentLang.toLowerCase()].emptyOrganization
    }
    if (!validateEmail(userData.email)) {
        return notificationMessages[currentLang.toLowerCase()].invalidEmail
    }
    if(userData.conference_participation_format === "participant" && selectedFile == null) {
        return notificationMessages[currentLang.toLowerCase()].missingThesis
    }
    return ""
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}