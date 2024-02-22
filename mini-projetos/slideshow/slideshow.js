'use strict';
const containerItems = document.getElementById('container-items')
let items = document.querySelectorAll('.item')
const images = [
    {'id': '1', 'url': './img/chrono.jpg'},
    {'id': '2', 'url': './img/inuyasha.jpg'},
    {'id': '3', 'url': './img/tenchi.jpg'},
    {'id': '4', 'url': './img/tenjhotenge.jpg'},
    {'id': '5', 'url': './img/yuyuhakusho.jpg'},
    {'id': '6', 'url': './img/ippo.png'},
]

const loadImages = (images, containerItems)=>{
    images.forEach(image => {
        containerItems.innerHTML += `
        <div class='item'>
            <img src ='${image.url}'    
        </div>
        `
    });
}
loadImages(images, containerItems)

const previous = ()=>{
    items = document.querySelectorAll('.item')
    containerItems.appendChild(items[0])
    
}
const next = ()=>{
    items = document.querySelectorAll('.item')
   const lastItem = items[items.length - 1]
   containerItems.insertBefore(lastItem, items[0])
}
document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)