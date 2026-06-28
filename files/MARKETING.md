# 📈 Estratégia de Marketing & SEO - Dalumia

Guia prático para maximizar conversão e visibilidade do site.

---

## 🎯 Fase 1: SEO Técnico (Semana 1-2)

### 1.1 Adicionar Meta Tags

No seu `public/index.html` (React):

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Consultoria em Data Science e Analytics para MEI, ME/EPP e Enterprise. Python, SQL, Power BI. Diagnosis, Planning e Implementation.">
  <meta name="keywords" content="data science consultoria, analytics, business intelligence, BI, Python, Power BI, São Paulo">
  <meta name="author" content="Dalumia Consultoria">
  <meta name="robots" content="index, follow">
  
  <!-- Open Graph (para compartilhar no LinkedIn, Facebook) -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="Dalumia - Consultoria em Data Science & Analytics">
  <meta property="og:description" content="Transforme dados em decisões estratégicas">
  <meta property="og:image" content="https://goodere.com/logo.png">
  <meta property="og:url" content="https://goodere.com">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:title" content="Dalumia - Data Science & Analytics">
  <meta property="twitter:description" content="Consultoria especializada em dados para seu negócio">
  <meta property="twitter:image" content="https://goodere.com/logo.png">
  
  <title>Dalumia - Consultoria em Data Science & Analytics | São Paulo</title>
</head>
```

### 1.2 Adicionar Sitemap

Crie `public/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://goodere.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://goodere.com/#servicos</loc>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://goodere.com/#sobre</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://goodere.com/#faq</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://goodere.com/#contato</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

### 1.3 Adicionar robots.txt

Crie `public/robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://goodere.com/sitemap.xml
```

### 1.4 Google Search Console

1. Vá para [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione seu domínio goodere.com
3. Faça upload de `sitemap.xml`
4. Aguarde Google indexar (pode levar 1-2 semanas)

### 1.5 Adicionar Analytics

Instale Google Analytics + Clarity Microsoft:

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-SEU_ID_AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-SEU_ID_AQUI');
</script>

<!-- Microsoft Clarity -->
<script>
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "SEU_ID_AQUI");
</script>
```

---

## 💼 Fase 2: Marketing de Conteúdo (Semana 2+)

### 2.1 Blog Posts Ideais (Semanas 1-4)

Escreva 1 artigo por semana focando em SEO:

1. **"Como Começar com Data Analytics (Guia para MEI)"**
   - Palavras-chave: MEI analytics, data analytics, dashboard
   - Link interno: → Serviços MEI

2. **"Power BI vs Excel: Quando Fazer a Migração"**
   - Palavras-chave: Power BI, Excel, BI
   - Link interno: → Serviços ME-EPP

3. **"6 Erros Comuns em Projetos de BI (e Como Evitar)"**
   - Palavras-chave: business intelligence, projeto BI
   - Link interno: → Todos os serviços

4. **"NFC-e, Simples Nacional e Dados: Entenda a Lei"**
   - Palavras-chave: NFC-e, simples nacional, compliance
   - Link interno: → Serviços MEI/ME-EPP

### 2.2 Promover no LinkedIn

Crie posts semanais:

```
🎯 Insight de hoje:

87% das MEIs não usam dados para tomar decisões.

Por que é um problema?
→ Desperdiçam oportunidades
→ Gastam mais do que ganham
→ Não sabem quem é o cliente ideal

Começar é simples. Uma análise de 2 semanas mostra:
📊 Seu melhor produto
💰 Sua margem real
👥 Seu cliente ideal

Quer saber como? [Link para goodere.com/blog]

#DataScience #Analytics #MEI
```

### 2.3 E-mail Marketing Básico

Use Mailchimp (grátis até 500 contatos):

1. Crie lista de emails (comece capturando no formulário do site)
2. Envie newsletter quinzenal com:
   - 1 insight de dados
   - 1 case study (seu ou de cliente)
   - 1 dica prática
   - CTA simples para serviços

Template simples:

```
Subject: 📊 Como [Empresa Tipo] aumentou faturamento com dados

