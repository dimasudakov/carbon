const fileInput = document.getElementById('abstractFileInput');
const fileInputPlaceholder = document.getElementById('sign-up__upload-abstract-placeholder');
let prevPlaceholder = '';
let selectedFile;

// Добавляем обработчик события change для выбора файлов
fileInput.addEventListener('change', function () {
    const files = fileInput.files;

    const fileName = files.length > 0 ? files[0].name : '';
    selectedFile = files.length > 0 ? files[0] : null;

    // заменяем текст плейсхолдера на имя файла
    if (fileInputPlaceholder && fileName !== '') {
        if (prevPlaceholder === '') {
            prevPlaceholder = fileInputPlaceholder.textContent;
        }
        fileInputPlaceholder.innerHTML = fileName +
            '<img src="assets/sign-up/logo-cancel.png" alt="" class="cancel-logo">';

        addDeleteFileListener()
    }
})


function addDeleteFileListener() {
    const cancelLogo = document.querySelector('.cancel-logo');
    if (!cancelLogo) return
    cancelLogo.addEventListener('click', function (event) {
        event.stopPropagation();
        deleteUploadedFile();
    });
}

function deleteUploadedFile() {
    fileInput.value = ''
    selectedFile = null
    fileInputPlaceholder.textContent = prevPlaceholder
}