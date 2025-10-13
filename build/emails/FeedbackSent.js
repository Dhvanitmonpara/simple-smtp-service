import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";
export default function FeedbackSentEmail({ title, description, sendBy, projectName, }) {
    return (_jsx(BaseLayout, { projectName: projectName, children: _jsxs(Section, { children: [_jsx(Text, { style: { fontSize: "18px", fontWeight: "bold" }, children: title }), _jsx(Text, { children: description }), _jsxs(Text, { style: { marginTop: "10px", fontStyle: "italic" }, children: ["\u2014 ", sendBy] })] }) }));
}
