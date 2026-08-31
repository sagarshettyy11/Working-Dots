/**
 * Contact & Inquiry Dispatch Integration Service
 */
import { BRAND_CONFIG } from '../lib/constants';

export async function submitContactInquiry(formData) {
  const { name, email, phone, company, projectType, budget, timeline, message } = formData;

  // Basic client-side validation
  if (!name || !email || !message) {
    throw new Error('Please fill in all required fields (Name, Email, and Message).');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address.');
  }

  // Format WhatsApp direct message payload
  const whatsappMessage = `*New Project Inquiry — Working Dots*
👤 *Name:* ${name}
📧 *Email:* ${email}
📱 *Phone:* ${phone || 'Not provided'}
🏢 *Company:* ${company || 'Individual / Startup'}
🎯 *Scope / Need:* ${projectType || 'Custom Software'}
💰 *Target Budget:* ${budget || 'Flexible'}
⏱️ *Timeline:* ${timeline || 'Ready to start'}
📝 *Project Overview:*
${message}`;

  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  // Simulated latency for smooth UX state
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    whatsappUrl,
    summary: {
      name,
      email,
      projectType,
    },
  };
}
