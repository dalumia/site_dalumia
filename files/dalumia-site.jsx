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

  const serviceCategories = [
    {
      category: 'Análise Financeira Pessoal',
      icon: '💰',
      services: [
        {
          name: 'Análise financeira pessoal',
          description: 'Diagnóstico completo, mapeamento de receitas/despesas, planejamento de reserva e investimentos.',
          price: 'R$ 400 – R$ 800',
        },
        {
          name: 'Consultoria para MEI',
          description: 'Separação finanças pessoais/negócio, controle de caixa, análise de lucratividade e tributação.',
          price: 'R$ 500 – R$ 1.000',
        },
        {
          name: 'Fluxo de caixa e DRE gerencial',
          description: 'Estruturação, projeções mensais, análise de desvios e recomendações de ação.',
          price: 'R$ 600 – R$ 1.200',
        },
        {
          name: 'Acompanhamento mensal recorrente',
          description: 'Reuniões mensais, análise de indicadores-chave, revisão de metas, suporte contínuo.',
          price: 'R$ 800 – R$ 1.500',
        },
        {
          name: 'Planejamento financeiro anual',
          description: 'Orçamento integrado, metas, projeção de crescimento, revisão trimestral.',
          price: 'R$ 900 – R$ 1.800',
        },
      ]
    },
    {
      category: 'Consultoria Financeira',
      icon: '📊',
      services: [
        {
          name: 'Diagnóstico operacional',
          description: 'Mapeamento de processos, identificação de gargalos, plano de melhoria.',
          price: 'R$ 800 – R$ 1.500',
        },
        {
          name: 'Precificação de produtos/serviços',
          description: 'Cálculo de custos, ponto de equilíbrio, margens, política de preços.',
          price: 'R$ 600 – R$ 1.200',
        },
        {
          name: 'Reestruturação de dívidas',
          description: 'Análise de endividamento, estratégias de quitação, orientações de renegociação.',
          price: 'R$ 500 – R$ 1.000',
        },
        {
          name: 'Consultoria de BI / Dashboards',
          description: 'Desenvolvimento de painéis analíticos com Power BI, complementando análise financeira.',
          price: 'R$ 800 – R$ 3.000',
        },
        {
          name: 'Otimização de processos',
          description: 'Reengenharia de fluxos, automação com ferramentas digitais, treinamento de equipe.',
          price: 'R$ 1.200 – R$ 3.500',
        },
      ]
    },
    {
      category: 'Estratégia Operacional (Projetos)',
      icon: '🏢',
      services: [
        {
          name: 'Projeto sob demanda',
          description: 'Escopo personalizado conforme a necessidade da empresa. Entre em contato para desenharmos juntos a melhor solução.',
          price: 'A consultar',
        },
      ]
    },
  ];

  const faqItems = [
    {
      q: 'Como funciona o processo de consultoria?',
      a: 'Começamos com uma conversa diagnóstica para entender seu momento financeiro. A partir daí, traçamos um plano personalizado — seja para organização pessoal, MEI ou empresa — com etapas claras e prazos definidos.'
    },
    {
      q: 'Posso contratar apenas um serviço ou preciso de um pacote?',
      a: 'Cada serviço pode ser contratado individualmente. Recomendamos começar pelo diagnóstico, mas você escolhe o que faz mais sentido para o seu momento.'
    },
    {
      q: 'Com quem a Dalumia trabalha?',
      a: 'Atendemos pessoas físicas, MEI e pequenas empresas que querem organizar as finanças, crescer com segurança ou tomar decisões mais embasadas em dados.'
    },
    {
      q: 'Qual o prazo típico de um projeto?',
      a: 'Diagnóstico: 1 a 2 semanas. Planejamento e estruturação: 2 a 4 semanas. O acompanhamento mensal recorrente é contínuo e renovável a cada período.'
    },
    {
      q: 'As reuniões são online ou presenciais?',
      a: 'Trabalhamos principalmente online (Google Meet / Zoom), o que nos permite atender clientes em todo o Brasil. Presencial em São Paulo mediante agendamento.'
    },
    {
      q: 'Os valores informados são fixos?',
      a: 'Os valores apresentados são faixas de referência. O valor exato depende do escopo e da complexidade do seu caso. Entre em contato para um orçamento personalizado sem compromisso.'
    },
  ];

  const blogPosts = [
    {
      title: 'Como separar finanças pessoais e do negócio sendo MEI',
      excerpt: 'Um dos erros mais comuns do microempreendedor é misturar as contas. Veja como estruturar isso de forma simples e prática.',
      date: 'Jun 2026'
    },
    {
      title: 'DRE Gerencial: o que é e por que sua empresa precisa',
      excerpt: 'O Demonstrativo de Resultado do Exercício gerencial revela a saúde real do seu negócio. Aprenda a ler e usar a seu favor.',
      date: 'Mai 2026'
    },
    {
      title: 'Fluxo de caixa: como projetar os próximos 3 meses',
      excerpt: 'Antecipar entradas e saídas evita surpresas e permite decisões mais seguras. Veja um modelo prático para começar hoje.',
      date: 'Abr 2026'
    }
  ];

  return (
    <div style={{ fontFamily: 'Inter, -apple-system, sans-serif', color: '#0F1419' }}>
      {/* Navbar */}
      <nav style={{
        background: '#0F1419',
        color: '#FFFFFF',
        padding: '1rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
          DALUMIA
        </div>
        
        <div className="desktop-menu" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#servicos" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Serviços</a>
            <a href="#sobre" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Sobre</a>
            <a href="#blog" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>Blog</a>
            <a href="#faq" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '0.95rem' }}>FAQ</a>
            <a href="#contato" style={{
              background: '#D4AF37',
              color: '#0F1419',
              padding: '0.5rem 1.5rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>Contato</a>
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
            fontSize: '1.5rem'
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          background: '#0F1419',
          color: '#FFFFFF',
          padding: '1rem 2rem',
          borderBottom: '1px solid #D4AF37'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <a href="#servicos" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Serviços</a>
            <a href="#sobre" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Sobre</a>
            <a href="#blog" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Blog</a>
            <a href="#faq" style={{ color: '#FFFFFF', textDecoration: 'none' }}>FAQ</a>
            <a href="#contato" style={{
              background: '#D4AF37',
              color: '#0F1419',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500',
              textAlign: 'center'
            }}>Contato</a>
          </div>
        </div>
      )}

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0F1419 0%, #1a1f2e 100%)',
        color: '#FFFFFF',
        padding: '6rem 2rem',
        textAlign: 'center',
        borderBottom: '3px solid #D4AF37'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: '700',
          marginBottom: '1rem',
          letterSpacing: '-1px'
        }}>
          Dados que Fazem <span style={{ color: '#D4AF37' }}>Diferença</span>
        </h1>
        <p style={{
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '2px',
          color: '#D4AF37',
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          Consultoria Financeira & Estratégia Operacional
        </p>
        <p style={{
          fontSize: '1.2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
          lineHeight: '1.7',
          color: '#E8E8E8'
        }}>
          Para pessoas físicas, MEI e pequenas empresas que querem organizar as finanças e crescer com decisões baseadas em dados.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#servicos" style={{
            background: '#D4AF37',
            color: '#0F1419',
            padding: '1rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem'
          }}>Explorar Serviços</a>
          <a href="#contato" style={{
            background: 'transparent',
            color: '#FFFFFF',
            padding: '1rem 2rem',
            borderRadius: '4px',
            textDecoration: 'none',
            border: '2px solid #D4AF37',
            fontWeight: '600',
            fontSize: '1rem'
          }}>Falar com Time</a>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" style={{ padding: '5rem 2rem', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '0.75rem',
            color: '#0F1419'
          }}>Nossos Serviços</h2>
          <p style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '1rem',
            marginBottom: '4rem'
          }}>Escolha o serviço ideal para o seu momento</p>

          {serviceCategories.map((cat, catIdx) => (
            <div key={catIdx} style={{ marginBottom: '4rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.75rem',
                paddingBottom: '0.75rem',
                borderBottom: '2px solid #D4AF37'
              }}>
                <span style={{ fontSize: '1.75rem' }}>{cat.icon}</span>
                <h3 style={{
                  fontSize: '1.35rem',
                  fontWeight: '700',
                  color: '#0F1419',
                  margin: 0
                }}>{cat.category}</h3>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '1.5rem'
              }}>
                {cat.services.map((service, sIdx) => (
                  <div key={sIdx} style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    padding: '1.75rem',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
                    border: '1px solid #E8E8E8',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(212,175,55,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
                  }}
                  >
                    <div>
                      <h4 style={{
                        fontSize: '1.05rem',
                        fontWeight: '700',
                        color: '#0F1419',
                        marginBottom: '0.75rem',
                        lineHeight: '1.4'
                      }}>{service.name}</h4>
                      <p style={{
                        fontSize: '0.88rem',
                        color: '#666',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem'
                      }}>{service.description}</p>
                    </div>

                    <div>
                      <div style={{
                        background: '#F8FAFC',
                        borderRadius: '8px',
                        padding: '0.75rem 1rem',
                        marginBottom: '1rem',
                        textAlign: 'center'
                      }}>
                        <span style={{
                          fontSize: '1.25rem',
                          fontWeight: '800',
                          color: '#D4AF37',
                          letterSpacing: '-0.5px'
                        }}>{service.price}</span>
                      </div>
                      <a
                        href="#contato"
                        style={{
                          display: 'block',
                          textAlign: 'center',
                          background: '#0F1419',
                          color: '#D4AF37',
                          padding: '0.65rem 1rem',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          fontSize: '0.9rem',
                          transition: 'background 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#D4AF37'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#0F1419'}
                      >
                        Solicitar serviço
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" style={{
        padding: '5rem 2rem',
        background: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: '#0F1419'
          }}>Sobre a Dalumia</h2>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: '1.8',
            color: '#555',
            marginBottom: '2.5rem',
            maxWidth: '700px'
          }}>
            Nascemos da convicção de que toda empresa merece acesso a decisões inteligentes baseadas em dados. Combinamos formação contábil, MBA em Data Science & Analytics e vivência profunda com empreendedores de verdade para entregar consultoria financeira que é acessível, clara e eficaz.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem'
          }}>
            <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>🎓 Formação</h3>
              <p style={{ fontSize: '0.93rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                Administração · MBA em Data Science & Analytics · cursando Contabilidade. Visão integrada de negócio, dados e finanças.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>💼 Experiência</h3>
              <p style={{ fontSize: '0.93rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                Profissional em análise de dados e consultoria financeira com 3+ anos de experiência prática. Histórico em projetos de BI e análise financeira, combinado com atendimento direto a microempreendedores na formalização, gestão tributária e planejamento. Vivência com a realidade operacional: desde constituição até estratégia fiscal com fluxo de caixa restrito.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>✨ Diferenciais</h3>
              <p style={{ fontSize: '0.93rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                Combinação rara de dados + contabilidade + negócio. Ferramentas acessíveis (Excel, Python, Power BI) sem complexidade desnecessária. Suporte real pós-projeto.
              </p>
            </div>
            <div style={{ padding: '1.5rem', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid #D4AF37' }}>
              <h3 style={{ color: '#D4AF37', fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>📍 Atendimento</h3>
              <p style={{ fontSize: '0.93rem', lineHeight: '1.7', color: '#555', margin: 0 }}>
                <strong>Presencial em São Paulo · Online para todo o Brasil.</strong> Atendimento por Google Meet, Zoom ou Microsoft Teams, com flexibilidade de horário para se adaptar ao seu negócio.
              </p>
            </div>
          </div>

          <div style={{
            background: '#D4AF37',
            color: '#0F1419',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.1rem', margin: '0 0 1rem 0', fontWeight: '500' }}>
              Pronto para crescer com quem entende de negócio e de dados?
            </p>
            <a href="#contato" style={{
              background: '#0F1419',
              color: '#D4AF37',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '600',
              display: 'inline-block'
            }}>Agende uma Conversa</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{
        padding: '5rem 2rem',
        background: '#F8FAFC'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#0F1419'
          }}>Perguntas Frequentes</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{
                background: '#FFFFFF',
                borderRadius: '8px',
                border: '1px solid #E0E0E0',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => toggleFAQ(idx)}
                  style={{
                    width: '100%',
                    padding: '1.5rem',
                    border: 'none',
                    background: '#FFFFFF',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0F1419',
                    textAlign: 'left'
                  }}
                >
                  {item.q}
                  <ChevronDown
                    size={20}
                    style={{
                      transition: 'transform 0.3s',
                      transform: expandedFAQ === idx ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                  />
                </button>
                {expandedFAQ === idx && (
                  <div style={{
                    padding: '0 1.5rem 1.5rem',
                    borderTop: '1px solid #E0E0E0',
                    color: '#555',
                    lineHeight: '1.6',
                    fontSize: '0.95rem'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section id="blog" style={{
        padding: '5rem 2rem',
        background: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '0.75rem',
            color: '#0F1419'
          }}>Blog & Conteúdo</h2>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: '3rem' }}>
            Dicas práticas de finanças para quem tem um negócio ou quer organizar a vida financeira.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {blogPosts.map((post, idx) => (
              <div key={idx} style={{
                padding: '1.5rem',
                background: '#F8FAFC',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                border: '1px solid #E0E0E0'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <p style={{
                  fontSize: '0.85rem',
                  color: '#D4AF37',
                  fontWeight: '600',
                  margin: '0 0 0.5rem 0'
                }}>{post.date}</p>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#0F1419'
                }}>{post.title}</h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#666',
                  margin: 0,
                  lineHeight: '1.5'
                }}>{post.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" style={{
        padding: '5rem 2rem',
        background: '#0F1419',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>Vamos Conversar</h2>
          <p style={{
            fontSize: '1.1rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#E8E8E8'
          }}>
            Envie uma mensagem e entraremos em contato em até 24h
          </p>

          <form onSubmit={handleContactSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <input
              type="text"
              name="name"
              placeholder="Seu Nome"
              value={contactForm.name}
              onChange={handleContactChange}
              required
              style={{
                padding: '1rem',
                borderRadius: '4px',
                border: '1px solid #D4AF37',
                background: '#1a1f2e',
                color: '#FFFFFF',
                fontSize: '1rem'
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Seu Email"
              value={contactForm.email}
              onChange={handleContactChange}
              required
              style={{
                padding: '1rem',
                borderRadius: '4px',
                border: '1px solid #D4AF37',
                background: '#1a1f2e',
                color: '#FFFFFF',
                fontSize: '1rem'
              }}
            />
            <textarea
              name="message"
              placeholder="Sua Mensagem"
              value={contactForm.message}
              onChange={handleContactChange}
              required
              rows="5"
              style={{
                padding: '1rem',
                borderRadius: '4px',
                border: '1px solid #D4AF37',
                background: '#1a1f2e',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontFamily: 'inherit'
              }}
            ></textarea>
            <button
              type="submit"
              style={{
                padding: '1rem',
                background: '#D4AF37',
                color: '#0F1419',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Enviar Mensagem
            </button>
          </form>

          <div style={{
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid #D4AF37',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div>
              <Mail size={28} style={{ marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#E8E8E8', margin: 0 }}>
                contato@dalumia.com.br
              </p>
            </div>
            <div>
              <MapPin size={28} style={{ marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#E8E8E8', margin: 0 }}>
                São Paulo, SP
              </p>
            </div>
            <div>
              <Phone size={28} style={{ marginBottom: '0.5rem' }} />
              <p style={{ fontSize: '0.9rem', color: '#E8E8E8', margin: 0 }}>
                +55 (11) 99XXX-XXXX
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#0A0D12',
        color: '#FFFFFF',
        textAlign: 'center',
        padding: '2rem',
        fontSize: '0.85rem'
      }}>
        <p style={{ margin: '0.5rem 0' }}>
          © 2026 Dalumia Consultoria. Todos os direitos reservados.
        </p>
        <p style={{ margin: '0.5rem 0', color: '#D4AF37' }}>
          Consultoria Financeira & Estratégia Operacional
        </p>
      </footer>
    </div>
  );
}
