export const validateAppointment = (newAppointment, existingAppointments) => {
    const { cliente, modelo, fecha, hora } = newAppointment;
    const errors = [];
  
    if (!cliente || cliente.length < 3) {
      errors.push('El nombre del cliente debe tener al menos 3 caracteres.');
    }
  
    const selectedDateTime = new Date(`${fecha}T${hora}`);
    const now = new Date();
    if (selectedDateTime <= now) {
      errors.push('La fecha y hora deben ser posteriores al momento actual.');
    }
  
    const duplicate = existingAppointments.find(
      a => a.fecha === fecha && a.modelo === modelo
    );
    if (duplicate) {
      errors.push('Ya existe una cita para ese vehículo en esa fecha.');
    }
  
    return errors;
  };
  