import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailWelcomeTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => {
  return (
    <div>
      <div>Hola {firstName}! Muchas gracias por suscribirte!</div>
      <p>
        Ahora estarás al tanto de todas las novedades y fechas del mundo de Lina
      </p>
    </div>
  );
};
