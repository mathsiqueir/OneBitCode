document.querySelector('#delete-form').forEach(element =>{

    element.addEventListener('submit',(ev)=>{
        const confirmation = confirm('tem certeza que deseja excluir esse post')
        if(!confirmation){
            ev.preventDefault()
        }
    })
})

