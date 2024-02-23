function saveContent() {
    const bookName = document.getElementById('bookName').value.trim();
    const diagrammerName = document.getElementById('diagrammerName').value.trim();
    const pageCount = document.getElementById('pageCount').value;
    const observations = document.getElementById('observations').value;

    // Capturar o estado de todos os checkboxes do checklist
    let checklistItems = '';
    // Supondo que todos os seus checkboxes estejam dentro de um contêiner com uma classe específica, por exemplo, 'conteiner'
    const allCheckboxes = document.querySelectorAll('.conteiner input[type="checkbox"]');
    allCheckboxes.forEach((itemCheckbox, index) => {
        // Assumindo que o label está na mesma estrutura div que mostrou anteriormente
        const labelContainer = itemCheckbox.closest('.conteiner').querySelector('.checks');
        const itemLabel = labelContainer ? labelContainer.textContent.trim() : `Item ${index + 1}`;
        const isChecked = itemCheckbox.checked;
        checklistItems += `${itemLabel}: ${isChecked ? 'Marcado' : 'Não Marcado'}\n`;
    });

    // Compila as informações em uma string
    const content = `Nome do Livro: ${bookName}\nNome do Diagramador: ${diagrammerName}\nQuantidade de Páginas: ${pageCount}\n\nChecklist:\n${checklistItems}\nObservações: ${observations}`;

    // Prepara o nome do arquivo, usando o nome do livro
    const fileName = bookName ? `${bookName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.txt` : "checklist.txt";

    // Criar e salvar o arquivo
    const blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
