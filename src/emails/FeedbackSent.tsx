import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";

export default function FeedbackSentEmail({
  title,
  description,
  sendBy,
  projectName,
}: {
  title: string;
  description: string;
  sendBy: string;
  projectName: string;
}) {
  return (
    <BaseLayout projectName={projectName}>
      <Section>
        <Text style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</Text>
        <Text>{description}</Text>
        <Text style={{ marginTop: "10px", fontStyle: "italic" }}>— {sendBy}</Text>
      </Section>
    </BaseLayout>
  );
}
