function changeTab() {
  let path = location.hash.toString();
  if (path === "#") {
    path = "#home";
  }
  path = path.slice(1);
  for (const childDiv of document.querySelectorAll("main > div")) {
    childDiv.style.display = "none";
  }
  const content = document.getElementById(path);
  content.style.display = "block";
  for (const link of document.querySelectorAll("nav > a")) {
    link.classList.remove("active");
  }
  document.querySelector(`nav > a[href=\"#${path}\"]`).classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  changeTab();
});

window.addEventListener("hashchange", () => {
  changeTab();
});
