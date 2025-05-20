export default async function handler(req, res) {
  const { recordId } = req.query;

  if (!recordId) {
    return res.status(400).send("Missing recordId");
  }

  try {
    await fetch("https://hooks.airtable.com/workflows/v1/genericWebhook/appjR7Lo5GPjMJwYK/wflcAX4vuUHP6u0cg/wtre7jLRcIqBaLKFY", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ recordId })
    });

    return res.redirect(302, "/thank-you");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Something went wrong");
  }
}
