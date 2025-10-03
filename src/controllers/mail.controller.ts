import { Request, Response, NextFunction } from "express";
import { ApiError, ApiResponse, AsyncHandler } from "../utils/ApiHelpers";
import { MailService } from "../services/mail.service";

const mailService = new MailService();

const sendMail = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { to, type, details = {}, options = {} } = req.body;

    if (!to || !type) throw new ApiError(400, "Email Receiver address and type are required");

    const email = await mailService.send(to, type, details, options);

    return res.status(200).json(new ApiResponse(200, email, "Email sent successfully"));
  }
);

export { sendMail };
