export const onRequestPost = async (context: any): Promise<Response> => {
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

    // 1. Insert into D1 Database
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

      const emailHtml = `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Budget Range:</strong> ${budget_range || 'N/A'}</p>
        <p><strong>Services:</strong> ${formattedServices}</p>
        <p><strong>Project Description:</strong></p>
        <p>${project_description || 'No description provided.'}</p>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: ['abhishek791996@gmail.com'],
          reply_to: email,
          subject: `New Inquiry from ${full_name}`,
          html: emailHtml,
        }),
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err: any) {
    return new Response(
      JSON.stringify({ error: err.message || 'Failed to submit inquiry' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};