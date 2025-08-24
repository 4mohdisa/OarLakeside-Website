import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // Check if Resend is configured
    if (!resend) {
      console.error('Resend API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'OAR Restaurant <contact@oarlakeside.com>',
      to: [process.env.ADMIN_EMAIL || 'admin@oarlakeside.com.au'],
      subject: validatedData.subject ? `Contact Form: ${validatedData.subject}` : 'New Contact Form Submission',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #304a33;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #304a33; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ''}
            ${validatedData.subject ? `<p><strong>Subject:</strong> ${validatedData.subject}</p>` : ''}
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #304a33; margin-top: 0;">Message</h3>
            <p>${validatedData.message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This message was submitted through the OAR Restaurant website contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: 'OAR Restaurant <noreply@oarlakeside.com>',
      to: [validatedData.email],
      subject: 'Thank you for contacting OAR Restaurant',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #304a33;">Thank you for your message!</h2>
          
          <p>Dear ${validatedData.name},</p>
          
          <p>Thank you for contacting OAR Restaurant. We have received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #304a33; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: white;">Your Message Summary</h3>
            ${validatedData.subject ? `<p><strong>Subject:</strong> ${validatedData.subject}</p>` : ''}
            <p><strong>Message:</strong> ${validatedData.message}</p>
          </div>
          
          <p>If you have any urgent inquiries, please don't hesitate to call us directly or visit us at our lakeside location.</p>
          
          <p>We look forward to hearing from you!</p>
          
          <p>Best regards,<br>
          The OAR Restaurant Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            OAR Restaurant - Coffee House • Bar • Kitchen<br>
            West Lakes Shore, Adelaide<br>
            Open 7 days, 7am-3pm
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
