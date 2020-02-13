const myFunction = (a, b) => {
  if (a + b > -1) {
    var dodawanie = a + b
    console.log(`Wynik dodawania wynosi ${dodawanie}`)
  } else {
    console.log("Wynik jest ujemny");
  }
  if (a - b > -1) {
    var odejmowanie = a - b
    console.log(`Wynik odejmowania wynosi ${odejmowanie}`)
  } else {
    console.log("Wynik jest ujemny");
  }
  if (a * b > -1) {
    var mnożenie = a * b
    console.log(`Wynik mnożenia wynosi ${mnożenie}`)
  } else {
    console.log("Wynik jest ujemny");
  }
}