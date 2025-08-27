export const metadata = {
  title: "Política de Exclusão de Dados — João Manutenções",
  robots: "index,follow",
};

export default function DataDeletion() {
  return (
    <article className="legal">
      <div className="breadcrumbs">/legal/data-deletion</div>
      <h1>Política de Exclusão de Dados</h1>
      <p>Última atualização: 27 de agosto de 2025</p>

      <h2>1. Solicitação de exclusão</h2>
      <p>
        Você pode solicitar exclusão dos seus dados a qualquer momento por e-mail
        <a href="mailto:tr242bot@gmail.com"> tr242bot@gmail.com</a> ou WhatsApp
        <a href="https://wa.me/5537991145441" target="_blank" rel="noreferrer"> +55 37 991145441</a>.
      </p>

      <h2>2. O que será excluído</h2>
      <ul>
        <li>Registros de contato, orçamentos e histórico de atendimento, quando não houver obrigação legal de retenção.</li>
        <li>Logs técnicos associados à sua interação, quando não mais necessários.</li>
      </ul>

      <h2>3. Prazos</h2>
      <p>
        Processaremos pedidos válidos em até 15 dias, salvo prazos legais distintos. Confirmaremos por mensagem
        quando concluído.
      </p>

      <h2>4. Exceções</h2>
      <p>
        Podemos reter dados estritamente necessários para cumprimento de obrigações legais, prevenção a fraudes e
        exercício regular de direitos. Dados em backups poderão ser eliminados no próximo ciclo de rotação.
      </p>

      <h2>5. Verificação de identidade</h2>
      <p>
        Para sua segurança, poderemos solicitar informações adicionais para confirmar a identidade do solicitante
        antes de executar a exclusão.
      </p>
    </article>
  );
}
