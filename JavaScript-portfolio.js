function mostrarProyecto(proyecto) {
      // Ocultar todas las informaciones de proyectos
      const infos = document.querySelectorAll('.proyecto-info');
      infos.forEach(info => {
        info.classList.remove('show');
      });

      // Remover clase active de todas las cards
      const cards = document.querySelectorAll('.proyecto-card');
      cards.forEach(card => {
        card.classList.remove('active');
      });

      // Mostrar la información del proyecto seleccionado
      const infoElement = document.getElementById('info-' + proyecto);
      if (infoElement) {
        infoElement.classList.add('show');
      }

      // Agregar clase active a la card seleccionada
      event.target.closest('.proyecto-card').classList.add('active');
    }