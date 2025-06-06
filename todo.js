let butt = document.querySelector("#butt");
let inpp = document.querySelector("#inpp");
let ul = document.querySelector("ul");

butt.addEventListener("click", function () {
    let task = inpp.value.trim();
    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.marginLeft = "10px";
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    ul.appendChild(li);
    inpp.value = "";
});
