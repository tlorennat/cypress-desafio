Este projeto contém testes automatizados End-to-End (E2E) para a aplicação Coffee-Shop utilizando Cypress com Cucumber (BDD) e Page Object Model.
Site testado: https://coffee-cart.app/

📌Objetivo
Validar o fluxo completo de compra de cafés, desde a seleção dos produtos até o checkout final, garantindo que regras de negócio, promoções e carrinho funcionem corretamente.

📌Tecnologias Utilizadas
Cypress – Testes E2E
Cucumber (Gherkin) – Escrita dos cenários em BDD
JavaScript
Page Object Model (POM) – Organização e reutilização de código

📌Conceitos Aplicados
BDD com Dado/Quando/Então
Separação de responsabilidades com Page Objects
Uso de baseUrl para navegação simplificada
Seletores estáveis (data-test, aria-label)

📌Exemplo de Cenário Gherkin
Cenário: Realizar compra e aceitar a oferta com condição especial
Dado que o usuário acessa o site
E seleciona três tipos diferentes de café 
Quando o usuário aceita a oferta promocional do Mocha
E o carrinho contém 4 itens com os valores corretos
E remove 1 item do carrinho 
E preenche os dados como nome e email
Então deve ser exibida a mensagem de sucesso

📌PageObjects
PortalPage Responsável por:
Seleção dos cafés
Interação com o modal de promoção

CarrinhoPage Responsável por:
Validação dos itens no carrinho
Remoção de itens
Finalização da compra

📌instalar dependências:
npm install
abrir o cypress: npx cypress open

AUTORA: LORENNA THAMYRES


