interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div style={{ backgroundColor: "black" }}>
    <h1 style={{ color: "white" }}>Welcome, {firstName}!</h1>
  </div>
);
