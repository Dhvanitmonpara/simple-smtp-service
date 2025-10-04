import { ApiError, ApiResponse, AsyncHandler } from "../utils/ApiHelpers.js";
import { MailService } from "../services/mail.service.js";
const mailService = new MailService();
const sendMail = AsyncHandler(async (req, res, next) => {
    const { to, type, details = {}, options = {} } = req.body;
    if (!to || !type)
        throw new ApiError(400, "Email Receiver address and type are required");
    const email = await mailService.send(to, type, details, options);
    return res.status(200).json(new ApiResponse(200, email, "Email sent successfully"));
});
export { sendMail };
