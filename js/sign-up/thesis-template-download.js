const downloadThesisExampleButton = document.getElementById('sign-up__upload-abstract-template')

downloadThesisExampleButton.addEventListener("click", () => {
    var path = '/docs/thesis_example.docx';

    var link = document.createElement('a');
    link.href = path;
    link.download = 'thesis_example.docx';
    link.target = '_blank';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
})