/*
 * Este script tem como objetivo controlar o comportamento de alguns componentes do formulário.
 * Autor: Roberto Alves.
 * Email: roberto@conenge-sc.com.br
 */
//Metodos para controlar delet nas tabelas pai x filho

function deleteTabCausas(oElement){
	
	if(document.getElementById('_cod_estado').value == "15" || document.getElementById('cod_estado').value == "15" ) {
		// Chamada a funcao padrao
	    fnWdkRemoveChild(oElement);
	} 
		 
}

function deleteTabPlanoAcao(oElement){
	
	if(document.getElementById('_cod_estado').value == "19" || document.getElementById('cod_estado').value == "19" ) {
		// Chamada a funcao padrao
	    fnWdkRemoveChild(oElement);
	} 
		 
}
//Metodo para setar data mínima
function formataData(datetime) {
	
	var onlyDate1 = FLUIGC.calendar('#txt_prazo_acao_imed', {
		pickDate : true,
		pickTime : false,
		minDate : new Date
	})
	var index = 0;
	for (var i = 0; i < 21; i++){
		index ++;
		var onlyDate2 = FLUIGC.calendar('#dt_prazo_plan_acao___' + index, {
			pickDate : true,
			pickTime : false,
			minDate : new Date
		})
	}
}
//Metodo controle de campos Custo (R$)
function maskIt(w, e, m, r, a) {
	// Cancela se o evento for Backspace
	if (!e)
		var e = window.event
	if (e.keyCode)
		code = e.keyCode;
	else if (e.which)
		code = e.which;
	// Variáveis da função
	var txt = (!r) ? w.value.replace(/[^\d]+/gi, '') : w.value.replace(
			/[^\d]+/gi, '').reverse();
	var mask = (!r) ? m : m.reverse();
	var pre = (a) ? a.pre : "";
	var pos = (a) ? a.pos : "";
	var ret = "";
	if (code == 9 || code == 8
			|| txt.length == mask.replace(/[^#]+/g, '').length)
		return false;
	// Loop na máscara para aplicar os caracteres
	for (var x = 0, y = 0, z = mask.length; x < z && y < txt.length;) {
		if (mask.charAt(x) != '#') {
			ret += mask.charAt(x);
			x++;
		} else {
			ret += txt.charAt(y);
			y++;
			x++;
		}
	}
	// Retorno da função
	ret = (!r) ? ret : ret.reverse()
	w.value = pre + ret + pos;
}
// Novo método para o objeto 'String'
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};