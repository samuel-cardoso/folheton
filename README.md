# Folheton

Aplicação web em Next.js para publicação de **folhetos evangelísticos digitais**, desenvolvida para a Mocidade da Igreja Batista Bíblica Fundamentalista de Canoas.

Cada folheto é uma página própria com uma mensagem completa (texto, versículos e chamada para ação via WhatsApp), pensada para ser compartilhada como um link direto, substituindo o folheto de papel tradicional.

## Folhetos disponíveis

- **A Mudança Que Você Precisa** (`/a-mudanca-que-voce-precisa`) — mensagem evangelística sobre salvação, com convite para contato via WhatsApp e informações da igreja (endereço e horários de cultos).

## Tecnologias

- [Next.js 15](https://nextjs.org) (App Router)
- React 19
- TypeScript
- Tailwind CSS
- [shadcn/ui](https://ui.shadcn.com) + Radix UI (componentes `Avatar`, `Button`, `Card`)
- lucide-react (ícones)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

```
app/
  page.tsx                              # Página inicial
  (folhetos)/                           # Route group com os folhetos publicados
    a-mudanca-que-voce-precisa/page.tsx
components/
  brochure-change.tsx                   # Conteúdo do folheto "A Mudança Que Você Precisa"
  ui/                                   # Componentes shadcn/ui (avatar, button, card)
lib/utils.ts                            # Helpers (cn, etc.)
```

## Adicionando um novo folheto

1. Criar o componente do folheto em `components/`.
2. Criar uma rota em `app/(folhetos)/<slug>/page.tsx` renderizando o componente.

## Licença

Todos os direitos reservados. Veja [LICENSE](./LICENSE) — este projeto não pode ser usado, copiado, modificado ou redistribuído por terceiros sem autorização expressa do autor.
