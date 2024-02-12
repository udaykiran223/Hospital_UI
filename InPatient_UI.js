// div for top div navtabs
var topDivNavTabs = document.getElementById("top-div-navtabs");

// Div for showing the content in top div
var contentDiv = document.getElementById("top-div-content");
contentDiv.className = "px-3 py-3 ";

// div for bottom div
var bottomContentDiv = document.getElementById("bottom-div-content");

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
  showIPDetails();
}

function contactInfo() {
  contactInfoForm();
  showIPDetails();
}

function healthConcerns() {
  healthConcernsForm();
  showIPDetails();
}

function appointments() {
  appointmentsForm();
  showIPDetails();
}

function prescription() {
  prescriptionForm();
  showIPDetails();
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
  resultdiv.className="row ";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2 ";
  leftcol.style="flex:1 0 10rem; ";

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
  inPPBGLabel.className = "w-100 mx-2 fw-medium";

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
  inPPISBDiv.className = " text-center w-50 mx-auto mt-3 ";

  // Create button element
  const inPPISBtn = document.createElement("button");
  inPPISBtn.type = "submit";
  inPPISBtn.className = "btn btn-primary bg-primary  w-50";
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

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
  leftcol.style = " padding:2.2% 0 0 0; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:2.2% 0 0 0; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:2.2% 0 0 0; ";

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
  inPCISDiv.className = " text-center w-50 mx-auto mt-3 ";

  // Create button element
  const inPCISBtn = document.createElement("button");
  inPCISBtn.type = "submit";
  inPCISBtn.className = "btn btn-primary bg-primary  w-50";
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

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-6 px-2";
  leftcol.style = " padding:2.2% 0 0 0; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-6 px-2";
  rightcol.style = " padding:2.2% 0 0 0; ";

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
  inPPHCsubmitDiv.className = " text-center w-50 mx-auto mt-3 ";

  // Create button element
  const inPPHCSBtn = document.createElement("button");
  inPPHCSBtn.type = "submit";
  inPPHCSBtn.className = "btn btn-primary bg-primary  w-50";
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

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-5 px-2";
  leftcol.style = " padding:2.2% 0 0 0; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-7 px-2";
  rightcol.style = " padding:2.2% 0 0 0; ";

  var inPPASArray = [
    "Cardiologists",
    "Audiologists",
    "Dentist",
    "ENT Specialist",
    "Gynecologist",
    "Orthopedic Surgeon",
    "Paediatrician",
    "Psychiatrists",
    "Veterinarian",
    "Radiologist",
    "Pulmonologist",
    "Endocrinologist",
    "Oncologist",
    "Neurologist",
    "Cardiothoracic Surgeon",
  ];
  // Specialists
  // Create input element
  const inPPASpecialist = document.createElement("select");
  inPPASpecialist.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  inPPASpecialist.id = "inpatient-appointment-specialist";

  const inPPASNone = document.createElement("option");
  inPPASNone.value = "None";
  inPPASNone.selected = true;
  inPPASNone.innerHTML = "Select a Speciality";
  inPPASpecialist.appendChild(inPPASNone);

  inPPASArray.forEach(Specialist);
  // function for Specialists
  function Specialist(x) {
    let inPPASOptions = document.createElement("option");
    inPPASOptions.value = x;
    inPPASOptions.innerHTML = x;
    inPPASpecialist.appendChild(inPPASOptions);
  }

  // Create label element
  const inPPASLabel = document.createElement("label");
  inPPASLabel.htmlFor = "inpatient-appointment-specialist";
  inPPASLabel.innerText = "Select The Speciality : ";
  inPPASLabel.className = "w-100 ms-3 ps-1 fw-medium ";

  // Create div element
  const inPPASDiv = document.createElement("div");
  inPPASDiv.className = " mb-3 mt-4 ";

  inPPASDiv.appendChild(inPPASLabel);
  inPPASDiv.appendChild(inPPASpecialist);
  // Append the div to the body or another container element
  leftcol.appendChild(inPPASDiv);

  //   Speciality Doctors
  // Specialists
  // Create input element
  const inPPASDoctor = document.createElement("select");
  inPPASDoctor.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  inPPASDoctor.id = "inpatient-appointment-speciality-doctor";

  const inPPASDNone = document.createElement("option");
  inPPASDNone.value = "None";
  inPPASDNone.selected = true;
  inPPASDNone.innerHTML = "Select a Doctor";
  inPPASDoctor.appendChild(inPPASDNone);

  inPPASArray.forEach(Doctors);
  // function for Specialists
  function Doctors(x) {
    let inPPASDOptions = document.createElement("option");
    inPPASDOptions.value = x;
    inPPASDOptions.innerHTML = x;
    inPPASDoctor.appendChild(inPPASDOptions);
  }

  // Create label element
  const inPPASDLabel = document.createElement("label");
  inPPASDLabel.htmlFor = "inpatient-appointment-speciality-doctor";
  inPPASDLabel.innerText = "Select The Doctor : ";
  inPPASDLabel.className = "w-100 ms-3 ps-1 fw-medium";

  // Create div element
  const inPPASDDiv = document.createElement("div");
  inPPASDDiv.className = " mb-3 mt-4 ";

  inPPASDDiv.appendChild(inPPASDLabel);
  inPPASDDiv.appendChild(inPPASDoctor);
  // Append the div to the body or another container element
  leftcol.appendChild(inPPASDDiv);

  // inPatient Appointment Submit Btn
  // create a div for submit btn
  let inPPASubmitDiv = document.createElement("div");
  contentDiv.appendChild(inPPASubmitDiv);
  inPPASubmitDiv.className = " text-center w-50 mx-auto mt-3 ";

  // Create button element
  const inPPASBtn = document.createElement("button");
  inPPASBtn.type = "submit";
  inPPASBtn.className = "btn btn-primary bg-primary  w-50";
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

  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2  ";
  leftcol.style = " padding:1% 1% 0 0;  ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:1% 1% 0 0; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:1% 1% 0 0;   ";

  // Medicines
  let inPPPMSLabel = document.createElement("label");
  inPPPMSLabel.htmlFor = "medicine-scroll";
  inPPPMSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  inPPPMSLabel.innerHTML = "Select Prescribed Medicines : ";
  leftcol.appendChild(inPPPMSLabel);

  let inPPPMScroll = document.createElement("div");
  inPPPMScroll.id = "medicine-scroll";
  inPPPMScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let inPPPMedicines = [
    "Amlodipine",
    "Amoxycilin",
    "Atenolol",
    "Azithromycin",
    "B-Complex",
    "Chlorophenaramine",
    "Citrizen",
    "Glimeperide",
    "Metformin",
    "Omeprazole",
    "Paracetamol",
    "Sertraline",
    "Telmisartan",
  ];
  inPPPMedicines.sort();
  // console.log(inPPPMedicine);
  inPPPMedicines.forEach(medicine);
  // function for medicine
  function medicine(x) {
    let inPPPMCBDiv = document.createElement("div");
    inPPPMCBDiv.className = "mx-2 ";

    let inPPPMCBoxes = document.createElement("input");
    inPPPMCBoxes.type = "checkbox";
    inPPPMCBoxes.value = x;
    inPPPMCBoxes.className = "mx-2 ";
    inPPPMCBoxes.id = "inPatient-prescription-medicine-" + x;

    let inPPPMCBLabels = document.createElement("label");
    inPPPMCBLabels.htmlFor = "inPatient-prescription-medicine-" + x;
    inPPPMCBLabels.className = "w-75 ";
    inPPPMCBLabels.innerHTML = x;

    inPPPMCBDiv.appendChild(inPPPMCBoxes);
    inPPPMCBDiv.appendChild(inPPPMCBLabels);
    inPPPMScroll.appendChild(inPPPMCBDiv);
    leftcol.appendChild(inPPPMScroll);
  }

  // Tests
  let inPPPTSLabel = document.createElement("label");
  inPPPTSLabel.htmlFor = "test-scroll";
  inPPPTSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  inPPPTSLabel.innerHTML = "Select Prescribed Tests : ";
  middleCol.appendChild(inPPPTSLabel);

  let inPPPTScroll = document.createElement("div");
  inPPPTScroll.id = "test-scroll";
  inPPPTScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let inPPPTests = [
    "Test1",
    "Test2",
    "Test3",
    "Test4",
    "Test5",
    "Test6",
    "Test7",
    "Test8",
    "Test9",
    "Test10",
    "Test11",
    "Test12",
    "Test13",
  ];
  // inPPPTest.sort();
  // console.log(inPPPMedicine);
  inPPPTests.forEach(test);
  // function for medicine
  function test(y) {
    let inPPPTCBDiv = document.createElement("div");
    inPPPTCBDiv.className = "mx-2 ";

    let inPPPTCBoxes = document.createElement("input");
    inPPPTCBoxes.type = "checkbox";
    inPPPTCBoxes.value = y;
    inPPPTCBoxes.className = "mx-2 ";
    inPPPTCBoxes.id = "inPatient-prescription-test-" + y;

    let inPPPTCBLabels = document.createElement("label");
    inPPPTCBLabels.htmlFor = "inPatient-prescription-test-" + y;
    inPPPTCBLabels.className = "w-75 ";
    inPPPTCBLabels.innerHTML = y;

    inPPPTCBDiv.appendChild(inPPPTCBoxes);
    inPPPTCBDiv.appendChild(inPPPTCBLabels);

    inPPPTScroll.appendChild(inPPPTCBDiv);
    middleCol.appendChild(inPPPTScroll);
  }

  let inPPPSSLabel = document.createElement("label");
  inPPPSSLabel.htmlFor = "scan-scroll";
  inPPPSSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  inPPPSSLabel.innerHTML = "Select Prescribed Scans : ";
  rightcol.appendChild(inPPPSSLabel);

  let inPPPSScroll = document.createElement("div");
  inPPPSScroll.id = "scan-scroll";
  inPPPSScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let inPPPScans = [
    "Scan1",
    "Scan2",
    "Scan3",
    "Scan4",
    "Scan5",
    "Scan6",
    "Scan7",
    "Scan8",
    "Scan9",
    "Scan10",
    "Scan11",
    "Scan12",
    "Scan13",
  ];
  // inPPPTest.sort();
  // console.log(inPPPMedicine);
  inPPPScans.forEach(scan);
  // function for medicine
  function scan(z) {
    let inPPPSCBDiv = document.createElement("div");
    inPPPSCBDiv.className = "mx-2 ";

    let inPPPSCBoxes = document.createElement("input");
    inPPPSCBoxes.type = "checkbox";
    inPPPSCBoxes.value = z;
    inPPPSCBoxes.className = "mx-2 ";
    inPPPSCBoxes.id = "inPatient-prescription-scan-" + z;

    let inPPPSCBLabels = document.createElement("label");
    inPPPSCBLabels.htmlFor = "inPatient-prescription-scan-" + z;
    inPPPSCBLabels.className = "w-75 ";
    inPPPSCBLabels.innerHTML = z;

    inPPPSCBDiv.appendChild(inPPPSCBoxes);
    inPPPSCBDiv.appendChild(inPPPSCBLabels);

    inPPPSScroll.appendChild(inPPPSCBDiv);
    rightcol.appendChild(inPPPSScroll);
  }

  // inPatient Prescriptions Submit Btn
  // create a div for submit btn
  let inPPPSDiv = document.createElement("div");
  middleCol.appendChild(inPPPSDiv);
  inPPPSDiv.className = " text-center w-75 mx-auto mt-3 ";

  // Create button element
  const inPPPSBtn = document.createElement("button");
  inPPPSBtn.type = "submit";
  inPPPSBtn.className = "btn btn-primary bg-primary  w-75";
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
  var inPPMNumber = document.getElementById(
    "inpatient-patient-phone-number"
  ).value;
  var inPPDOB = document.getElementById("inpatient-patient-dOB").value;
  var inPPBG = document.getElementById("inpatient-patient-bg").value;

  var isDeleted = false;

  const inPPDetailsObject = {
    Patient_Name: inPPName,
    Patient_Address: inPPAddress,
    Patient_MN: inPPMNumber,
    Patient_DOB: inPPDOB,
    Patient_BG: inPPBG,
    Patient_Deleted: isDeleted,
  };

  console.log(inPPDetailsObject);

  //   if (localStorage.getItem("inPatientDetails") == null) {
  //     let a = [];

  //     a.push(inPPDetailsObject);
  //     localStorage.setItem("inPatientDetails", JSON.stringify(a));
  //     showIPDetails();
  //   } else {
  //     let inPatientDetails = JSON.parse(localStorage.getItem("inPatientDetails"));
  //     inPatientDetails.push(inPPDetailsObject);

  //     localStorage.setItem("inPatientDetails", JSON.stringify(inPatientDetails));
  //     showIPDetails();
  //   }

  form.reset();
}

