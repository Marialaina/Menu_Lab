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
    //Creating an a element for the html
    const aEl = document.createElement("a");
    //adding the link tag from the object
    aEl.setAttribute('href', link.href);
    //Setting the a tag to have the value of text in the object
    aEl.textContent = link.text;
    //appending my a tag.
    topMenuEl.append(aEl);
    
  
})
