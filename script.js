document.getElementById("vendorForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const name = document.getElementById("busName").value;
    const product = document.getElementById("productType").value;
    const permit = document.getElementById("permitNumber").value;
    const sanitary = document.querySelector('input[name="sanitary"]:checked').value;
    const cleanliness = Array.from(document.querySelectorAll('input[name="cleanliness"]:checked'))
      .map(cb => cb.value).join(", ");
  
    const tableBody = document.getElementById("resultsTable").querySelector("tbody");
    const newRow = tableBody.insertRow();
  
    if (sanitary === "Poor") {
      newRow.classList.add("warning-row");
    }
  
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${product}</td>
      <td>${permit}</td>
      <td>${sanitary}</td>
      <td>${cleanliness}</td>
    `;
  
    this.reset();
  });
  
  document.getElementById("exportBtn").addEventListener("click", function () {
    const rows = Array.from(document.querySelectorAll("#resultsTable tr"));
    const csv = rows.map(row => 
      Array.from(row.cells).map(cell => `"${cell.innerText}"`).join(",")
    ).join("\n");
  
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = "survey_results.csv";
    a.click();
    URL.revokeObjectURL(url);
  });
  