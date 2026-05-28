        // 1. Lógica para atualizar o Modal de Detalhes dinamicamente
        const modalProduto = document.getElementById('modalProdutoDetalhes');
        if (modalProduto) {
            modalProduto.addEventListener('show.bs.modal', event => {
                // Elemento link "Ver mais" que disparou o modal
                const botaoVerMais = event.relatedTarget;
                
                // Resgata os atributos de dados (data-*) cadastrados no HTML
                const nome = botaoVerMais.getAttribute('data-nome');
                const descricao = botaoVerMais.getAttribute('data-descricao');
                const preco = botaoVerMais.getAttribute('data-preco');
                const imagem = botaoVerMais.getAttribute('data-imagem');
                
                // injeta as informações dinamicamente nas IDs corretas do seu modal
                document.getElementById('modalProdutoNome').textContent = nome;
                document.getElementById('modalProdutoDescricao').textContent = descricao;
                document.getElementById('modalProdutoPreco').textContent = preco;
                
                const imgModal = document.getElementById('modalProdutoImagem');
                imgModal.src = imagem;
                imgModal.alt = nome;
            });
        }

        // 2. Lógica Opcional: Intercepta o envio da Newsletter para exibir o Modal de Sucesso
        const formNewsletter = document.getElementById('formNewsletter');
        if (formNewsletter) {
            formNewsletter.addEventListener('submit', event => {
                event.preventDefault(); // Impede o recarregamento da página
                
                // Instancia e abre o modal de sucesso da newsletter
                const modalSucesso = new bootstrap.Modal(document.getElementById('modalSucessoNewsletter'));
                modalSucesso.show();
                
                formNewsletter.reset(); // Limpa o campo de e-mail
            });
        }
