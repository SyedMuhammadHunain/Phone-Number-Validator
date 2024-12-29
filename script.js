

const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("results-div");


checkBtn.addEventListener("click", () => {
  const phoneNumber = userInput.value;
  criteria(phoneNumber);
});

clearBtn.addEventListener("click", () => {
  userInput.value = ``;
  resultDiv.innerText = ``;
});

const regex = (phoneNumber) => {
  const phoneNumberPattern = /^1?\s?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}/;
  return phoneNumberPattern.test(phoneNumber);
}

const normalPhoneNumber = (phoneNumber) => {
  return phoneNumber.replace(/[+1\s\-\(\)]/g, "");
}

const criteria = (phoneNumber) => {
if (phoneNumber === "") {
  alert("Please provide a phone number");
} else if (normalPhoneNumber(phoneNumber).length !== 10) {
    resultDiv.innerText = `Invalid US number: ${phoneNumber}`;
} else if (regex(phoneNumber)) {
  resultDiv.innerText = `Valid US number: ${phoneNumber}`;
} else {
  resultDiv.innerText = `Invalid US number: ${phoneNumber}`;
  }
}