# Google Sheet Structure - CORAH Onboarding

## Sheet ID
`1fOhwwj94G6LFfcJA1clPnGqbLOQ244IKM4DGhtDqk8I`

## Complete Column Structure (37 columns: A-AK)

| Column | Field Name | Source | Description |
|--------|-----------|--------|-------------|
| A | legal_business_name | Form | Legal business name |
| B | dba_name | Form | DBA/doing business as name |
| C | industry_type | Form | Industry/business type |
| D | website_url | Form | Company website URL |
| E | instagram_handle | Form | Instagram handle |
| F | (Primary Contact Name) | Form | primary_contact_name |
| G | (Primary Contact Email) | Form | primary_contact_email |
| H | Contact Phone | Form | primary_contact_phone |
| I | Preferred Contact Method | Form | best_contact_method (Call/Text/Email) |
| J | Phone Setup Type | Form | phone_setup_preference |
| K | Forward Number | Form | forward_to_number |
| L | Warm Transfer? | Auto | Default: "No" |
| M | Warm Transfer Contacts | Auto | Empty |
| N | Warm Transfer Hours | Auto | Empty |
| O | Scheduling Platform | Form | scheduling_platform |
| P | Platform Login/Access | Form | schedule_access_instructions |
| Q | Top Services | Form | top_services |
| R | Deposit Rules | Form | deposit_policy |
| S | Cancellation Policy | Form | cancellation_policy_summary |
| T | Booking Restrictions | Auto | Empty |
| U | Preferred Voice Style | Form | voice_style |
| V | Greeting Script | Form | custom_greeting |
| W | Information to Collect | Auto | Empty |
| X | Escalation Rules | Form | escalation_rules |
| Y | Pricing Rules | Auto | Empty |
| Z | SMS Reminders | Form | sms_reminders_enabled (yes/no) |
| AA | SMS Types Selected | Form | sms_message_types |
| AB | SMS Number | Auto | Empty |
| AC | CRM Used | Auto | Empty |
| AD | Outbound Sequences | Auto | Empty |
| AE | Max Outbound Attempts | Auto | Empty |
| AF | Files Uploaded | Auto | Empty |
| AG | Plan Selected | Form | corah_package |
| AH | Setup Fee Acknowledged | Form | acknowledge_setup_fee |
| AI | Monthly Billing Acknowledged | Form | acknowledge_monthly_billing |
| AJ | Signature | Form | signature_full_name |
| AK | Date | Auto | Today's date (YYYY-MM-DD) |

## Form Fields Mapping

### Collected from User:
1. **Business Info**: legal_business_name, dba_name, industry_type, website_url, instagram_handle
2. **Contact Info**: primary_contact_name, primary_contact_email, primary_contact_phone, best_contact_method
3. **Phone Setup**: phone_setup_preference, forward_to_number
4. **Scheduling**: scheduling_platform, schedule_access_instructions, top_services, deposit_policy, cancellation_policy_summary
5. **Voice/SMS**: voice_style, custom_greeting, escalation_rules, sms_reminders_enabled, sms_message_types
6. **Package**: corah_package, acknowledge_setup_fee, acknowledge_monthly_billing, signature_full_name

### Auto-filled Fields:
- **Warm Transfer fields** (L, M, N): Default to "No" and empty
- **Booking Restrictions** (T): Empty
- **Information to Collect** (W): Empty
- **Pricing Rules** (Y): Empty
- **SMS Number** (AB): Empty
- **CRM/Outbound fields** (AC, AD, AE): Empty (for future use)
- **Files Uploaded** (AF): Empty (for future file upload feature)
- **Date** (AK): Auto-generated current date

## Missing Form Fields

These columns exist in your sheet but are NOT currently in the form:
- Current Phone Provider (was in original spec but removed from final sheet structure)
- Existing Business Number (was in original spec but removed from final sheet structure)
- Warm Transfer settings (can be added later if needed)
- Booking Restrictions
- Information to Collect on Each Call
- Pricing Rules
- SMS Number preference
- CRM information
- Outbound campaign settings
- File upload capability

## Notes for Future Enhancement

If you want to collect these additional fields, you can:
1. Add them to the onboarding form ([Onboarding.tsx](src/pages/Onboarding.tsx))
2. Update the server.js rowData array to include them in the correct column positions
3. Update the FormData interface in Onboarding.tsx

## Testing

After submission, verify that:
1. All 37 columns (A-AK) are filled
2. Empty fields show as blank (not "undefined" or "null")
3. Date is in YYYY-MM-DD format
4. Yes/No fields show consistent capitalization
5. Multi-select fields (SMS types) are comma-separated

## Current Behavior

- Form collects 20 fields from user
- Server automatically fills 7 fields with defaults/empty values
- Server auto-generates the submission date
- Total: 37 columns written per submission
