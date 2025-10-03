import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout";

export default function WelcomeEmail({ username, projectName }: { username: string; projectName: string }) {
  return (
    <BaseLayout projectName={projectName}>
      <Section>
        <Text style={{ fontSize: "18px", fontWeight: "bold" }}>Welcome, {username}!</Text>
        <Text>Thanks for joining {projectName}. We’re excited to have you 🚀</Text>
      </Section>
    </BaseLayout>
  );
}