function inPCIDetailsSubmit() {
  let form = document.getElementById("inPatient-contactInfo-form");
  let inPAPNumber = document.getElementById(
    "inpatient-patient-alternate-phone-number"
  ).value;
  let inPEmail = document.getElementById("inpatient-patient-email-id").value;
  let inPGName = document.getElementById(
    "inpatient-patient-gaurdian-name"
  ).value;
  let inPGPNumber = document.getElementById(
    "inpatient-gaurdian-phone-number"
  ).value;
  let inPGEmail = document.getElementById("inpatient-gaurdian-email-id").value;

  console.log(inPAPNumber);
  console.log(inPEmail);
  console.log(inPGName);
  console.log(inPGPNumber);
  console.log(inPGEmail);

  form.reset();
}

function inPHCDetailsSubmit() {
  let form = document.getElementById("inPatient-healthConcerns-form");
  let inPPCProblems = document.getElementById(
    "inpatient-current-problems"
  ).value;
  let inPPPProblems = document.getElementById(
    "inpatient-previous-problems"
  ).value;

  console.log(inPPCProblems);
  console.log(inPPPProblems);

  form.reset();
}

function inPADetailsSubmit() {
  let form = document.getElementById("inPatient-appointments-form");

  let inPPASpecialist = document.getElementById(
    "inpatient-appointment-specialist"
  ).value;
  let inPPASDoctor = document.getElementById(
    "inpatient-appointment-speciality-doctor"
  ).value;

  console.log(inPPASpecialist);
  console.log(inPPASDoctor);

  form.reset();
}

