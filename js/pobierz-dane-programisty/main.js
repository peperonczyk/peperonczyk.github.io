let btn = document.querySelector("button")

btn.addEventListener("click", () => {
  if (document.querySelectorAll("div").length < 1) {
    fetch("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
      .then(res => res.json())
      .then(res => {
        const div = document.createElement("div")
        document.body.appendChild(div)
        div.setAttribute("id", "dane-programisty")
        if (div)
          if (div.innerHTML === "") {
            div.innerHTML = `<p>${res.imie}</p>`
            div.innerHTML += `<p>${res.nazwisko}</p>`
            div.innerHTML += `<p>${res.zawod}</p>`
            div.innerHTML += `<p>${res.firma}</p>`
          }
      })
  } else {
    alert("Dane zostały już wyświetlone")
  }
})
