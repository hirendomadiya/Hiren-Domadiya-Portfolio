"use server";

export async function submitContactForm(name: string, email: string, message: string) {
  if (!name.trim() || !email.trim() || !message.trim()) {
    return { success: false, error: "All fields (Name, Email, Message) are required." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error("Web3Forms Access Key is missing in environment variables.");
    return { success: false, error: "Server configuration error. API Access key is missing." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        subject: `New Contact Form Submission from ${name}`,
        from_name: "Hiren Domadiya Portfolio Portal",
      }),
    });

    const data = await response.json();
    if (data.success) {
      return { success: true };
    } else {
      console.error("Web3Forms submission failed:", data);
      return { success: false, error: data.message || "Failed to submit message to Web3Forms." };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: "A network error occurred. Please try again later." };
  }
}
