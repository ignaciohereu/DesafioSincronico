document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
  
    const formData = new FormData(event.target);
    const jsonData = {};
  
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonData)
    };
  
    fetch('https://jsonplaceholder.typicode.com/users', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Información enviada con éxito');
      })
      .catch(error => {
        console.error('Error al enviar la información:', error);
        alert('Hubo un error al enviar la información');
      });
  });