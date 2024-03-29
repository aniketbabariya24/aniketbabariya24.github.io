let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-sun")) {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.remove("active");
  }
};

const resume = document.getElementById("resume-button-1");
resume.onclick = (e) => {
    window.open("./Media/Aniket-Babariya-Resume.pdf")
}

const containerResume = document.getElementById("resume-button-2");
containerResume.onclick = (e) => {
    window.open("./Media/Aniket-Babariya-Resume.pdf")
}
                          

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactMessage = document.getElementById("contactMessage");

const contactSubmit = document.getElementById("contactSubmit");
contactSubmit.onclick = async (e) => {
  e.preventDefault();
  console.log([contactName.value, contactEmail.value, contactMessage.value]);

  const data = {
    service_id: 'service_icbqhz9',
    template_id: 'template_eminqhk',
    user_id: 'ta-WWGEIz_7x47NNm',
    template_params: {
      'from_name': contactName.value,
      'to_name' : 'Aniket',
      'message' : contactMessage.value,
      'from_email' : contactEmail.value
    }
  };

  try {

    let Email = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body : JSON.stringify(data),
      headers : {
        'Content-type' : 'application/json'
      }
    })

    if(Email.ok){
      console.log('Msg received');
      alert('Thanks for reaching out, Your email sent successfully!!')
    }
    
  } catch (err) {
    console.log(err);
  }


  contactName.value = null;
  contactEmail.value = null;
  contactMessage.value = null;
};