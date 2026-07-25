import React, { useState } from 'react';
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

export default function DalumiaWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado ${contactForm.name}! Entraremos em contato em breve.`);
    setContactForm({ name: '', email: '', message: '' });
  };

  const services = [
    {
      title: 'Diagnóstico Financeiro',
      description: 'Avaliação completa da situação financeira da empresa.',
      bullets: ['Fluxo de caixa', 'Receitas e despesas', 'Custos', 'Rentabilidade', 'Principais riscos']
    },
    {
      title: 'Controle Financeiro',
      description: 'Implantação de controles com organização e clareza para tomada de decisão.',
      bullets: ['Contas a pagar', 'Contas a receber', 'Fluxo de caixa', 'Conciliação bancária', 'Planejamento financeiro']
    },
    {
      title: 'Dashboards Financeiros',
      description: 'Criação de painéis personalizados em Power BI, Excel e Google Sheets.',
      bullets: ['Faturamento', 'Lucro', 'Custos', 'Margem', 'Inadimplência', 'Fluxo de caixa']
    },
    {
      title: 'Análise de Dados',
      description: 'Uso de Python, SQL e Excel para encontrar oportunidades de redução de custos e ganho de lucratividade.',
      bullets: ['Análise estratégica', 'Indicadores', 'Otimização', 'Relatórios claros']
    }
  ];

  const processSteps = [
    {
      title: '1. Diagnóstico',
      description: 'Entendo a realidade da empresa e identifico os principais pontos de atenção.'
    },
    {
      title: '2. Planejamento',
      description: 'Defino prioridades, metas e os indicadores mais relevantes para o negócio.'
    },
    {
      title: '3. Implementação',
      description: 'Implanto controles, dashboards e processos com foco em objetividade e resultado.'
    },
    {
      title: '4. Acompanhamento',
      description: 'Monitoro resultados e proponho melhorias contínuas para sustentar o crescimento.'
    }
  ];

  const projects = [
    {
      title: 'Dashboard Financeiro',
      description: 'Controle de receitas, despesas, fluxo de caixa e indicadores financeiros em um painel visual e prático.',
      items: ['Receitas e despesas', 'Fluxo de caixa', 'Indicadores financeiros']
    },
    {
      title: 'Dashboard Comercial',
      description: 'Acompanhamento de vendas, ticket médio, clientes e conversão com foco em decisão estratégica.',
      items: ['Vendas', 'Ticket médio', 'Clientes', 'Conversão']
    },
    {
      title: 'Controle Financeiro em Excel',
      description: 'Planilha desenvolvida para pequenas empresas com contas a pagar, contas a receber e indicadores automáticos.',
      items: ['Contas a pagar', 'Contas a receber', 'Fluxo de caixa']
    }
  ];

  const technologies = ['Power BI', 'Excel Avançado', 'Power Query', 'Python', 'SQL', 'VBA', 'Google Sheets'];
  const differentiators = ['Atendimento personalizado', 'Soluções práticas', 'Linguagem simples', 'Experiência com pequenas empresas', 'Integração entre finanças e dados', 'Dashboards personalizados'];

  const faqItems = [
    {
      q: 'Você atende empresas de qualquer tamanho?',
      a: 'Atendo principalmente MEIs, microempresas, pequenas empresas e profissionais autônomos.'
    },
    {
      q: 'As consultorias podem ser online?',
      a: 'Sim. Todo o atendimento pode ser realizado remotamente, com mais praticidade e flexibilidade.'
    },
    {
      q: 'Você desenvolve dashboards personalizados?',
      a: 'Sim. Cada painel é criado de acordo com as necessidades do cliente e com foco em clareza e tomada de decisão.'
    },
    {
      q: 'Como funciona o processo de trabalho?',
      a: 'Começo com um diagnóstico, sigo para o planejamento, implementação e, em seguida, acompanho os resultados com apoio contínuo.'
    }
  ];

  return (
    <div style={{ fontFamily: 'Inter, Poppins, -apple-system, sans-serif', color: '#0F172A', backgroundColor: '#F8FAFC' }}>
      <nav style={{
        background: 'linear-gradient(90deg, #1E3A8A 0%, #2563EB 100%)',
        color: '#FFFFFF',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 10px rgba(0,0,0,0.15)'
      }}>
        <div style={{ fontSize: '1.35rem', fontWeight: '700', letterSpacing: '1px' }}>
          SARA OLIVEIRA
        </div>

        <div className="desktop-menu" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#sobre" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Sobre</a>
            <a href="#servicos" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Serviços</a>
            <a href="#como-funciona" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Como funciona</a>
            <a href="#contato" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Contato</a>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'none',
            border: 'none',
            color: '#FFFFFF',
            cursor: 'pointer',
            fontSize: '1.4rem'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div style={{ background: '#1E3A8A', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          <a href="#sobre" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Sobre</a>
          <a href="#servicos" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Serviços</a>
          <a href="#como-funciona" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Como funciona</a>
          <a href="#contato" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contato</a>
        </div>
      )}

      <section style={{ background: 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)', color: '#FFFFFF', padding: '5rem 2rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.9rem', letterSpacing: '0.25rem', textTransform: 'uppercase', marginBottom: '1rem', color: '#BFDBFE' }}>Consultora Financeira e Analista de Dados</p>
        <h1 style={{ fontSize: '2.3rem', lineHeight: '1.2', marginBottom: '1rem', fontWeight: '700' }}>
          Sara Oliveira Guimarães Nascimento
        </h1>
        <p style={{ fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto 2rem', lineHeight: '1.7', color: '#E2E8F0' }}>
          Transformo informações financeiras em decisões estratégicas para pequenas e médias empresas, organizando processos, controlando indicadores e apoiando a gestão com clareza.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#contato" style={{ background: '#10B981', color: '#FFFFFF', padding: '0.9rem 1.5rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>Agendar uma consultoria</a>
          <a href="#contato" style={{ background: 'transparent', border: '2px solid #FFFFFF', color: '#FFFFFF', padding: '0.9rem 1.5rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>Solicitar diagnóstico gratuito</a>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" style={{ background: '#FFFFFF', color: '#1E3A8A', padding: '0.9rem 1.5rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600' }}>Falar pelo WhatsApp</a>
        </div>
      </section>

      <section id="sobre" style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1rem', color: '#1E3A8A' }}>Quem sou</h2>
          <p style={{ fontSize: '1.02rem', lineHeight: '1.8', color: '#475569', marginBottom: '2rem' }}>
            Sou consultora financeira e analista de dados com experiência em administração financeira, análise de indicadores, controle operacional e inteligência de negócios. Minha atuação combina Administração, Ciências Contábeis e Data Analytics para oferecer soluções práticas que melhoram a gestão financeira e aumentam a eficiência das empresas.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            <div style={{ padding: '1.25rem', background: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#0F172A' }}>Formação</h3>
              <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>MBA em Data Science & Analytics (USP ESALQ), Ciências Contábeis e Administração.</p>
            </div>
            <div style={{ padding: '1.25rem', background: '#F8FAFC', borderRadius: '12px', borderLeft: '4px solid #10B981' }}>
              <h3 style={{ margin: '0 0 0.5rem', color: '#0F172A' }}>Atendimento</h3>
              <p style={{ margin: 0, color: '#475569', lineHeight: '1.6' }}>Atuo com orientação a microempreendedores e gestão administrativa, com soluções voltadas à organização financeira.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem', color: '#1E3A8A' }}>Serviços</h2>
          <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '3rem' }}>Soluções financeiras e analíticas para empresas que querem crescer com mais organização e controle.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {services.map((service, index) => (
              <div key={index} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 25px rgba(15,23,42,0.06)', border: '1px solid #E2E8F0' }}>
                <h3 style={{ marginBottom: '0.5rem', color: '#1E3A8A' }}>{service.title}</h3>
                <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '1rem' }}>{service.description}</p>
                <ul style={{ paddingLeft: '1rem', margin: 0, color: '#0F172A', lineHeight: '1.7' }}>
                  {service.bullets.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1E3A8A' }}>Como funciona</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{ background: '#F8FAFC', borderRadius: '12px', padding: '1.25rem', border: '1px solid #E2E8F0' }}>
                <h3 style={{ color: '#10B981', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1E3A8A' }}>Projetos</h2>
          <p style={{ color: '#64748B', marginBottom: '2rem' }}>Exemplos de soluções que podem ser adaptadas à realidade do seu negócio.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {projects.map((project, index) => (
              <div key={index} style={{ background: '#FFFFFF', borderRadius: '16px', padding: '1.5rem', border: '1px solid #E2E8F0' }}>
                <h3 style={{ color: '#0F172A', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: '#64748B', lineHeight: '1.6', marginBottom: '0.75rem' }}>{project.description}</p>
                <ul style={{ paddingLeft: '1rem', margin: 0, color: '#0F172A', lineHeight: '1.7' }}>
                  {project.items.map((item, itemIndex) => <li key={itemIndex}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1E3A8A' }}>Tecnologias</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
            {technologies.map((tech, index) => (
              <span key={index} style={{ padding: '0.7rem 1rem', background: '#EFF6FF', color: '#1E3A8A', borderRadius: '999px', fontWeight: '600' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1E3A8A' }}>Diferenciais</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {differentiators.map((item, index) => (
              <div key={index} style={{ padding: '1rem 1.1rem', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', color: '#0F172A' }}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" style={{ padding: '5rem 2rem', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center', color: '#1E3A8A' }}>Perguntas frequentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqItems.map((item, index) => (
              <div key={index} style={{ border: '1px solid #E2E8F0', borderRadius: '12px', overflow: 'hidden', background: '#F8FAFC' }}>
                <button onClick={() => toggleFAQ(index)} style={{ width: '100%', background: 'transparent', border: 'none', padding: '1rem 1.2rem', textAlign: 'left', cursor: 'pointer', fontWeight: '600', color: '#0F172A', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  {item.q}
                  <ChevronDown size={18} style={{ transform: expandedFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                </button>
                {expandedFAQ === index && <div style={{ padding: '0 1.2rem 1rem', color: '#475569', lineHeight: '1.7' }}>{item.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" style={{ padding: '5rem 2rem', background: 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)', color: '#FFFFFF' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '700', textAlign: 'center', marginBottom: '0.75rem' }}>Vamos conversar</h2>
          <p style={{ textAlign: 'center', color: '#E2E8F0', marginBottom: '2rem' }}>Envie uma mensagem e retorno em breve para discutir sua necessidade.</p>

          <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input type="text" name="name" placeholder="Seu nome" value={contactForm.name} onChange={handleContactChange} required style={{ padding: '0.95rem 1rem', borderRadius: '10px', border: '1px solid #93C5FD', background: '#FFFFFF', color: '#0F172A' }} />
            <input type="email" name="email" placeholder="Seu e-mail" value={contactForm.email} onChange={handleContactChange} required style={{ padding: '0.95rem 1rem', borderRadius: '10px', border: '1px solid #93C5FD', background: '#FFFFFF', color: '#0F172A' }} />
            <textarea name="message" placeholder="Sua mensagem" value={contactForm.message} onChange={handleContactChange} required rows="5" style={{ padding: '0.95rem 1rem', borderRadius: '10px', border: '1px solid #93C5FD', background: '#FFFFFF', color: '#0F172A', fontFamily: 'inherit' }} />
            <button type="submit" style={{ padding: '0.95rem 1rem', borderRadius: '10px', border: 'none', background: '#10B981', color: '#FFFFFF', fontWeight: '700', cursor: 'pointer' }}>Enviar mensagem</button>
          </form>

          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', textAlign: 'center' }}>
            <div>
              <Mail size={20} style={{ marginBottom: '0.4rem' }} />
              <p style={{ margin: 0, color: '#E2E8F0' }}>saraog262@proton.me</p>
            </div>
            <div>
              <MapPin size={20} style={{ marginBottom: '0.4rem' }} />
              <p style={{ margin: 0, color: '#E2E8F0' }}>São Paulo – SP</p>
            </div>
            <div>
              <Phone size={20} style={{ marginBottom: '0.4rem' }} />
              <p style={{ margin: 0, color: '#E2E8F0' }}>WhatsApp disponível</p>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#0F172A', color: '#FFFFFF', textAlign: 'center', padding: '1.5rem 2rem' }}>
        <p style={{ margin: 0 }}>© 2026 Sara Oliveira Guimarães Nascimento</p>
      </footer>
    </div>
  );
}
