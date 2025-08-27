import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "João Manutenções",
  description: "Reparação e manutenção de computadores e periféricos (CNAE 9511-8/00).",
  metadataBase: new URL("https://example.com"), // ajuste quando publicar
};

function Header() {
  return (
    <header>
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <Link href="/"><h1 style={{margin:0}}>João Manutenções</h1></Link>
        <nav>
          <Link href="/#servicos">Serviços</Link>
          <Link href="/#contato">Contato</Link>
          <Link href="/legal/privacy-policy">Privacidade</Link>
          <Link href="/legal/terms-of-service">Termos</Link>
          <Link href="/legal/data-deletion">Exclusão de Dados</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="card">
          <div style={{display:'grid', gap: 8}}>
            <div className="muted">CNPJ: 62.422.733/0001-71 • CNAE 9511-8/00</div>
            <div className="muted">E-mail: <a href="mailto:tr242bot@gmail.com">tr242bot@gmail.com</a> • WhatsApp: <a href="https://wa.me/5537991145441" target="_blank">+55 37 991145441</a></div>
            <div className="muted">© {new Date().getFullYear()} João Manutenções. Todos os direitos reservados.</div>
            <div style={{display:'flex', gap:16, flexWrap:'wrap', marginTop:8}}>
              <Link href="/legal/privacy-policy">Política de Privacidade</Link>
              <Link href="/legal/terms-of-service">Termos de Serviço</Link>
              <Link href="/legal/data-deletion">Política de Exclusão de Dados</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
