var sensor_incendio_1_andar = false;
var sensor_incendio_2_andar = false;
var maquina_ligada = true;
var alimentacao_eletrica = true;
var alarme = false;

//o alarme deve ser acionado se nao houver alimentacao ou incendio em algum dos andares

maquina_ligada = !alimentacao_eletrica ? true : false;

alarme = sensor_incendio_1_andar || sensor_incendio_2_andar ? true : false;

alarme = alarme || maquina_ligada ? true : false

document.write(alarme);