// div for top div navtabs
var topDivNavTabs = document.getElementById("top-div-navtabs");

// Div for showing the content in top div
var contentDiv = document.getElementById("top-div-content");
contentDiv.className = "px-3 py-3 ";

// div for bottom div
var bottomContentDiv = document.getElementById("bottom-div-content");

emPatientInfo();

function emPatientInfo() {
  let navBarEPBtn = document.getElementById("sidebar-emPatient-btn");
  navBarEPBtn.className = "active ";
  topDivNavTabs.innerHTML = " ";
  bottomContentDiv.innerHTML = " ";

  topDivNavTabsFunction();
  personalInfo();
}

// Functions to handle button clicks
function personalInfo() {
  personalInfoForm();
  showEPDetails();
}

function contactInfo() {
  contactInfoForm();
  showEPDetails();
}

function healthConcerns() {
  healthConcernsForm();
  showEPDetails();
}

function appointments() {
  appointmentsForm();
  showEPDetails();
}

function prescription() {
  prescriptionForm();
  showEPDetails();
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
  let emPPPIForm = document.createElement("form");
  emPPPIForm.id = "emPatient-personalInfo-form";
  contentDiv.appendChild(emPPPIForm);
  var resultdiv = document.createElement("div");
  emPPPIForm.appendChild(resultdiv);
  resultdiv.className = "row";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";


  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
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
  const emPPType = document.createElement("span");
  emPPType.innerHTML = "Patient Type : ";
  emPPType.className = "fw-medium fs-5 w-100";

  const emPPTEPatient = document.createElement("span");
  emPPTEPatient.innerHTML = "Em Patient";
  emPPTEPatient.className = " fw-bolder fs-5 w-100";

  leftcol.appendChild(emPPType);
  leftcol.appendChild(emPPTEPatient);

  // Patient Name
  // Create input element
  const emPPName = document.createElement("input");
  emPPName.type = "text";
  emPPName.required = true;
  emPPName.className = "form-control";
  emPPName.id = "empatient-patient-name";
  emPPName.placeholder = "Patient Name";

  // Create label element
  const emPPNLabel = document.createElement("label");
  emPPNLabel.htmlFor = "empatient-patient-name";
  emPPNLabel.innerText = "Patient Name";
  emPPNLabel.className = "w-100 ";

  // Create div element
  const emPPNDiv = document.createElement("div");
  emPPNDiv.className = "form-floating mb-3 mt-3";
  emPPNDiv.appendChild(emPPName);
  emPPNDiv.appendChild(emPPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(emPPNDiv);

  // Patient Address
  // Create textarea element
  const emPPAddress = document.createElement("textarea");
  emPPAddress.className = "form-control";
  emPPAddress.required = true;
  emPPAddress.placeholder = "Leave a comment here";
  emPPAddress.id = "empatient-patient-address";

  // Create label element
  const emPPALabel = document.createElement("label");
  emPPALabel.htmlFor = "empatient-patient-address";
  emPPALabel.innerText = "Patient Address";
  emPPALabel.className = "w-100 ";

  // Create div element
  const emPPADiv = document.createElement("div");
  emPPADiv.className = "form-floating mb-3";
  emPPADiv.appendChild(emPPAddress);
  emPPADiv.appendChild(emPPALabel);

  // Append the div to the body or another container element
  leftcol.appendChild(emPPADiv);

  // Patient Phone Number
  // Create input element
  const emPPMNumber = document.createElement("input");
  emPPMNumber.type = "tel";
  emPPMNumber.required = true;
  emPPMNumber.className = "form-control";
  emPPMNumber.id = "empatient-patient-phone-number";
  emPPMNumber.placeholder = "name@example.com";

  // Create label element
  const emPPMNLabel = document.createElement("label");
  emPPMNLabel.htmlFor = "empatient-patient-phone-number";
  emPPMNLabel.innerText = "Patient Phone Number";
  emPPMNLabel.className = "w-100 ";

  // Create div element
  const emPPMNDiv = document.createElement("div");
  emPPMNDiv.className = "form-floating mb-3 mt-3";
  emPPMNDiv.appendChild(emPPMNumber);
  emPPMNDiv.appendChild(emPPMNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(emPPMNDiv);

  // Patient DOB
  // Create input element
  const emPPDOBirth = document.createElement("input");
  emPPDOBirth.type = "date";
  emPPDOBirth.required = true;
  emPPDOBirth.className = "form-control";
  emPPDOBirth.id = "empatient-patient-dOB";
  emPPDOBirth.placeholder = "Date Of Birth";

  // Create label element
  const emPPDOBLabel = document.createElement("label");
  emPPDOBLabel.htmlFor = "empatient-patient-dOB";
  emPPDOBLabel.innerText = "Patient Date Of Birth";
  emPPDOBLabel.className = "w-100 ";

  // Create div element
  const emPPDOBDiv = document.createElement("div");
  emPPDOBDiv.className = "form-floating mb-3";
  emPPDOBDiv.appendChild(emPPDOBirth);
  emPPDOBDiv.appendChild(emPPDOBLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(emPPDOBDiv);

  // Patient Blood Group
  // Define an array of blood groups
  var bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  // Create input element
  const emPPBGroup = document.createElement("select");
  emPPBGroup.className =
    "mx-2 w-100  form-control form-select d-inline-block  ";
  emPPBGroup.id = "empatient-patient-bg";

  const emPPBGNone = document.createElement("option");
  emPPBGNone.value = "None";
  emPPBGNone.selected = true;
  emPPBGNone.innerHTML = "Select an Option";
  emPPBGroup.appendChild(emPPBGNone);
  bloodGroups.forEach(pBGValues);

  // function for BloodGroups
  function pBGValues(x) {
    let emPPBGOpations = document.createElement("option");
    emPPBGOpations.value = x;
    emPPBGOpations.innerHTML = x;

    emPPBGroup.appendChild(emPPBGOpations);
  }

  // Create label element
  const emPPBGLabel = document.createElement("label");
  emPPBGLabel.htmlFor = "empatient-patient-bg";
  emPPBGLabel.innerText = "Patient Blood Group : ";
  emPPBGLabel.className = "w-100 mx-2 fw-medium";

  // Create div element
  const emPPBGDiv = document.createElement("div");
  emPPBGDiv.className = " mb-3 mt-3 ";

  emPPBGDiv.appendChild(emPPBGLabel);
  emPPBGDiv.appendChild(emPPBGroup);
  // Append the div to the body or another container element
  rightcol.appendChild(emPPBGDiv);

  // emPatient Personal Info Submit Btn
  // create a div for submit btn
  let emPPISBDiv = document.createElement("div");
  contentDiv.appendChild(emPPISBDiv);
  emPPISBDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const emPPISBtn = document.createElement("button");
  emPPISBtn.type = "submit";
  emPPISBtn.className = "btn btn-primary bg-primary  w-100";
  emPPISBtn.id = "patientRegistrationSubmitBtn";
  emPPISBtn.innerText = "Submit";
  emPPISBtn.addEventListener("click", emPPIDetailsSubmit);

  // Append the button to the body or another container element
  emPPISBDiv.appendChild(emPPISBtn);
}

function contactInfoForm() {
  contentDiv.innerHTML = " ";
  let emPPCIForm = document.createElement("form");
  emPPCIForm.id = "emPatient-contactInfo-form";
  contentDiv.appendChild(emPPCIForm);
  var resultdiv = document.createElement("div");
  emPPCIForm.appendChild(resultdiv);
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
  const emPAPNumber = document.createElement("input");
  emPAPNumber.type = "tel";
  emPAPNumber.required = true;
  emPAPNumber.className = "form-control";
  emPAPNumber.id = "empatient-patient-alternate-phone-number";
  emPAPNumber.placeholder = "name@example.com";

  // Create label element
  const emPAPNLabel = document.createElement("label");
  emPAPNLabel.htmlFor = "empatient-patient-alternate-phone-number";
  emPAPNLabel.innerText = "Patient Phone Number (Alternate)";
  emPAPNLabel.className = "w-100  ";

  // Create div element
  const emPAPNDiv = document.createElement("div");
  emPAPNDiv.className = "form-floating mb-3 mt-3";
  emPAPNDiv.appendChild(emPAPNumber);
  emPAPNDiv.appendChild(emPAPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(emPAPNDiv);

  // Patient Email ID
  // Create input element
  const emPEmail = document.createElement("input");
  emPEmail.type = "email";
  emPEmail.required = true;
  emPEmail.className = "form-control";
  emPEmail.id = "empatient-patient-email-id";
  emPEmail.placeholder = "name@example.com";

  // Create label element
  const emPELabel = document.createElement("label");
  emPELabel.htmlFor = "empatient-patient-email-id";
  emPELabel.innerText = "Patient Email ID";
  emPELabel.className = "w-100  ";

  // Create div element
  const emPEDiv = document.createElement("div");
  emPEDiv.className = "form-floating mb-3 mt-3";
  emPEDiv.appendChild(emPEmail);
  emPEDiv.appendChild(emPELabel);

  // Append the div to the body or another container element
  leftcol.appendChild(emPEDiv);

  // Gaurdian Name
  // Create input element
  const emPGName = document.createElement("input");
  emPGName.type = "text";
  emPGName.required = true;
  emPGName.className = "form-control";
  emPGName.id = "empatient-patient-gaurdian-name";
  emPGName.placeholder = " ";

  // Create label element
  const emPGNLabel = document.createElement("label");
  emPGNLabel.htmlFor = "empatient-patient-gaurdian-name";
  emPGNLabel.innerText = "Gaurdian Name ";
  emPGNLabel.className = "w-100  ";

  // Create div element
  const emPGNDiv = document.createElement("div");
  emPGNDiv.className = "form-floating mb-3 mt-3";
  emPGNDiv.appendChild(emPGName);
  emPGNDiv.appendChild(emPGNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(emPGNDiv);

  // Gaurdian Phone Number
  // Create input element
  const emPGPNumber = document.createElement("input");
  emPGPNumber.type = "tel";
  emPGPNumber.required = true;
  emPGPNumber.className = "form-control";
  emPGPNumber.id = "empatient-gaurdian-phone-number";
  emPGPNumber.placeholder = " ";

  // Create label element
  const emPGPNLabel = document.createElement("label");
  emPGPNLabel.htmlFor = "empatient-gaurdian-phone-number";
  emPGPNLabel.innerText = " Gaurdian Phone Number ";
  emPGPNLabel.className = "w-100  ";

  // Create div element
  const emPGPNDiv = document.createElement("div");
  emPGPNDiv.className = "form-floating mb-3 mt-3";
  emPGPNDiv.appendChild(emPGPNumber);
  emPGPNDiv.appendChild(emPGPNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(emPGPNDiv);

  // Gaurdian Email ID
  // Create input element
  const emPGEmail = document.createElement("input");
  emPGEmail.type = "email";
  emPGEmail.required = true;
  emPGEmail.className = "form-control";
  emPGEmail.id = "empatient-gaurdian-email-id";
  emPGEmail.placeholder = "name@example.com";

  // Create label element
  const emPGELabel = document.createElement("label");
  emPGELabel.htmlFor = "empatient-gaurdian-email-id";
  emPGELabel.innerText = "Gaurdian Email ID";
  emPGELabel.className = "w-100  ";

  // Create div element
  const emPGEDiv = document.createElement("div");
  emPGEDiv.className = "form-floating mb-3 mt-3";
  emPGEDiv.appendChild(emPGEmail);
  emPGEDiv.appendChild(emPGELabel);

  // Append the div to the body or another container element
  rightcol.appendChild(emPGEDiv);

  // emPatient Contact Info Submit Btn
  // create a div for submit btn
  let emPCISDiv = document.createElement("div");
  contentDiv.appendChild(emPCISDiv);
  emPCISDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const emPCISBtn = document.createElement("button");
  emPCISBtn.type = "submit";
  emPCISBtn.className = "btn btn-primary bg-primary  w-100";
  emPCISBtn.id = "emPatient-healthConcerns-SubmitBtn";
  emPCISBtn.innerText = "Submit";
  emPCISBtn.addEventListener("click", emPCIDetailsSubmit);

  // Append the button to the body or another container element
  emPCISDiv.appendChild(emPCISBtn);
}

function healthConcernsForm() {
  contentDiv.innerHTML = " ";
  let emPPHCForm = document.createElement("form");
  emPPHCForm.id = "emPatient-healthConcerns-form";
  contentDiv.appendChild(emPPHCForm);
  var resultdiv = document.createElement("div");
  emPPHCForm.appendChild(resultdiv);
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
  const emPPCProblems = document.createElement("textarea");
  emPPCProblems.className = "form-control form-reset ";
  emPPCProblems.required = true;
  emPPCProblems.placeholder = "Leave a comment here";
  emPPCProblems.id = "empatient-current-problems";
  emPPCProblems.style = "  ";

  // Create label element
  const emPPCPLabel = document.createElement("label");
  emPPCPLabel.htmlFor = "empatient-current-problems";
  emPPCPLabel.innerText = "Current Problems";
  emPPCPLabel.className = "w-100 fw-medium ";

  // Create div element
  const emPPCPDiv = document.createElement("div");
  emPPCPDiv.className = "form-floating mb-3";
  emPPCPDiv.appendChild(emPPCProblems);
  emPPCPDiv.appendChild(emPPCPLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(emPPCPDiv);

  // Previous Problems
  // Create textarea element
  const emPPPProblems = document.createElement("textarea");
  emPPPProblems.className = "form-control form-reset ";
  emPPPProblems.required = true;
  emPPPProblems.placeholder = "Leave a comment here";
  emPPPProblems.id = "empatient-previous-problems";
  emPPPProblems.style = " ";

  // Create label element
  const emPPPPLabel = document.createElement("label");
  emPPPPLabel.htmlFor = "empatient-previous-problems";
  emPPPPLabel.innerText = "Previous Problems";
  emPPPPLabel.className = "w-100 fw-medium ";

  // Create div element
  const emPPPPDiv = document.createElement("div");
  emPPPPDiv.className = "form-floating mb-3";
  emPPPPDiv.appendChild(emPPPProblems);
  emPPPPDiv.appendChild(emPPPPLabel);

  // Append the div to the body or another container element
  rightcol.appendChild(emPPPPDiv);

  // emPatient Health Concerns Submit Btn
  // create a div for submit btn
  let emPPHCsubmitDiv = document.createElement("div");
  contentDiv.appendChild(emPPHCsubmitDiv);
  emPPHCsubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const emPPHCSBtn = document.createElement("button");
  emPPHCSBtn.type = "submit";
  emPPHCSBtn.className = "btn btn-primary bg-primary  w-100";
  emPPHCSBtn.id = "emPatient-healthConcerns-SubmitBtn";
  emPPHCSBtn.innerText = "Submit";
  emPPHCSBtn.addEventListener("click", emPHCDetailsSubmit);

  // Append the button to the body or another container element
  emPPHCsubmitDiv.appendChild(emPPHCSBtn);
}

function appointmentsForm() {
  contentDiv.innerHTML = " ";
  let emPPAForm = document.createElement("form");
  emPPAForm.id = "emPatient-appointments-form";
  contentDiv.appendChild(emPPAForm);
  var resultdiv = document.createElement("div");
  emPPAForm.appendChild(resultdiv);
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

  var emPPASArray = [
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
  const emPPASpecialist = document.createElement("select");
  emPPASpecialist.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  emPPASpecialist.id = "empatient-appointment-specialist";

  const emPPASNone = document.createElement("option");
  emPPASNone.value = "None";
  emPPASNone.selected = true;
  emPPASNone.innerHTML = "Select a Speciality";
  emPPASpecialist.appendChild(emPPASNone);

  emPPASArray.forEach(Specialist);
  // function for Specialists
  function Specialist(x) {
    let emPPASOptions = document.createElement("option");
    emPPASOptions.value = x;
    emPPASOptions.innerHTML = x;
    emPPASpecialist.appendChild(emPPASOptions);
  }

  // Create label element
  const emPPASLabel = document.createElement("label");
  emPPASLabel.htmlFor = "empatient-appointment-specialist";
  emPPASLabel.innerText = "Select The Speciality : ";
  emPPASLabel.className = "w-100 ms-3 ps-1 fw-medium ";

  // Create div element
  const emPPASDiv = document.createElement("div");
  emPPASDiv.className = " mb-3 mt-4 ";

  emPPASDiv.appendChild(emPPASLabel);
  emPPASDiv.appendChild(emPPASpecialist);
  // Append the div to the body or another container element
  leftcol.appendChild(emPPASDiv);

  //   Speciality Doctors
  // Specialists
  // Create input element
  const emPPASDoctor = document.createElement("select");
  emPPASDoctor.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  emPPASDoctor.id = "empatient-appointment-speciality-doctor";

  const emPPASDNone = document.createElement("option");
  emPPASDNone.value = "None";
  emPPASDNone.selected = true;
  emPPASDNone.innerHTML = "Select a Doctor";
  emPPASDoctor.appendChild(emPPASDNone);

  emPPASArray.forEach(Doctors);
  // function for Specialists
  function Doctors(x) {
    let emPPASDOptions = document.createElement("option");
    emPPASDOptions.value = x;
    emPPASDOptions.innerHTML = x;
    emPPASDoctor.appendChild(emPPASDOptions);
  }

  // Create label element
  const emPPASDLabel = document.createElement("label");
  emPPASDLabel.htmlFor = "empatient-appointment-speciality-doctor";
  emPPASDLabel.innerText = "Select The Doctor : ";
  emPPASDLabel.className = "w-100 ms-3 ps-1 fw-medium";

  // Create div element
  const emPPASDDiv = document.createElement("div");
  emPPASDDiv.className = " mb-3 mt-4 ";

  emPPASDDiv.appendChild(emPPASDLabel);
  emPPASDDiv.appendChild(emPPASDoctor);
  // Append the div to the body or another container element
  leftcol.appendChild(emPPASDDiv);

  // emPatient Appointment Submit Btn
  // create a div for submit btn
  let emPPASubmitDiv = document.createElement("div");
  contentDiv.appendChild(emPPASubmitDiv);
  emPPASubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const emPPASBtn = document.createElement("button");
  emPPASBtn.type = "submit";
  emPPASBtn.className = "btn btn-primary bg-primary  w-100";
  emPPASBtn.id = "emPatient-appointment-submitBtn";
  emPPASBtn.innerText = "Submit";
  emPPASBtn.addEventListener("click", emPADetailsSubmit);

  // Append the button to the body or another container element
  emPPASubmitDiv.appendChild(emPPASBtn);
}

function prescriptionForm() {
  contentDiv.innerHTML = " ";
  let emPPPForm = document.createElement("form");
  emPPPForm.id = "emPatient-prescription-form";
  contentDiv.appendChild(emPPPForm);
  var resultdiv = document.createElement("div");
  emPPPForm.appendChild(resultdiv);
  resultdiv.className = "row ";
  // resultdiv.style="height: 380px;";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";


  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2  ";
  leftcol.style = " padding:1% 1% 0 0; flex:1 0 10rem; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:1% 1% 0 0; flex:1 0 10rem; ";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:1% 1% 0 0; flex:1 0 10rem; ";

  // Medicines
  let emPPPMSLabel = document.createElement("label");
  emPPPMSLabel.htmlFor = "medicine-scroll";
  emPPPMSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  emPPPMSLabel.innerHTML = "Select Prescribed Medicines : ";
  leftcol.appendChild(emPPPMSLabel);

  let emPPPMScroll = document.createElement("div");
  emPPPMScroll.id = "medicine-scroll";
  emPPPMScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let emPPPMedicines = [
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
  emPPPMedicines.sort();
  // console.log(emPPPMedicine);
  emPPPMedicines.forEach(medicine);
  // function for medicine
  function medicine(x) {
    let emPPPMCBDiv = document.createElement("div");
    emPPPMCBDiv.className = "mx-2 ";

    let emPPPMCBoxes = document.createElement("input");
    emPPPMCBoxes.type = "checkbox";
    emPPPMCBoxes.value = x;
    emPPPMCBoxes.className = "mx-2 ";
    emPPPMCBoxes.id = "emPatient-prescription-medicine-" + x;

    let emPPPMCBLabels = document.createElement("label");
    emPPPMCBLabels.htmlFor = "emPatient-prescription-medicine-" + x;
    emPPPMCBLabels.className = "w-75 ";
    emPPPMCBLabels.innerHTML = x;

    emPPPMCBDiv.appendChild(emPPPMCBoxes);
    emPPPMCBDiv.appendChild(emPPPMCBLabels);
    emPPPMScroll.appendChild(emPPPMCBDiv);
    leftcol.appendChild(emPPPMScroll);
  }

  // Tests
  let emPPPTSLabel = document.createElement("label");
  emPPPTSLabel.htmlFor = "test-scroll";
  emPPPTSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  emPPPTSLabel.innerHTML = "Select Prescribed Tests : ";
  middleCol.appendChild(emPPPTSLabel);

  let emPPPTScroll = document.createElement("div");
  emPPPTScroll.id = "test-scroll";
  emPPPTScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let emPPPTests = [
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
  // emPPPTest.sort();
  // console.log(emPPPMedicine);
  emPPPTests.forEach(test);
  // function for medicine
  function test(y) {
    let emPPPTCBDiv = document.createElement("div");
    emPPPTCBDiv.className = "mx-2 ";

    let emPPPTCBoxes = document.createElement("input");
    emPPPTCBoxes.type = "checkbox";
    emPPPTCBoxes.value = y;
    emPPPTCBoxes.className = "mx-2 ";
    emPPPTCBoxes.id = "emPatient-prescription-test-" + y;

    let emPPPTCBLabels = document.createElement("label");
    emPPPTCBLabels.htmlFor = "emPatient-prescription-test-" + y;
    emPPPTCBLabels.className = "w-75 ";
    emPPPTCBLabels.innerHTML = y;

    emPPPTCBDiv.appendChild(emPPPTCBoxes);
    emPPPTCBDiv.appendChild(emPPPTCBLabels);

    emPPPTScroll.appendChild(emPPPTCBDiv);
    middleCol.appendChild(emPPPTScroll);
  }

  let emPPPSSLabel = document.createElement("label");
  emPPPSSLabel.htmlFor = "scan-scroll";
  emPPPSSLabel.className = " mx-2 fw-medium fs-5 w-100  ";
  emPPPSSLabel.innerHTML = "Select Prescribed Scans : ";
  rightcol.appendChild(emPPPSSLabel);

  let emPPPSScroll = document.createElement("div");
  emPPPSScroll.id = "scan-scroll";
  emPPPSScroll.className = "h-50 mx-2 w-100 bg-light prescription-scroll";

  let emPPPScans = [
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
  // emPPPTest.sort();
  // console.log(emPPPMedicine);
  emPPPScans.forEach(scan);
  // function for medicine
  function scan(z) {
    let emPPPSCBDiv = document.createElement("div");
    emPPPSCBDiv.className = "mx-2 ";

    let emPPPSCBoxes = document.createElement("input");
    emPPPSCBoxes.type = "checkbox";
    emPPPSCBoxes.value = z;
    emPPPSCBoxes.className = "mx-2 ";
    emPPPSCBoxes.id = "emPatient-prescription-scan-" + z;

    let emPPPSCBLabels = document.createElement("label");
    emPPPSCBLabels.htmlFor = "emPatient-prescription-scan-" + z;
    emPPPSCBLabels.className = "w-75 ";
    emPPPSCBLabels.innerHTML = z;

    emPPPSCBDiv.appendChild(emPPPSCBoxes);
    emPPPSCBDiv.appendChild(emPPPSCBLabels);

    emPPPSScroll.appendChild(emPPPSCBDiv);
    rightcol.appendChild(emPPPSScroll);
  }

  // emPatient Prescriptions Submit Btn
  // create a div for submit btn
  let emPPPSDiv = document.createElement("div");
  middleCol.appendChild(emPPPSDiv);
  emPPPSDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const emPPPSBtn = document.createElement("button");
  emPPPSBtn.type = "submit";
  emPPPSBtn.className = "btn btn-primary bg-primary  w-100";
  emPPPSBtn.id = "emPatient-prescription-submitBtn";
  emPPPSBtn.innerText = "Submit";
  emPPPSBtn.addEventListener("click", emPPDetailsSubmit);

  // Append the button to the body or another container element
  emPPPSDiv.appendChild(emPPPSBtn);
}

// Submit Functions ⬇️⬇️⬇️
function emPPIDetailsSubmit() {
  let form = document.getElementById("emPatient-personalInfo-form");
  var emPPName = document.getElementById("empatient-patient-name").value;
  var emPPAddress = document.getElementById("empatient-patient-address").value;
  var emPPMNumber = document.getElementById(
    "empatient-patient-phone-number"
  ).value;
  var emPPDOB = document.getElementById("empatient-patient-dOB").value;
  var emPPBG = document.getElementById("empatient-patient-bg").value;

  var isDeleted = false;

  const emPPDetailsObject = {
    Patient_Name: emPPName,
    Patient_Address: emPPAddress,
    Patient_MN: emPPMNumber,
    Patient_DOB: emPPDOB,
    Patient_BG: emPPBG,
    Patient_Deleted: isDeleted,
  };

  console.log(emPPDetailsObject);

  //   if (localStorage.getItem("emPatientDetails") == null) {
  //     let a = [];

  //     a.push(emPPDetailsObject);
  //     localStorage.setItem("emPatientDetails", JSON.stringify(a));
  //     showEPDetails();
  //   } else {
  //     let emPatientDetails = JSON.parse(localStorage.getItem("emPatientDetails"));
  //     emPatientDetails.push(emPPDetailsObject);

  //     localStorage.setItem("emPatientDetails", JSON.stringify(emPatientDetails));
  //     showEPDetails();
  //   }

  form.reset();
}

function emPCIDetailsSubmit() {
  let form = document.getElementById("emPatient-contactInfo-form");
  let emPAPNumber = document.getElementById(
    "empatient-patient-alternate-phone-number"
  ).value;
  let emPEmail = document.getElementById("empatient-patient-email-id").value;
  let emPGName = document.getElementById(
    "empatient-patient-gaurdian-name"
  ).value;
  let emPGPNumber = document.getElementById(
    "empatient-gaurdian-phone-number"
  ).value;
  let emPGEmail = document.getElementById("empatient-gaurdian-email-id").value;

  console.log(emPAPNumber);
  console.log(emPEmail);
  console.log(emPGName);
  console.log(emPGPNumber);
  console.log(emPGEmail);

  form.reset();
}

function emPHCDetailsSubmit() {
  let form = document.getElementById("emPatient-healthConcerns-form");
  let emPPCProblems = document.getElementById(
    "empatient-current-problems"
  ).value;
  let emPPPProblems = document.getElementById(
    "empatient-previous-problems"
  ).value;

  console.log(emPPCProblems);
  console.log(emPPPProblems);

  form.reset();
}

function emPADetailsSubmit() {
  let form = document.getElementById("emPatient-appointments-form");

  let emPPASpecialist = document.getElementById(
    "empatient-appointment-specialist"
  ).value;
  let emPPASDoctor = document.getElementById(
    "empatient-appointment-speciality-doctor"
  ).value;

  console.log(emPPASpecialist);
  console.log(emPPASDoctor);

  form.reset();
}

function emPPDetailsSubmit() {
  let form = document.getElementById("emPatient-prescription-form");

  form.reset();
}

// emPatientDetails Array
var emPDetails = JSON.parse(localStorage.getItem("emPatientDetails"));
console.log(emPDetails);

function showEPDetails() {
  var emPPDTHRDetails = [
    "Patient ID",
    "Patient Name",
    "Patient M.NO",
    "Patient Type",
    "Actions",
  ];

  var emPBCDiv = document.getElementById("bottom-div-content");
  emPBCDiv.innerHTML = "Load the Emergency Patient Details using API's  ";

  // {
  //   var emPBCDiv = document.getElementById("bottom-div-content");
  //   emPBCDiv.emnerHTML = " ";
  //   emPBCDiv.className = "px-3 py-3";

  //   let emPPIBCDiv = document.createElement("div");
  //   emPBCDiv.appendChild(emPPIBCDiv);

  //   let emPPDTable = document.createElement("table");
  //   emPPDTable.className = "w-100";

  //   let headRow = document.createElement("tr");

  //   let th1 = document.createElement("th");
  //   th1.innerText = emPPDTHRDetails[0];
  //   let th2 = document.createElement("th");
  //   th2.innerHTML = emPPDTHRDetails[1];
  //   let th3 = document.createElement("th");
  //   th3.innerHTML = emPPDTHRDetails[2];
  //   let th4 = document.createElement("th");
  //   th4.innerHTML = emPPDTHRDetails[3];
  //   let th5 = document.createElement("th");
  //   th5.innerHTML = emPPDTHRDetails[4];

  //   headRow.appendChild(th1);
  //   headRow.appendChild(th2);
  //   headRow.appendChild(th3);
  //   headRow.appendChild(th4);
  //   headRow.appendChild(th5);

  //   // emPPDTable.appendChild(headRow);
  //   emPPIBCDiv.appendChild(emPPDTable);

  //   let tBody = document.createElement("tbody");
  //   tBody.appendChild(headRow);
  //   emPPDTable.appendChild(tBody);

  //   for (let i = 0; i < emPDetails.length; i++) {
  //     if (emPDetails[i].Patient_Deleted == false) {
  //       let bodyRows = document.createElement("tr");
  //       //   bodyRows.className = "w-100";

  //       let td1 = document.createElement("td");
  //       td1.innerHTML = "EP00" + i;
  //       //   td1.style = " width:10%; ";
  //       let td2 = document.createElement("td");
  //       td2.innerHTML = emPDetails[i].Patient_Name;
  //       //   td2.style = "width:10%; ";
  //       let td3 = document.createElement("td");
  //       td3.innerHTML = emPDetails[i].Patient_MN;
  //       //   td3.style = " width:10%; ";
  //       let td4 = document.createElement("td");
  //       td4.innerHTML = "EM";
  //       //   td4.style = " width:10%; ";
  //       let td5 = document.createElement("td");
  //       //   td5.style = " width:30%; ";

  //       // View Btn
  //       let viewBtn = document.createElement("button");
  //       viewBtn.className =
  //         "btn  text-center w-25 me-2 h-25 btn-outline-success bg-success p-1";
  //       viewBtn.onclick = function () {
  //         emPDView(emPDetails[i]);
  //       };
  //       let viewIcon = document.createElement("i");
  //       viewIcon.className = "bi bi-eye-fill text-white ";
  //       viewIcon.style = "font-size:25px; ";

  //       // Edit Btn
  //       let editBtn = document.createElement("button");
  //       editBtn.className =
  //         "btn  text-center w-25 h-25 me-2 btn-outline-primary bg-primary p-1";

  //       // editBtn.addEventListener('click' , emPDEdit(emPDetails[i]));
  //       editBtn.onclick = function () {
  //         emPDEdit(emPDetails[i]);
  //       };

  //       let editIcon = document.createElement("i");
  //       editIcon.className = "bi bi-pencil-square text-white ";
  //       editIcon.style = "font-size:25px; ";

  //       // Delete Btn
  //       let deleteBtn = document.createElement("button");
  //       deleteBtn.className =
  //         "btn  text-center w-25 h-25 btn-outline-danger bg-danger p-1";
  //       deleteBtn.onclick = function () {
  //         emPDDelete(emPDetails[i]);
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

// function for emPatient Details Edit Button
function emPDEdit(param) {
  personalInfo();

  let emPPNEdit = document.getElementById("empatient-patient-name");
  let emPPAEdit = document.getElementById("empatient-patient-address");
  let emPPMNEdit = document.getElementById("empatient-patient-phone-number");
  let emPPDOBEdit = document.getElementById("empatient-patient-dOB");
  let emPPBGEdit = document.getElementById("empatient-patient-bg");

  emPPNEdit.value = param.Patient_Name;
  emPPAEdit.value = param.Patient_Address;
  emPPMNEdit.value = param.Patient_MN;
  emPPDOBEdit.value = param.Patient_DOB;
  emPPBGEdit.value = param.Patient_BG;
}

function emPDDelete(param) {
  param.Patient_Deleted = true;
  showEPDetails();
}

function emPDView(param) {
  contentDiv.innerHTML = " ";

  let viewDiv = document.createElement("div");
  viewDiv.className = "w-100 ";

  let uPList = document.createElement("ul");

  let liPID = document.createElement("li");
  liPID.innerHTML = "Patient ID : ";

  let spanPID = document.createElement("span");
  spanPID.textContent = "EP";
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