function inPPDetailsSubmit() {
  let form = document.getElementById("inPatient-prescription-form");

  form.reset();
}

// InPatientDetails Array
var inPDetails = JSON.parse(localStorage.getItem("inPatientDetails"));
console.log(inPDetails);

function showIPDetails() {
  var inPPDTHRDetails = [
    "Patient ID",
    "Patient Name",
    "Patient M.NO",
    "Patient Type",
    "Actions",
  ];

  //   console.log(inPDetails);

  var inPBCDiv = document.getElementById("bottom-div-content");
  inPBCDiv.innerHTML = "Load the InPatient Details using API's  ";

  //   {
  //   var inPBCDiv = document.getElementById("bottom-div-content");
  //   inPBCDiv.innerHTML = " ";
  //   inPBCDiv.className = "px-3 py-3";

  //   let inPPIBCDiv = document.createElement("div");
  //   inPBCDiv.appendChild(inPPIBCDiv);

  //   let inPPDTable = document.createElement("table");
  //   inPPDTable.className = "w-100";

  //   let headRow = document.createElement("tr");

  //   let th1 = document.createElement("th");
  //   th1.innerText = inPPDTHRDetails[0];
  //   let th2 = document.createElement("th");
  //   th2.innerHTML = inPPDTHRDetails[1];
  //   let th3 = document.createElement("th");
  //   th3.innerHTML = inPPDTHRDetails[2];
  //   let th4 = document.createElement("th");
  //   th4.innerHTML = inPPDTHRDetails[3];
  //   let th5 = document.createElement("th");
  //   th5.innerHTML = inPPDTHRDetails[4];

  //   headRow.appendChild(th1);
  //   headRow.appendChild(th2);
  //   headRow.appendChild(th3);
  //   headRow.appendChild(th4);
  //   headRow.appendChild(th5);

  //   // inPPDTable.appendChild(headRow);
  //   inPPIBCDiv.appendChild(inPPDTable);

  //   let tBody = document.createElement("tbody");
  //   tBody.appendChild(headRow);
  //   inPPDTable.appendChild(tBody);

  //   for (let i = 0; i < inPDetails.length; i++) {
  //     if (inPDetails[i].Patient_Deleted == false) {
  //       let bodyRows = document.createElement("tr");
  //       //   bodyRows.className = "w-100";

  //       let td1 = document.createElement("td");
  //       td1.innerHTML = "IP00" + i;
  //       //   td1.style = " width:10%; ";
  //       let td2 = document.createElement("td");
  //       td2.innerHTML = inPDetails[i].Patient_Name;
  //       //   td2.style = "width:10%; ";
  //       let td3 = document.createElement("td");
  //       td3.innerHTML = inPDetails[i].Patient_MN;
  //       //   td3.style = " width:10%; ";
  //       let td4 = document.createElement("td");
  //       td4.innerHTML = "IN";
  //       //   td4.style = " width:10%; ";
  //       let td5 = document.createElement("td");
  //       //   td5.style = " width:30%; ";

  //       // View Btn
  //       let viewBtn = document.createElement("button");
  //       viewBtn.className =
  //         "btn  text-center w-25 me-2 h-25 btn-outline-success bg-success p-1";
  //       viewBtn.onclick = function () {
  //         inPDView(inPDetails[i]);
  //       };
  //       let viewIcon = document.createElement("i");
  //       viewIcon.className = "bi bi-eye-fill text-white ";
  //       viewIcon.style = "font-size:25px; ";

  //       // Edit Btn
  //       let editBtn = document.createElement("button");
  //       editBtn.className =
  //         "btn  text-center w-25 h-25 me-2 btn-outline-primary bg-primary p-1";

  //       // editBtn.addEventListener('click' , inPDEdit(inPDetails[i]));
  //       editBtn.onclick = function () {
  //         inPDEdit(inPDetails[i]);
  //       };

  //       let editIcon = document.createElement("i");
  //       editIcon.className = "bi bi-pencil-square text-white ";
  //       editIcon.style = "font-size:25px; ";

  //       // Delete Btn
  //       let deleteBtn = document.createElement("button");
  //       deleteBtn.className =
  //         "btn  text-center w-25 h-25 btn-outline-danger bg-danger p-1";
  //       deleteBtn.onclick = function () {
  //         inPDDelete(inPDetails[i]);
  //       };
  //       let deleteIcon = document.createElement("i");
  //       deleteIcon.className = "bi bi-trash-fill text-white ";
  //       deleteIcon.style = "font-size:25px; ";

  //       viewBtn.appendChild(viewIcon);
  //       editBtn.appendChild(editIcon);
  //       deleteBtn.appendChild(deleteIcon);

  //       td5.appendChild(viewBtn);
  //       td5.appendChild(editBtn);
  //       td5.appendChild(deleteBtn);

  //       bodyRows.appendChild(td1);
  //       bodyRows.appendChild(td2);
  //       bodyRows.appendChild(td3);
  //       bodyRows.appendChild(td4);
  //       bodyRows.appendChild(td5);

  //       tBody.appendChild(bodyRows);
  //     }
  //   }

  // }
}

