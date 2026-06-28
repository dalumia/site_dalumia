# Site Dalumia - React

Site profissional para sua consultoria em Data Science & Analytics, baseado no seu plano diretor de 3 segmentos (MEI, ME-EPP, Enterprise) e 3 tiers de serviços (Diagnosis, Planning, Implementation).

## 📋 Funcionalidades

- ✅ Hero com proposta de valor clara
- ✅ Navegação sticky e responsiva
- ✅ 3 segmentos de serviços com tiers de preços
- ✅ Seção Sobre com 3 pilares (Expertise, Metodologia, Stack)
- ✅ FAQ com accordion interativo
- ✅ Blog preview (espaço para expandir)
- ✅ Formulário de contato funcional
- ✅ Design dark/gold profissional
- ✅ 100% responsivo (mobile, tablet, desktop)

## 🚀 Como Usar

### Opção 1: Codesandbox (Mais Fácil)
1. Copie todo o código do arquivo `dalumia-site.jsx`
2. Vá para [codesandbox.io](https://codesandbox.io)
3. Crie um novo projeto React
4. Cole o código e substitua o arquivo padrão
5. Clique em "Sign Up & Deploy" para gerar uma URL pública

### Opção 2: Vercel (Recomendado para Produção)
1. Crie um repositório no GitHub com este arquivo
2. Vá para [vercel.com](https://vercel.com)
3. Conecte seu repositório
4. Defina seu domínio goodere no DNS da Vercel

### Opção 3: Desenvolvimento Local
```bash
npx create-react-app dalumia
cd dalumia
# Substitua o arquivo src/App.js pelo conteúdo dalumia-site.jsx
npm install lucide-react
npm start
```

## 🎨 Customizações Prontas

### Cores
- **Dark Navy**: `#0F1419` (fundo principal)
- **Gold**: `#D4AF37` (accent/CTA)
- **Light Gray**: `#F8FAFC` (seções alternadas)
- **White**: `#FFFFFF` (cards)

Altere os hex values nas strings `style` para outros tons.

### Conteúdo para Atualizar

**Números de preço:**
```javascript
tiers: [
  { title: 'Diagnosis', price: 'R$ 500', desc: '...' },
  // ↑ Atualize aqui conforme necessário
]
```

**FAQ:**
```javascript
const faqItems = [
  { q: 'Pergunta 1?', a: 'Resposta 1' },
  // Adicione mais items conforme crescer
]
```

**Blog:**
```javascript
const blogPosts = [
  { title: 'Post 1', excerpt: '...', date: 'Nov 2024' },
  // Link reais para o blog vêm depois
]
```

**Contato:**
- Email: `contato@dalumia.com.br` (linha 450 aprox)
- Telefone: `+55 (11) 99XXX-XXXX` (atualize seu número)
- Endereço: `São Paulo, SP`

## 📧 Formulário de Contato

Atualmente mostra um alerta ao enviar. Para funcionalidade real, integre com:
- **Formspree**: Envie emails direto (gratuito até 50/mês)
- **Netlify Forms**: Se hospedar na Netlify
- **Backend próprio**: API Node.js ou Python

Exemplo com Formspree:
```javascript
<form action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
  {/* inputs iguais */}
</form>
```

## 📱 Responsividade

O site já é 100% responsivo:
- Desktop: 3 colunas em grade
- Tablet: 2 colunas
- Mobile: 1 coluna (stack vertical)

Não precisa ajustar nada, funciona automático.

## 🔍 SEO Básico

Para melhorar SEO, adicione na raiz do projeto (se for Next.js/Vercel):

```html
<head>
  <meta name="description" content="Consultoria em Data Science & Analytics para MEI, ME/EPP e Enterprise">
  <meta name="keywords" content="Data Science, BI, Analytics, Consultoria, São Paulo">
  <meta property="og:title" content="Dalumia - Consultoria em Data Science">
  <meta property="og:description" content="...">
  <meta property="og:image" content="URL_LOGO_AQUI">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```

## 🔗 Próximos Passos

1. **Domínio Goodere**: Configure DNS apontando para seu host (Vercel/Netlify/seu servidor)
2. **Email de Contato**: Integre Formspree ou seu backend favorito
3. **Blog Real**: Expanda a seção Blog com posts de verdade (considere CMS como Sanity ou Strapi)
4. **Logo**: Adicione o logo Dalumia na navbar
5. **Analytics**: Integre Google Analytics para rastrear visitantes
6. **Redes Sociais**: Adicione links no footer

## 🛠️ Stack

- **Framework**: React 18
- **Ícones**: Lucide React (20 ícones usados)
- **Styling**: CSS-in-JS puro (sem dependências)
- **Hospedagem**: Vercel (recomendado) ou Netlify

## 📞 Suporte

Dúvidas sobre o código? Eu posso:
- Ajudar a customizar cores/textos
- Integrar formulário com backend real
- Adicionar mais seções (case studies, testemunhas, etc)
- Melhorar performance/SEO

Basta me chamar! 🚀