---

Oi [Nome],

Essa semana quero compartilhar um padrão que identifiquei:

empresas que medem conversão vendem 40% mais.

Por quê? Porque:
1. Veem oportunidades que a concorrência ignora
2. Focam no que realmente funciona
3. Gastam menos experimentando

Nós ajudamos isso acontecer em 2-4 semanas.

→ Agende uma conversa: [Link]

Abraço,
Dalumia
```

---

## 🎯 Fase 3: Geração de Leads (Semana 3+)

### 3.1 Lead Magnets

Crie recursos gráteis para capturar emails:

**Option 1: Template Excel**
- "Dashboard de Controle para MEI" (arquivo .xlsx)
- Captura: nome + email para baixar

**Option 2: Guia PDF**
- "Guia Prático: 5 Passos para Estruturar Dados do Seu Negócio"
- Hospede em Google Drive, ofereça no site

**Option 3: Planilha de ROI**
- "Calculadora: Quanto você economiza com dados?"
- Input: ticket médio, clientes/mês → output: economia estimada

Adicione CTA no site:

```javascript
{/* No final da seção Serviços */}
<div style={{ 
  background: '#D4AF37', 
  padding: '2rem',
  textAlign: 'center',
  borderRadius: '8px'
}}>
  <h3>Download Gratuito</h3>
  <p>Planilha de Dashboard para MEI</p>
  <form action="https://suasitepelowmailer.com/subscribe">
    <input type="email" placeholder="seu@email.com" required />
    <button type="submit">Receber Grátis</button>
  </form>
</div>
```

### 3.2 Chatbot Básico

Use Tidio (grátis):

1. Instale widget no site
2. Responda perguntas automáticas:
   - "Qual é seu segmento? (MEI / ME / Enterprise)"
   - "Qual serviço te interessa?"
   - "Posso agendar uma conversa?"

---

## 📊 Fase 4: Otimização Contínua (Mensal)

### 4.1 Métricas para Acompanhar

No Google Analytics, monitore:

- **Sessões**: Quantas pessoas visitam
- **Taxa de Rejeição**: % que saem sem interagir (meta: <50%)
- **Tempo na Página**: Quanto tempo ficam (meta: >2 min)
- **Taxa de Conversão**: % que clicam em contato (meta: >3%)
- **Páginas Populares**: Qual seção atrai mais

### 4.2 A/B Tests Simples

Teste mudanças no CTA:

```javascript
// Versão A: "Explorar Serviços"
<a href="#servicos">Explorar Serviços</a>

// Versão B: "Ver como aumentar faturamento com dados"
<a href="#servicos">Ver como aumentar faturamento com dados</a>
```

Veja qual tem mais cliques no Analytics. Mantenha a vencedora.

### 4.3 Otimizar Formulário de Contato

Se taxa de conversão é baixa (<2%), teste:

- ✅ Menos campos (só nome, email, mensagem)
- ✅ CTA mais clara ("Agendar Conversa Gratuita" vs "Enviar")
- ✅ Garantia: "Responderemos em até 24h"

---

## 🚀 Checklist Rápido

- [ ] Meta tags adicionadas
- [ ] Sitemap criado
- [ ] Google Search Console configurado
- [ ] Google Analytics instalado
- [ ] Primeiro blog post publicado
- [ ] LinkedIn Business Page atualizada
- [ ] Email template preparado
- [ ] Lead magnet criado
- [ ] Analytics monitorados semanalmente

---

## 💡 Dicas Finais

1. **Consistência > Perfeiçã**: Posta algo semanalmente, mesmo que pequeno
2. **Monitore**: 1h por semana no Analytics faz diferença
3. **Engaje**: Responda todos os contatos em até 4h
4. **Aprenda**: Artigos mais clicados = tema que seu público quer
5. **Conecte Pontos**: Blog → Email → Contato = funil completo

Sucesso! 🎉
