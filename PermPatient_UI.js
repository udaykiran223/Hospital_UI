let getURL="http://192.168.29.90:8080/Hospital/getAllPatientsTableData";
let postURL="http://192.168.29.90:8080/Hospital/savePatientsTable";
var PatientID=1;
displayPermPatient();
function displayPermPatient(){

  function showPERMDetails(getURL) {

    let data = new XMLHttpRequest();
  data.open("GET", getURL);
  data.send();
  
  data.onload = function () {
    console.log("Get Call Successfull !!!! ");
    let permPDetails = JSON.parse(this.response);
  
    var permPPDTHRDetails = [
      "Patient ID",
      "Patient Name",
      "Patient M.NO",
      "Patient Type",
      "Actions",
    ];
  
      {
      var permPBCDiv = document.getElementById("bottom-div-content");
      permPBCDiv.innerHTML = " ";
      permPBCDiv.className = "px-3 py-3";
  
      let permPPIBCDiv = document.createElement("div");
      permPBCDiv.appendChild(permPPIBCDiv);
      permPBCDiv.className="showData-scroll h-100 py-1";
  
      let permPPDTable = document.createElement("table");
      permPPDTable.className = "w-100";
  
      let headRow = document.createElement("tr");
      for(let x=0; x<permPPDTHRDetails.length;x++){
        let th= document.createElement("th");
        th.innerHTML= permPPDTHRDetails[x];
        th.className="table-text";
        headRow.appendChild(th);
      }
      permPPIBCDiv.appendChild(permPPDTable);
  
      let tBody = document.createElement("tbody");
      tBody.appendChild(headRow);
      permPPDTable.appendChild(tBody);
  
      for (let i = 0; i < permPDetails.length; i++) {
        if (permPDetails[i].hospitalPatientType == "PERM") {
          let bodyRows = document.createElement("tr");
            bodyRows.className = "w-100";
          let td1 = document.createElement("td");
          td1.innerHTML = "PERM00" + permPDetails[i].hospitalPatientIdentity;
          td1.className="table-text ";
          //   td1.style = " width:10%; ";
          let td2 = document.createElement("td");
          td2.innerHTML = permPDetails[i].hospitalPatientName;
          td2.className="table-text ";
          //   td2.style = "width:10%; ";
          let td3 = document.createElement("td");
          td3.innerHTML = permPDetails[i].hospitalPatientPhoneNumber;
          td3.className="table-text ";
          //   td3.style = " width:10%; ";
          let td4 = document.createElement("td");
          td4.innerHTML = permPDetails[i].hospitalPatientType;
          td4.className="table-text ";
          //   td4.style = " width:10%; ";
          let td5 = document.createElement("td");
          td5.className="table-text ";
          //   td5.style = " width:30%; ";
  
          // View Btn
          let viewBtn = document.createElement("button");
          viewBtn.className =
            "btn  text-center  me-2 h-25 btn-outline-success bg-success p-1";
          viewBtn.onclick = function () {
            permPDView(permPDetails[i]);
          };
          let viewIcon = document.createElement("i");
          viewIcon.className = "bi bi-eye-fill text-white ";
          viewIcon.style = "font-size:25px; ";
  
          // Edit Btn
          let editBtn = document.createElement("button");
          editBtn.className =
            "btn  text-center  h-25 me-2 btn-outline-primary bg-primary p-1";
  
          // editBtn.addEventListener('click' , permPDEdit(permPDetails[i]));
          editBtn.onclick = function () {
            permPDEdit(permPDetails[i]);
          };
  
          let editIcon = document.createElement("i");
          editIcon.className = "bi bi-pencil-square text-white ";
          editIcon.style = "font-size:25px; ";
  
          // Delete Btn
          let deleteBtn = document.createElement("button");
          deleteBtn.className =
            "btn  text-center  h-25 btn-outline-danger bg-danger p-1";
          deleteBtn.onclick = function () {
            permPDDelete(permPDetails[i]);
          };
          let deleteIcon = document.createElement("i");
          deleteIcon.className = "bi bi-trash-fill text-white ";
          deleteIcon.style = "font-size:25px; ";
  
          viewBtn.appendChild(viewIcon);
          editBtn.appendChild(editIcon);
          deleteBtn.appendChild(deleteIcon);
  
          td5.appendChild(viewBtn);
          td5.appendChild(editBtn);
          td5.appendChild(deleteBtn);
  
          bodyRows.appendChild(td1);
          bodyRows.appendChild(td2);
          bodyRows.appendChild(td3);
          bodyRows.appendChild(td4);
          bodyRows.appendChild(td5);
  
          tBody.appendChild(bodyRows);
        }
      }
    }
    }
  };

var PermPatientDetails = {
  hospitalPatientType: "PERM",
  hospitalPatientIdentity: PatientID,
  hospitalPatientName: null,
  hospitalPatientAddress: null,
  hospitalPatientPhoneNumber: null,
  hospitalPatientDob: null,
  hospitalPatientBloodGroup: null,
  hospitalPatientAlternateNumber: null,
  hospitalPatientEmailid: null,
  hospitalPatientGuardianName: null,
  hospitalPatientGuardianPhoneNumber: null,
  hospitalPatientGuardianEmailid: null,
  hospitalPatientCurrentProblem: null,
  hospitalPatientPreviousProblem: null,
  hospitalPatientDoctor: null,
  hospitalPatientMedicine: null,
  hospitalPatientTest: null,
  hospitalPatientScan : null
};

// div for top div navtabs
var topDivNavTabs = document.getElementById("top-div-navtabs");
// Div for showing the content in top div
var contentDiv = document.getElementById("top-div-content");
contentDiv.className = "px-3 py-1 ";
// div for bottom div
var bottomContentDiv = document.getElementById("bottom-div-content");

permPatientInfo();

function permPatientInfo() {
  let navBarPERMBtn = document.getElementById("sidebar-permPatient-btn");
  navBarPERMBtn.className = "active ";
  topDivNavTabs.innerHTML = " ";
  bottomContentDiv.innerHTML = " ";

  topDivNavTabsFunction();
  personalInfo();
}

// Functions to handle button clicks
function personalInfo() {
  personalInfoForm();
  showPERMDetails(getURL);
}

function contactInfo() {
  contactInfoForm();
  showPERMDetails(getURL);
}

function healthConcerns() {
  healthConcernsForm();
  showPERMDetails(getURL);
}

function appointments() {
  appointmentsForm();
  showPERMDetails(getURL);
}

function prescription() {
  prescriptionForm();
  showPERMDetails(getURL);
}

// TopDivNavTabs ⬇️⬇️⬇️
function topDivNavTabsFunction() {
  // Create the div element
  const divElement = document.createElement("div");
  divElement.className = " ";

  // Create the ul element
  const ulElement = document.createElement("ul");
  ulElement.className = "nav nav-tabs nav-justified";

  // Create and append li and button elements for "Personal Information"
  const liPersonalInfo = document.createElement("li");
  liPersonalInfo.className = "nav-item";

  const buttonPersonalInfo = document.createElement("button");
  buttonPersonalInfo.id = "personal-info";
  buttonPersonalInfo.className = "btn nav-link";
  buttonPersonalInfo.textContent = "Personal Information";
  buttonPersonalInfo.addEventListener("click", personalInfo);

  liPersonalInfo.appendChild(buttonPersonalInfo);
  ulElement.appendChild(liPersonalInfo);

  // Create and append li and button elements for "Contact"
  const liContact = document.createElement("li");
  liContact.className = "nav-item";

  const buttonContact = document.createElement("button");
  buttonContact.id = "contact";
  buttonContact.className = "btn nav-link";
  buttonContact.textContent = "Contact";
  buttonContact.addEventListener("click", contactInfo);

  liContact.appendChild(buttonContact);
  ulElement.appendChild(liContact);

  // Create and append li and button elements for "Health Concerns"
  const liProblem = document.createElement("li");
  liProblem.className = "nav-item";

  const buttonProblem = document.createElement("button");
  buttonProblem.id = "healthConcerns";
  buttonProblem.className = "btn nav-link";
  buttonProblem.textContent = "Health Concerns";
  buttonProblem.addEventListener("click", healthConcerns);

  liProblem.appendChild(buttonProblem);
  ulElement.appendChild(liProblem);

  // Create and append li and button elements for "Appointments"
  const liAppointments = document.createElement("li");
  liAppointments.className = "nav-item";

  const buttonAppointments = document.createElement("button");
  buttonAppointments.id = "appointments";
  buttonAppointments.className = "btn nav-link";
  buttonAppointments.textContent = "Appointment";
  buttonAppointments.addEventListener("click", appointments);

  liAppointments.appendChild(buttonAppointments);
  ulElement.appendChild(liAppointments);

  // Create and append li and button elements for "Prescription"
  const liPrescription = document.createElement("li");
  liPrescription.className = "nav-item";

  const buttonPrescription = document.createElement("button");
  buttonPrescription.id = "prescription";
  buttonPrescription.className = "btn nav-link";
  buttonPrescription.textContent = "Prescription";
  buttonPrescription.addEventListener("click", prescription);

  liPrescription.appendChild(buttonPrescription);
  ulElement.appendChild(liPrescription);

  // Append the ul element to the div element
  divElement.appendChild(ulElement);

  // Append the div element to the body or any other container element
  topDivNavTabs.appendChild(divElement);
}

// Forms ⬇️⬇️⬇️
function personalInfoForm() {
  contentDiv.innerHTML = " ";
  let permPPPIForm = document.createElement("form");
  permPPPIForm.id = "permPatient-personalInfo-form";
  contentDiv.appendChild(permPPPIForm);
  var resultdiv = document.createElement("div");
  permPPPIForm.appendChild(resultdiv);
  resultdiv.className = "row";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
  leftcol.style = "flex:1 0 10rem; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:2.5% 0 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:2% 0 0 0; flex:1 0 10rem; ";

  // Patient Type
  // Create label element
  const permPPType = document.createElement("span");
  permPPType.innerHTML = "Patient Type : ";
  permPPType.className = "fw-medium fs-5 w-100";

  const permPPTPERMPatient = document.createElement("span");
  permPPTPERMPatient.innerHTML = "Perm Patient";
  permPPTPERMPatient.className = " fw-bolder fs-5 w-100";

  leftcol.appendChild(permPPType);
  leftcol.appendChild(permPPTPERMPatient);

  // Patient Name
  // Create input element
  const permPPName = document.createElement("input");
  permPPName.type = "text";
  permPPName.required = true;
  permPPName.className = "form-control";
  permPPName.id = "permpatient-patient-name";
  permPPName.placeholder = "Patient Name";

  // Create label element
  const permPPNLabel = document.createElement("label");
  permPPNLabel.htmlFor = "permpatient-patient-name";
  permPPNLabel.innerText = "Patient Name";
  permPPNLabel.className = "w-100 ";

  // Create div element
  const permPPNDiv = document.createElement("div");
  permPPNDiv.className = "form-floating mb-3 mt-3";
  permPPNDiv.appendChild(permPPName);
  permPPNDiv.appendChild(permPPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(permPPNDiv);

  // Patient Address
  // Create textarea element
  const permPPAddress = document.createElement("textarea");
  permPPAddress.className = "form-control";
  permPPAddress.required = true;
  permPPAddress.placeholder = "Leave a comment here";
  permPPAddress.id = "permpatient-patient-address";

  // Create label element
  const permPPALabel = document.createElement("label");
  permPPALabel.htmlFor = "permpatient-patient-address";
  permPPALabel.innerText = "Patient Address";
  permPPALabel.className = "w-100 ";

  // Create div element
  const permPPADiv = document.createElement("div");
  permPPADiv.className = "form-floating mb-3";
  permPPADiv.appendChild(permPPAddress);
  permPPADiv.appendChild(permPPALabel);

  // Append the div to the body or another container element
  leftcol.appendChild(permPPADiv);

  // Patient Phone Number
  // Create input element
  const permPPMNumber = document.createElement("input");
  permPPMNumber.type = "tel";
  permPPMNumber.required = true;
  permPPMNumber.className = "form-control";
  permPPMNumber.id = "permpatient-patient-phone-number";
  permPPMNumber.placeholder = "name@example.com";

  // Create label element
  const permPPMNLabel = document.createElement("label");
  permPPMNLabel.htmlFor = "permpatient-patient-phone-number";
  permPPMNLabel.innerText = "Patient Phone Number";
  permPPMNLabel.className = "w-100 ";

  // Create div element
  const permPPMNDiv = document.createElement("div");
  permPPMNDiv.className = "form-floating mb-3 mt-3";
  permPPMNDiv.appendChild(permPPMNumber);
  permPPMNDiv.appendChild(permPPMNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(permPPMNDiv);

  // Patient DOB
  // Create input element
  const permPPDOBirth = document.createElement("input");
  permPPDOBirth.type = "date";
  permPPDOBirth.required = true;
  permPPDOBirth.className = "form-control";
  permPPDOBirth.id = "permpatient-patient-dOB";
  permPPDOBirth.placeholder = "Date Of Birth";

  // Create label element
  const permPPDOBLabel = document.createElement("label");
  permPPDOBLabel.htmlFor = "permpatient-patient-dOB";
  permPPDOBLabel.innerText = "Patient Date Of Birth";
  permPPDOBLabel.className = "w-100 ";

  // Create div element
  const permPPDOBDiv = document.createElement("div");
  permPPDOBDiv.className = "form-floating mb-3";
  permPPDOBDiv.appendChild(permPPDOBirth);
  permPPDOBDiv.appendChild(permPPDOBLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(permPPDOBDiv);

  // Patient Blood Group
  // Define an array of blood groups
  var bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  // Create input element
  const permPPBGroup = document.createElement("select");
  permPPBGroup.className =
    "mx-2 w-100  form-control form-select d-inline-block  ";
  permPPBGroup.id = "permpatient-patient-bg";

  const permPPBGNone = document.createElement("option");
  permPPBGNone.value = "None";
  permPPBGNone.selected = true;
  permPPBGNone.innerHTML = "Select an Option";
  permPPBGroup.appendChild(permPPBGNone);
  bloodGroups.forEach(pBGValues);

  // function for BloodGroups
  function pBGValues(x) {
    let permPPBGOpations = document.createElement("option");
    permPPBGOpations.value = x;
    permPPBGOpations.innerHTML = x;

    permPPBGroup.appendChild(permPPBGOpations);
  }

  // Create label element
  const permPPBGLabel = document.createElement("label");
  permPPBGLabel.htmlFor = "permpatient-patient-bg";
  permPPBGLabel.innerText = "Patient Blood Group : ";
  permPPBGLabel.className = "w-100 mx-2 fw-medium elipsed-label";

  // Create div element
  const permPPBGDiv = document.createElement("div");
  permPPBGDiv.className = " mb-3 mt-3 ";

  permPPBGDiv.appendChild(permPPBGLabel);
  permPPBGDiv.appendChild(permPPBGroup);
  // Append the div to the body or another container element
  rightcol.appendChild(permPPBGDiv);

  // permPatient Personal Info Submit Btn
  // create a div for submit btn
  let permPPISBDiv = document.createElement("div");
  contentDiv.appendChild(permPPISBDiv);
  permPPISBDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const permPPISBtn = document.createElement("button");
  permPPISBtn.type = "submit";
  permPPISBtn.className = "btn btn-primary bg-primary  w-100";
  permPPISBtn.id = "patientRegistrationSubmitBtn";
  permPPISBtn.innerText = "Submit";
  permPPISBtn.addEventListener("click", permPPIDetailsSubmit);

  // Append the button to the body or another container element
  permPPISBDiv.appendChild(permPPISBtn);
}

function contactInfoForm() {
  contentDiv.innerHTML = " ";
  let permPPCIForm = document.createElement("form");
  permPPCIForm.id = "permPatient-contactInfo-form";
  contentDiv.appendChild(permPPCIForm);
  var resultdiv = document.createElement("div");
  permPPCIForm.appendChild(resultdiv);
  resultdiv.className = "row";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  // Patient Phone Number(Alternate Number)
  // Create input element
  const permPAPNumber = document.createElement("input");
  permPAPNumber.type = "tel";
  permPAPNumber.required = true;
  permPAPNumber.className = "form-control";
  permPAPNumber.id = "permpatient-patient-alternate-phone-number";
  permPAPNumber.placeholder = "name@example.com";

  // Create label element
  const permPAPNLabel = document.createElement("label");
  permPAPNLabel.htmlFor = "permpatient-patient-alternate-phone-number";
  permPAPNLabel.innerText = "Patient Phone Number (Alternate)";
  permPAPNLabel.className = "w-100  ";

  // Create div element
  const permPAPNDiv = document.createElement("div");
  permPAPNDiv.className = "form-floating mb-3 mt-3";
  permPAPNDiv.appendChild(permPAPNumber);
  permPAPNDiv.appendChild(permPAPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(permPAPNDiv);

  // Patient Email ID
  // Create input element
  const permPEmail = document.createElement("input");
  permPEmail.type = "email";
  permPEmail.required = true;
  permPEmail.className = "form-control";
  permPEmail.id = "permpatient-patient-email-id";
  permPEmail.placeholder = "name@example.com";

  // Create label element
  const permPELabel = document.createElement("label");
  permPELabel.htmlFor = "permpatient-patient-email-id";
  permPELabel.innerText = "Patient Email ID";
  permPELabel.className = "w-100  ";

  // Create div element
  const permPEDiv = document.createElement("div");
  permPEDiv.className = "form-floating mb-3 mt-3";
  permPEDiv.appendChild(permPEmail);
  permPEDiv.appendChild(permPELabel);

  // Append the div to the body or another container element
  leftcol.appendChild(permPEDiv);

  // Gaurdian Name
  // Create input element
  const permPGName = document.createElement("input");
  permPGName.type = "text";
  permPGName.required = true;
  permPGName.className = "form-control";
  permPGName.id = "permpatient-patient-gaurdian-name";
  permPGName.placeholder = " ";

  // Create label element
  const permPGNLabel = document.createElement("label");
  permPGNLabel.htmlFor = "permpatient-patient-gaurdian-name";
  permPGNLabel.innerText = "Gaurdian Name ";
  permPGNLabel.className = "w-100  ";

  // Create div element
  const permPGNDiv = document.createElement("div");
  permPGNDiv.className = "form-floating mb-3 mt-3";
  permPGNDiv.appendChild(permPGName);
  permPGNDiv.appendChild(permPGNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(permPGNDiv);

  // Gaurdian Phone Number
  // Create input element
  const permPGPNumber = document.createElement("input");
  permPGPNumber.type = "tel";
  permPGPNumber.required = true;
  permPGPNumber.className = "form-control";
  permPGPNumber.id = "permpatient-gaurdian-phone-number";
  permPGPNumber.placeholder = " ";

  // Create label element
  const permPGPNLabel = document.createElement("label");
  permPGPNLabel.htmlFor = "permpatient-gaurdian-phone-number";
  permPGPNLabel.innerText = " Gaurdian Phone Number ";
  permPGPNLabel.className = "w-100  ";

  // Create div element
  const permPGPNDiv = document.createElement("div");
  permPGPNDiv.className = "form-floating mb-3 mt-3";
  permPGPNDiv.appendChild(permPGPNumber);
  permPGPNDiv.appendChild(permPGPNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(permPGPNDiv);

  // Gaurdian Email ID
  // Create input element
  const permPGEmail = document.createElement("input");
  permPGEmail.type = "email";
  permPGEmail.required = true;
  permPGEmail.className = "form-control";
  permPGEmail.id = "permpatient-gaurdian-email-id";
  permPGEmail.placeholder = "name@example.com";

  // Create label element
  const permPGELabel = document.createElement("label");
  permPGELabel.htmlFor = "permpatient-gaurdian-email-id";
  permPGELabel.innerText = "Gaurdian Email ID";
  permPGELabel.className = "w-100  ";

  // Create div element
  const permPGEDiv = document.createElement("div");
  permPGEDiv.className = "form-floating mb-3 mt-3";
  permPGEDiv.appendChild(permPGEmail);
  permPGEDiv.appendChild(permPGELabel);

  // Append the div to the body or another container element
  rightcol.appendChild(permPGEDiv);

  // permPatient Contact Info Submit Btn
  // create a div for submit btn
  let permPCISDiv = document.createElement("div");
  contentDiv.appendChild(permPCISDiv);
  permPCISDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const permPCISBtn = document.createElement("button");
  permPCISBtn.type = "submit";
  permPCISBtn.className = "btn btn-primary bg-primary  w-100";
  permPCISBtn.id = "permPatient-healthConcerns-SubmitBtn";
  permPCISBtn.innerText = "Submit";
  permPCISBtn.addEventListener("click", permPCIDetailsSubmit);

  // Append the button to the body or another container element
  permPCISDiv.appendChild(permPCISBtn);
}

function healthConcernsForm() {
  contentDiv.innerHTML = " ";
  let permPPHCForm = document.createElement("form");
  permPPHCForm.id = "permPatient-healthConcerns-form";
  contentDiv.appendChild(permPPHCForm);
  var resultdiv = document.createElement("div");
  permPPHCForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-6 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-6 px-2";
  rightcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  // Current Problems
  // Create textarea element
  const permPPCProblems = document.createElement("textarea");
  permPPCProblems.className = "form-control form-reset ";
  permPPCProblems.required = true;
  permPPCProblems.placeholder = "Leave a comment here";
  permPPCProblems.id = "permpatient-current-problems";
  permPPCProblems.style = "  ";

  // Create label element
  const permPPCPLabel = document.createElement("label");
  permPPCPLabel.htmlFor = "permpatient-current-problems";
  permPPCPLabel.innerText = "Current Problems";
  permPPCPLabel.className = "w-100 fw-medium ";

  // Create div element
  const permPPCPDiv = document.createElement("div");
  permPPCPDiv.className = "form-floating mb-3";
  permPPCPDiv.appendChild(permPPCProblems);
  permPPCPDiv.appendChild(permPPCPLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(permPPCPDiv);

  // Previous Problems
  // Create textarea element
  const permPPPProblems = document.createElement("textarea");
  permPPPProblems.className = "form-control form-reset ";
  permPPPProblems.required = true;
  permPPPProblems.placeholder = "Leave a comment here";
  permPPPProblems.id = "permpatient-previous-problems";
  permPPPProblems.style = " ";

  // Create label element
  const permPPPPLabel = document.createElement("label");
  permPPPPLabel.htmlFor = "permpatient-previous-problems";
  permPPPPLabel.innerText = "Previous Problems";
  permPPPPLabel.className = "w-100 fw-medium ";

  // Create div element
  const permPPPPDiv = document.createElement("div");
  permPPPPDiv.className = "form-floating mb-3";
  permPPPPDiv.appendChild(permPPPProblems);
  permPPPPDiv.appendChild(permPPPPLabel);

  // Append the div to the body or another container element
  rightcol.appendChild(permPPPPDiv);

  // permPatient Health Concerns Submit Btn
  // create a div for submit btn
  let permPPHCsubmitDiv = document.createElement("div");
  contentDiv.appendChild(permPPHCsubmitDiv);
  permPPHCsubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const permPPHCSBtn = document.createElement("button");
  permPPHCSBtn.type = "submit";
  permPPHCSBtn.className = "btn btn-primary bg-primary  w-100";
  permPPHCSBtn.id = "permPatient-healthConcerns-SubmitBtn";
  permPPHCSBtn.innerText = "Submit";
  permPPHCSBtn.addEventListener("click", permPHCDetailsSubmit);

  // Append the button to the body or another container element
  permPPHCsubmitDiv.appendChild(permPPHCSBtn);
}

function appointmentsForm() {
  contentDiv.innerHTML = " ";
  let permPPAForm = document.createElement("form");
  permPPAForm.id = "permPatient-appointments-form";
  contentDiv.appendChild(permPPAForm);
  var resultdiv = document.createElement("div");
  permPPAForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-5 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-7 px-2";
  rightcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem; ";


  var Doctors= [
    {
        "specialty": "Audiologists",
        "doctors": [
            "Dr. Ashish Kumar",
            "Dr. Kesh Chudry",
            "Dr. Shalini Periaswamy",
            "Dr. Subham Sarangi",
            "Dr. Monica Chatterjee"
        ]
    },
    {
        "specialty": "Cardiologists",
        "doctors": [
            "Dr. Bikram K Mohanty",
            "Dr. Amit Malik",
            "Dr. Ashish Chauhan",
            "Dr. Sarita Gulati",
            "Dr. Bipin Kumar Dubey"
        ]
    },
    {
        "specialty": "Cardiothoracic Surgeon",
        "doctors": [
            "Dr B N Das",
            "Dr. Shanti Talwar",
            "Dr Muthu Jothi",
            "Dr. Ramesh Arora",
            "Dr. M.r. Girinath"
        ]
    },
    {
        "specialty": "Dentist",
        "doctors": [
            "Dr. Vani Hegde",
            "Dr. Anil Kohli",
            "Dr. Shashi Bhushan Gupta",
            "Dr. Kartik Mandal",
            "Dr. Sonali Taneja"
        ]
    },
    {
        "specialty": "ENT Specialist",
        "doctors": [
            "Dr. E.V. Raman",
            "Dr. EC Vinaya Kumar",
            "Dr. P. L. Dhingra",
            "Dr. Debashish Dutta Majumdar",
            "Dr. Nagamani YS"
        ]
    },
    {
        "specialty": "Endocrinologist",
        "doctors": [
            "Dr. Iyad Hassan",
            "Dr. Jayashree Gopal",
            "Dr Sivagnana Sundaram",
            "Dr. Anoop Misra",
            "Dr. Rajendiran N"
        ]
    },
    {
        "specialty": "Gynecologist",
        "doctors": [
            "Dr. Aradhana Singh",
            "Dr. Madhu Srivastava",
            "Dr. Padmapriya Vivek",
            "Dr. Monika Wadhwan",
            "Dr. Neera Bhan"
        ]
    },
    {
        "specialty": "Neurologist",
        "doctors": [
            "Dr. Puneet Agarwal",
            "Dr. Geetha Lakshmipathy",
            "Dr. Anand Kumar Saxena",
            "Dr. Mukul Varma",
            "Dr. Praveen Gupta"
        ]
    },
    {
        "specialty": "Oncologist",
        "doctors": [
            "Dr. Nandini Hazarika",
            "Dr. Ian Pinto",
            "Dr. Jayanti S Thumsi",
            "Dr. Pramod Kumar Julka",
            "Dr. Suresh Advani"
        ]
    },
    {
        "specialty": "Orthopedic Surgeon",
        "doctors": [
            "Dr. Balvinder Rana",
            "Dr. Ram Chidambaram",
            "Dr. Yatinder Kharbanda",
            "Dr. Jayant Arora",
            "Dr. Narender Kumar Magu"
        ]
    },
    {
        "specialty": "Paediatrician",
        "doctors": [
            "Dr. Jyotsna Kirtane",
            "Dr. Deepika Gandhi",
            "Dr. Subhash C Arya",
            "Dr. Jyothi Raghuram",
            "Dr. Lokesh Mahajan"
        ]
    },
    {
        "specialty": "Psychiatrists",
        "doctors": [
            "Dr. Santosh Bangar",
            "Dr. Manish Jain",
            "Dr. P Raghuram Reddy",
            "Dr. Puneet Dwevedi",
            "Dr. Sujeet Dwevedi",
            "Dr. V.s.p. Bashyam"
        ]
    },
    {
        "specialty": "Radiologist",
        "doctors": [
            "Dr. Irene Faith Manoja",
            "Dr. Nihar Ranjan Mohanty",
            "Dr. Mugada Chandra Sekhar",
            "Dr. Chaganti Rama Seshu",
            "Dr. Polukonda Geetha Vani"
        ]
    },
    {
        "specialty": "Pulmonologist",
        "doctors": [
            "Dr. Ashok Sengupta",
            "Dr. Abhay Uppe",
            "Dr. Manoj Kumar Goel",
            "Dr. Nikhil Malhotra",
            "Dr. Ankit Parakh"
        ]
    },
    {
        "specialty": "Veterinarian",
        "doctors": [
            "Dr. Rajesh Kumar Singh",
            "Dr. R. Suresh Kumar",
            "Dr. Anirudh Mittal",
            "Dr. Karnati",
            "Dr. Srinivas Pulpa"
        ]
    }
];

  const permPPASpecialist = document.createElement("select");
  permPPASpecialist.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  permPPASpecialist.id = "permpatient-appointment-specialist";

  const permPPASNone = document.createElement("option");
  permPPASNone.value = "None";
  permPPASNone.selected = true;
  permPPASNone.innerHTML = "Select a Speciality Doctor";
  permPPASpecialist.appendChild(permPPASNone);

  Doctors.forEach(Specialist);
  // function for Specialists
  function Specialist(x) {

    let permPPASOptionsGroup=document.createElement("optgroup");
    permPPASOptionsGroup.value=x.specialty;
    permPPASOptionsGroup.label=x.specialty;
    permPPASOptionsGroup.className="fs-5 fw-medium";
    permPPASOptionsGroup.style="background-color: lightgray; ";

    permPPASpecialist.appendChild(permPPASOptionsGroup);

    // console.log(x.specialty);
    for(let i=0;i<x.doctors.length;i++){
    let permPPASOptions = document.createElement("option");
    permPPASOptions.value = x.doctors[i];
    permPPASOptions.innerHTML = x.doctors[i];
    permPPASpecialist.appendChild(permPPASOptions);
    }
  }

  // Create label element
  const permPPASLabel = document.createElement("label");
  permPPASLabel.htmlFor = "permpatient-appointment-specialist";
  permPPASLabel.innerText = "Select the Speciality Doctor : ";
  permPPASLabel.className = "w-100 ms-3 ps-1 fw-medium elipsed-label";

  // Create div element
  const permPPASDiv = document.createElement("div");
  permPPASDiv.className = " mb-3 mt-4 ";

  permPPASDiv.appendChild(permPPASLabel);
  permPPASDiv.appendChild(permPPASpecialist);
  // Append the div to the body or another container element
  leftcol.appendChild(permPPASDiv);


  // permPatient Appointment Submit Btn
  // create a div for submit btn
  let permPPASubmitDiv = document.createElement("div");
  contentDiv.appendChild(permPPASubmitDiv);
  permPPASubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const permPPASBtn = document.createElement("button");
  permPPASBtn.type = "submit";
  permPPASBtn.className = "btn btn-primary bg-primary  w-100";
  permPPASBtn.id = "permPatient-appointment-submitBtn";
  permPPASBtn.innerText = "Submit";
  permPPASBtn.addEventListener("click", permPADetailsSubmit);

  // Append the button to the body or another container element
  permPPASubmitDiv.appendChild(permPPASBtn);
}

function prescriptionForm() {
  contentDiv.innerHTML = " ";
  let permPPPForm = document.createElement("form");
  permPPPForm.id = "permPatient-prescription-form";
  contentDiv.appendChild(permPPPForm);
  var resultdiv = document.createElement("div");
  permPPPForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  // resultdiv.style="height: 380px;";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2 prescription-cols ";
  leftcol.style = " padding:1% 1% 0 0; flex:1 0 10rem; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2 prescription-cols ";
  middleCol.style = " padding:1% 1% 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2 prescription-cols ";
  rightcol.style = " padding:1% 1% 0 0; flex:1 0 10rem;  ";

  // Medicines
  let permPPPMSLabel = document.createElement("label");
  permPPPMSLabel.htmlFor = "medicine-scroll";
  permPPPMSLabel.className = " mx-2 fw-medium fs-5 elipsed-label  ";
  permPPPMSLabel.innerHTML = "Prescribed Medicines : ";
  leftcol.appendChild(permPPPMSLabel);

  let permPPPMScroll = document.createElement("div");
  permPPPMScroll.id = "medicine-scroll";
  permPPPMScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let permPPPMedicines = [
    "Acetaminophen",
    "Adderall",
    "Amitriptyline",
    "Amlodipine",
    "Amoxicillin",
    "Atenolol",
    "Ativan",
    "Atorvastatin",
    "Azithromycin",
    "B-Complex",
    "Benzonatate",
    "Brilinta",
    "Bunavail",
    "Buprenorphine",
    "Cephalexin",
    "Ciprofloxacin",
    "Citalopram",
    "Clindamycin",
    "Clonazepam",
    "Cyclobenzaprine",
    "Cymbalta",
    "Doxycycline",
    "Dupixent",
    "Entresto",
    "Entyvio",
    "Farxiga",
    "Fentanyl Patch",
    "Gabapentin",
    "Gilenya",
    "Glimeperide",
    "Humira",
    "Hydrochlorothiazide",
    "Hydroxychloroquine",
    "Ibuprofen",
    "Imbruvica",
    "Invokana",
    "Januvia",
    "Jardiance",
    "Kevzara",
    "Leqvio",
    "Lexapro",
    "Lisinopril",
    "Lofexidine",
    "Loratadine",
    "Lyrica",
    "Melatonin",
    "Meloxicam",
    "Metformin",
    "Methadone",
    "Methotrexate",
    "Metoprolol",
    "Mounjaro",
    "Naloxone",
    "Naltrexone",
    "Naproxen",
    "Narcan",
    "Nurtec",
    "Omeprazole",
    "Onpattro",
    "Otezla",
    "Ozempic",
    "Pantoprazole",
    "Paracetamol",
    "Plan B",
    "Prednisone",
    "Probuphine",
    "Rybelsus",
    "Sertraline",
    "Sublocade",
    "Telmisartan",
    "Tramadol",
    "Trazodone",
    "Viagra",
    "Wegovy",
    "Wellbutrin",
    "Xanax",
    "Zubsolv"
];
  permPPPMedicines.sort();
  // console.log(permPPPMedicine);
  permPPPMedicines.forEach(medicine);
  // function for medicine
  function medicine(x) {
    let permPPPMCBDiv = document.createElement("div");
    permPPPMCBDiv.className = "mx-2 d-flex ";

    let permPPPMCBoxes = document.createElement("input");
    permPPPMCBoxes.type = "checkbox";
    permPPPMCBoxes.value = x;
    permPPPMCBoxes.className = "mx-2 medicine-selector";
    permPPPMCBoxes.id = "permPatient-prescription-medicine-" + x;

    let permPPPMCBLabels = document.createElement("label");
    permPPPMCBLabels.htmlFor = "permPatient-prescription-medicine-" + x;
    permPPPMCBLabels.className = "w-80 elipsed-label ";
    permPPPMCBLabels.innerHTML = x;

    permPPPMCBDiv.appendChild(permPPPMCBoxes);
    permPPPMCBDiv.appendChild(permPPPMCBLabels);
    permPPPMScroll.appendChild(permPPPMCBDiv);
    leftcol.appendChild(permPPPMScroll);
  }

  // Tests
  let permPPPTSLabel = document.createElement("label");
  permPPPTSLabel.htmlFor = "test-scroll";
  permPPPTSLabel.className = " mx-2 fw-medium fs-5 elipsed-label ";
  permPPPTSLabel.innerHTML = "Prescribed Tests : ";
  middleCol.appendChild(permPPPTSLabel);

  let permPPPTScroll = document.createElement("div");
  permPPPTScroll.id = "test-scroll";
  permPPPTScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let permPPPTests = [
    "ACTH (Adrenocorticotropic hormone)",
    "AFP (Alpha-fetoprotein)",
    "ALP (Alkaline phosphatase)",
    "ALT (Alanine aminotransferase)",
    "ANA (Antinuclear antibody)",
    "Anti-CCP (Anti-cyclic citrullinated peptide)",
    "Anti-dsDNA (Anti-double stranded DNA)",
    "Audiometry",
    "BUN (Blood urea nitrogen)",
    "Bilirubin",
    "Blood sugar",
    "Bone marrow biopsy",
    "CA-125 (Cancer antigen 125)",
    "CBC (Complete blood count)",
    "CEA (Carcinoembryonic antigen)",
    "CO2 (Carbon dioxide)",
    "Colonoscopy",
    "Cortisol",
    "Culture",
    "DEXA (Dual-energy X-ray absorptiometry)",
    "EEG (Electroencephalogram)",
    "ELISA (Enzyme-linked immunosorbent assay)",
    "EMG (Electromyography)",
    "Eosinophils",
    "Erythrocyte sedimentation rate (ESR)",
    "Funduscopy",
    "GFR (Glomerular filtration rate)",
    "Gastroscopy",
    "Gram stain",
    "HbA1c (Glycated hemoglobin)",
    "Lumbar puncture",
    "MRI scans (Magnetic resonance imaging)",
    "Oximetry",
    "PCR (Polymerase chain reaction)",
    "Prenatal testing",
    "PSA (Prostate-specific antigen)",
    "Peak flow",
    "PT (Prothrombin time)",
    "Prolactin",
    "QCT (Quantitative computed tomography)",
    "RF (Rheumatoid factor)",
    "Refraction",
    "Skin biopsy",
    "Skin prick test",
    "Spirometry",
    "Stress test",
    "TSH (Thyroid-stimulating hormone)",
    "Tonometry",
    "Tympanometry",
    "Urinalysis",
    "Urine culture",
    "Urine glucose",
    "Visual acuity",
    "aPTT (Activated partial thromboplastin time)",
    "pH (Potential of Hydrogen)"
];

  // permPPPTest.sort();
  // console.log(permPPPMedicine);
  permPPPTests.forEach(test);
  // function for medicine
  function test(y) {
    let permPPPTCBDiv = document.createElement("div");
    permPPPTCBDiv.className = "mx-2 d-flex ";

    let permPPPTCBoxes = document.createElement("input");
    permPPPTCBoxes.type = "checkbox";
    permPPPTCBoxes.value = y;
    permPPPTCBoxes.className = "mx-2 test-selector ";
    permPPPTCBoxes.id = "permPatient-prescription-test-" + y;

    let permPPPTCBLabels = document.createElement("label");
    permPPPTCBLabels.htmlFor = "permPatient-prescription-test-" + y;
    permPPPTCBLabels.className = "w-80 elipsed-label ";
    permPPPTCBLabels.innerHTML = y;

    permPPPTCBDiv.appendChild(permPPPTCBoxes);
    permPPPTCBDiv.appendChild(permPPPTCBLabels);

    permPPPTScroll.appendChild(permPPPTCBDiv);
    middleCol.appendChild(permPPPTScroll);
  }

  let permPPPSSLabel = document.createElement("label");
  permPPPSSLabel.htmlFor = "scan-scroll";
  permPPPSSLabel.className = " mx-2 fw-medium fs-5 elipsed-label ";
  permPPPSSLabel.innerHTML = "Prescribed Scans : ";
  rightcol.appendChild(permPPPSSLabel);

  let permPPPSScroll = document.createElement("div");
  permPPPSScroll.id = "scan-scroll";
  permPPPSScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let permPPPScans = [
    "Angiogram",
    "Arthroscopy",
    "Biopsy",
    "Bone scan",
    "Bronchoscopy",
    "CT scan (Computed tomography scan)",
    "Cystoscopy",
    "Echocardiogram",
    "Electrocardiogram (ECG)",
    "Electroencephalogram (EEG)",
    "Genetic test",
    "Lung function test",
    "Mammogram",
    "PET scan (Positron emission tomography scan)",
    "SPECT scan (Single-photon emission computed tomography scan)",
    "Ultrasound scan",
    "X-ray"
];
  // permPPPTest.sort();
  // console.log(permPPPMedicine);
  permPPPScans.forEach(scan);
  // function for medicine
  function scan(z) {
    let permPPPSCBDiv = document.createElement("div");
    permPPPSCBDiv.className = "mx-2 d-flex ";

    let permPPPSCBoxes = document.createElement("input");
    permPPPSCBoxes.type = "checkbox";
    permPPPSCBoxes.value = z;
    permPPPSCBoxes.className = "mx-2 scan-selector";
    permPPPSCBoxes.id = "permPatient-prescription-scan-" + z;

    let permPPPSCBLabels = document.createElement("label");
    permPPPSCBLabels.htmlFor = "permPatient-prescription-scan-" + z;
    permPPPSCBLabels.className = "w-80 elipsed-label ";
    permPPPSCBLabels.innerHTML = z;

    permPPPSCBDiv.appendChild(permPPPSCBoxes);
    permPPPSCBDiv.appendChild(permPPPSCBLabels);

    permPPPSScroll.appendChild(permPPPSCBDiv);
    rightcol.appendChild(permPPPSScroll);
  }

  // permPatient Prescriptions Submit Btn
  // create a div for submit btn
  let permPPPSDiv = document.createElement("div");
  contentDiv.appendChild(permPPPSDiv);
  permPPPSDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const permPPPSBtn = document.createElement("button");
  permPPPSBtn.type = "submit";
  permPPPSBtn.className = "btn btn-primary bg-primary  w-100";
  permPPPSBtn.id = "permPatient-prescription-submitBtn";
  permPPPSBtn.innerText = "Submit";
  permPPPSBtn.addEventListener("click", permPPDetailsSubmit);

  // Append the button to the body or another container element
  permPPPSDiv.appendChild(permPPPSBtn);
}

// Submit Functions ⬇️⬇️⬇️
function permPPIDetailsSubmit() {
  let form = document.getElementById("permPatient-personalInfo-form");
  var permPPName = document.getElementById("permpatient-patient-name").value;
  var permPPAddress = document.getElementById("permpatient-patient-address").value;
  var permPPMNumber = document.getElementById("permpatient-patient-phone-number").value;
  var permPPDOB = document.getElementById("permpatient-patient-dOB").value;
  var permPPBG = document.getElementById("permpatient-patient-bg").value;

  var isDeleted = false;

    PermPatientDetails.hospitalPatientName=permPPName;
    PermPatientDetails.hospitalPatientAddress=permPPAddress;
    PermPatientDetails.hospitalPatientPhoneNumber=permPPMNumber;
    PermPatientDetails.hospitalPatientDob=permPPDOB;
    PermPatientDetails.hospitalPatientBloodGroup=permPPBG

    console.log(permPPName);
    console.log(permPPAddress);
    console.log(permPPMNumber);
    console.log(permPPDOB);
    console.log(permPPBG);
  
    form.reset();
  contactInfo();
}

function permPCIDetailsSubmit() {
  let form = document.getElementById("permPatient-contactInfo-form");
  let permPAPNumber = document.getElementById("permpatient-patient-alternate-phone-number").value;
  let permPEmail = document.getElementById("permpatient-patient-email-id").value;
  let permPGName = document.getElementById("permpatient-patient-gaurdian-name").value;
  let permPGPNumber = document.getElementById("permpatient-gaurdian-phone-number").value;
  let permPGEmail = document.getElementById("permpatient-gaurdian-email-id").value;

    PermPatientDetails.hospitalPatientAlternateNumber = permPAPNumber;
    PermPatientDetails.hospitalPatientEmailid = permPEmail;
    PermPatientDetails.hospitalPatientGuardianName = permPGName;
    PermPatientDetails.hospitalPatientGuardianPhoneNumber = permPGPNumber;
    PermPatientDetails.hospitalPatientGuardianEmailid = permPGEmail;

    console.log(permPAPNumber);
    console.log(permPEmail);
    console.log(permPGName);
    console.log(permPGPNumber);
    console.log(permPGEmail);
  
    form.reset();
    healthConcerns();
}

function permPHCDetailsSubmit() {
  let form = document.getElementById("permPatient-healthConcerns-form");
  let permPPCProblems = document.getElementById("permpatient-current-problems").value;
  let permPPPProblems = document.getElementById("permpatient-previous-problems").value;

    PermPatientDetails.hospitalPatientCurrentProblem=permPPCProblems;
    PermPatientDetails.hospitalPatientPreviousProblem=permPPPProblems;

    console.log(permPPCProblems);
    console.log(permPPPProblems);
  
    form.reset();
    appointments();
}

function permPADetailsSubmit() {
  let form = document.getElementById("permPatient-appointments-form");
  let permPPASpecialist = document.getElementById("permpatient-appointment-specialist").value;

  PermPatientDetails.hospitalPatientDoctor=permPPASpecialist;
  console.log(permPPASpecialist);

  form.reset();
  prescription();
}

function permPPDetailsSubmit() {
  let form = document.getElementById("permPatient-prescription-form");
  let submitBtn= document.getElementById("permPatient-prescription-submitBtn");

  let checkedMedicine = "";
  let checkedTests = "";
  let checkedScans = "";

   // Loop through checkboxes in medicine div
   document.querySelectorAll(".medicine-selector").forEach(function(checkbox) {
       if (checkbox.checked) {
          //  checkedMedicine.push(checkbox.value);
          checkedMedicine +=checkbox.value+", ";
       }
   });

   // Loop through checkboxes in tests div
   document.querySelectorAll(".test-selector").forEach(function(checkbox) {
       if (checkbox.checked) {
          //  checkedTests.push(checkbox.value);
          checkedTests +=checkbox.value+", ";
       }
   });

   // Loop through checkboxes in scans div
   document.querySelectorAll(".scan-selector").forEach(function(checkbox) {
       if (checkbox.checked) {
          //  checkedScans.push(checkbox.value);
          checkedScans +=checkbox.value+", ";
       }
   });

   PermPatientDetails.hospitalPatientMedicine=checkedMedicine;
   PermPatientDetails.hospitalPatientTest=checkedTests;
   PermPatientDetails.hospitalPatientScan=checkedScans;

   console.log(checkedMedicine);
   console.log(checkedTests);
   console.log(checkedScans);
   console.log(PermPatientDetails);
   
   postCall(PermPatientDetails,postURL,submitBtn);
   
  form.reset();

}

function postCall(obj,url,btn){
  
  let data = JSON.stringify(obj);
      var rqst = new XMLHttpRequest();
      rqst.open("POST", url);
      rqst.setRequestHeader("Content-type", "application/json; charset=UTF-8");
      rqst.send(data);

      rqst.onload = function () {
        if (rqst.status === 201) {
          console.log("Post Call Successfull !!!");
          btn.style="display:none;";
          PatientID++;
          showPERMDetails(getURL);
          console.log("cleaning the data .......");
          checkedMedicine="";
          checkedTests="";
          checkedScans="";
          PermPatientDetails={};
         }else{
          localStorage.setItem("inPatientDetails" , data);
         }
  };
}


// function for permPatient Details Edit Button
function permPDEdit(param) {
  personalInfo();

  let permPPNEdit = document.getElementById("permpatient-patient-name");
  let permPPAEdit = document.getElementById("permpatient-patient-address");
  let permPPMNEdit = document.getElementById("permpatient-patient-phone-number");
  let permPPDOBEdit = document.getElementById("permpatient-patient-dOB");
  let permPPBGEdit = document.getElementById("permpatient-patient-bg");

  permPPNEdit.value = param.hospitalPatientName;
  permPPAEdit.value = param.hospitalPatientAddress;
  permPPMNEdit.value = param.hospitalPatientPhoneNumber;
  permPPDOBEdit.value = param.hospitalPatientDob;
  permPPBGEdit.value = param.hospitalPatientBloodGroup;
}

function permPDDelete(param) {
  param.hospitalPatientType = "";
  showPERMDetails(getURL);
}

function permPDView(param) {
  contentDiv.innerHTML = " ";

  let viewDiv = document.createElement("div");
  viewDiv.className = "w-100 prescription-cols showData-scroll ";

  let uPList = document.createElement("ul");
  for(let key in param ){
    let li=document.createElement("li");
    let span =document.createElement("span");
    if(key == "hospitalPatientDob"){
      li.innerHTML="";
      li.innerHTML="hospitalPatientAge"+" : ";
      span.innerHTML=" "+getAge(param[key]);
    }else{
      li.innerHTML=key+" : "; 
      span.innerHTML=" "+param[key];
    }
    span.className="ms-2 ";
    li.appendChild(span);
    uPList.appendChild(li);
  }
  viewDiv.appendChild(uPList);
  contentDiv.appendChild(viewDiv);
}

// Define a function that takes a date string as a parameter
function getAge(dob) {
  // Get the current date
  var today = new Date();
  // Parse the date string and create a new date object
  var birthDate = new Date(dob);
  // Get the difference in years
  var age = today.getFullYear() - birthDate.getFullYear();
  // Adjust the age if the birth month and day are not yet passed
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  // Return the age
  return age;
}
};
