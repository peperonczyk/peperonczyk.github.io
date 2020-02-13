const text1 = "Uwielbiam JavaScript"
const text2 = "Jestem świetnym programistą"

const myFunction = (text1, text2) => {
  if (text1.length > text2.length) {
    return text1
  } else if (text1.length === text2.length) {
    return "Równa długość"
  } else {
    return text2
  }
}