# 🎨 Guia Rápido de Personalização

## Como Personalizar o Website da Brilhos Car

Este guia mostra como fazer as personalizações mais comuns no website.

---

## 📞 1. Atualizar Informações de Contato

### WhatsApp

Abra `src/App.jsx` e procure por `wa.me`:

```jsx
// Linha ~280 e ~490
<a 
  href="https://wa.me/5511999999999"  // ← Altere aqui
  target="_blank"
  rel="noopener noreferrer"
>
```

**Formato**: `5511999999999` (código do país + DDD + número)

### Telefone

Procure por `tel:`:

```jsx
// Linha ~500
<a href="tel:+5511999999999">  // ← Altere aqui
  <Phone className="w-6 h-6" />
  <div>
    <h3>Telefone</h3>
    <p>(11) 99999-9999</p>  // ← Altere aqui também
  </div>
</a>
```

### Endereço/Localização

Procure por "Localização":

```jsx
// Linha ~510
<div>
  <h3>Localização</h3>
  <p>Visite nossa oficina</p>  // ← Adicione o endereço aqui
</div>
```

---

## 🖼️ 2. Adicionar Mais Fotos Antes/Depois

### Passo 1: Adicionar as Imagens

Coloque as novas fotos em `public/assets/`:
- Foto "antes": `antes-5.jpg`
- Foto "depois": `depois-5.jpg`

### Passo 2: Adicionar no Código

Em `src/App.jsx`, procure pela seção "Antes e Depois" (linha ~340) e adicione:

```jsx
<div className="bg-white rounded-2xl shadow-xl overflow-hidden">
  <BeforeAfterSlider
    beforeImage="/assets/antes-5.jpg"
    afterImage="/assets/depois-5.jpg"
  />
  <div className="p-6">
    <h3 className="text-xl font-bold text-slate-800 mb-2">
      Título do Serviço
    </h3>
    <p className="text-slate-600">
      Descrição do trabalho realizado
    </p>
  </div>
</div>
```

---

## 🎨 3. Mudar as Cores do Site

### Método 1: Cores Principais (Recomendado)

Abra `src/App.css` e altere as variáveis:

```css
:root {
  --color-primary: #2563eb;    /* Azul principal */
  --color-secondary: #dc2626;  /* Vermelho destaque */
}
```

**Sugestões de cores:**
- Azul escuro: `#1e40af`
- Verde: `#059669`
- Laranja: `#ea580c`
- Roxo: `#7c3aed`

### Método 2: Cores Específicas

Procure no `src/App.jsx` por classes do Tailwind:

- `bg-blue-600` → Fundo azul
- `text-blue-600` → Texto azul
- `from-blue-600 to-red-600` → Gradiente

Substitua por outras cores do Tailwind:
- `blue` → `green`, `purple`, `orange`, `indigo`
- `red` → `orange`, `pink`, `rose`

---

## ✏️ 4. Editar Textos

### Título Principal (Hero)

```jsx
// Linha ~90
<h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
  Transformamos
  <span className="gradient-text block">Seu Veículo</span>
</h1>
```

### Subtítulo

```jsx
// Linha ~95
<p className="text-xl md:text-2xl text-slate-600 mb-12">
  Especialistas em funilaria, pintura e restauração...
</p>
```

### Sobre a Empresa

Procure por "Sobre a Brilhos Car" (linha ~380):

```jsx
<p className="text-lg text-slate-600 leading-relaxed mb-6">
  Somos especialistas em funilaria e pintura...
</p>
```

---

## 🔧 5. Adicionar/Remover Serviços

Procure pela seção "Nossos Serviços" (linha ~180):

```jsx
<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
    <Wrench className="w-8 h-8 text-blue-600" />
  </div>
  <h3 className="text-2xl font-bold text-slate-800 mb-4">
    Nome do Serviço
  </h3>
  <p className="text-slate-600">
    Descrição do serviço oferecido.
  </p>
</div>
```

**Ícones disponíveis** (importe do Lucide React):
- `Wrench` - Chave inglesa
- `Car` - Carro
- `Sparkles` - Brilho
- `Shield` - Escudo
- `Award` - Prêmio
- `CheckCircle` - Check

---

## 📱 6. Adicionar Redes Sociais

No rodapé (linha ~520), adicione:

```jsx
<div className="flex gap-4 mt-6">
  <a 
    href="https://instagram.com/brilhoscar" 
    target="_blank"
    className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <Instagram className="w-6 h-6" />
  </a>
  <a 
    href="https://facebook.com/brilhoscar" 
    target="_blank"
    className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
  >
    <Facebook className="w-6 h-6" />
  </a>
</div>
```

**Não esqueça de importar os ícones:**

```jsx
import { Instagram, Facebook } from 'lucide-react';
```

---

## 🖼️ 7. Trocar o Logo

### Opção 1: Usar Imagem

1. Adicione o logo em `public/assets/logo.png`
2. Em `src/App.jsx` (linha ~75), substitua:

```jsx
<img src="/assets/logo.png" alt="Brilhos Car" className="h-12" />
```

### Opção 2: Manter Ícone

O logo atual usa o ícone `Sparkles` do Lucide React. Para mudar:

```jsx
<Sparkles className="w-8 h-8" />  // ← Troque por outro ícone
```

---

## 🚀 8. Testar as Mudanças

Após fazer alterações:

```bash
# Parar o servidor (Ctrl+C)
# Iniciar novamente
pnpm run dev
```

Acesse `http://localhost:5173` para ver as mudanças.

---

## ⚠️ Dicas Importantes

1. **Sempre faça backup** antes de editar
2. **Teste localmente** antes de fazer deploy
3. **Use Ctrl+F** para encontrar textos rapidamente
4. **Mantenha a formatação** do código
5. **Não delete** as importações no topo do arquivo

---

## 🆘 Problemas Comuns

### Site não carrega após mudanças

```bash
# Limpar cache e reinstalar
rm -rf node_modules dist
pnpm install
pnpm run dev
```

### Imagens não aparecem

- Verifique se estão em `public/assets/`
- Use caminho com `/` no início: `/assets/foto.jpg`
- Verifique se o nome está correto (case-sensitive)

### Erro de sintaxe

- Verifique se fechou todas as tags `</div>`
- Verifique se fechou todas as chaves `{}`
- Verifique se tem vírgulas entre propriedades

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas:
1. Leia a documentação completa em `DOCUMENTACAO.md`
2. Consulte a documentação do React: https://react.dev
3. Entre em contato com o desenvolvedor

---

**Boa personalização! 🎨**
