document.getElementById("downloadCVBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "Dzhivhuho-Netshedzo-CV.docx";
  link.download = "Dzhivhuho-Netshedzo-CV.docx";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
