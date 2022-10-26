<h1>Aplicação React.Js - Listagem de Carros</h1>

<p>A aplicação é bem simples, desenvolvida basicamente apenas com React.Js. Contendo quatro telas, uma para listagem de todos os veículos, onde também há um formulário para adicionar um novo veículo na tabela.</p>

<p>A navbar possibilita ir para 3 listagens diferentes, baseada nos filtros exigidos, de ano, valor e  timestamp.</p>

<h2>Componentização</h2>

<p>A aplicação conta com 3 componentes, bem simples, mas que cumprem bem seu papel, que é o componente da navbar, que irá aparecer em todas as telas, o componente de listagem, onde o JSON é consumido e listado na tabela, sendo bem fácil de alterar quais serão os campos da tabela, já que existe um map que retorna cada table data.</p>

<p>Por último, o componente de adicionar carros, que exibe o formulário e utiliza o State do React para poder salvar (temporariamente, já que é uma aplicação mockada, sem back-end) novos carros dentro da tabela de listagem. </p>

<p>Por fim, para fazer que a aplicação seja dinâmica, no formato SPA, foi utilizado o React-Router-Dom, estruturando a aplicação e possiiblitando o roteamento entre as diferentes telas e listagens.</p>
