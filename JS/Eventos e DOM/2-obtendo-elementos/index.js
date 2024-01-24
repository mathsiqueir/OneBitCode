function show(){
    const contactList = document.getElementById("contact-list") //ID é uma coisa exclusiva não se repete em outro elemento
    console.log(contactList)

    const listElements = document.getElementsByTagName("li")
    console.log(listElements)

    const contactInputs = document.getElementsByClassName('contact-input')
    console.log(contactInputs)

    const contactName = document.getElementsByName('contact1')
    console.log(contactName)

    //mesma sintaxe do CSS
    const contacts = document.querySelectorAll('#contact-list > li > label ')
    console.log(contacts)

    //pega o primeiro elemento que ele achar e não todos como o irmão dele acima
    const firstContact = document.querySelector("#contact-list > li > label")
}
