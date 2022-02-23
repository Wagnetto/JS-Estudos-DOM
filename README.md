## Aparecida Nutricionista

Acompanhamento de Roteiro do Curso [Javascript - Programando na linguagem da Web](https://cursos.alura.com.br/course/javascript-programando-na-linguagem-web)

Projeto interessante de Javascript puro. O clássico cálculo de IMC indo além da lógica no console.

![AparecidaNutricao](https://user-images.githubusercontent.com/79273930/155303375-ce97be7b-c1d6-4338-b226-dfc7834574a8.png)

Exercício de boas práticas, organização do código e responsabilidades bem definidas e aproveitadas, event listening e manipulação do DOM.

Começamos criando função para calcular o IMC dos pacientes constantes no código HTML, preenchendo a última coluna da tabela.

Fizemos alteração da estilização conforme a validação do cálculo, pelo uso de `add.classList`.
Incluímos no código HTML conteúdo inserido através de formulário. Evitamos comportamento padrão de esvaziamento do formulário com `event.preventDefault()`.
Aprendemos a criar os elementos, primeiramente com `createElement()`.
Depois os criamos como objetos a partir da `class paciente`, usando `appendChild` para organizar os atributos nas `table rows` e `table data`, otimizando tudo nas funções `montaTr(paciente)` e `montaTd()`.

Aplicamos a função de validação dos valores também para os inseridos via formulário, validando peso (< 400) e altura (< 2.20) na função `validaPaciente()`. 
O resultado da validação é uma alteração baseada em `classes` e `id` que exibe texto de mensagems de erro organizadas em um array.


O botão "Buscar Pacientes" traz de uma API externa pacientes, como objetos, para a tabela usando Ajax e a função `XMLHttpRequest()`.

Depois adicionamos a funcionalidade de remover pacientes, com clique duplo, com um 'fade-out' feito nas classes do CSS.

Ao final, inserimos a função de filtragem por nomes na tabela usando `RegExp()`

Por favor, não hesite em comentar com qualquer dica e sugestão.

### Obrigado pela visita!
