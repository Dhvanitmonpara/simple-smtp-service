import { Html, Head, Body, Container, Section, Text } from "@react-email/components";

interface BaseLayoutProps {
  projectName: string;
  children: React.ReactNode;
}

export default function BaseLayout({ projectName, children }: BaseLayoutProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f4f4f5", fontFamily: "sans-serif" }}>
        <Container style={{ margin: "20px auto", maxWidth: "600px", background: "#fff", borderRadius: "8px", padding: "20px" }}>
          <Section style={{ borderBottom: "1px solid #eee", marginBottom: "20px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>{projectName}</Text>
          </Section>
          {children}
          <Section style={{ borderTop: "1px solid #eee", marginTop: "20px", paddingTop: "10px" }}>
            <Text style={{ fontSize: "12px", color: "#888" }}>
              © {new Date().getFullYear()} {projectName}. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
