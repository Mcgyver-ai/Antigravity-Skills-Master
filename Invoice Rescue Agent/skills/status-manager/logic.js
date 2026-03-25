const fs = require('fs');
const path = require('path');

// Determine the path to tracker.json
// We search for it in the invoice-rescue-web folder relative to this script
let trackerPath = path.resolve(__dirname, '../../../invoice-rescue-web/data/tracker.json');

// Fallback to searching the current working directory's data/tracker.json
if (!fs.existsSync(trackerPath)) {
  trackerPath = path.resolve(process.cwd(), 'data/tracker.json');
}

// Ensure the file exists before processing
if (!fs.existsSync(trackerPath)) {
  console.error(`Error: Could not find tracker.json at ${trackerPath}`);
  console.error('Please ensure the invoice database exists before running the Status Manager.');
  process.exit(1);
}

function updateStatuses() {
  const fileContents = fs.readFileSync(trackerPath, 'utf8');
  const invoices = JSON.parse(fileContents);
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let updatedCount = 0;

  for (const invoice of invoices) {
    if (!invoice.due_date) continue;

    const dueDate = new Date(invoice.due_date);
    dueDate.setHours(0, 0, 0, 0);

    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let newStatus = invoice.status;

    if (diffDays > 3) {
      newStatus = 'Pending';
    } else if (diffDays >= 0 && diffDays <= 3) {
      newStatus = 'Due Soon';
    } else if (diffDays < 0 && diffDays >= -7) {
      newStatus = 'Overdue';
    } else if (diffDays < -7) {
      newStatus = 'Action Required';
    }

    if (invoice.status !== newStatus) {
      console.log(`Updating ${invoice.client_name} (Invoice: ${invoice.id}) from '${invoice.status}' to '${newStatus}'`);
      invoice.status = newStatus;
      invoice.last_action_date = today.toISOString().split('T')[0];
      updatedCount++;
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(trackerPath, JSON.stringify(invoices, null, 2), 'utf8');
    console.log(`\nSuccessfully updated ${updatedCount} invoice(s) with new reminder stages.`);
  } else {
    console.log('All invoice statuses are currently up to date.');
  }
}

updateStatuses();
