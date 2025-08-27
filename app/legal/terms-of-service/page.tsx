export const metadata = {
  title: "Termos de Serviço — João Manutenções",
  robots: "index,follow",
};

export default function TermsOfService() {
  return (
    <article className="legal">
      <div className="breadcrumbs">/legal/terms-of-service</div>
      <h1>Termos de Serviço</h1>
      <p>Última atualização: 27 de agosto de 2025</p>

      <h2>1. Objeto</h2>
      <p>
        Estes Termos regulam a prestação de serviços de reparação e manutenção de computadores e periféricos pela
        <strong> João Manutenções</strong> (CNPJ 62.422.733/0001-71).
      </p>

      <h2>2. Orçamentos e atendimento</h2>
      <ul>
        <li>Orçamentos poderão ser enviados por WhatsApp ou e-mail e têm validade de 7 dias, salvo indicação em contrário.</li>
        <li>Aprovado o orçamento, inicia-se o serviço conforme disponibilidade técnica e logística.</li>
        <li>Peças e componentes podem ter prazos e garantias do fabricante.</li>
      </ul>

      <h2>3. Garantia</h2>
      <ul>
        <li>Serviços possuem garantia de 90 dias contra defeitos de execução.</li>
        <li>A garantia não cobre mau uso, danos líquidos, quedas, surtos elétricos ou software licenciado pelo cliente.</li>
      </ul>

      <h2>4. Responsabilidades</h2>
      <ul>
        <li>O cliente é responsável por manter backups atualizados antes do envio do equipamento.</li>
        <li>Não nos responsabilizamos por perda de dados decorrente de falhas pré-existentes de hardware.</li>
        <li>Ao solicitar diagnóstico, o cliente autoriza testes que podem exigir desmontagem e reinstalações.</li>
      </ul>

      <h2>5. Comunicações</h2>
      <p>
        O cliente autoriza contatos por WhatsApp, e-mail e telefone sobre orçamentos, andamento do serviço e notificações
        essenciais, conforme <a href="/legal/privacy-policy">Política de Privacidade</a>.
      </p>

      <h2>6. Pagamentos</h2>
      <ul>
        <li>Formas de pagamento serão informadas no orçamento.</li>
        <li>Peças sob encomenda podem exigir sinal.</li>
      </ul>

      <h2>7. Lei aplicável e foro</h2>
      <p>
        Aplica-se a legislação brasileira. Fica eleito o foro do domicílio do consumidor, nos termos do CDC.
      </p>
    </article>
  );
}
