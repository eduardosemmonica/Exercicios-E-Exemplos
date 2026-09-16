# apps_script

Script em Google Apps Script (JavaScript rodando dentro do Google Sheets) para automatizar tarefas ligadas a uma planilha.

## Conteudo

| Arquivo | Descricao |
| --- | --- |
| `notificacao_notas.gs` | Le nomes, e-mails e notas de uma planilha e envia um e-mail automatico pra cada aluno com o status ("aprovado"/"reprovado" etc.) via `GmailApp` |

## Como usar

Esse script nao roda localmente com Node - ele precisa ser colado no editor de Apps Script (Extensoes -> Apps Script) de uma planilha do Google Sheets com colunas de nome, e-mail e nota.

> Atencao: o nome da aba lida no codigo (`getSheetByName("Pagina1")`) precisa ser exatamente igual ao nome da aba na sua planilha real. Se a aba tiver acento no nome (`Pagina1` com acento, por exemplo), ajuste essa linha para bater com o nome real.
