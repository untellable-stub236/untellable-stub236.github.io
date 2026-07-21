export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validateRequired(value: string): boolean {
  return value.trim().length > 0;
}

export function validateForm(form: Record<string, string>) {
  const errors: Record<string, string> = {};

  Object.keys(form).forEach((key) => {
    if (!validateRequired(form[key])) {
      errors[key] = `${key} is required`;
    }
  });

  if (form.email && !validateEmail(form.email)) {
    errors.email = "Invalid email format";
  }

  return errors;
}
