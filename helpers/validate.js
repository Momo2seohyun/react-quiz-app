export const Required = value => value ? undefined : "Required";
export const isNumber = value => !isNaN(Number(value)) ? undefined : "Must be a number";
export const isInteger = value => Number(value) === parseInt(value, 10) ? undefined : "Must be a integer";
export const isLetter = value => /^[A-Z \'\-]+$/i.test(value) ? undefined : "Please input alphabet characters only";
export const isIdNumber = value => Number(value.length) === 13 ? undefined : "Must be a 13 digits";
export const isPhone = value => value.match(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s]{0,1}[0-9]{3}[-\s]{0,1}[0-9]{4}$/) ? undefined : "Please input your phone number";
export const email = email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? 'Invalid email address' : undefined;
export const isMobile = () => {return navigator.userAgent.match(/Android|iPhone|iPad|iPod/i);}