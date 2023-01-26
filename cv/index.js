const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
if (params.theme === "light") {
  const r = document.querySelector(":root");
  r.style.setProperty("--bg-color", "#fff");
  r.style.setProperty("--primary-color", "black");
  r.style.setProperty("--secondary-color", "#999");
  r.style.setProperty("--info-color", "#999");
}
