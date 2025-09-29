
-----
### \#\# Rotina para Iniciar o Ambiente de Desenvolvimento

Você sempre precisará de 3 coisas abertas: **o Emulador, o Terminal do Servidor e o seu editor de código (VS Code)**. O segundo terminal só é usado para a instalação inicial.

**Passo 1: Ligue o Emulador Manualmente**

1.  Abra o **Android Studio**.
2.  Vá para o **Device Manager**.
3.  Clique no botão de **Play (▶️)** ao lado do seu emulador.
4.  **Aguarde** ele ligar completamente e mostrar a tela inicial do Android.

**Passo 2: Inicie o Servidor Metro (Terminal 1)**

1.  Abra um terminal (PowerShell).
2.  Navegue até a pasta do seu projeto:
    ```powershell
    cd C:\Users\flpfg\Documents\curso_react\exercicios
    ```
3.  Ligue o servidor que monitora seu código:
    ```powershell
    npx react-native start
    ```
4.  **Deixe este terminal sempre aberto** enquanto estiver programando.

**Passo 3: Inicie o Aplicativo (Apenas na primeira vez do dia)**

1.  Abra um **segundo** terminal.
2.  Navegue até a mesma pasta:
    ```powershell
    cd C:\Users\flpfg\Documents\curso_react\exercicios
    ```
3.  Rode o comando para instalar e iniciar o app no emulador que já está ligado:
    ```powershell
    npx react-native run-android
    ```

-----

### \#\# E depois que o app já está aberto? (O mais importante\!)

Você **NÃO precisa** rodar `npx react-native run-android` toda vez que alterar o código.

Depois que o app estiver aberto no emulador, o processo é muito mais simples:

1.  Faça uma alteração no seu código no VS Code (mude um texto, uma cor, etc.).
2.  **Apenas salve o arquivo (`Ctrl + S`)**.

O app no emulador vai **atualizar automaticamente** em um ou dois segundos\! Isso é chamado de "Fast Refresh".

Se por algum motivo ele não atualizar sozinho:

  * Clique no emulador e aperte `R`, `R` no teclado para forçar uma atualização.

**Resumo:** O comando `npx react-native run-android` é usado basicamente para "instalar" o app no começo da sessão. Para o resto do dia, você só precisa salvar seu código.