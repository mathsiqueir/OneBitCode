document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('addItemForm');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        const formData = new FormData(form);
        const item = formData.get('item');

        const response = await fetch('http://localhost:3000/items', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ item: item })
        });

        if (response.ok) {
            const newItem = await response.json();
            renderItem(newItem);
        } else {
            console.error('Erro ao adicionar item:', response.statusText);
        }
    });

    // Função para renderizar o item
    function renderItem(itemData) {
        const list = document.createElement('ul');
        list.classList.add('items-list');
        list.id = `items-${itemData.id}`;

        const li = document.createElement('li');
        li.id = `item-${itemData.id}`;
        li.textContent = itemData.text;
        list.append(li);
        document.querySelector('#articles').appendChild(list);
    }

    // Função para carregar os itens
    async function fetchItems() {
        const items = await fetch('http://localhost:3000/items').then(res => res.json());
        items.forEach(renderItem);
    }

    fetchItems(); // Carrega os itens ao carregar a página
});
