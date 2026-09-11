// functions/api/contact.ts

export const onRequestPost = async (context: any): Promise => {
  try {
    const {
      full_name,
      email,
      company,
      budget_range,
      services,
      project_description,
    } = (await context.request.json()) as {
      full_name: string;
      email: string;
      company?: string;
      budget_range?: string;
      services?: string[];
      project_description?: string;
    };

    if (!full_name || !email) {
      return new Response(
        JSON.stringify({ error: 'Name and email are required fields.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Save to D1 Database
    if (context.env?.perpetualtech_db) {
      await context.env.perpetualtech_db
        .prepare(
          `INSERT INTO contact_submissions (
            full_name, email, company, budget_range, services, project_description
          ) VALUES (?, ?, ?, ?, ?, ?)`
        )
        .bind(
          full_name,
          email,
          company || null,
          budget_range || null,
          services ? JSON.stringify(services) : null,
          project_description || null
        )
        .run();
    }

    // 2. Dispatch Email via Resend
    if (context.env?.RESEND_API_KEY) {
      const formattedServices =
        services && services.length > 0 ? services.join(', ') : 'None specified';

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: ['Abhishek791996@gmail.com'],
          reply_to: email,
          subject: `New Inquiry from ${full_name}`,
          html: `