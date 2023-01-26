const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
if (params.theme === "dark") {
  const r = document.querySelector(":root");
  r.style.setProperty("--bg-color", "#282c34");
  r.style.setProperty("--primary-color", "#fff");
  r.style.setProperty("--secondary-color", "#999");
  r.style.setProperty("--info-color", "#61afef");
}
