import { EmailWelcomeTemplate } from "../../components/Contact/Emails/email-welcome-template";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export function POST() {
  try {
    console.log("entró al post...");
    console.log(import.meta.env.RESEND_API_KEY);
    console.log(resend);

    resend.emails
      .send({
        from: "Lina <info@linarivero.com.ar>",
        to: ["franciscorivero.it@gmail.com"],
        subject: "Gracias por suscribirte!",
        react: EmailWelcomeTemplate({ firstName: "Fredi" }),
        text: "",
      })
      .then((res) => {
        console.log("Respuesta de Resend:", res);
      });
  } catch (err) {
    console.error("Error sending email:", err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
