import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Heading, Row, Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";
export default function VerificationEmail({ username, otp, projectName, }) {
    return (_jsx(BaseLayout, { projectName: projectName, children: _jsxs(Section, { children: [_jsx(Row, { children: _jsxs(Heading, { as: "h2", children: ["Hello ", username, ","] }) }), _jsx(Row, { children: _jsx(Text, { children: "Thank you for registering. Please use the following verification code to complete your registration:" }) }), _jsx(Row, { children: _jsx(Text, { style: { fontSize: "20px", fontWeight: "bold", marginTop: "10px" }, children: otp }) }), _jsx(Row, { children: _jsx(Text, { style: { marginTop: "10px" }, children: "If you did not request this code, please ignore this email." }) })] }) }));
}
