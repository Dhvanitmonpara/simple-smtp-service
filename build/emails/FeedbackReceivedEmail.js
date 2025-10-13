import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";
export default function FeedbackReceivedEmail({ projectName }) {
    return (_jsx(BaseLayout, { projectName: projectName, children: _jsxs(Section, { children: [_jsx(Text, { style: { fontSize: "16px" }, children: "\uD83D\uDE4F Thanks for your feedback!" }), _jsx(Text, { children: "We\u2019ve received your message and will review it soon." })] }) }));
}
