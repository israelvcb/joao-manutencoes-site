import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{display:'grid', gap: 24}}>
      <section className="card" style={{textAlign:'center'}}>
        <h1 style={{fontSize: 36, marginTop: 0}}>Assistência técnica em TI com atendimento ágil</h1>
        <p className="muted">Reparação e manutenção de computadores e periféricos. Formatação, upgrades, troca de peças, limpeza, diagnóstico e suporte local ou remoto.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', marginTop: 8}}>
          <a className="btn" href="https://wa.me/5537991145441" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          <Link className="btn" href="#servicos">Ver serviços</Link>
        </div>
      </section>

      <section id="servicos" className="grid">
        {[
          {t:"Manutenção de computadores", d:"Diagnóstico, troca de peças, limpeza interna e preventiva."},
          {t:"Formatação & Otimização", d:"Backup, reinstalação do sistema e ajustes de desempenho."},
          {t:"Upgrades", d:"SSD, memória, placas e periféricos para mais velocidade."},
          {t:"Periféricos", d:"Configuração e reparos em impressoras, teclados, monitores e mais."},
          {t:"Suporte remoto", d:"Atendimento rápido para problemas de software e configuração."},
          {t:"Redes & Wi‑Fi", d:"Ajustes de conectividade, roteadores e segurança básica."},
        ].map((s, i) => (
          <div key={i} className="card">
            <h3 style={{marginTop:0}}>{s.t}</h3>
            <p className="muted">{s.d}</p>
          </div>
        ))}
      </section>

      <section id="contato" className="card">
        <h2 style={{marginTop:0}}>Contato</h2>
        <p className="muted">Preferimos WhatsApp pela agilidade, mas também respondemos por e-mail.</p>
        <ul>
          <li>WhatsApp: <a href="https://wa.me/5537991145441" target="_blank" rel="noreferrer">+55 37 991145441</a></li>
          <li>E-mail: <a href="mailto:tr242bot@gmail.com">tr242bot@gmail.com</a></li>
        </ul>
        <p style={{marginTop:16}}>
          Consulte as nossas páginas legais:{" "}
          <Link href="/legal/privacy-policy">Privacidade</Link>,{" "}
          <Link href="/legal/terms-of-service">Termos</Link> e{" "}
          <Link href="/legal/data-deletion">Exclusão de Dados</Link>.
        </p>
      </section>
    </div>
  );
}
