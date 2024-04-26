const uploadAbstractPanel = document.getElementById('upload-panel-wrapper')

const participantRadioButton = document.getElementById('participant');
const delegatRadioButton = document.getElementById('delegate');
const expertRadioButton = document.getElementById('expert');

participantRadioButton.addEventListener('change', handleRadioButtonChange);
delegatRadioButton.addEventListener('change', handleRadioButtonChange);
expertRadioButton.addEventListener('change', handleRadioButtonChange);

function handleRadioButtonChange() {
    if (participantRadioButton.checked) {
        // Выполняем действие, если выбрана радиокнопка "participant"
        uploadAbstractPanel.style.display = 'flex';
    } else {
        uploadAbstractPanel.style.display = 'none';
    }
}