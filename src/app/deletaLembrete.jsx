"use client"

// Função para deletar o lembrete mais antigo
export function deletarLembreteMaisAntigo() {
  // Recupere o elemento textarea
  const listaDeLembretesTextarea = document.getElementById('lista-de-lembretes');

  // Obtenha o valor atual do textarea
  const listaDeLembretes = listaDeLembretesTextarea.value;

  // Verifique se há lembretes para deletar
  if (listaDeLembretes.trim() === '') {
    alert('Não há lembretes para deletar.');
    return;
  }

  // Separe os lembretes em linhas
  const linhasDeLembretes = listaDeLembretes.split('\n');

  // Remova a primeira linha (o lembrete mais antigo)
  linhasDeLembretes.shift();

  // Atualize o valor do textarea com as linhas restantes
  listaDeLembretesTextarea.value = linhasDeLembretes.join('\n');
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function() {
    // Event listener para o botão de deletar
    const deletarButton = document.getElementById('deletar-lembrete-button');
    deletarButton.addEventListener('click', deletarLembreteMaisAntigo);
  });
}
