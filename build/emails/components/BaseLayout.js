import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Html, Head, Body, Container, Section, Text } from "@react-email/components";
export default function BaseLayout({ projectName, children }) {
    return (_jsxs(Html, { children: [_jsx(Head, {}), _jsx(Body, { style: { backgroundColor: "#f4f4f5", fontFamily: "sans-serif" }, children: _jsxs(Container, { style: { margin: "20px auto", maxWidth: "600px", background: "#fff", borderRadius: "8px", padding: "20px" }, children: [_jsx(Section, { style: { borderBottom: "1px solid #eee", marginBottom: "20px" }, children: _jsx(Text, { style: { fontSize: "20px", fontWeight: "bold" }, children: projectName }) }), children, _jsx(Section, { style: { borderTop: "1px solid #eee", marginTop: "20px", paddingTop: "10px" }, children: _jsxs(Text, { style: { fontSize: "12px", color: "#888" }, children: ["\u00A9 ", new Date().getFullYear(), " ", projectName, ". All rights reserved."] }) })] }) })] }));
}
