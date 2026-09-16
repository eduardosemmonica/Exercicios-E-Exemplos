function enviarEmails() {
  let aba = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pagina1");
  let dados = aba.getDataRange().getValues();

  for (let i = 1; i < dados.length; i++) {
    let nome = dados[i][0];
    let email = dados[i][1];
    let nota = Number(dados[i][2]);

    if (!nome || !email || isNaN(nota)) continue;

    let status = verificarStatus(nota);
    let mensagem = 'Ola, ' + nome + '! Nota: ' + nota + '. Situacao: ' + status;

    GmailApp.sendEmail(email, 'Resultado da Avaliacao', mensagem);
  }
}

function aoEditar(e) {
  let aba = e.source.getActiveSheet();
  let linha = e.range.getRow();

  if (linha === 1) return;

  let nome = aba.getRange(linha, 1).getValue();
  let email = aba.getRange(linha, 2).getValue();
  let nota = Number(aba.getRange(linha, 3).getValue());

  if (!nome || !email || isNaN(nota)) return;

  let confirmacao = aba.getRange(linha, 4).getValue();

  if (confirmacao === 'Enviado') return;

  let status = verificarStatus(nota);
  let mensagem = 'Ola, ' + nome + '! Nota: ' + nota + '. Situacao: ' + status;

  GmailApp.sendEmail(email, 'Resultado da Avaliacao', mensagem);

  aba.getRange(linha, 4).setValue('Enviado');
}

function verificarStatus(nota) {
  nota = Number(nota);

  if (isNaN(nota)) return 'Indefinido';
  if (nota >= 7) return 'Aprovado';
  if (nota <= 3) return 'Reprovado';
  return 'Recuperacao';
}