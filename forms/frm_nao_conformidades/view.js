/*
 * Este script tem como objetivo mostrar ou ocultar campos de acordo com o comportamento.
 * Autor: Roberto Alves.
 * Email: roberto@conenge-sc.com.br
 */
var defaultSelecione = "Selecione";
function comportamentoVisibilidade() {

	//chamada dos metodos para controle de visualização de campos
	comportamentoRespAbertNC();
	comportamentoAcaoImediata();
	comportamentoAlteraDocs();
	//chamada do metodo para remover espaços em branco
	removeEspacosBrancos();
	//chamada do metodo para padronizar fonte das labels
	padronizaFonte();	
	
}

//Inicio Metodos para controle de visualização de campos
function comportamentoRespAbertNC() {
	if (document.getElementById('select_resp_aber_nao_conf').value == "outro") {
		document.getElementById('div_outro_resp_aber_nao_conf').style.display = "inline";
	} else {
		document.getElementById('div_outro_resp_aber_nao_conf').style.display = "none";
	}
}
function comportamentoAcaoImediata() {
	if (document.getElementById('select_acao_imediata').value != "Selecione") {
		if (document.getElementById('select_acao_imediata').value == "sim") {
			document.getElementById('div_resp_acao_imed').style.display = "inline";
			document.getElementById('div_analise_cont_corr').style.display = "inline";
		} else {
			document.getElementById('div_resp_acao_imed').style.display = "none";
			document.getElementById('div_analise_cont_corr').style.display = "none";
		}
	}
}
function comportamentoAlteraDocs() {
	if (document.getElementById('select_doc_altera').value != defaultSelecione) {
		if (document.getElementById('select_doc_altera').value == "sim") {
			document.getElementById('div_altera_documento').style.display = "inline";
		} else {
			document.getElementById('div_altera_documento').style.display = "none";
		}
	}

}
//Fim Metodos para controle de visualização de campos

//Metodo para remover espaços em branco
function removeEspacosBrancos() {
	var allInputs = $(":input");
	allInputs.each(function() {
		$(this).val($.trim($(this).val()));
	});
}

//Metodo para padronizar fonte das labels
function padronizaFonte() {
	$(function() {
		$('label').css('font-size', '12px');
	});
}

//Metodo para bloquear lixeiras
function bloqueiaBotaoRemove(listaAtividades){
	
	if(document.getElementsByTagName('i').length != 0){
		for(i = 0; i <= document.getElementsByTagName('i').length; i ++){
			for(j = 0; j <= listaAtividades.length ; j++){
				
				if(document.getElementById('cod_estado').value == listaAtividades[j] 
				|| document.getElementById('_cod_estado').value == listaAtividades[j]){
					//Torna invisível botão excluir tabela
					for(k = 0; k <= 100; k++){
						if(document.getElementsByTagName('i')[k] != null){
							document.getElementsByTagName('i')[k].style.visibility = 'hidden';
						}
					}
					
				}
				
			}
				
		}
		
	}
}
