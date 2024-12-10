import { format, parse, isBefore, isAfter, isEqual, addDays, subDays } from 'date-fns';

// Formatea una fecha en un formato legible
export const formatDate = (date, formatStr = 'dd/MM/yyyy') => {
  try {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    if (isNaN(parsedDate)) throw new Error('Fecha inválida');
    return format(parsedDate, formatStr);
  } catch (error) {
    console.error('Error al formatear la fecha:', error);
    return '';
  }
};

//Valida si una fecha es válida
export const isValidDate = (date) => {
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime()) && parsedDate instanceof Date;
};

//Compara dos fechas para saber si la primera es después que la segunda
 
export const isAfterDate = (date1, date2) => {
  return isAfter(new Date(date1), new Date(date2));
};

//Agrega días a una fecha
export const addDaysToDate = (date, days) => {
  return addDays(new Date(date), days);
};

// Resta días a una fecha
export const subtractDaysFromDate = (date, days) => {
  return subDays(new Date(date), days);
};

//Verifica si dos fechas son iguales
export const areDatesEqual = (date1, date2) => {
  return isEqual(new Date(date1), new Date(date2));
};

//Calcula el rango de fechas entre dos fechas
 
export const getDateRange = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isBefore(end, start)) {
    throw new Error('La fecha final debe ser posterior a la inicial');
  }

  const dates = [];
  let currentDate = start;

  while (!isAfter(currentDate, end)) {
    dates.push(formatDate(currentDate));
    currentDate = addDays(currentDate, 1);
  }

  return dates;
};