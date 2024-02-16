
displayOutPatient();
function displayOutPatient(){

let data = new XMLHttpRequest();
data.open("GET", "http://localhost:8080/Hospital/getAllPatientsTableData");
data.send();

data.onload = function () {
  console.log("Get Call Successfull !!!! ");
  let outPDetails = JSON.parse(this.response);
  
var OutPatientDetails = {
  hospitalPatientType: "OUT",
  hospitalPatientIdentity: null,
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
  hospitalPatientAppointment: null,
  hospitalPatientBed: null,
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

outPatientInfo();

function outPatientInfo() {
  let navBarOPBtn = document.getElementById("sidebar-outPatient-btn");
  navBarOPBtn.className = "active ";
  topDivNavTabs.innerHTML = " ";
  bottomContentDiv.innerHTML = " ";

  topDivNavTabsFunction();
  personalInfo();
}

// Functions to handle button clicks
function personalInfo() {
  personalInfoForm();
  showOPDetails();
}

function contactInfo() {
  contactInfoForm();
  showOPDetails();
}

function healthConcerns() {
  healthConcernsForm();
  showOPDetails();
}

function appointments() {
  appointmentsForm();
  showOPDetails();
}

function prescription() {
  prescriptionForm();
  showOPDetails();
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
  let outPPPIForm = document.createElement("form");
  outPPPIForm.id = "outPatient-personalInfo-form";
  contentDiv.appendChild(outPPPIForm);
  var resultdiv = document.createElement("div");
  outPPPIForm.appendChild(resultdiv);
  resultdiv.className = "row";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";


  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
  leftcol.style="flex:1 0 10rem; ";

  let middleCol = document.createElement("div");
  resultdiv.appendChild(middleCol);
  middleCol.className = " col-4 px-2";
  middleCol.style = " padding:2.5% 0 0 0; flex:1 0 10rem;";

  let rightcol = document.createElement("div");
  resultdiv.appendChild(rightcol);
  rightcol.className = " col-4 px-2";
  rightcol.style = " padding:2% 0 0 0; flex:1 0 10rem; ";

  // Patient Type
  // Create label element
  const outPPType = document.createElement("span");
  outPPType.innerHTML = "Patient Type : ";
  outPPType.className = "fw-medium fs-5 w-100";

  const outPPTOPatient = document.createElement("span");
  outPPTOPatient.innerHTML = "Out Patient";
  outPPTOPatient.className = " fw-bolder fs-5 w-100";

  leftcol.appendChild(outPPType);
  leftcol.appendChild(outPPTOPatient);

  // Patient Name
  // Create input element
  const outPPName = document.createElement("input");
  outPPName.type = "text";
  outPPName.required = true;
  outPPName.className = "form-control";
  outPPName.id = "outpatient-patient-name";
  outPPName.placeholder = "Patient Name";

  // Create label element
  const outPPNLabel = document.createElement("label");
  outPPNLabel.htmlFor = "outpatient-patient-name";
  outPPNLabel.innerText = "Patient Name";
  outPPNLabel.className = "w-100 ";

  // Create div element
  const outPPNDiv = document.createElement("div");
  outPPNDiv.className = "form-floating mb-3 mt-3";
  outPPNDiv.appendChild(outPPName);
  outPPNDiv.appendChild(outPPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(outPPNDiv);

  // Patient Address
  // Create textarea element
  const outPPAddress = document.createElement("textarea");
  outPPAddress.className = "form-control";
  outPPAddress.required = true;
  outPPAddress.placeholder = "Leave a comment here";
  outPPAddress.id = "outpatient-patient-address";

  // Create label element
  const outPPALabel = document.createElement("label");
  outPPALabel.htmlFor = "outpatient-patient-address";
  outPPALabel.innerText = "Patient Address";
  outPPALabel.className = "w-100 ";

  // Create div element
  const outPPADiv = document.createElement("div");
  outPPADiv.className = "form-floating mb-3";
  outPPADiv.appendChild(outPPAddress);
  outPPADiv.appendChild(outPPALabel);

  // Append the div to the body or another container element
  leftcol.appendChild(outPPADiv);

  // Patient Phone Number
  // Create input element
  const outPPMNumber = document.createElement("input");
  outPPMNumber.type = "tel";
  outPPMNumber.required = true;
  outPPMNumber.className = "form-control";
  outPPMNumber.id = "outpatient-patient-phone-number";
  outPPMNumber.placeholder = "name@example.com";

  // Create label element
  const outPPMNLabel = document.createElement("label");
  outPPMNLabel.htmlFor = "outpatient-patient-phone-number";
  outPPMNLabel.innerText = "Patient Phone Number";
  outPPMNLabel.className = "w-100 ";

  // Create div element
  const outPPMNDiv = document.createElement("div");
  outPPMNDiv.className = "form-floating mb-3 mt-3";
  outPPMNDiv.appendChild(outPPMNumber);
  outPPMNDiv.appendChild(outPPMNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(outPPMNDiv);

  // Patient DOB
  // Create input element
  const outPPDOBirth = document.createElement("input");
  outPPDOBirth.type = "date";
  outPPDOBirth.required = true;
  outPPDOBirth.className = "form-control";
  outPPDOBirth.id = "outpatient-patient-dOB";
  outPPDOBirth.placeholder = "Date Of Birth";

  // Create label element
  const outPPDOBLabel = document.createElement("label");
  outPPDOBLabel.htmlFor = "outpatient-patient-dOB";
  outPPDOBLabel.innerText = "Patient Date Of Birth";
  outPPDOBLabel.className = "w-100 ";

  // Create div element
  const outPPDOBDiv = document.createElement("div");
  outPPDOBDiv.className = "form-floating mb-3";
  outPPDOBDiv.appendChild(outPPDOBirth);
  outPPDOBDiv.appendChild(outPPDOBLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(outPPDOBDiv);

  // Patient Blood Group
  // Define an array of blood groups
  var bloodGroups = ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"];

  // Create input element
  const outPPBGroup = document.createElement("select");
  outPPBGroup.className =
    "mx-2 w-100  form-control form-select d-inline-block  ";
  outPPBGroup.id = "outpatient-patient-bg";

  const outPPBGNone = document.createElement("option");
  outPPBGNone.value = "None";
  outPPBGNone.selected = true;
  outPPBGNone.innerHTML = "Select an Option";
  outPPBGroup.appendChild(outPPBGNone);
  bloodGroups.forEach(pBGValues);

  // function for BloodGroups
  function pBGValues(x) {
    let outPPBGOpations = document.createElement("option");
    outPPBGOpations.value = x;
    outPPBGOpations.innerHTML = x;

    outPPBGroup.appendChild(outPPBGOpations);
  }

  // Create label element
  const outPPBGLabel = document.createElement("label");
  outPPBGLabel.htmlFor = "outpatient-patient-bg";
  outPPBGLabel.innerText = "Patient Blood Group : ";
  outPPBGLabel.className = "w-100 mx-2 fw-medium elipsed-label";

  // Create div element
  const outPPBGDiv = document.createElement("div");
  outPPBGDiv.className = " mb-3 mt-3 ";

  outPPBGDiv.appendChild(outPPBGLabel);
  outPPBGDiv.appendChild(outPPBGroup);
  // Append the div to the body or another container element
  rightcol.appendChild(outPPBGDiv);

  // outPatient Personal Info Submit Btn
  // create a div for submit btn
  let outPPISBDiv = document.createElement("div");
  contentDiv.appendChild(outPPISBDiv);
  outPPISBDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const outPPISBtn = document.createElement("button");
  outPPISBtn.type = "submit";
  outPPISBtn.className = "btn btn-primary bg-primary  w-100";
  outPPISBtn.id = "patientRegistrationSubmitBtn";
  outPPISBtn.innerText = "Submit";
  outPPISBtn.addEventListener("click", outPPIDetailsSubmit);

  // Append the button to the body or another container element
  outPPISBDiv.appendChild(outPPISBtn);
}

function contactInfoForm() {
  contentDiv.innerHTML = " ";
  let outPPCIForm = document.createElement("form");
  outPPCIForm.id = "outPatient-contactInfo-form";
  contentDiv.appendChild(outPPCIForm);
  var resultdiv = document.createElement("div");
  outPPCIForm.appendChild(resultdiv);
  resultdiv.className = "row";
  resultdiv.style = "display:flex; flex-wrap:wrap; gap:10px;";


  let leftcol = document.createElement("div");
  resultdiv.appendChild(leftcol);
  leftcol.className = " col-4 px-2";
  leftcol.style = " padding:2.2% 0 0 0; flex:1 0 10rem;";

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
  const outPAPNumber = document.createElement("input");
  outPAPNumber.type = "tel";
  outPAPNumber.required = true;
  outPAPNumber.className = "form-control";
  outPAPNumber.id = "outpatient-patient-alternate-phone-number";
  outPAPNumber.placeholder = "name@example.com";

  // Create label element
  const outPAPNLabel = document.createElement("label");
  outPAPNLabel.htmlFor = "outpatient-patient-alternate-phone-number";
  outPAPNLabel.innerText = "Patient Phone Number (Alternate)";
  outPAPNLabel.className = "w-100  ";

  // Create div element
  const outPAPNDiv = document.createElement("div");
  outPAPNDiv.className = "form-floating mb-3 mt-3";
  outPAPNDiv.appendChild(outPAPNumber);
  outPAPNDiv.appendChild(outPAPNLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(outPAPNDiv);

  // Patient Email ID
  // Create input element
  const outPEmail = document.createElement("input");
  outPEmail.type = "email";
  outPEmail.required = true;
  outPEmail.className = "form-control";
  outPEmail.id = "outpatient-patient-email-id";
  outPEmail.placeholder = "name@example.com";

  // Create label element
  const outPELabel = document.createElement("label");
  outPELabel.htmlFor = "outpatient-patient-email-id";
  outPELabel.innerText = "Patient Email ID";
  outPELabel.className = "w-100  ";

  // Create div element
  const outPEDiv = document.createElement("div");
  outPEDiv.className = "form-floating mb-3 mt-3";
  outPEDiv.appendChild(outPEmail);
  outPEDiv.appendChild(outPELabel);

  // Append the div to the body or another container element
  leftcol.appendChild(outPEDiv);

  // Gaurdian Name
  // Create input element
  const outPGName = document.createElement("input");
  outPGName.type = "text";
  outPGName.required = true;
  outPGName.className = "form-control";
  outPGName.id = "outpatient-patient-gaurdian-name";
  outPGName.placeholder = " ";

  // Create label element
  const outPGNLabel = document.createElement("label");
  outPGNLabel.htmlFor = "outpatient-patient-gaurdian-name";
  outPGNLabel.innerText = "Gaurdian Name ";
  outPGNLabel.className = "w-100  ";

  // Create div element
  const outPGNDiv = document.createElement("div");
  outPGNDiv.className = "form-floating mb-3 mt-3";
  outPGNDiv.appendChild(outPGName);
  outPGNDiv.appendChild(outPGNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(outPGNDiv);

  // Gaurdian Phone Number
  // Create input element
  const outPGPNumber = document.createElement("input");
  outPGPNumber.type = "tel";
  outPGPNumber.required = true;
  outPGPNumber.className = "form-control";
  outPGPNumber.id = "outpatient-gaurdian-phone-number";
  outPGPNumber.placeholder = " ";

  // Create label element
  const outPGPNLabel = document.createElement("label");
  outPGPNLabel.htmlFor = "outpatient-gaurdian-phone-number";
  outPGPNLabel.innerText = " Gaurdian Phone Number ";
  outPGPNLabel.className = "w-100  ";

  // Create div element
  const outPGPNDiv = document.createElement("div");
  outPGPNDiv.className = "form-floating mb-3 mt-3";
  outPGPNDiv.appendChild(outPGPNumber);
  outPGPNDiv.appendChild(outPGPNLabel);

  // Append the div to the body or another container element
  middleCol.appendChild(outPGPNDiv);

  // Gaurdian Email ID
  // Create input element
  const outPGEmail = document.createElement("input");
  outPGEmail.type = "email";
  outPGEmail.required = true;
  outPGEmail.className = "form-control";
  outPGEmail.id = "outpatient-gaurdian-email-id";
  outPGEmail.placeholder = "name@example.com";

  // Create label element
  const outPGELabel = document.createElement("label");
  outPGELabel.htmlFor = "outpatient-gaurdian-email-id";
  outPGELabel.innerText = "Gaurdian Email ID";
  outPGELabel.className = "w-100  ";

  // Create div element
  const outPGEDiv = document.createElement("div");
  outPGEDiv.className = "form-floating mb-3 mt-3";
  outPGEDiv.appendChild(outPGEmail);
  outPGEDiv.appendChild(outPGELabel);

  // Append the div to the body or another container element
  rightcol.appendChild(outPGEDiv);

  // outPatient Contact Info Submit Btn
  // create a div for submit btn
  let outPCISDiv = document.createElement("div");
  contentDiv.appendChild(outPCISDiv);
  outPCISDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const outPCISBtn = document.createElement("button");
  outPCISBtn.type = "submit";
  outPCISBtn.className = "btn btn-primary bg-primary  w-100";
  outPCISBtn.id = "outPatient-healthConcerns-SubmitBtn";
  outPCISBtn.innerText = "Submit";
  outPCISBtn.addEventListener("click", outPCIDetailsSubmit);

  // Append the button to the body or another container element
  outPCISDiv.appendChild(outPCISBtn);
}

function healthConcernsForm() {
  contentDiv.innerHTML = " ";
  let outPPHCForm = document.createElement("form");
  outPPHCForm.id = "outPatient-healthConcerns-form";
  contentDiv.appendChild(outPPHCForm);
  var resultdiv = document.createElement("div");
  outPPHCForm.appendChild(resultdiv);
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
  const outPPCProblems = document.createElement("textarea");
  outPPCProblems.className = "form-control form-reset ";
  outPPCProblems.required = true;
  outPPCProblems.placeholder = "Leave a comment here";
  outPPCProblems.id = "outpatient-current-problems";
  outPPCProblems.style = "  ";

  // Create label element
  const outPPCPLabel = document.createElement("label");
  outPPCPLabel.htmlFor = "outpatient-current-problems";
  outPPCPLabel.innerText = "Current Problems";
  outPPCPLabel.className = "w-100 fw-medium ";

  // Create div element
  const outPPCPDiv = document.createElement("div");
  outPPCPDiv.className = "form-floating mb-3";
  outPPCPDiv.appendChild(outPPCProblems);
  outPPCPDiv.appendChild(outPPCPLabel);

  // Append the div to the body or another container element
  leftcol.appendChild(outPPCPDiv);

  // Previous Problems
  // Create textarea element
  const outPPPProblems = document.createElement("textarea");
  outPPPProblems.className = "form-control form-reset ";
  outPPPProblems.required = true;
  outPPPProblems.placeholder = "Leave a comment here";
  outPPPProblems.id = "outpatient-previous-problems";
  outPPPProblems.style = " ";

  // Create label element
  const outPPPPLabel = document.createElement("label");
  outPPPPLabel.htmlFor = "outpatient-previous-problems";
  outPPPPLabel.innerText = "Previous Problems";
  outPPPPLabel.className = "w-100 fw-medium ";

  // Create div element
  const outPPPPDiv = document.createElement("div");
  outPPPPDiv.className = "form-floating mb-3";
  outPPPPDiv.appendChild(outPPPProblems);
  outPPPPDiv.appendChild(outPPPPLabel);

  // Append the div to the body or another container element
  rightcol.appendChild(outPPPPDiv);

  // outPatient Health Concerns Submit Btn
  // create a div for submit btn
  let outPPHCsubmitDiv = document.createElement("div");
  contentDiv.appendChild(outPPHCsubmitDiv);
  outPPHCsubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const outPPHCSBtn = document.createElement("button");
  outPPHCSBtn.type = "submit";
  outPPHCSBtn.className = "btn btn-primary bg-primary  w-100";
  outPPHCSBtn.id = "outPatient-healthConcerns-SubmitBtn";
  outPPHCSBtn.innerText = "Submit";
  outPPHCSBtn.addEventListener("click", outPHCDetailsSubmit);

  // Append the button to the body or another container element
  outPPHCsubmitDiv.appendChild(outPPHCSBtn);
}

function appointmentsForm() {
  contentDiv.innerHTML = " ";
  let outPPAForm = document.createElement("form");
  outPPAForm.id = "outPatient-appointments-form";
  contentDiv.appendChild(outPPAForm);
  var resultdiv = document.createElement("div");
  outPPAForm.appendChild(resultdiv);
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
            "Dr. Puneet Dwevedi",
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
  const outPPASpecialist = document.createElement("select");
  outPPASpecialist.className =
    "mx-2 w-75 form-control form-select d-inline-block  ";
  outPPASpecialist.id = "outpatient-appointment-specialist";

  const outPPASNone = document.createElement("option");
  outPPASNone.value = "None";
  outPPASNone.selected = true;
  outPPASNone.innerHTML = "Select a Speciality Doctor";
  outPPASpecialist.appendChild(outPPASNone);

  Doctors.forEach(Specialist);
  // function for Specialists
  function Specialist(x) {

    let outPPASOptionsGroup=document.createElement("optgroup");
    outPPASOptionsGroup.value=x.specialty;
    outPPASOptionsGroup.label=x.specialty;
    outPPASOptionsGroup.className="fs-5 fw-medium";
    outPPASOptionsGroup.style="background-color: lightgray; ";

    outPPASpecialist.appendChild(outPPASOptionsGroup);

    // console.log(x.specialty);
    for(let i=0;i<x.doctors.length;i++){
    let outPPASOptions = document.createElement("option");
    outPPASOptions.value = x.doctors[i];
    outPPASOptions.innerHTML = x.doctors[i];
    outPPASpecialist.appendChild(outPPASOptions);
    }
  }

  // Create label element
  const outPPASLabel = document.createElement("label");
  outPPASLabel.htmlFor = "outpatient-appointment-specialist";
  outPPASLabel.innerText = "Select The Speciality Doctor : ";
  outPPASLabel.className = "w-100 ms-3 ps-1 fw-medium elipsed-label";

  // Create div element
  const outPPASDiv = document.createElement("div");
  outPPASDiv.className = " mb-3 mt-4 ";

  outPPASDiv.appendChild(outPPASLabel);
  outPPASDiv.appendChild(outPPASpecialist);
  // Append the div to the body or another container element
  leftcol.appendChild(outPPASDiv);



  // outPatient Appointment Submit Btn
  // create a div for submit btn
  let outPPASubmitDiv = document.createElement("div");
  contentDiv.appendChild(outPPASubmitDiv);
  outPPASubmitDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const outPPASBtn = document.createElement("button");
  outPPASBtn.type = "submit";
  outPPASBtn.className = "btn btn-primary bg-primary  w-100";
  outPPASBtn.id = "outPatient-appointment-submitBtn";
  outPPASBtn.innerText = "Submit";
  outPPASBtn.addEventListener("click", outPADetailsSubmit);

  // Append the button to the body or another container element
  outPPASubmitDiv.appendChild(outPPASBtn);
}

function prescriptionForm() {
  contentDiv.innerHTML = " ";
  let outPPPForm = document.createElement("form");
  outPPPForm.id = "outPatient-prescription-form";
  contentDiv.appendChild(outPPPForm);
  var resultdiv = document.createElement("div");
  outPPPForm.appendChild(resultdiv);
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
  let outPPPMSLabel = document.createElement("label");
  outPPPMSLabel.htmlFor = "medicine-scroll";
  outPPPMSLabel.className = " mx-2 fw-medium fs-5 elipsed-label ";
  outPPPMSLabel.innerHTML = "Prescribed Medicines : ";
  leftcol.appendChild(outPPPMSLabel);

  let outPPPMScroll = document.createElement("div");
  outPPPMScroll.id = "medicine-scroll";
  outPPPMScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let outPPPMedicines = [
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
  outPPPMedicines.sort();
  // console.log(outPPPMedicine);
  outPPPMedicines.forEach(medicine);
  // function for medicine
  function medicine(x) {
    let outPPPMCBDiv = document.createElement("div");
    outPPPMCBDiv.className = "mx-2 d-flex ";

    let outPPPMCBoxes = document.createElement("input");
    outPPPMCBoxes.type = "checkbox";
    outPPPMCBoxes.value = x;
    outPPPMCBoxes.className = "mx-2 ";
    outPPPMCBoxes.id = "outPatient-prescription-medicine-" + x;

    let outPPPMCBLabels = document.createElement("label");
    outPPPMCBLabels.htmlFor = "outPatient-prescription-medicine-" + x;
    outPPPMCBLabels.className = "w-80 elipsed-label ";
    outPPPMCBLabels.innerHTML = x;

    outPPPMCBDiv.appendChild(outPPPMCBoxes);
    outPPPMCBDiv.appendChild(outPPPMCBLabels);
    outPPPMScroll.appendChild(outPPPMCBDiv);
    leftcol.appendChild(outPPPMScroll);
  }

  // Tests
  let outPPPTSLabel = document.createElement("label");
  outPPPTSLabel.htmlFor = "test-scroll";
  outPPPTSLabel.className = " mx-2 fw-medium fs-5 elipsed-label ";
  outPPPTSLabel.innerHTML = "Prescribed Tests : ";
  middleCol.appendChild(outPPPTSLabel);

  let outPPPTScroll = document.createElement("div");
  outPPPTScroll.id = "test-scroll";
  outPPPTScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let outPPPTests = [
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

  // outPPPTest.sort();
  // console.log(outPPPMedicine);
  outPPPTests.forEach(test);
  // function for medicine
  function test(y) {
    let outPPPTCBDiv = document.createElement("div");
    outPPPTCBDiv.className = "mx-2 d-flex ";

    let outPPPTCBoxes = document.createElement("input");
    outPPPTCBoxes.type = "checkbox";
    outPPPTCBoxes.value = y;
    outPPPTCBoxes.className = "mx-2 ";
    outPPPTCBoxes.id = "outPatient-prescription-test-" + y;

    let outPPPTCBLabels = document.createElement("label");
    outPPPTCBLabels.htmlFor = "outPatient-prescription-test-" + y;
    outPPPTCBLabels.className = "w-80 elipsed-label";
    outPPPTCBLabels.innerHTML = y;

    outPPPTCBDiv.appendChild(outPPPTCBoxes);
    outPPPTCBDiv.appendChild(outPPPTCBLabels);

    outPPPTScroll.appendChild(outPPPTCBDiv);
    middleCol.appendChild(outPPPTScroll);
  }

  let outPPPSSLabel = document.createElement("label");
  outPPPSSLabel.htmlFor = "scan-scroll";
  outPPPSSLabel.className = " mx-2 fw-medium fs-5 elipsed-label ";
  outPPPSSLabel.innerHTML = "Prescribed Scans : ";
  rightcol.appendChild(outPPPSSLabel);

  let outPPPSScroll = document.createElement("div");
  outPPPSScroll.id = "scan-scroll";
  outPPPSScroll.className = "h-75 mx-2 w-100 bg-light prescription-scroll";

  let outPPPScans = [
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
  // outPPPTest.sort();
  // console.log(outPPPMedicine);
  outPPPScans.forEach(scan);
  // function for medicine
  function scan(z) {
    let outPPPSCBDiv = document.createElement("div");
    outPPPSCBDiv.className = "mx-2 d-flex ";

    let outPPPSCBoxes = document.createElement("input");
    outPPPSCBoxes.type = "checkbox";
    outPPPSCBoxes.value = z;
    outPPPSCBoxes.className = "mx-2 ";
    outPPPSCBoxes.id = "outPatient-prescription-scan-" + z;

    let outPPPSCBLabels = document.createElement("label");
    outPPPSCBLabels.htmlFor = "outPatient-prescription-scan-" + z;
    outPPPSCBLabels.className = "w-80 elipsed-label ";
    outPPPSCBLabels.innerHTML = z;

    outPPPSCBDiv.appendChild(outPPPSCBoxes);
    outPPPSCBDiv.appendChild(outPPPSCBLabels);

    outPPPSScroll.appendChild(outPPPSCBDiv);
    rightcol.appendChild(outPPPSScroll);
  }

  // outPatient Prescriptions Submit Btn
  // create a div for submit btn
  let outPPPSDiv = document.createElement("div");
  contentDiv.appendChild(outPPPSDiv);
  outPPPSDiv.className = " text-center submitBtnDiv mx-auto mt-3 ";

  // Create button element
  const outPPPSBtn = document.createElement("button");
  outPPPSBtn.type = "submit";
  outPPPSBtn.className = "btn btn-primary bg-primary  w-100";
  outPPPSBtn.id = "outPatient-prescription-submitBtn";
  outPPPSBtn.innerText = "Submit";
  outPPPSBtn.addEventListener("click", outPPDetailsSubmit);

  // Append the button to the body or another container element
  outPPPSDiv.appendChild(outPPPSBtn);
}

// Submit Functions ⬇️⬇️⬇️
function outPPIDetailsSubmit() {
  let form = document.getElementById("outPatient-personalInfo-form");
  var outPPName = document.getElementById("outpatient-patient-name").value;
  var outPPAddress = document.getElementById("outpatient-patient-address").value;
  var outPPMNumber = document.getElementById("outpatient-patient-phone-number").value;
  var outPPDOB = document.getElementById("outpatient-patient-dOB").value;
  var outPPBG = document.getElementById("outpatient-patient-bg").value;

  var isDeleted = false;

    OutPatientDetails.hospitalPatientName=outPPName;
    OutPatientDetails.hospitalPatientAddress=outPPAddress;
    OutPatientDetails.hospitalPatientPhoneNumber=outPPMNumber;
    OutPatientDetails.hospitalPatientDob=outPPDOB;
    OutPatientDetails.hospitalPatientBloodGroup=outPPBG

    console.log(outPPName);
    console.log(outPPAddress);
    console.log(outPPMNumber);
    console.log(outPPDOB);
    console.log(outPPBG);
  
    form.reset();
  contactInfo();
}

function outPCIDetailsSubmit() {
  let form = document.getElementById("outPatient-contactInfo-form");
  let outPAPNumber = document.getElementById("outpatient-patient-alternate-phone-number").value;
  let outPEmail = document.getElementById("outpatient-patient-email-id").value;
  let outPGName = document.getElementById("outpatient-patient-gaurdian-name").value;
  let outPGPNumber = document.getElementById("outpatient-gaurdian-phone-number").value;
  let outPGEmail = document.getElementById("outpatient-gaurdian-email-id").value;

    OutPatientDetails.hospitalPatientAlternateNumber = outPAPNumber;
    OutPatientDetails.hospitalPatientEmailid = outPEmail;
    OutPatientDetails.hospitalPatientGuardianName = outPGName;
    OutPatientDetails.hospitalPatientGuardianPhoneNumber = outPGPNumber;
    OutPatientDetails.hospitalPatientGuardianEmailid = outPGEmail;

    console.log(outPAPNumber);
    console.log(outPEmail);
    console.log(outPGName);
    console.log(outPGPNumber);
    console.log(outPGEmail);
  
    form.reset();
    healthConcerns();
}

function outPHCDetailsSubmit() {
  let form = document.getElementById("outPatient-healthConcerns-form");
  let outPPCProblems = document.getElementById("outpatient-current-problems").value;
  let outPPPProblems = document.getElementById("outpatient-previous-problems").value;

    OutPatientDetails.hospitalPatientCurrentProblem=outPPCProblems;
    OutPatientDetails.hospitalPatientPreviousProblem=outPPPProblems;

    console.log(outPPCProblems);
    console.log(outPPPProblems);
  
    form.reset();
    appointments();
}

function outPADetailsSubmit() {
  let form = document.getElementById("outPatient-appointments-form");
  let outPPASpecialist = document.getElementById("outpatient-appointment-specialist").value;
  
  OutPatientDetails.hospitalPatientDoctor=outPPASpecialist;
  console.log(outPPASpecialist);

  form.reset();
  prescription();
}

function outPPDetailsSubmit() {
  let form = document.getElementById("outPatient-prescription-form");
  let submitBtn= document.getElementById("outPatient-prescription-submitBtn");

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

   OutPatientDetails.hospitalPatientMedicine=checkedMedicine;
   OutPatientDetails.hospitalPatientTest=checkedTests;
   OutPatientDetails.hospitalPatientScan=checkedScans;

   console.log(checkedMedicine);
   console.log(checkedTests);
   console.log(checkedScans);

   console.log(OutPatientDetails);
   
   postCall(OutPatientDetails,"http://localhost:8080/Hospital/savePatientsTable",submitBtn);

   
  form.reset();
  checkedMedicine="";
  checkedTests="";
  checkedScans="";
  console.log("cleaning the data .......");
  OutPatientDetails={};
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
         }else{
          localStorage.setItem("inPatientDetails" , data);
         }
  };
}

console.log(outPDetails);

function showOPDetails() {

  var outPPDTHRDetails = [
    "Patient ID",
    "Patient Name",
    "Patient M.NO",
    "Patient Type",
    "Actions",
  ];

  {
    var outPBCDiv = document.getElementById("bottom-div-content");
    outPBCDiv.innerHTML = " ";
    outPBCDiv.className = "px-3 py-3";

    let outPPIBCDiv = document.createElement("div");
    outPBCDiv.appendChild(outPPIBCDiv);
    outPBCDiv.className="showData-scroll h-100 py-1";

    let outPPDTable = document.createElement("table");
    outPPDTable.className = "w-100";

    let headRow = document.createElement("tr");
    for(let x=0; x<outPPDTHRDetails.length;x++){
      let th= document.createElement("th");
      th.innerHTML= outPPDTHRDetails[x];
      headRow.appendChild(th);
    }
    outPPIBCDiv.appendChild(outPPDTable);

    let tBody = document.createElement("tbody");
    tBody.appendChild(headRow);
    outPPDTable.appendChild(tBody);

    for (let i = 0; i < outPDetails.length; i++) {
      if (outPDetails[i].hospitalPatientType == "OUT") {
        let bodyRows = document.createElement("tr");
        //   bodyRows.className = "w-100";
        let td1 = document.createElement("td");
        td1.innerHTML = "OP00" + outPDetails[i].hospitalPatientId;
        //   td1.style = " width:10%; ";
        let td2 = document.createElement("td");
        td2.innerHTML = outPDetails[i].hospitalPatientName;
        //   td2.style = "width:10%; ";
        let td3 = document.createElement("td");
        td3.innerHTML = outPDetails[i].hospitalPatientPhoneNumber;
        //   td3.style = " width:10%; ";
        let td4 = document.createElement("td");
        td4.innerHTML = outPDetails[i].hospitalPatientType;
        //   td4.style = " width:10%; ";
        let td5 = document.createElement("td");
        //   td5.style = " width:30%; ";

        // View Btn
        let viewBtn = document.createElement("button");
        viewBtn.className =
          "btn  text-center w-25 me-2 h-25 btn-outline-success bg-success p-1";
        viewBtn.onclick = function () {
          outPDView(outPDetails[i]);
        };
        let viewIcon = document.createElement("i");
        viewIcon.className = "bi bi-eye-fill text-white ";
        viewIcon.style = "font-size:25px; ";

        // Edit Btn
        let editBtn = document.createElement("button");
        editBtn.className =
          "btn  text-center w-25 h-25 me-2 btn-outline-primary bg-primary p-1";

        // editBtn.addEventListener('click' , outPDEdit(outPDetails[i]));
        editBtn.onclick = function () {
          outPDEdit(outPDetails[i]);
        };

        let editIcon = document.createElement("i");
        editIcon.className = "bi bi-pencil-square text-white ";
        editIcon.style = "font-size:25px; ";

        // Delete Btn
        let deleteBtn = document.createElement("button");
        deleteBtn.className =
          "btn  text-center w-25 h-25 btn-outline-danger bg-danger p-1";
        deleteBtn.onclick = function () {
          outPDDelete(outPDetails[i]);
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

// function for outPatient Details Edit Button
function outPDEdit(param) {
  personalInfo();

  let outPPNEdit = document.getElementById("outpatient-patient-name");
  let outPPAEdit = document.getElementById("outpatient-patient-address");
  let outPPMNEdit = document.getElementById("outpatient-patient-phone-number");
  let outPPDOBEdit = document.getElementById("outpatient-patient-dOB");
  let outPPBGEdit = document.getElementById("outpatient-patient-bg");

  outPPNEdit.value = param.Patient_Name;
  outPPAEdit.value = param.Patient_Address;
  outPPMNEdit.value = param.Patient_MN;
  outPPDOBEdit.value = param.Patient_DOB;
  outPPBGEdit.value = param.Patient_BG;
}

function outPDDelete(param) {
  param.Patient_Deleted = true;
  showOPDetails();
}

function outPDView(param) {
  contentDiv.innerHTML = " ";

  let viewDiv = document.createElement("div");
  viewDiv.className = "w-100 showData-scroll";

  let uPList = document.createElement("ul");
  let keys=Object.keys(param);
  console.log(keys);
  let values=Object.values(param);
  console.log(values);
  for(let key in param ){
    let li=document.createElement("li");
    li.innerHTML=key+" : "; 
    let span =document.createElement("span");
    span.innerHTML=" "+param[key];
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
}
};
