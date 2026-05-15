export async function POST(request: Request) {
  try {
    const data = await request.json();

    // TODO: wire up email via Resend / Nodemailer with SMTP credentials
    // For now, log the submission server-side
    console.log("[contact form]", new Date().toISOString(), data);

    return Response.json({ success: true });
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }
}
