// Classe abstrata
export class Conta {
    constructor( saldoInicial, cliente, agencia ) {
        if( this.constructor == Conta ) { // Quando o desenvolvedor der "new Conta" ele vai reconhecer que está se referenciando ao construtor Conta e vai lançar esse erro.
            throw new Error( "Você não deveria instanciar um objeto do tipo Conta diretamente." );
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    }

    set cliente( novoValor ) {
        if ( novoValor instanceof Cliente ) {
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar( valor ){
        let taxa = 1;
        return this._sacar(valor, taxa);
    }
    
    _sacar( valor, taxa ) {
        const valorSacado = taxa * valor;
        
        if ( this._saldo >= valor ) {
            this._saldo -= valor;
            return valorSacado;
        }

        return 0;
    }

    depositar( valor ){
        if ( valor <= 0 ) {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir( valor, conta ) {
        const valorSacado = this.sacar( valor );
        conta.depositar( valorSacado );
    }
}