import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

    public condicaoOrcamento = 'O prazo de validade é de até 10 dias da sua aprovação. Não sendo aprovado a SIM TV terá o prazo de 48 horas para remontar o aparelho, e 5 dias úteis para entregá-lo caso o mesmo tenha sido retirado';
    public condicaoGarantia = 'O prazo é de 90 dias, contados a partir da entrega do aparelho, A garantia perderá a validade: se houver violação do lacre colocado no produto por ocasião da entrega, utilização da rede elétrica imprópria, danos por acidentes ou agentes da natureza, manutenção inadequada por técnico não autorizado, ou não pagamento do conserto ou de parcela quando vendida á prazo.';
    public condicaoPrazoRetirada = 'Caso o aparelho não seja retirado por falta de fundos ou por ausência do cliente, dentro do prazo de 90 dias a partir de pronto, o valor do orçamento sofrerá acréscimo de 10% ao mês. A titulo de taxa de armazenamento (o mesmo se aplica também para o aparelho cujo orçamento não foi aprovado). ATENÇÃO: APÓS 90 DIAS TODO APARELHO NÃO RECLAMADO (PRONTO OU EM DEVOLUÇÃO SEM CONSERTO), SERÁ SUCATEADO';
    public condicaoPrazoEntrega = 'Não estipulamos prazo para entrega de aparelhos importados ou que usarem peças importadas';

    constructor() { }

    ngOnInit() {}

}
