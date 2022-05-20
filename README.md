Configurando o git

Alterar as configurações do git para abrir no Visual Code
git config --local core.editor code

git config --local -> Configurações no projeto local
git config --global -> Configurações em todos os projetos
git config --system

Criando alias no git:
>git config --global --edit

Adicionar no fim do arquivo 
[alias]
    s = !git status