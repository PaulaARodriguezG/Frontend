// Valida si un campo no está vacío
export const isNotEmpty = (value) => {
  if (value == null) return false;
  return value.trim().length > 0;
};
  
  // Valida si un correo electrónico es válido
   
  export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? true : 'Correo electrónico inválido';
  };

  // Valida si una contraseña cumple con los requisitos mínimos
   
  export const isValidPassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasCommonPatterns = /(1234|password|qwerty)/i.test(password);
    if (hasCommonPatterns) return false;
  
    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };
  
  //Valida si un número está dentro de un rango permitido
   
  export const isNumberInRange = (value, min, max) => {
    return value >= min && value <= max;
  };
  
  //Valida una fecha 
   
  export const isFutureDate = (date) => {
    const inputDate = new Date(date);
    if (isNaN(inputDate)) return false; 
    const today = new Date();
    return inputDate > today;
  };
  
   //Valida si un texto tiene una longitud mínima
   
  export const hasMinLength = (value, minLength) => {
    return value.trim().length >= minLength;
  };  
  
   //Valida si dos valores son iguales 
   
  export const areEqual = (value1, value2) => {
    return value1 === value2;
  };