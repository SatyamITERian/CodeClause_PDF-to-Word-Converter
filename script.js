function convertToWord() {
    var fileInput = document.getElementById('pdfFile');
    var file = fileInput.files[0];

    if (!file) {
        alert('Please select a PDF file.');
        return;
    }

    document.getElementById('result').innerHTML = 'Converting...';

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://v2.convertapi.com/convert/pdf/to/txt?Secret=your-api-secret&download=attachment', true);
    xhr.onreadystatechange = function () {
      if (xhr.status === 200) {
      var responseText = xhr.responseText;
      // Use the responseText as needed
      document.getElementById('result').innerHTML = 'Conversion completed. <a href="' + xhr.responseText + '">Download Word file</a>';
    } else {
        document.getElementById('result').innerHTML ='Request failed with status code ' + xhr.status;
    }
    };
    xhr.send(file);
}
