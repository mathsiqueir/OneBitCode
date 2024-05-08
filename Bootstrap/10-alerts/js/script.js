const placeholderMessage = document.getElementById('placeholderMessage')
        const btn = document.getElementById('placeholderBtn').addEventListener('click',()=>{
            const message = document.createElement('div')
            message.innerHTML = `<div class="alert alert-success text-center" role="alert"> Muito bom programador, você vai ter muito sucesso na carreira! 
            <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="alert"></button>
            </div>`
           
           placeholderMessage.append(message) 
        })