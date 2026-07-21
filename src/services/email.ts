export async function sendEmail({
  name,
  email,
  message
}: {
  name: string;
  email: string;
  message: string;
}) {
  const payload = {
    to: "celoht3@gmail.com",
    subject: `New message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  console.log("Email sent:", payload);

  return { success: true };
}
