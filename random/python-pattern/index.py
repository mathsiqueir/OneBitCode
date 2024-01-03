my_string = "JavaScript"
x = 0

for (i in my_string){ 
    x = x + 1
    console.log(my_string[0..x])
}
   

for (i in my_string){
    x = x - 1
    console.log(my_string[0..x])
}
  