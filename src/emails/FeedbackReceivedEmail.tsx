import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";

export default function FeedbackReceivedEmail({ projectName }: { projectName: string }) {
  return (
    <BaseLayout projectName={projectName}>
      <Section>
        <Text style={{ fontSize: "16px" }}>🙏 Thanks for your feedback!</Text>
        <Text>We’ve received your message and will review it soon.</Text>
      </Section>
    </BaseLayout>
  );
}
