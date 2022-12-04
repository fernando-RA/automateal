export const validateEmail = (email: string): Boolean => {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    'gm'
  );
  const isValidEmail = emailRegex.test(email);
  return isValidEmail;
};
