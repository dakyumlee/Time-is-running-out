function tableWrite() {
  let userName = document.querySelector("#username").value;
  let userContent = document.querySelector("#content").value;
  let tbody = document.querySelector("tbody");
  let userDate = new Date();

  let year = userDate.getFullYear();
  let month = userDate.getMonth() + 1;
  let date = userDate.getDate();
  let hours = String(userDate.getHours()).padStart(2, "0");
  let minutes = String(userDate.getMinutes()).padStart(2, "0");

  let newtr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");

  td1.innerText = tbody.rows.length;
  td2.innerText = userName;
  td3.innerText = userContent;
  td4.innerText = `${year}-${month}-${date} ${hours}:${minutes}`;

  newtr.append(td1);
  newtr.append(td2);
  newtr.append(td3);
  newtr.append(td4);
  tbody.appendChild(newtr);

  alert("효율을 위한 감정소모 해결 완료")
}