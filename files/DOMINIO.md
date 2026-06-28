# Configurar Domínio Goodere com o Site

## 📌 Pré-requisitos
- Conta na Vercel (grátis)
- Domínio goodere já registrado
- Acesso ao painel de controle do domínio

## 🚀 Passo a Passo

### 1. Fazer Deploy na Vercel

```bash
# No seu repositório local
git init
git add .
git commit -m "Initial commit: Dalumia website"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/dalumia-website.git
git push -u origin main
```

Ou simplesmente conecte seu repositório GitHub direto na Vercel.

### 2. Conectar Domínio na Vercel

1. Vá para [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto "dalumia-website"
3. Clique em "Settings" → "Domains"
4. Digite seu domínio: `goodere.com` (ou `www.goodere.com`)
5. Clique em "Add"

Vercel gerará seus nameservers:
```
ns1.vercel-dns.com
ns2.vercel-dns.com
ns3.vercel-dns.com
ns4.vercel-dns.com
```

### 3. Atualizar DNS no Registrador

Acesse o painel do seu registrador de domínio (GoDaddy, Namecheap, etc):

1. Procure por "Nameservers" ou "DNS Settings"
2. Substitua os nameservers existentes pelos 4 da Vercel (acima)
3. Clique em "Save"

⏳ **Propagar pode levar 24-48 horas**. Verifique com:
```bash
nslookup goodere.com
# Deve retornar IPs da Vercel
```

### 4. Configurar Certificado SSL (HTTPS)

A Vercel faz isso automaticamente! Seu site já terá HTTPS/SSL após a propagação DNS.

### 5. (Opcional) Apontar WWW também

Se quer que `www.goodere.com` também funcione:

Na Vercel:
1. Settings → Domains
2. Clique no ícone ⚙️ ao lado do seu domínio
3. Configure como "apex domain" ou "www subdomain"

Recomendação: Use `goodere.com` (sem www) como principal.

---

## ✅ Verificar se Está Funcionando

```bash
# Via curl
curl -I https://goodere.com

# Via dig
dig goodere.com

# Online: https://mxtoolbox.com/
```

Deve retornar status 200 com seu site!

---

## 📧 Email Corporativo (Opcional)

Se quiser email tipo `seu.nome@goodere.com`:

### Opção 1: Google Workspace
1. Compre Google Workspace
2. Siga o wizard de setup de domínio
3. Adicione registros MX na Vercel (Settings → Domains → DNS Records)

### Opção 2: Supabase / Resend (Gratuito)
Para emails transacionais do formulário de contato:

```javascript
// Usar Resend para enviar emails
import { Resend } from 'resend';

const resend = new Resend('re_SEU_API_KEY');

resend.emails.send({
  from: 'contato@goodere.com',
  to: 'seu-email@gmail.com',
  subject: 'Nova mensagem de contato',
  html: `<p>${contactForm.message}</p>`
});
```

---

## 🔒 Segurança

Após configurar:

✅ Ativar proteção contra força bruta (Vercel > Security)
✅ Configurar rate limiting (se usar backend)
✅ Usar HTTPS (automático)
✅ Adicionar Policy meta tags no HEAD

---

## 🚨 Troubleshooting

**Site não carrega depois de 24h?**
- Limpar cache: `Ctrl+Shift+Delete` (navegador)
- Usar DNS public: `1.1.1.1` (Cloudflare)
- Verificar status Vercel: [status.vercel.com](https://status.vercel.com)

**DNS propaga mas domínio não funciona?**
- Aguardar mais algumas horas
- Testar com `dig @ns1.vercel-dns.com goodere.com`
- Contatar suporte Vercel

**Certificado SSL não ativa?**
- Deletar e readicionar domínio na Vercel
- Aguardar 5 minutos, tentar novamente

---

## 📞 Suportes Úteis

- **Vercel Docs**: https://vercel.com/docs/concepts/projects/domains
- **Registrador do Domínio**: Check email com credenciais
- **Meu Discord**: Posso ajudar com erros específicos!

Sucesso! 🎉
