"use client"


export function salvarLembrete() {
  const nome = document.getElementById('contact-form-name').value;
  const data = document.getElementById('contact-form-email').value;

  if (!nome || !data) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  const lembrete = { nome, data };

  // Recupere o elemento textarea
  const listaDeLembretesTextarea = document.getElementById('lista-de-lembretes');

  // Crie uma string para representar a lista de lembretes
  const listaDeLembretes = listaDeLembretesTextarea.value; // Use .value em vez de .textContent

  // Adicione o novo lembrete à lista de lembretes
  listaDeLembretesTextarea.value = listaDeLembretes + `Nome: ${lembrete.nome}, Data: ${lembrete.data}\n`;

  // Limpe os campos de entrada
  document.getElementById('contact-form-name').value = '';
  document.getElementById('contact-form-email').value = '';
}