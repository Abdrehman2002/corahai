# CORAH Onboarding System - Setup Guide

## Overview
The CORAH onboarding system allows new businesses to fill out a comprehensive form that automatically saves responses to a Google Sheet.

## Features
- ✅ Beautiful, responsive 10-15 question onboarding form
- ✅ Automatic Google Sheets integration
- ✅ Field validation (email, phone, required fields)
- ✅ Success/error handling
- ✅ Mobile-friendly design matching CORAH theme

## Google Sheet Configuration

### Sheet Details
- **Sheet ID**: `1fOhwwj94G6LFfcJA1clPnGqbLOQ244IKM4DGhtDqk8I`
- **Sheet Name**: `Sheet1`
- **Columns** (29 total, A-AC):

1. legal_business_name
2. dba_name
3. industry_type
4. website_url
5. instagram_handle
6. primary_contact_name
7. primary_contact_email
8. primary_contact_phone
9. best_contact_method
10. phone_setup_preference
11. current_phone_provider
12. existing_business_number
13. forward_to_number
14. offers_appointments
15. scheduling_platform
16. schedule_access_instructions
17. top_services
18. deposit_policy
19. cancellation_policy_summary
20. voice_style
21. voice_style_custom
22. custom_greeting
23. escalation_rules
24. sms_reminders_enabled
25. sms_message_types
26. corah_package
27. acknowledge_setup_fee
28. acknowledge_monthly_billing
29. signature_full_name

## Environment Setup

### Required Environment Variables

Add these to your `.env` file:

```env
# Retell API (existing)
RETELL_API_KEY=your_retell_api_key

# Google Sheets Configuration
GOOGLE_SHEETS_SHEET_ID=1fOhwwj94G6LFfcJA1clPnGqbLOQ244IKM4DGhtDqk8I
GOOGLE_SHEETS_CREDENTIALS={"type":"service_account","project_id":"corah-479001",...}
```

### Google Service Account Setup

The service account credentials are already configured in the `.env` file with:
- **Email**: `corah-501@corah-479001.iam.gserviceaccount.com`
- **Project ID**: `corah-479001`

**Important**: Make sure the service account has edit access to the Google Sheet!

To grant access:
1. Open the Google Sheet: https://docs.google.com/spreadsheets/d/1fOhwwj94G6LFfcJA1clPnGqbLOQ244IKM4DGhtDqk8I
2. Click "Share"
3. Add: `corah-501@corah-479001.iam.gserviceaccount.com`
4. Grant "Editor" permissions

## Running the Application

### Start Both Servers

You need to run TWO servers:

1. **Frontend (Vite)** - Port 8081:
   ```bash
   npm run dev
   ```

2. **Backend (Express)** - Port 3001:
   ```bash
   npm run server
   ```

### Access the Onboarding Form

Once both servers are running:
- Open your browser to: http://localhost:8081
- Click "Onboarding" in the navigation bar
- Or go directly to: http://localhost:8081/onboarding

## API Endpoint

### POST `/api/submit-onboarding`

**Endpoint**: `http://localhost:3001/api/submit-onboarding`

**Request Body**: JSON object with all form fields (see column list above)

**Response**:
```json
{
  "success": true
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Error message here"
}
```

## Form Sections

### 1. Business & Contact Information
- Legal business name, DBA, industry type
- Website, Instagram handle
- Primary contact details (name, email, phone)
- Preferred contact method

### 2. Phone System Setup
- Phone setup preference (new number, port existing, forward)
- Current provider and existing number (conditional)
- Forward-to number for escalations

### 3. Scheduling & Services
- Appointment offering status
- Scheduling platform (conditional)
- Top services, deposit policy, cancellation policy

### 4. Voice Agent & SMS Settings
- Voice style (Professional, Friendly, Casual, Formal, Custom)
- Custom greeting
- Escalation rules
- SMS reminders and message types

### 5. Package & Billing
- CORAH package selection
- Acknowledgment checkboxes
- Digital signature

## Testing

To test the integration:

1. Fill out the onboarding form
2. Submit the form
3. Check the Google Sheet to verify a new row was added
4. Verify all fields are in the correct columns

## Troubleshooting

### "Google Sheets credentials not configured"
- Make sure `GOOGLE_SHEETS_CREDENTIALS` is set in `.env`
- Verify the JSON is properly formatted (no line breaks in the .env value)

### "Permission denied" or "403 error"
- Ensure the service account email has Editor access to the sheet
- Check that the Sheet ID is correct

### Form submission fails
- Verify both servers (frontend and backend) are running
- Check browser console for errors
- Check backend server logs for detailed error messages

### CORS errors
- The backend server has CORS enabled for all origins
- If issues persist, check browser console for specific CORS errors

## File Structure

```
src/
├── pages/
│   └── Onboarding.tsx          # Main onboarding form page
├── components/
│   └── NavBar.tsx              # Updated with Onboarding link
└── App.tsx                     # Route configuration

server.js                        # Backend API with Google Sheets integration
.env                            # Environment variables
```

## Dependencies

Already installed:
- `googleapis` - Google Sheets API client
- `express` - Backend server
- `cors` - CORS support
- `dotenv` - Environment variable loading

## Support

For issues or questions about the onboarding system:
1. Check server logs (both frontend and backend)
2. Verify environment variables are set correctly
3. Ensure Google Sheet permissions are configured
4. Test API endpoint directly with curl/Postman if needed

---

**Last Updated**: December 2025
**Version**: 1.0
