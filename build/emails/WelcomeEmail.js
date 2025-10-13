import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";
export default function WelcomeEmail({ username, projectName }) {
    return (_jsx(BaseLayout, { projectName: projectName, children: _jsxs(Section, { children: [_jsxs(Text, { style: { fontSize: "18px", fontWeight: "bold" }, children: ["Welcome, ", username, "!"] }), _jsxs(Text, { children: ["Thanks for joining ", projectName, ". We\u2019re excited to have you \uD83D\uDE80"] })] }) }));
}
