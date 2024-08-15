/* 
    Ser autenticavel significa ter o método "autenticar()".
    Duck type - Em sentido literal quer dizer que é do tipo pato e em significado se refere que se anda com um pato, se ele faz "quac-quac" então ele deve ser um pato, ou seja, se tem uma determinada propriedade que precisa, uma determinada característica que precisa já é o suficiente independente do tipo.
*/
export class SistemaAutenticacao {
    static login( autenticavel, senha ){
        if (SistemaAutenticacao.ehAutenticavel( autenticavel )) {
            return autenticavel.autenticar( senha );
        }

        return false;
    }

    static ehAutenticavel( autenticavel ) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    };
}