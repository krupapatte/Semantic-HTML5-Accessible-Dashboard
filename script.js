const reportDialog = document.getElementById("reportDialog");
const profileDialog = document.getElementById("profileDialog");
const reportForm = document.getElementById("reportForm");
const reportName = document.getElementById("reportName");

const reportBtn = document.getElementById("reportBtn");
if (reportBtn && reportDialog && reportName) {
  reportBtn.addEventListener("click", () => {
    reportDialog.showModal();
    reportName.focus();
  });
}

const profileBtn = document.getElementById("profileBtn");
if (profileBtn && profileDialog) {
  profileBtn.addEventListener("click", () => {
    profileDialog.showModal();
  });
}

if (reportForm && reportDialog && reportName) {
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
}

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    const reportName = row.querySelector("th").textContent.trim();

    alert(`Opening report: ${reportName}`);
  });
});

const settingsForm = document.getElementById("settingsForm");

if (settingsForm) {
  settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!settingsForm.checkValidity()) {
      settingsForm.reportValidity();
      return;
    }

    const formMessage = document.getElementById("formMessage");

    if (formMessage) {
      formMessage.textContent = "Preferences saved successfully.";
    }
  });
}

const reportSearch = document.getElementById("reportSearch");

if (reportSearch) {
  reportSearch.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();

    document.querySelectorAll("#reportTable tr").forEach((row) => {
      row.hidden = !row.textContent.toLowerCase().includes(query);
    });
  });
}