# 📝 Future Development TODOs

This file tracks major pending features and their architectural blueprints so future maintainers know exactly how to implement them.

## 1. Google Sheets Application Form (Join Us Page)

**Goal:** Allow users to click on an open position on the "Join Us" page, fill out an application form, and have that data write directly to a Google Spreadsheet.

### Why Google Apps Script?
Since this website is a static React application without a backend server, we cannot safely or directly interact with the Google Sheets API without exposing private API keys. The standard, free solution is to use a deployed **Google Apps Script** as a webhook.

### Implementation Steps for the Developer

#### Step 1: Set up the Google Sheet (External)
1. Create a new Google Sheet named "Lab Applications".
2. Create header columns in row 1 (e.g., `Timestamp`, `Role`, `Name`, `Email`, `Resume Link`, `Message`).
3. Click **Extensions > Apps Script**.
4. Paste the following script:
```javascript
const sheetName = 'Sheet1';
const scriptProp = PropertiesService.getScriptProperties();

function initialSetup () {
  const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  scriptProp.setProperty('key', activeSpreadsheet.getId());
}

function doPost (e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    const doc = SpreadsheetApp.openById(scriptProp.getProperty('key'));
    const sheet = doc.getSheetByName(sheetName);
    
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    const nextRow = sheet.getLastRow() + 1;
    
    const newRow = headers.map(function(header) {
      return header === 'Timestamp' ? new Date() : e.parameter[header];
    });
    
    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```
5. Run `initialSetup` once to bind the script to the sheet.
6. Click **Deploy > New Deployment**.
7. Select type **Web app**. Execute as "Me", and set Who has access to **"Anyone"**.
8. Copy the generated Web app URL.

#### Step 2: React Frontend Integration (`Join.jsx`)
1. **State Management:** Add `useState` for `selectedRole`, `formData`, and `submitStatus` (idle, loading, success, error).
2. **UI Updates:** Make the position cards clickable. When clicked, expand an inline HTML `<form>` right below the selected position.
3. **Form Fields:** Add inputs for `Name`, `Email`, `Resume Link`, and `Message` matching the sheet headers.
4. **Submit Handler:** Intercept the form submission and use `fetch` to POST `FormData` to the Apps Script Webhook URL you generated in Step 1.

```javascript
// Example Submission Logic
const submitApplication = async (e) => {
  e.preventDefault();
  setSubmitStatus('loading');
  
  const form = new FormData();
  form.append('Role', selectedRole);
  form.append('Name', formData.name);
  form.append('Email', formData.email);
  // ... append others
  
  try {
    await fetch('YOUR_WEBHOOK_URL', { method: 'POST', body: form });
    setSubmitStatus('success');
  } catch (err) {
    setSubmitStatus('error');
  }
};
```

---
*Note: The steps and architectural blueprints outlined in this document may be subject to change based on evolving project requirements.*
