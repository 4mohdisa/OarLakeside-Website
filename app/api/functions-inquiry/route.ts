import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const functionInquirySchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  eventType: z.string().min(1, 'Please select an event type'),
  eventDate: z.string().min(1, 'Please select an event date'),
  guestCount: z.string().min(1, 'Please enter number of guests'),
  message: z.string().min(10, 'Please provide more details about your event'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = functionInquirySchema.parse(body);
    
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
      from: 'OAR Functions <functions@oarlakeside.com.au>',
      to: [process.env.ADMIN_EMAIL || 'admin@oarlakeside.com.au'],
      subject: `New Function Inquiry - ${validatedData.eventType} for ${validatedData.guestCount} guests`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #304a33;">New Function Inquiry</h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #304a33; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            <p><strong>Phone:</strong> ${validatedData.phone}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #304a33; margin-top: 0;">Event Details</h3>
            <p><strong>Event Type:</strong> ${validatedData.eventType}</p>
            <p><strong>Preferred Date:</strong> ${validatedData.eventDate}</p>
            <p><strong>Number of Guests:</strong> ${validatedData.guestCount}</p>
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #304a33; margin-top: 0;">Additional Details</h3>
            <p>${validatedData.message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            This inquiry was submitted through the OAR Restaurant website functions page.
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
      from: 'OAR Restaurant <noreply@oarlakeside.com.au>',
      to: [validatedData.email],
      subject: 'Thank you for your function inquiry - OAR Restaurant',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #304a33;">Thank you for your function inquiry!</h2>
          
          <p>Dear ${validatedData.name},</p>
          
          <p>Thank you for considering OAR Restaurant for your special event. We have received your inquiry for a ${validatedData.eventType} for ${validatedData.guestCount} guests on ${validatedData.eventDate}.</p>
          
          <p>Our event coordinator will review your requirements and contact you within 24 hours to discuss your special event in detail.</p>
          
          <div style="background-color: #304a33; color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: white;">Your Inquiry Summary</h3>
            <p><strong>Event Type:</strong> ${validatedData.eventType}</p>
            <p><strong>Preferred Date:</strong> ${validatedData.eventDate}</p>
            <p><strong>Number of Guests:</strong> ${validatedData.guestCount}</p>
          </div>
          
          <p>In the meantime, if you have any urgent questions, please don't hesitate to call us directly.</p>
          
          <p>We look forward to helping you create an unforgettable event at our beautiful lakeside venue.</p>
          
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
      { message: 'Function inquiry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Function inquiry error:', error);
    
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
