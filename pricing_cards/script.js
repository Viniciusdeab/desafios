const checkbox = document.getElementById('checkbox');
const profissional = document.getElementById('profissional');
const master = document.getElementById('master');
const basic = document.getElementById('basic');

checkbox.addEventListener('click', () => {
    basic.textContent = basic.textContent === 'R$199.99' ? 'R$19.99' : 'R$199.99';
    profissional.textContent = profissional.textContent === 'R$249.99' ? 'R$24.99' : 'R$249.99';
    master.textContent = master.textContent === 'R$399.99' ? 'R$39.99' : 'R$399.99';
})