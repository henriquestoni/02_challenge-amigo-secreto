# Amigo Secreto Web App 🎁

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Status: Finalizado](https://img.shields.io/badge/Status-Finalizado-green)](https://github.com/henriquestoni/02_challenge-amigo-secreto)

Este projeto implementa um aplicativo web simples e intuitivo para organizar seu Amigo Secreto online! 🧑‍🎄

## Descrição 📝

Cansado de papelzinhos, dificuldades para organizar o sorteio? Com este aplicativo, você pode gerenciar seu Amigo Secreto de forma rápida e fácil. Adicione os participantes, realize o sorteio e veja quem você tirou de forma individual e discreta.

## Funcionalidades Principais

1.  **Adição de Amigos:**
    *   Um campo de entrada de texto coleta o nome do amigo.
    *   Um botão "Adicionar" aciona a função `adicionarAmigo`.
    *   Alternativamente, a função `adicionarAmigo` também é acionada ao pressionar a tecla "Enter".
    *   A função valida o nome inserido (não pode ser vazio) e o adiciona a um array chamado `arrayAmigos`.
    *   Em caso de nome repetido é exibida uma mensagem ao usuário, prosseguindo com a inclusão apenas quando confirmado.
    *   A lista de amigos é exibida dinamicamente na página.
2.  **Sorteio do Amigo Secreto:**
    *   Um botão "Sortear Amigo" aciona a função `sortearAmigo`.
    *   A função verifica se há amigos na lista antes de prosseguir.
    *   Um ID aleatório, limitado aos índices dos nomes dos amigos no `arrayAmigos`, é gerado pela função `gerarIdAleatorio()`.
    *   A função `gerarIdAleatorio()` garante que cada amigo seja sorteado e que não haja repetições em caso de múltiplos sorteios.
    *   O nome sorteado é exibido na página.
    *   Como não há identificação dos usuários, é possível que uma pessoa sorteie a si mesma.
3.  **Tratamento de Sorteio Finalizado:**
    *   Se um sorteio já foi finalizado, dependendo de qual botão for clicado, o sistema pergunta ao usuário se ele deseja:
        *   **Caso preencha um novo nome e clique no botão "Adicionar" (ou pressione "Enter")**:
            *   Adicionar mais nomes à lista de amigos existente para um novo sorteio.
            *   Limpar a lista de amigos e começar um novo sorteio.
        *   **Caso clique no botão "Sortear Amigo"**:
            *   Criar uma lista com múltiplos sorteados.
            *   Descartar o nome sorteado anteriormente e sortear um Amigo Secreto diferente.
            *   O sistema comunica ao usuário caso não restem nomes disponíveis para sortear.
4.  **Validações:**
    *   O sistema valida se o nome do amigo está em branco.
    *   O sistema verifica se o nome do amigo já está incluído na listagem existente.
    *   Alertas e mensagens de confirmação são exibidos para orientar o usuário.

## Estrutura do Código

*   `adicionarAmigo()`: Gerencia a adição de amigos à lista, incluindo validações e tratamento de nomes repetidos.
*   `listarAmigos()`: Exibe a lista de amigos na página.
*   `gerarIdAleatorio()`: Gera IDs aleatórios para o sorteio, garantindo que não haja repetições.
*   `listarSorteados()`: Exibe o nome do amigo sorteado na página.
*   `sortearAmigo()`: Gerencia o processo de sorteio, incluindo a lógica para múltiplos sorteios e tratamento de sorteios finalizados.

## Interface do Usuário

*   O sistema possui um campo de entrada para adicionar nomes.
*   Uma lista dinâmica exibe os nomes dos amigos adicionados.
*   Um botão "Adicionar" adiciona amigos à lista.
*   Um botão "Sortear Amigo" inicia o sorteio.
*   Os resultados do sorteio são exibidos dinamicamente na página.

## Fluxo do Sistema

1.  O usuário insere os nomes dos amigos.
2.  O sistema adiciona os amigos à lista.
3.  O usuário clica em "Sortear Amigo".
4.  O sistema gera um ID aleatório, que é o índice do nome do amigo no array, e sorteia o amigo, garantindo que não haja repetições.
5.  O nome sorteado é exibido na página.
6.  O sistema permite que o usuário realize múltiplos sorteios ou reinicie o processo.

## Como Usar 🤔

1.  Adicione os participantes: Digite o nome de cada amigo no campo de entrada e clique em "Adicionar" ou pressione "Enter".
2.  Sorteie o Amigo Secreto: Clique no botão "Sortear Amigo" para gerar os resultados aleatórios.
3.  Veja seu amigo sorteado: O nome do seu amigo secreto será exibido na tela.

## Como Contribuir 💪

Sinta-se à vontade para contribuir com o projeto! Você pode:

*   Reportar bugs e problemas encontrados.
*   Sugerir novas funcionalidades e melhorias.
*   Criar pull requests com correções e implementações.

## Autor ✒️

*   [Toni Henriques](https://www.linkedin.com/in/henriquestoni/) - [GitHub](https://github.com/henriquestoni)

## Licença 📄

Este projeto está licenciado sob a licença MIT.

## Sobre o Projeto ℹ️

Esse projeto foi desenvolvido como parte do desafio individual da fase de seleção do curso de Iniciante em Programação (Turma G8) do programa Oracle Next Education. O objetivo do desafio era criar um aplicativo web funcional para sorteio de Amigo Secreto. O projeto está finalizado e atendeu a todos os requisitos do desafio.
