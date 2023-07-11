function handleClick(e) {
    console.log(e.target.innerHTML);
}


document.querySelector("#btn").addEventListener("click", handleClick);
// document.getElementById("btn").removeEventListener("click", handleClick);