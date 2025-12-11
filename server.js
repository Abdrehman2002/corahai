import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const RETELL_API_KEY = process.env.RETELL_API_KEY;

if (!RETELL_API_KEY) {
  console.error("ERROR: RETELL_API_KEY not found in environment variables");
  console.error("Please create a .env file with RETELL_API_KEY=your_key_here");
  process.exit(1);
}

app.post("/api/start-web-call", async (req, res) => {
  try {
    const { agentId } = req.body;
    if (!agentId) {
      return res.status(400).json({ error: "agentId is required" });
    }

    const response = await fetch("https://api.retellai.com/v2/create-web-call", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RETELL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Retell API error:", data);
      return res.status(response.status).json({ error: data.message || "Failed to create web call" });
    }

    return res.json({
      accessToken: data.access_token,
      callId: data.call_id,
      agentId: data.agent_id,
    });
  } catch (err) {
    console.error("Error creating web call:", err.message);
    return res.status(500).json({ error: "Failed to create web call" });
  }
});

// Google Sheets API endpoint for onboarding form
app.post("/api/submit-onboarding", async (req, res) => {
  try {
    // Get Google Sheets credentials from environment
    const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
    const sheetId = process.env.GOOGLE_SHEETS_SHEET_ID || "1fOhwwj94G6LFfcJA1clPnGqbLOQ244IKM4DGhtDqk8I";

    if (!credentialsJson) {
      console.error("ERROR: GOOGLE_SHEETS_CREDENTIALS not found in environment variables");
      return res.status(500).json({
        success: false,
        error: "Google Sheets credentials not configured"
      });
    }

    // Parse credentials
    const credentials = JSON.parse(credentialsJson);

    // Create auth client
    const auth = new google.auth.GoogleAuth({
      credentials: credentials,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    // Extract form data in the exact order of sheet columns
    const {
      legal_business_name,
      dba_name,
      industry_type,
      website_url,
      instagram_handle,
      primary_contact_name,
      primary_contact_email,
      primary_contact_phone,
      best_contact_method,
      phone_setup_preference,
      current_phone_provider,
      existing_business_number,
      forward_to_number,
      package_interest,
      estimated_call_volume,
      offers_appointments,
      scheduling_platform,
      schedule_access_instructions,
      top_services,
      deposit_policy,
      cancellation_policy_summary,
      voice_style,
      voice_style_custom,
      custom_greeting,
      escalation_rules,
      sms_reminders_enabled,
      sms_message_types,
      corah_package,
      acknowledge_setup_fee,
      acknowledge_monthly_billing,
      signature_full_name,
      calendly_scheduled,
    } = req.body;

    // Create row data - 31 column structure (A-AE) with new fields
    const rowData = [
      legal_business_name || "",              // 1. A
      dba_name || "",                          // 2. B
      industry_type || "",                     // 3. C
      website_url || "",                       // 4. D
      instagram_handle || "",                  // 5. E
      primary_contact_name || "",              // 6. F
      primary_contact_email || "",             // 7. G
      primary_contact_phone || "",             // 8. H
      best_contact_method || "",               // 9. I
      phone_setup_preference || "",            // 10. J
      current_phone_provider || "",            // 11. K
      existing_business_number || "",          // 12. L
      forward_to_number || "",                 // 13. M
      package_interest || "",                  // 14. N (NEW)
      estimated_call_volume || "",             // 15. O (NEW)
      offers_appointments || "",               // 16. P
      scheduling_platform || "",               // 17. Q
      schedule_access_instructions || "",      // 18. R
      top_services || "",                      // 19. S
      deposit_policy || "",                    // 20. T
      cancellation_policy_summary || "",       // 21. U
      voice_style || "",                       // 22. V
      voice_style_custom || "",                // 23. W
      custom_greeting || "",                   // 24. X
      escalation_rules || "",                  // 25. Y
      sms_reminders_enabled || "",             // 26. Z
      sms_message_types || "",                 // 27. AA
      corah_package || "",                     // 28. AB
      acknowledge_setup_fee || "",             // 29. AC
      acknowledge_monthly_billing || "",       // 30. AD
      signature_full_name || "",               // 31. AE
      calendly_scheduled || "",                // 32. AF (NEW)
    ];

    // Append row to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A:AF", // Columns A through AF (32 columns)
      valueInputOption: "RAW",
      requestBody: {
        values: [rowData],
      },
    });

    console.log("Successfully added onboarding data to Google Sheets");
    return res.json({ success: true });
  } catch (err) {
    console.error("Error submitting to Google Sheets:", err.message);
    return res.status(500).json({
      success: false,
      error: err.message || "Failed to submit form"
    });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});
