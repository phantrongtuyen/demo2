function kiemtra(a, b) {
  var kiemtrasodu = a % b
  if(kiemtrasodu==0)
  {
    return 1
  }
  return 0
}

console.log(kiemtra(10,9))