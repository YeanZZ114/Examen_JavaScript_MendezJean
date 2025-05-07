document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const evento = {
      nombre: document.getElementById('nombre').value,
      lugar: document.getElementById('lugar').value,
      fechaInicio: document.getElementById('fechaInicio').value,
      fechaFin: document.getElementById('fechaFin').value,
      horario: document.getElementById('horario').value,
    };
  
    // Guardar en localStorage
    localStorage.setItem('eventoRegistrado', JSON.stringify(evento));
  
    alert('Evento registrado exitosamente!');
    this.reset();
  });
  
  document.getElementById('cancelar').addEventListener('click', function () {
    document.getElementById('formulario').reset();
  });
  