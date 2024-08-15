import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    constructor( cliente, agencia ) {
        super( 0, cliente, agencia );
        ContaCorrente.numeroDeContas += 1;
    }

    sacar( valor ) {
        let taxa = 1.1;
        return this._sacar( valor, taxa );
        // return super._sacar( valor, taxa ); daria no mesmo resultado do código de cima
    }
}
