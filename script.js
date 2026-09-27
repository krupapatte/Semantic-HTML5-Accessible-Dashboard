const reportDialog = document.getElementById("reportDialog");
const profileDialog = document.getElementById("profileDialog");
const reportForm = document.getElementById("reportForm");
const reportName = document.getElementById("reportName");

document.getElementById("reportBtn").addEventListener("click", () => {
  reportDialog.showModal();
  reportName.focus();
});

document.getElementById("profileBtn").addEventListener("click", () => {
  profileDialog.showModal();
});

reportForm.addEventListener("submit", (event) => {
  if (!reportForm.checkValidity()) {
    event.preventDefault();
    reportForm.reportValidity();
    return;
  }

  event.preventDefault();
  alert(`Report "${reportName.value.trim()}" created successfully.`);
  reportForm.reset();
  reportDialog.close();
});

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const reportName = button.closest("tr").querySelector("th").textContent.trim();
    alert(`Opening report: ${reportName}`);
  });
});

document.getElementById("settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  document.getElementById("formMessage").textContent =
    "Preferences saved successfully.";
});

document.getElementById("reportSearch").addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();

  document.querySelectorAll("#reportTable tr").forEach((row) => {
    row.hidden = !row.textContent.toLowerCase().includes(query);
  });
});
