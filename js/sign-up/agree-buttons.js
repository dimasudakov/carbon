const rulesAgreeButton = document.getElementById('rules-agree');
const personalDataAgreeButton = document.getElementById('personal-data-agree');
const signUpButton = document.getElementById('sign-up__button');

signUpButton.disabled = true;

let rulesAgreeValue = false;
let personalDataAgreeValue = false;

rulesAgreeButton.addEventListener('click', function() {
    if (rulesAgreeValue) {
        this.checked = false;
        rulesAgreeValue = false;
    } else {
        rulesAgreeValue = true;
    }
    updateSignUpButton();
});

personalDataAgreeButton.addEventListener('click', function() {
    if (personalDataAgreeValue) {
        this.checked = false;
        personalDataAgreeValue = false;
    } else {
        personalDataAgreeValue = true;
    }
    updateSignUpButton();
});

function updateSignUpButton() {
    signUpButton.disabled = !(rulesAgreeValue && personalDataAgreeValue);
}

