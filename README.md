# Portfólio — Dra. Beatriz Diniz

Site de uma página (landing page) para portfólio de harmonização facial,
na paleta **verde kentucky (#00614c) + branco**.

## Estrutura

```
portfolio-beatriz-diniz/
├── index.html      → conteúdo e estrutura da página
├── style.css        → identidade visual (cores, tipografia, layout)
├── script.js         → menu mobile, ano automático, animações leves
└── assets/
    └── favicon.svg
```

## ⚠️ Antes de publicar: troque os placeholders

Todo o conteúdo abaixo é **ilustrativo** e precisa ser substituído por
informações e imagens reais da clínica:

- **Foto da Dra. Beatriz** (seção "Sobre"): hoje é uma ilustração em SVG.
  Procure o comentário `SUBSTITUIR AQUI` em `index.html`.
- **Fotos de antes/depois** (seção "Resultados"): hoje são blocos de cor.
  Publique apenas fotos com **autorização de uso de imagem assinada**
  pela paciente.
- **Depoimentos**: os três textos atuais são exemplos genéricos — troque
  por depoimentos reais, com consentimento de quem os deu.
- **Dados de contato**: e-mail, WhatsApp, endereço e Instagram estão com
  valores fictícios (marcados com *"inserir..."*).
- **Registro profissional**: inclua o número de CRO/CRM verdadeiro no
  rodapé e na seção "Sobre" — isso é importante para credibilidade e,
  dependendo da publicidade médica/odontológica, pode ser exigência do
  conselho profissional responsável.
- **Formulário de contato**: hoje é apenas visual (não envia dados de
  verdade). Antes de publicar, conecte a um serviço real, por exemplo:
  - [Formspree](https://formspree.io) ou [Web3Forms](https://web3forms.com)
    (mais simples, sem precisar de servidor);
  - um link direto para WhatsApp (`https://wa.me/55SEUNUMERO`);
  - ou um backend próprio.

## Como publicar gratuitamente no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `portfolio-beatriz-diniz`).
2. Envie estes arquivos para o repositório:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portfolio-beatriz-diniz.git
   git push -u origin main
   ```
3. No GitHub, vá em **Settings → Pages**.
4. Em "Source", selecione a branch `main` e a pasta `/root`.
5. Salve. Em alguns minutos o site estará disponível em:
   `https://SEU-USUARIO.github.io/portfolio-beatriz-diniz/`

Depois, se quiser, é possível apontar um domínio próprio
(ex: `www.drabeatrizdiniz.com.br`) nas mesmas configurações de Pages.

## Testar localmente

Basta abrir `index.html` no navegador, ou rodar um servidor simples:

```bash
python3 -m http.server 8000
```

e acessar `http://localhost:8000`.
