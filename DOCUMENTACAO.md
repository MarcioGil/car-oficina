# 🚗 Brilhos Car - Website Profissional

## Sobre o Projeto

Website profissional desenvolvido para a **Brilhos Car**, oficina mecânica especializada em funilaria, pintura e restauração automotiva. O site foi criado com tecnologias modernas e design premium para destacar a qualidade dos serviços oferecidos.

---

## ✨ Diferenciais do Website

### 1. **Galeria Interativa Antes/Depois** ⭐
- Slider de comparação interativo (arraste para ver a transformação)
- 4 casos reais de restauração
- Labels destacados "ANTES" e "DEPOIS"
- Descrições detalhadas de cada serviço

### 2. **Design Moderno e Profissional**
- Gradientes elegantes (azul → vermelho)
- Tipografia premium (Poppins + Inter)
- Animações suaves com Framer Motion
- Layout responsivo (mobile-first)

### 3. **Funcionalidades Avançadas**
- Navegação fixa no topo
- Scroll suave entre seções
- Botão flutuante de WhatsApp
- Ícones profissionais (Lucide React)
- Efeitos hover e transições

### 4. **Seções Completas**
- **Hero**: Apresentação impactante com CTAs
- **Diferenciais**: Qualidade, experiência, rapidez e transparência
- **Serviços**: Funilaria, restauração, polimento e reparos
- **Galeria**: Antes/depois interativo
- **Sobre**: História e valores da empresa
- **Contato**: WhatsApp, telefone e localização

---

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool moderna
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animações suaves
- **Lucide React** - Ícones profissionais
- **react-compare-slider** - Slider de comparação antes/depois

---

## 📁 Estrutura do Projeto

```
brilhos-car-website/
├── public/
│   └── assets/          # Imagens dos trabalhos
├── src/
│   ├── components/
│   │   └── BeforeAfterSlider.jsx  # Componente de comparação
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos globais
│   └── main.jsx         # Entry point
├── dist/                # Build de produção
└── package.json         # Dependências
```

---

## 🚀 Como Usar

### Desenvolvimento Local

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev

# Acessar em http://localhost:5173
```

### Build para Produção

```bash
# Gerar build otimizado
pnpm run build

# Testar build localmente
pnpm run preview
```

---

## 🎨 Paleta de Cores

- **Azul Principal**: `#2563eb` (Blue 600)
- **Vermelho Destaque**: `#dc2626` (Red 600)
- **Gradiente Hero**: Azul → Vermelho
- **Texto Escuro**: `#1e293b` (Slate 800)
- **Texto Claro**: `#64748b` (Slate 500)

---

## 📱 Responsividade

O website foi desenvolvido com abordagem **mobile-first** e é totalmente responsivo:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 🔧 Personalizações Possíveis

### Atualizar Informações de Contato

Edite o arquivo `src/App.jsx` e procure pela seção de contato:

```jsx
// WhatsApp
<a href="https://wa.me/5500000000000" ...>

// Telefone
<a href="tel:+5500000000000" ...>
```

### Adicionar Mais Casos Antes/Depois

1. Adicione as imagens em `public/assets/`
2. Edite `src/App.jsx` na seção "Antes e Depois"
3. Adicione um novo `BeforeAfterSlider` com as imagens

### Alterar Cores

Edite o arquivo `src/App.css` e modifique as variáveis CSS:

```css
:root {
  --color-primary: #2563eb;
  --color-secondary: #dc2626;
}
```

---

## 📊 Performance

- **Build otimizado**: ~330 KB (JS) + ~95 KB (CSS)
- **Imagens otimizadas**: Todas as fotos foram incluídas
- **Lazy loading**: Imagens carregadas sob demanda
- **Code splitting**: Divisão automática do código

---

## 🌐 Deploy

O website está pronto para deploy em:
- ✅ **Vercel** (recomendado)
- Netlify
- GitHub Pages
- Qualquer serviço de hospedagem estática

### Deploy na Vercel

1. Conecte o repositório Git
2. Configure o build command: `pnpm run build`
3. Configure o output directory: `dist`
4. Publique!

---

## 📞 Suporte

Para dúvidas ou suporte sobre o website:
- Entre em contato com o desenvolvedor
- Consulte a documentação do React: https://react.dev
- Consulte a documentação do Tailwind: https://tailwindcss.com

---

## 📝 Licença

Este projeto foi desenvolvido exclusivamente para a **Brilhos Car**.

---

## 🎯 Próximos Passos Sugeridos

1. ✅ Adicionar informações reais de contato (WhatsApp, telefone, endereço)
2. ✅ Conectar Google Analytics para métricas
3. ✅ Adicionar formulário de orçamento
4. ✅ Integrar com Google Maps para localização
5. ✅ Adicionar depoimentos de clientes
6. ✅ Criar blog de dicas automotivas
7. ✅ Adicionar galeria de vídeos
8. ✅ Implementar sistema de agendamento online

---

**Desenvolvido com ❤️ para a Brilhos Car**
