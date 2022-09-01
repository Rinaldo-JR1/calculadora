let div = document.getElementById('tela');
let valorNaMemoria = 0.0;
let valorNatela = parseFloat(document.getElementById('tela').innerText);
let verifica = false;
let utimoOperador = '';
let valorComVirgula = '';
function verificador(valorRec) {
    valorNaMemoria = 0.0;
    div.innerHTML = '0';
    verifica = false;
}
function receberNumero(valor, virgula) {
    if (virgula === true) {
        valorComVirgula = valorNatela.toString() + '.'
    } else {
        let msg;
        if (verifica === true) {
            verificador(valor);
        } else {
            if (valorComVirgula != '') {
                valorNatela = parseFloat(valorComVirgula + valor)
                valorComVirgula = '';
                div.innerHTML = valorNatela;
            } else {
                valorNatela = parseFloat(document.getElementById('tela').innerText);
                if (valorNatela === 0) {
                    valorNatela = valor;
                    msg = valor.toString();
                    div.innerHTML = msg
                } else {
                    msg = valorNatela.toString() + valor.toString()
                    valorNatela = parseFloat(valorNatela.toString() + valor.toString());
                    div.innerHTML = msg;
                }
            }
        }
    }
}
function adicionarVirgula() {
    teste = valorNatela.toString() + '.0';
    valorNatela = teste
    div.innerHTML = valorNatela;
}
function operacao(operador) {
    valorNatela = parseFloat(valorNatela);
    if (operador === '+') {
        if (valorNaMemoria === 0.0) {
            valorNaMemoria = valorNatela;
            div.innerHTML = '0'
        } else {
            valorNaMemoria = valorNaMemoria + valorNatela;
            div.innerHTML = '0'
        }
        utimoOperador = '+'
    }
    if (operador === '-') {
        if (valorNaMemoria === 0.0) {
            valorNaMemoria = valorNatela
            div.innerHTML = '0'
        } else {
            valorNaMemoria = valorNaMemoria - valorNatela;
            div.innerHTML = '0'
        }
        utimoOperador = '-';
    } if (operador === '*') {
        if (valorNaMemoria === 0.0) {
            valorNaMemoria = valorNatela
            div.innerHTML = '0'
        } else {
            valorNaMemoria = valorNaMemoria * valorNatela;
            div.innerHTML = '0'
        }
        utimoOperador = '*';
    } if (operador === '/') {
        if (valorNaMemoria === 0.0) {
            valorNaMemoria = valorNatela
            div.innerHTML = '0'
        } else {
            valorNaMemoria = valorNaMemoria / valorNatela;
            div.innerHTML = '0'
        }
        utimoOperador = '/';
    }
    if (operador === '=') {
        if (utimoOperador === '+') {
            valorNaMemoria = valorNaMemoria + valorNatela;
            div.innerHTML = valorNaMemoria;
            verifica = true;
        } if (utimoOperador === '-') {
            valorNaMemoria = valorNaMemoria - valorNatela;
            div.innerHTML = valorNaMemoria;
            verifica = true;
        } if (utimoOperador === '*') {
            valorNaMemoria = valorNaMemoria * valorNatela;
            div.innerHTML = valorNaMemoria;
            verifica = true;
        }
        if (utimoOperador === '/') {
            valorNaMemoria = valorNaMemoria / valorNatela;
            div.innerHTML = valorNaMemoria;
            verifica = true;
        }
    }
}
function ac() {
    valorNatela = 0;
    valorNaMemoria = 0
    valorComVirgula = '';
    div.innerHTML = 0;
    verifica = false;
}