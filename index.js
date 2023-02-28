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
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

const resume = document.getElementById("resume");
resume.onclick = (e) => {
    // e.preventDefault()
    window.open("./Media/Aniket_Babariya_Resume.pdf")
    // console.log("Click");
}

const containerResume = document.getElementById("containerResume");
containerResume.onclick = (e) => {
    // e.preventDefault()
    window.open("./Media/Aniket_Babariya_Resume.pdf")
    // console.log("Click");
}
                                    