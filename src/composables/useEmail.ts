import emailjs from 'emailjs-com'

export type EmailFormData = {
  name: string
  email: string
  message: string
}

export function useEmail() {
  const sendEmail = async (formData: EmailFormData) => {
    return emailjs.send(
      'service_g0gswx3',
      'template_9wemrpm',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'nn3qiqxmpwAtx_1Mk',
    )
  }
  return { sendEmail }
}
