document.getElementById("markForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const marks = [
    parseInt(document.getElementById("s1").value),
    parseInt(document.getElementById("s2").value),
    parseInt(document.getElementById("s3").value),
    parseInt(document.getElementById("s4").value),
    parseInt(document.getElementById("s5").value),
  ];

  // Validate input
  if (marks.some((mark) => isNaN(mark) || mark < 0 || mark > 100)) {
    document.getElementById("result").textContent =
      "Please enter valid marks (0–100) for all subjects.";
    return;
  }

  const total = marks.reduce((acc, val) => acc + val, 0);
  const percentage = total / 5;

  let grade;
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A -🤩";
  else if (percentage >= 70) grade = "B -😃";
  else if (percentage >= 60) grade = "C -😊";
  else if (percentage >= 50) grade = "D -😊";
  else grade = "F -😭";

  document.getElementById("result").innerHTML = `
    Total Marks: ${total}<br>
    Percentage: ${percentage.toFixed(2)}%<br>
    Grade: ${grade}
  `;
});