// function for InPatient Details Edit Button
function inPDEdit(param) {
  personalInfo();

  let inPPNEdit = document.getElementById("inpatient-patient-name");
  let inPPAEdit = document.getElementById("inpatient-patient-address");
  let inPPMNEdit = document.getElementById("inpatient-patient-phone-number");
  let inPPDOBEdit = document.getElementById("inpatient-patient-dOB");
  let inPPBGEdit = document.getElementById("inpatient-patient-bg");

  inPPNEdit.value = param.Patient_Name;
  inPPAEdit.value = param.Patient_Address;
  inPPMNEdit.value = param.Patient_MN;
  inPPDOBEdit.value = param.Patient_DOB;
  inPPBGEdit.value = param.Patient_BG;
}

function inPDDelete(param) {
  param.Patient_Deleted = true;
  showIPDetails();
}

function inPDView(param) {
  contentDiv.innerHTML = " ";

  let viewDiv = document.createElement("div");
  viewDiv.className = "w-100 ";

  let uPList = document.createElement("ul");

  let liPID = document.createElement("li");
  liPID.innerHTML = "Patient ID : ";

  let spanPID = document.createElement("span");
  spanPID.textContent = "IP";
  spanPID.className = " ms-2 ";

  let liPN = document.createElement("li");
  liPN.innerHTML = "Patient Name : ";

  let spanPN = document.createElement("span");
  spanPN.textContent = param.Patient_Name;
  spanPN.className + " ms-2 ";

  let liPAge = document.createElement("li");
  liPAge.innerHTML = "Patient Age : ";

  let spanPAge = document.createElement("span");
  spanPAge.textContent = getAge(param.Patient_DOB);
  spanPAge.className = " ms-2 ";

  let liPMN = document.createElement("li");
  liPMN.innerHTML = "Patient M-No : ";

  let spanPMN = document.createElement("span");
  spanPMN.textContent = param.Patient_MN;
  spanPMN.className = " ms-2 ";

  let liPBG = document.createElement("li");
  liPBG.innerHTML = "Patient Blood Group : ";

  let spanPBG = document.createElement("span");
  spanPBG.textContent = param.Patient_BG + ".";
  spanPBG.className = "ms-2 ";

  let liPA = document.createElement("li");
  liPA.innerHTML = "Patient Address : ";

  let spanPA = document.createElement("span");
  spanPA.textContent = param.Patient_Address + ".";
  spanPA.className = "ms-2 ";

  liPID.appendChild(spanPID);
  uPList.appendChild(liPID);
  liPN.appendChild(spanPN);
  uPList.appendChild(liPN);
  liPAge.appendChild(spanPAge);
  uPList.appendChild(liPAge);
  liPMN.appendChild(spanPMN);
  uPList.appendChild(liPMN);
  liPBG.appendChild(spanPBG);
  uPList.appendChild(liPBG);
  liPA.appendChild(spanPA);
  uPList.appendChild(liPA);

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
