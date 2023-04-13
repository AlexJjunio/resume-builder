// Configurações e variaves 

const opt = {
  margin: 1,
  filename: 'myfile.pdf',
  html2canvas: {scale: 2},
  jsPDF: {unit: 'mm', format: 'letter', orientation: 'portrait'}
}

const file = document.querySelector('#box-to-gerenate-pdf')
const pdfGeneratorBtn = document.querySelector('#pdf-generator-btn')

// Eventos 

function generatePDF() {
  html2pdf().set(opt).from(file).save();
}

// Ações

pdfGeneratorBtn.addEventListener('click', generatePDF)

