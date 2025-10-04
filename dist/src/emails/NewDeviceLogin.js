import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Section, Text } from "@react-email/components";
import BaseLayout from "./components/BaseLayout.js";
export default function NewDeviceLoginEmail({ deviceName, location, projectName, }) {
    return (_jsx(BaseLayout, { projectName: projectName, children: _jsxs(Section, { children: [_jsx(Text, { style: { fontSize: "18px", fontWeight: "bold" }, children: "\u26A0\uFE0F New Device Login Detected" }), _jsxs(Text, { children: [_jsx("b", { children: "Device:" }), " ", deviceName] }), _jsxs(Text, { children: [_jsx("b", { children: "Location:" }), " ", location] })] }) }));
}
