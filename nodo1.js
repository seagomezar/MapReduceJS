


function miFuncioncita(datos) {
    var contadorsitoDeA = 0;
    var contadorsitoDeE = 0;
    for (let i = 0; i < datos.data.length; i++) {
        const element = datos.data[i];
        const nombreActual = element[11];
        if(nombreActual[0] == 'A') {
            contadorsitoDeA=contadorsitoDeA+1;
        } else if (nombreActual[0] == 'E') {
            contadorsitoDeE=contadorsitoDeE+1;
        }
    }
    self.postMessage({'nombresQueEmpiezanConA': contadorsitoDeA,
    'nombresQueEmpiezanConE':contadorsitoDeE});
}

self.addEventListener('message', miFuncioncita);