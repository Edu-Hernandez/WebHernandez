

    document.getElementById('downloadBtn').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'cv/MiCV-Hernandez (7).pdf'; // Reemplaza 'tu-cv.pdf' con el nombre de tu archivo o la URL donde esté alojado
        link.download = 'EduHernandez-CV.pdf'; // Nombre con el que se descargará el archivo
        link.click();
    });

    document.getElementById('sendButton').addEventListener('click', (e) => {
        e.preventDefault(); // Evita el envío del formulario

        // Recoger los valores de los inputs
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const tema = document.getElementById('tema').value;
        const mensaje = document.getElementById('mensaje').value;

        // Validar campos
        if (!nombre || !telefono || !email || !tema || !mensaje) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        // Validar formato del email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, introduce una dirección de correo válida.");
            return;
        }

        // Crear un objeto con los datos
        const formData = {
            nombre,
            telefono,
            email,
            tema,
            mensaje
        };

        // Obtener los datos existentes del localStorage o inicializar un nuevo array
        let mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];

        // Agregar el nuevo mensaje al array
        mensajes.push(formData);

        // Almacenar el array actualizado en localStorage
        localStorage.setItem('mensajes', JSON.stringify(mensajes));

        // Redirigir a la página de visualización
        window.location.href = 'visualizar.html';
    });

    
    document.getElementById('loginButton').addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Comprobar credenciales
        if (username === 'eduhernandez' && password === 'hernandez') {
            // Redirigir a la página de administración
            window.location.href = 'admin.html';
        } else {
            alert('Credenciales incorrectas');
        }
    }); 