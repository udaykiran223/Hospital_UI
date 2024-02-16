let getURL="http://localhost:8080/Hospital/getAllPatientsTableData";
let postURL="http://localhost:8080/Hospital/savePatientsTable";
var PatientID=1;
function displayInPatient(){
  
function showIPDetails(getURL) {
  let data = new XMLHttpRequest();
data.open("GET", getURL);
data.send();

data.onload = function () {
  console.log("Get Call Successfull !!!! ");
   inPDetails = JSON.parse(this.response);

  var inPPDTHRDetails = [
    "Patient ID",
    "Patient Name",
    "Patient M.NO",
    "Patient Type",
    "Actions",
  ];

    {
    var inPBCDiv = document.getElementById("bottom-div-content");
    inPBCDiv.innerHTML = " ";
    inPBCDiv.className = "px-3 py-3";

    let inPPIBCDiv = document.createElement("div");
    inPBCDiv.appendChild(inPPIBCDiv);
    inPBCDiv.className="showData-scroll h-100 py-1";

    let inPPDTable = document.createElement("table");
    inPPDTable.className = "w-100";

  let headRow = document.createElement("tr");
  for(let x=0; x<inPPDTHRDetails.length;x++){
    let th= document.createElement("th");
    th.innerHTML= inPPDTHRDetails[x];
    th.className="table-text";
    headRow.appendChild(th);
  }
    inPPIBCDiv.appendChild(inPPDTable);

    let tBody = document.createElement("tbody");
    tBody.appendChild(headRow);
    inPPDTable.appendChild(tBody);

    for (let i = 0; i < inPDetails.length; i++) {
      if (inPDetails[i].hospitalPatientType == "IN") {
        let bodyRows = document.createElement("tr");
          bodyRows.className = "w-100";
        let td1 = document.createElement("td");
        td1.innerHTML = "IP00" + inPDetails[i].hospitalPatientIdentity;
        td1.className="table-text ";
        //   td1.style = " width:10%; ";
        let td2 = document.createElement("td");
        td2.innerHTML = inPDetails[i].hospitalPatientName;
        td2.className="table-text ";
        //   td2.style = "width:10%; ";
        let td3 = document.createElement("td");
        td3.innerHTML = inPDetails[i].hospitalPatientPhoneNumber;
        td3.className="table-text ";
        //   td3.style = " width:10%; ";
        let td4 = document.createElement("td");
        td4.innerHTML = inPDetails[i].hospitalPatientType;
        td4.className="table-text ";
        //   td4.style = " width:10%; ";
        let td5 = document.createElement("td");
        td5.className="table-text ";
        //   td5.style = " width:30%; ";

        // View Btn
        let viewBtn = document.createElement("button");
        viewBtn.className ="btn  text-center  me-2 h-25 btn-outline-success bg-success p-1";
        viewBtn.onclick = function () {
          inPDView(inPDetails[i]);
        };
        let viewIcon = document.createElement("i");
        viewIcon.className = "bi bi-eye-fill text-white ";
        viewIcon.style = "font-size:25px; ";

        // Edit Btn
        let editBtn = document.createElement("button");
        editBtn.className ="btn  text-center  h-25 me-2 btn-outline-primary bg-primary p-1";

        // editBtn.addEventListener('click' , inPDEdit(inPDetails[i]));
        editBtn.onclick = function () {
          inPDEdit(inPDetails[i]);
        };

        let editIcon = document.createElement("i");
        editIcon.className = "bi bi-pencil-square text-white ";
        editIcon.style = "font-size:25px; ";

        // Delete Btn
        let deleteBtn = document.createElement("button");
        deleteBtn.className ="btn  text-center  h-25 btn-outline-danger bg-danger p-1";
        deleteBtn.onclick = function () {
          inPDDelete(inPDetails[i]);
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
var InPatientDetails = {
  hospitalPatientType: "IN",
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
  inPatientInfo();
function inPatientInfo() {
  let navBarIPBtn = document.getElementById("sidebar-inPatient-btn");
  navBarIPBtn.className = "active ";
  topDivNavTabs.innerHTML = " ";
  bottomContentDiv.innerHTML = " ";

  topDivNavTabsFunction();
  personalInfo();
}

// Functions to handle button clicks
function personalInfo() {
  personalInfoForm();
  showIPDetails(getURL);
}

function contactInfo() {
  contactInfoForm();
  showIPDetails(getURL);
}

function healthConcerns() {
  healthConcernsForm();
  showIPDetails(getURL);
}

function appointments() {
  appointmentsForm();
  showIPDetails(getURL);
}

function prescription() {
  prescriptionForm();
  showIPDetails(getURL);
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
  let inPPPIForm = document.createElement("form");
  inPPPIForm.id = "inPatient-personalInfo-form";
  contentDiv.appendChild(inPPPIForm);
  var resultdiv = document.createElement("div");
  inPPPIForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2 ";
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
  const inPPType = document.createElement("span");
  inPPType.innerHTML = "Patient Type : ";
  inPPType.className = "fw-medium fs-5 w-100";

  const inPPTIPatient = document.createElement("span");
  inPPTIPatient.innerHTML = "In Patient";
  inPPTIPatient.className = " fw-bolder fs-5 w-100";

  leftcol.appendChild(inPPType);
  leftcol.appendChild(inPPTIPatient);

  // Patient Name
  // Create input element
  const inPPName = document.createElement("input");
  inPPName.type = "text";
  inPPName.required = true;
  inPPName.className = "form-control";
  inPPName.id = "inpatient-patient-name";
  inPPName.placeholder = "Patient Name";

  // Create label element
  const inPPNLabel = document.createElement("label");
  inPPNLabel.htmlFor = "inpatient-patient-name";
  inPPNLabel.innerText = "Patient Name";
  inPPNLabel.className = "w-100 ";

  // Create div element
  const inPPNDiv = document.createElement("div");
  inPPNDiv.className = "form-floating mb-3 mt-3";
  inPPNDiv.appendChild(inPPName);
  inPPNDiv.appendChild(inPPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(inPPNDiv);

  // Patient Address
  // Create textarea element
  const inPPAddress = document.createElement("textarea");
  inPPAddress.className = "form-control";
  inPPAddress.required = true;
  inPPAddress.placeholder = "Leave a comment here";
  inPPAddress.id = "inpatient-patient-address";

  // Create label element
  const inPPALabel = document.createElement("label");
  inPPALabel.htmlFor = "inpatient-patient-address";
  inPPALabel.innerText = "Patient Address";
  inPPALabel.className = "w-100 ";

  // Create div element
  const inPPADiv = document.createElement("div");
  inPPADiv.className = "form-floating mb-3";
  inPPADiv.appendChild(inPPAddress);
  inPPADiv.appendChild(inPPALabel);

  // Append the div to the body or another container element
  leftcol.appendChild(inPPADiv);

  // Patient Phone Number
  // Create input element
  const inPPMNumber = document.createElement("input");
  inPPMNumber.type = "tel";
  inPPMNumber.required = true;
  inPPMNumber.className = "form-control";
  inPPMNumber.id = "inpatient-patient-phone-number";
  inPPMNumber.placeholder = "name@example.com";

  // Create label element
  const inPPMNLabel = document.createElement("label");
  inPPMNLabel.htmlFor = "inpatient-patient-phone-number";
  inPPMNLabel.innerText = "Patient Phone Number";
  inPPMNLabel.className = "w-100 ";

  // Create div element
  const inPPMNDiv = document.createElement("div");
  inPPMNDiv.className = "form-floating mb-3 mt-3";
  inPPMNDiv.appendChild(inPPMNumber);
  inPPMNDiv.appendChild(inPPMNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(inPPMNDiv);

  // Patient DOB
  // Create input element
  const inPPDOBirth = document.createElement("input");
  inPPDOBirth.type = "date";
  inPPDOBirth.required = true;
  inPPDOBirth.className = "form-control";
  inPPDOBirth.id = "inpatient-patient-dOB";
  inPPDOBirth.placeholder = "Date Of Birth";

  // Create label element
  const inPPDOBLabel = document.createElement("label");
  inPPDOBLabel.htmlFor = "inpatient-patient-dOB";
  inPPDOBLabel.innerText = "Patient Date Of Birth";
  inPPDOBLabel.className = "w-100 ";

  // Create div element
  const inPPDOBDiv = document.createElement("div");
  inPPDOBDiv.className = "form-floating mb-3";
  inPPDOBDiv.appendChild(inPPDOBirth);
  inPPDOBDiv.appendChild(inPPDOBLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(inPPDOBDiv);

  // Patient Blood Group
  // Define an array of blood groups
  var bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  // Create input element
  const inPPBGroup = document.createElement("select");
  inPPBGroup.className =
    "mx-2 w-100  form-control form-select d-inline-block  ";
  inPPBGroup.id = "inpatient-patient-bg";

  const inPPBGNone = document.createElement("option");
  inPPBGNone.value = "None";
  inPPBGNone.selected = true;
  inPPBGNone.innerHTML = "Select an Option";
  inPPBGroup.appendChild(inPPBGNone);
  bloodGroups.forEach(pBGValues);

  // function for BloodGroups
  function pBGValues(x) {
    let inPPBGOpations = document.createElement("option");
    inPPBGOpations.value = x;
    inPPBGOpations.innerHTML = x;

    inPPBGroup.appendChild(inPPBGOpations);
  }

  // Create label element
  const inPPBGLabel = document.createElement("label");
  inPPBGLabel.htmlFor = "inpatient-patient-bg";
  inPPBGLabel.innerText = "Patient Blood Group : ";
  inPPBGLabel.className = " mx-2 fw-medium elipsed-label";

  // Create div element
  const inPPBGDiv = document.createElement("div");
  inPPBGDiv.className = " mb-3 mt-3 ";

  inPPBGDiv.appendChild(inPPBGLabel);
  inPPBGDiv.appendChild(inPPBGroup);
  // Append the div to the body or another container element
  rightcol.appendChild(inPPBGDiv);

  // inPatient Personal Info Submit Btn
  // create a div for submit btn
  let inPPISBDiv = document.createElement("div");
  contentDiv.appendChild(inPPISBDiv);
  inPPISBDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const inPPISBtn = document.createElement("button");
  inPPISBtn.type = "submit";
  inPPISBtn.className = "btn btn-primary bg-primary  w-100";
  inPPISBtn.id = "patientRegistrationSubmitBtn";
  inPPISBtn.innerText = "Submit";
  inPPISBtn.addEventListener("click", inPPIDetailsSubmit);

  // Append the button to the body or another container element
  inPPISBDiv.appendChild(inPPISBtn);
}

function contactInfoForm() {
  contentDiv.innerHTML = " ";
  let inPPCIForm = document.createElement("form");
  inPPCIForm.id = "inPatient-contactInfo-form";
  contentDiv.appendChild(inPPCIForm);
  var resultdiv = document.createElement("div");
  inPPCIForm.appendChild(resultdiv);
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
  const inPAPNumber = document.createElement("input");
  inPAPNumber.type = "tel";
  inPAPNumber.required = true;
  inPAPNumber.className = "form-control";
  inPAPNumber.id = "inpatient-patient-alternate-phone-number";
  inPAPNumber.placeholder = "name@example.com";

  // Create label element
  const inPAPNLabel = document.createElement("label");
  inPAPNLabel.htmlFor = "inpatient-patient-alternate-phone-number";
  inPAPNLabel.innerText = "Patient Phone Number (Alternate)";
  inPAPNLabel.className = "w-100  ";

  // Create div element
  const inPAPNDiv = document.createElement("div");
  inPAPNDiv.className = "form-floating mb-3 mt-3";
  inPAPNDiv.appendChild(inPAPNumber);
  inPAPNDiv.appendChild(inPAPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(inPAPNDiv);

  // Patient Email ID
  // Create input element
  const inPEmail = document.createElement("input");
  inPEmail.type = "email";
  inPEmail.required = true;
  inPEmail.className = "form-control";
  inPEmail.id = "inpatient-patient-email-id";
  inPEmail.placeholder = "name@example.com";

  // Create label element
  const inPELabel = document.createElement("label");
  inPELabel.htmlFor = "inpatient-patient-email-id";
  inPELabel.innerText = "Patient Email ID";
  inPELabel.className = "w-100  ";

  // Create div element
  const inPEDiv = document.createElement("div");
  inPEDiv.className = "form-floating mb-3 mt-3";
  inPEDiv.appendChild(inPEmail);
  inPEDiv.appendChild(inPELabel);

  // Append the div to the body or another container element
  leftcol.appendChild(inPEDiv);

  // Gaurdian Name
  // Create input element
  const inPGName = document.createElement("input");
  inPGName.type = "text";
  inPGName.required = true;
  inPGName.className = "form-control";
  inPGName.id = "inpatient-patient-gaurdian-name";
  inPGName.placeholder = " ";

  // Create label element
  const inPGNLabel = document.createElement("label");
  inPGNLabel.htmlFor = "inpatient-patient-gaurdian-name";
  inPGNLabel.innerText = "Gaurdian Name ";
  inPGNLabel.className = "w-100  ";

  // Create div element
  const inPGNDiv = document.createElement("div");
  inPGNDiv.className = "form-floating mb-3 mt-3";
  inPGNDiv.appendChild(inPGName);
  inPGNDiv.appendChild(inPGNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(inPGNDiv);

  // Gaurdian Phone Number
  // Create input element
  const inPGPNumber = document.createElement("input");
  inPGPNumber.type = "tel";
  inPGPNumber.required = true;
  inPGPNumber.className = "form-control";
  inPGPNumber.id = "inpatient-gaurdian-phone-number";
  inPGPNumber.placeholder = " ";

  // Create label element
  const inPGPNLabel = document.createElement("label");
  inPGPNLabel.htmlFor = "inpatient-gaurdian-phone-number";
  inPGPNLabel.innerText = " Gaurdian Phone Number ";
  inPGPNLabel.className = "w-100  ";

  // Create div element
  const inPGPNDiv = document.createElement("div");
  inPGPNDiv.className = "form-floating mb-3 mt-3";
  inPGPNDiv.appendChild(inPGPNumber);
  inPGPNDiv.appendChild(inPGPNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(inPGPNDiv);

  // Gaurdian Email ID
  // Create input element
  const inPGEmail = document.createElement("input");
  inPGEmail.type = "email";
  inPGEmail.required = true;
  inPGEmail.className = "form-control";
  inPGEmail.id = "inpatient-gaurdian-email-id";
  inPGEmail.placeholder = "name@example.com";

  // Create label element
  const inPGELabel = document.createElement("label");
  inPGELabel.htmlFor = "inpatient-gaurdian-email-id";
  inPGELabel.innerText = "Gaurdian Email ID";
  inPGELabel.className = "w-100  ";

  // Create div element
  const inPGEDiv = document.createElement("div");
  inPGEDiv.className = "form-floating mb-3 mt-3";
  inPGEDiv.appendChild(inPGEmail);
  inPGEDiv.appendChild(inPGELabel);

  // Append the div to the body or another container element
  rightcol.appendChild(inPGEDiv);

  // inPatient Contact Info Submit Btn
  // create a div for submit btn
  let inPCISDiv = document.createElement("div");
  contentDiv.appendChild(inPCISDiv);
  inPCISDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const inPCISBtn = document.createElement("button");
  inPCISBtn.type = "submit";
  inPCISBtn.className = "btn btn-primary bg-primary  w-100";
  inPCISBtn.id = "inPatient-healthConcerns-SubmitBtn";
  inPCISBtn.innerText = "Submit";
  inPCISBtn.addEventListener("click", inPCIDetailsSubmit);

  // Append the button to the body or another container element
  inPCISDiv.appendChild(inPCISBtn);
}

function healthConcernsForm() {
  contentDiv.innerHTML = " ";
  let inPPHCForm = document.createElement("form");
  inPPHCForm.id = "inPatient-healthConcerns-form";
  contentDiv.appendChild(inPPHCForm);
  var resultdiv = document.createElement("div");
  inPPHCForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-6 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem;  ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-6 px-2";
  rightcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem;  ";

  // Current Problems
  // Create textarea element
  const inPPCProblems = document.createElement("textarea");
  inPPCProblems.className = "form-control form-reset ";
  inPPCProblems.required = true;
  inPPCProblems.placeholder = "Leave a comment here";
  inPPCProblems.id = "inpatient-current-problems";
  inPPCProblems.style = "  ";

  // Create label element
  const inPPCPLabel = document.createElement("label");
  inPPCPLabel.htmlFor = "inpatient-current-problems";
  inPPCPLabel.innerText = "Current Problems";
  inPPCPLabel.className = "w-100 fw-medium ";

  // Create div element
  const inPPCPDiv = document.createElement("div");
  inPPCPDiv.className = "form-floating mb-3";
  inPPCPDiv.appendChild(inPPCProblems);
  inPPCPDiv.appendChild(inPPCPLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(inPPCPDiv);

  // Previous Problems
  // Create textarea element
  const inPPPProblems = document.createElement("textarea");
  inPPPProblems.className = "form-control form-reset ";
  inPPPProblems.required = true;
  inPPPProblems.placeholder = "Leave a comment here";
  inPPPProblems.id = "inpatient-previous-problems";
  inPPPProblems.style = " ";

  // Create label element
  const inPPPPLabel = document.createElement("label");
  inPPPPLabel.htmlFor = "inpatient-previous-problems";
  inPPPPLabel.innerText = "Previous Problems";
  inPPPPLabel.className = "w-100 fw-medium ";

  // Create div element
  const inPPPPDiv = document.createElement("div");
  inPPPPDiv.className = "form-floating mb-3";
  inPPPPDiv.appendChild(inPPPProblems);
  inPPPPDiv.appendChild(inPPPPLabel);

  // Append the div to the body or another container element
  rightcol.appendChild(inPPPPDiv);

  // inPatient Health Concerns Submit Btn
  // create a div for submit btn
  let inPPHCsubmitDiv = document.createElement("div");
  contentDiv.appendChild(inPPHCsubmitDiv);
  inPPHCsubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const inPPHCSBtn = document.createElement("button");
  inPPHCSBtn.type = "submit";
  inPPHCSBtn.className = "btn btn-primary bg-primary  w-100";
  inPPHCSBtn.id = "inPatient-healthConcerns-SubmitBtn";
  inPPHCSBtn.innerText = "Submit";
  inPPHCSBtn.addEventListener("click", inPHCDetailsSubmit);

  // Append the button to the body or another container element
  inPPHCsubmitDiv.appendChild(inPPHCSBtn);
}

function appointmentsForm() {
  contentDiv.innerHTML = " ";
  let inPPAForm = document.createElement("form");
  inPPAForm.id = "inPatient-appointments-form";
  contentDiv.appendChild(inPPAForm);
  var resultdiv = document.createElement("div");
  inPPAForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-5 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem;  ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-7 px-2";
  rightcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem;  ";

  var Doctors = [
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
  // Specialists
  // Create input element
  const inPPASpecialist = document.createElement("select");
  inPPASpecialist.className ="mx-2 w-75 form-control form-select d-inline-block  ";
  inPPASpecialist.id = "inpatient-appointment-specialist";

  const inPPASNone = document.createElement("option");
  inPPASNone.value = "None";
  inPPASNone.selected = true;
  inPPASNone.innerHTML = "Select a Speciality Doctor";
  inPPASpecialist.appendChild(inPPASNone);

  Doctors.forEach(Specialist);
  // function for Specialists
  function Specialist(x) {
    let inPPASOptionsGroup = document.createElement("optgroup");
    inPPASOptionsGroup.value = x.specialty;
    inPPASOptionsGroup.label = x.specialty;
    inPPASOptionsGroup.className = "fs-5 fw-medium";
    inPPASOptionsGroup.style = "background-color: lightgray; ";
    inPPASpecialist.appendChild(inPPASOptionsGroup);

    // console.log(x.specialty);
    for (let i = 0; i < x.doctors.length; i++) {
      let inPPASOptions = document.createElement("option");
      inPPASOptions.value = x.specialty+" : "+x.doctors[i];
      // inPPASOptions.parentlement=x.specialty;
      inPPASOptions.innerHTML = x.doctors[i];
      inPPASpecialist.appendChild(inPPASOptions);
    }
  }

  // Create label element
  const inPPASLabel = document.createElement("label");
  inPPASLabel.htmlFor = "inpatient-appointment-specialist";
  inPPASLabel.innerText = "Select The Speciality Doctor : ";
  inPPASLabel.className = "w-100 ms-3 ps-1 fw-medium elipsed-label";

  // Create div element
  const inPPASDiv = document.createElement("div");
  inPPASDiv.className = " mb-3 mt-4 ";

  inPPASDiv.appendChild(inPPASLabel);
  inPPASDiv.appendChild(inPPASpecialist);
  // Append the div to the body or another container element
  leftcol.appendChild(inPPASDiv);

  // inPatient Appointment Submit Btn
  // create a div for submit btn
  let inPPASubmitDiv = document.createElement("div");
  contentDiv.appendChild(inPPASubmitDiv);
  inPPASubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const inPPASBtn = document.createElement("button");
  inPPASBtn.type = "submit";
  inPPASBtn.className = "btn btn-primary bg-primary  w-100";
  inPPASBtn.id = "inPatient-appointment-submitBtn";
  inPPASBtn.innerText = "Submit";
  inPPASBtn.addEventListener("click", inPADetailsSubmit);

  // Append the button to the body or another container element
  inPPASubmitDiv.appendChild(inPPASBtn);
}

function prescriptionForm() {
  contentDiv.innerHTML = " ";
  let inPPPForm = document.createElement("form");
  inPPPForm.id = "inPatient-prescription-form";
  contentDiv.appendChild(inPPPForm);
  var resultdiv = document.createElement("div");
  inPPPForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  // resultdiv.style="height: 380px;";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2 prescription-cols ";
  leftcol.style = " padding:1% 1% 0 0;  flex:1 0 10rem;  ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2 prescription-cols ";
  middleCol.style = " padding:1% 1% 0 0;  flex:1 0 10rem;  ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2 prescription-cols ";
  rightcol.style = " padding:1% 1% 0 0;  flex:1 0 10rem; ";

  // Medicines
  let inPPPMSLabel = document.createElement("label");
  inPPPMSLabel.htmlFor = "medicine-scroll";
  inPPPMSLabel.className = " mx-2 fw-medium fs-5 elipsed-label  ";
  inPPPMSLabel.innerHTML = "Prescribed Medicines : ";
  leftcol.appendChild(inPPPMSLabel);

  let inPPPMScroll = document.createElement("div");
  inPPPMScroll.id = "medicine-scroll";
  inPPPMScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let inPPPMedicines = [
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
    "Zubsolv",
  ];
  inPPPMedicines.sort();
  // console.log(inPPPMedicine);
  inPPPMedicines.forEach(medicine);
  // function for medicine
  function medicine(x) {
    let inPPPMCBDiv = document.createElement("div");
    inPPPMCBDiv.className = "mx-2 d-flex";

    let inPPPMCBoxes = document.createElement("input");
    inPPPMCBoxes.type = "checkbox";
    inPPPMCBoxes.value = x;
    inPPPMCBoxes.className = "mx-2 medicine-selector ";
    inPPPMCBoxes.id = "inPatient-prescription-medicine-" + x;

    let inPPPMCBLabels = document.createElement("label");
    inPPPMCBLabels.htmlFor = "inPatient-prescription-medicine-" + x;
    inPPPMCBLabels.className = "w-80 elipsed-label ";
    inPPPMCBLabels.innerHTML = x;

    inPPPMCBDiv.appendChild(inPPPMCBoxes);
    inPPPMCBDiv.appendChild(inPPPMCBLabels);
    inPPPMScroll.appendChild(inPPPMCBDiv);
    leftcol.appendChild(inPPPMScroll);
  }

  // Tests
  let inPPPTSLabel = document.createElement("label");
  inPPPTSLabel.htmlFor = "test-scroll";
  inPPPTSLabel.className = " mx-2 fw-medium fs-5 elipsed-label  ";
  inPPPTSLabel.innerHTML = "Prescribed Tests : ";
  middleCol.appendChild(inPPPTSLabel);

  let inPPPTScroll = document.createElement("div");
  inPPPTScroll.id = "test-scroll";
  inPPPTScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let inPPPTests = [
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
    "pH (Potential of Hydrogen)",
  ];

  // inPPPTest.sort();
  // console.log(inPPPMedicine);
  inPPPTests.forEach(test);
  // function for medicine
  function test(y) {
    let inPPPTCBDiv = document.createElement("div");
    inPPPTCBDiv.className = "mx-2 d-flex ";

    let inPPPTCBoxes = document.createElement("input");
    inPPPTCBoxes.type = "checkbox";
    inPPPTCBoxes.value = y;
    inPPPTCBoxes.className = "mx-2 test-selector";
    inPPPTCBoxes.id = "inPatient-prescription-test-" + y;

    let inPPPTCBLabels = document.createElement("label");
    inPPPTCBLabels.htmlFor = "inPatient-prescription-test-" + y;
    inPPPTCBLabels.className = "w-80 elipsed-label ";
    inPPPTCBLabels.innerHTML = y;

    inPPPTCBDiv.appendChild(inPPPTCBoxes);
    inPPPTCBDiv.appendChild(inPPPTCBLabels);

    inPPPTScroll.appendChild(inPPPTCBDiv);
    middleCol.appendChild(inPPPTScroll);
  }

  let inPPPSSLabel = document.createElement("label");
  inPPPSSLabel.htmlFor = "scan-scroll";
  inPPPSSLabel.className = " mx-2 fw-medium fs-5 elipsed-label  ";
  inPPPSSLabel.innerHTML = "Prescribed Scans : ";
  rightcol.appendChild(inPPPSSLabel);

  let inPPPSScroll = document.createElement("div");
  inPPPSScroll.id = "scan-scroll";
  inPPPSScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let inPPPScans = [
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
    "X-ray",
  ];

  // inPPPTest.sort();
  // console.log(inPPPMedicine);
  inPPPScans.forEach(scan);
  // function for medicine
  function scan(z) {
    let inPPPSCBDiv = document.createElement("div");
    inPPPSCBDiv.className = "mx-2 d-flex ";

    let inPPPSCBoxes = document.createElement("input");
    inPPPSCBoxes.type = "checkbox";
    inPPPSCBoxes.value = z;
    inPPPSCBoxes.className = "mx-2  scan-selector";
    inPPPSCBoxes.id = "inPatient-prescription-scan-" + z;

    let inPPPSCBLabels = document.createElement("label");
    inPPPSCBLabels.htmlFor = "inPatient-prescription-scan-" + z;
    inPPPSCBLabels.className = " elipsed-label w-80";
    inPPPSCBLabels.innerHTML = z;

    inPPPSCBDiv.appendChild(inPPPSCBoxes);
    inPPPSCBDiv.appendChild(inPPPSCBLabels);

    inPPPSScroll.appendChild(inPPPSCBDiv);
    rightcol.appendChild(inPPPSScroll);
  }

  // inPatient Prescriptions Submit Btn
  // create a div for submit btn
  let inPPPSDiv = document.createElement("div");
  contentDiv.appendChild(inPPPSDiv);
  inPPPSDiv.className = " text-center submitBtnDiv mx-auto mt-1 ";

  // Create button element
  const inPPPSBtn = document.createElement("button");
  inPPPSBtn.type = "submit";
  inPPPSBtn.className = "btn btn-primary bg-primary  w-100";
  inPPPSBtn.id = "inPatient-prescription-submitBtn";
  inPPPSBtn.innerText = "Submit";
  inPPPSBtn.addEventListener("click", inPPDetailsSubmit);

  // Append the button to the body or another container element
  inPPPSDiv.appendChild(inPPPSBtn);
}

// Submit Functions ⬇️⬇️⬇️
function inPPIDetailsSubmit() {
  let form = document.getElementById("inPatient-personalInfo-form");
  var inPPName = document.getElementById("inpatient-patient-name").value;
  var inPPAddress = document.getElementById("inpatient-patient-address").value;
  var inPPMNumber = document.getElementById("inpatient-patient-phone-number").value;
  var inPPDOB = document.getElementById("inpatient-patient-dOB").value;
  var inPPBG = document.getElementById("inpatient-patient-bg").value;

  // var isDeleted = false;
  InPatientDetails.hospitalPatientName=inPPName;
  InPatientDetails.hospitalPatientAddress=inPPAddress;
  InPatientDetails.hospitalPatientPhoneNumber=inPPMNumber;
  InPatientDetails.hospitalPatientDob=inPPDOB;
  InPatientDetails.hospitalPatientBloodGroup=inPPBG

  console.log(inPPName);
  console.log(inPPAddress);
  console.log(inPPMNumber);
  console.log(inPPDOB);
  console.log(inPPBG);

  form.reset();
contactInfo();
}

function inPCIDetailsSubmit() {
  let form = document.getElementById("inPatient-contactInfo-form");
  let inPAPNumber = document.getElementById("inpatient-patient-alternate-phone-number").value;
  let inPEmail = document.getElementById("inpatient-patient-email-id").value;
  let inPGName = document.getElementById("inpatient-patient-gaurdian-name").value;
  let inPGPNumber = document.getElementById("inpatient-gaurdian-phone-number").value;
  let inPGEmail = document.getElementById("inpatient-gaurdian-email-id").value;

  InPatientDetails.hospitalPatientAlternateNumber = inPAPNumber;
  InPatientDetails.hospitalPatientEmailid = inPEmail;
  InPatientDetails.hospitalPatientGuardianName = inPGName;
  InPatientDetails.hospitalPatientGuardianPhoneNumber = inPGPNumber;
  InPatientDetails.hospitalPatientGuardianEmailid = inPGEmail;
  console.log(inPAPNumber);
  console.log(inPEmail);
  console.log(inPGName);
  console.log(inPGPNumber);
  console.log(inPGEmail);

  form.reset();
  healthConcerns();
}

function inPHCDetailsSubmit() {
  let form = document.getElementById("inPatient-healthConcerns-form");
  let inPPCProblems = document.getElementById("inpatient-current-problems").value;
  let inPPPProblems = document.getElementById("inpatient-previous-problems").value;

  InPatientDetails.hospitalPatientCurrentProblem=inPPCProblems;
  InPatientDetails.hospitalPatientPreviousProblem=inPPPProblems;
  console.log(inPPCProblems);
  console.log(inPPPProblems);

  form.reset();
  appointments();
}

function inPADetailsSubmit() {
  let form = document.getElementById("inPatient-appointments-form");
  let inPPASpecialist = document.getElementById("inpatient-appointment-specialist").value;

    // // Get the selected option
    // const selectedOption = inPPASpecialist.options[inPPASpecialist.selectedIndex];

    // // Get the optgroup element of the selected option
    // const optgroup = selectedOption.parentElement;

    // // Get the value of the selected option
    // const selectedValue = selectedOption.value;

    // // Get the label of the optgroup
    // const optgroupLabel = optgroup.label;

    // // Log the selected value and optgroup label
    // console.log('Selected Value:', selectedValue);
    // console.log('Optgroup Label:', optgroupLabel);

  console.log(inPPASpecialist);
  InPatientDetails.hospitalPatientDoctor=inPPASpecialist;
 
  form.reset();
  prescription();
}

function inPPDetailsSubmit() {
  let form = document.getElementById("inPatient-prescription-form");
  let submitBtn= document.getElementById("inPatient-prescription-submitBtn");
   
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

   InPatientDetails.hospitalPatientMedicine=checkedMedicine;
   InPatientDetails.hospitalPatientTest=checkedTests;
   InPatientDetails.hospitalPatientScan=checkedScans;

   console.log(checkedMedicine);
   console.log(checkedTests);
   console.log(checkedScans);
   console.log(InPatientDetails);
   
   postCall(InPatientDetails,postURL,submitBtn);

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
          showIPDetails(getURL);
          console.log("cleaning the data .......");
          checkedMedicine="";
          checkedTests="";
          checkedScans="";
          InPatientDetails={};
         }else{
          localStorage.setItem("inPatientDetails" , data);
         }
  };
}


// function for InPatient Details Edit Button
function inPDEdit(param) {
  personalInfo();

  let inPPNEdit = document.getElementById("inpatient-patient-name");
  let inPPAEdit = document.getElementById("inpatient-patient-address");
  let inPPMNEdit = document.getElementById("inpatient-patient-phone-number");
  let inPPDOBEdit = document.getElementById("inpatient-patient-dOB");
  let inPPBGEdit = document.getElementById("inpatient-patient-bg");

  inPPNEdit.value = param.hospitalPatientName;
  inPPAEdit.value = param.hospitalPatientAddress;
  inPPMNEdit.value = param.hospitalPatientPhoneNumber;
  inPPDOBEdit.value = param.hospitalPatientDob;
  inPPBGEdit.value = param.hospitalPatientBloodGroup;
}

function inPDDelete(param) {
  param.hospitalPatientType = "";
  showIPDetails(getURL);
}

function inPDView(param) {
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
