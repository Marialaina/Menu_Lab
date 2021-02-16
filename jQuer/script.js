const mainEl = document.querySelector("main");
mainEl.style.background = 'var(--main-bg)';
//.innerHTMl creats the html elements
mainEl.innerHTML = "<h1> Hello Marialaina </h1>"
mainEl.classList.add('flex-ctr');

const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.background = "var(--top-menu-bg)"
topMenuEl.classList.add("flex-around");

let menuLinks = [
    {text: "about", href: "/about"},
    {text: "catalog", href: "/catalog"},
    {text: "orders", href: "/orders"},
    {text: "account", href: "/account"}
];

menuLinks.forEach(link => {
    const aTags = document.createElement("a");
    aTags.href = link.href;
    const text = document.createTextNode(link.text);
    aTags.append(text);
    console.log(aTags)
    topMenuEl.append(aTags)
    
  
})
