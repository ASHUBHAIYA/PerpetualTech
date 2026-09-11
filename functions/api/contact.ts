interface Env {
  perpetualtech_db: D1Database;
}

export const onRequestPost: PagesFunction = async (context) => {
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