import { Resend } from "resend";
import { NextResponse } from "next/server";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // 1. Email to YOU (Portfolio Owner)
    const { error: ownerError } = await resend.emails.send({
      from: "Rahul Kumar <contact@thenamerahulkr.live>", // MUST be verified
      to: "thenamerahulkr@gmail.com",
      subject: `🌟${name} just reached out! | New Portfolio Contact`,
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Message</title>
</head>
<body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5;">
    <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <!-- Header -->
        <div style="background: #000; color: white; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 18px; font-weight: 500;">🌟 ${name} just reached out! | New Portfolio Contact</h1>
        </div>
        <!-- Content -->
        <div style="padding: 30px;">
            <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Name</p>
                <p style="margin: 0; font-weight: 500; color: #000;">${name}</p>
            </div>
            
            <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Email</p>
                <p style="margin: 0; font-weight: 500; color: #000;">${email}</p>
            </div>
            
            <div style="margin-bottom: 30px;">
                <p style="margin: 0 0 8px 0; color: #666; font-size: 14px;">Message</p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #000;">
                    <p style="margin: 0; line-height: 1.5; color: #333;">${message}</p>
                </div>
            </div>
            <!-- Reply Button -->
            <!-- Reply Button -->
<div style="text-align: center; margin-bottom: 20px;">
  <a href="mailto:${email}?subject=Re:"Your message via my portfolio""  
       style="display: inline-block; background: #000; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; font-size: 14px;">
        ✉ Reply to ${name.split(" ")[0]}
    </a>
</div>
        </div>
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #eee;">
            <p style="margin: 0; color: #666; font-size: 12px;">
                Received on June 22, 2025 at 3:45 PM
            </p>
        </div>
    </div>
</body>
</html>
      `,
    });

    if (ownerError) {
      console.error("Owner email error:", ownerError);
      return NextResponse.json(
        { message: "Failed to send owner email", error: ownerError },
        { status: 500 }
      );
    }


    // 2. Auto-Reply to User
    const { error: userError } = await resend.emails.send({
        from: "Rahul Kumar <contact@thenamerahulkr.live>", // MUST be verified
        to: email,
        subject: "✅ Thanks for contacting me!",
        html: `
        <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thanks for contacting me!</title>
  </head>
  <body style="margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f5f5f5;">
      
      <div style="max-width: 500px; margin: 0 auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          
          <!-- Header -->
          <div style="background: #000; color: white; padding: 20px; text-align: center;">
              <h1 style="margin: 0; font-size: 18px; font-weight: 500;">✅ Thanks for contacting me!</h1>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px;">
              <div style="margin-bottom: 25px;">
                  <p style="margin: 0; line-height: 1.6; color: #333; font-size: 16px;">
                      Hi <strong>${name}</strong>! 👋
                  </p>
              </div>
              
              <div style="margin-bottom: 25px;">
                  <p style="margin: 0 0 15px 0; line-height: 1.6; color: #333;">
                      Thank you for reaching out through my portfolio. I've received your message and really appreciate you taking the time to connect with me.
                  </p>
                  <p style="margin: 0; line-height: 1.6; color: #333;">
                      I'll get back to you within <strong>24-48 hours</strong> with a detailed response. In the meantime, feel free to check out more of my work or connect with me on social media.
                  </p>
              </div>
              
              <!-- Message Preview -->
              <div style="margin-bottom: 25px;">
                  <p style="margin: 0 0 8px 0; color: #666; font-size: 14px; font-weight: 500;">Your message:</p>
                  <div style="background: #f8f9fa; padding: 15px; border-radius: 6px; border-left: 3px solid #000;">
                      <p style="margin: 0; line-height: 1.5; color: #555; font-style: italic;">
                          ${message}
                      </p>
                  </div>
              </div>
              
              <!-- Social Links -->
              <div style="text-align: center; margin-bottom: 25px; padding: 20px; background: #f8f9fa; border-radius: 6px;">
                  <p style="margin: 0 0 15px 0; color: #666; font-size: 14px;">Connect with me:</p>
                  <div style="display: flex; justify-content: center; gap: 15px; flex-wrap: wrap;">
                      <a href="https://linkedin.com/in/thenamerahulkr" style="color: #0077b5; text-decoration: none; font-size: 14px;">
                          💼 LinkedIn
                      </a>
                      <a href="https://github.com/thenamerahulkr" style="color: #333; text-decoration: none; font-size: 14px;">
                          🐱 GitHub
                      </a>
                      <a href="https://thenamerahulkr.live" style="color: #000; text-decoration: none; font-size: 14px;">
                          🌐 Portfolio
                      </a>
                  </div>
              </div>
              
              <div style="text-align: center;">
                  <p style="margin: 0; color: #333; font-size: 16px;">
                      Looking forward to our conversation! 🚀
                  </p>
                  <p style="margin: 10px 0 0 0; color: #333; font-weight: 500;">
                      Best regards,<br>
                      <strong>Rahul Kumar</strong>
                  </p>
              </div>
          </div>
          
          <!-- Footer -->
          <div style="background: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #eee;">
              <p style="margin: 0; color: #666; font-size: 12px;">
                  This is an automated response • Sent on June 22, 2025 at 3:45 PM
              </p>
          </div>
          
      </div>
      
  </body>
  </html>
        `,
      });
    if (userError) {
      console.error("User auto-reply error:", userError);
    }

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API route error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
