/*
 * Autor: Roberto Alves.
 * Email: roberto@conenge-sc.com.br
 */
function displayFields(form,customHTML){
	var defaultSelecione = "Selecione";
	
	/* Carrega o nome do usuario logado e grupo */
	var usuarioId = getValue("WKUser");
	var const1 = DatasetFactory.createConstraint("colleaguePK.colleagueId", usuarioId, usuarioId, ConstraintType.MUST);
	var datasetAttachment = DatasetFactory.getDataset("colleague", null, [ const1 ], null);
	var datasetAttachment2 = datasetAttachment;
	var usuario = datasetAttachment.getValue(0, "colleagueName");
	
	// Início Carrega cabeçalho com informações:

	//Número da atividade.
	var codEstado = getValue("WKNumState");

	//Versão do processo.
	var versaoProcesso = getValue("WKVersDef");

	//Número da solicitação de processo.
	var numSolicitacaoProcesso = getValue("WKNumProces");

	form.setValue("cod_estado", codEstado);
	form.setValue("versao_processo", versaoProcesso);
	form.setValue("num_solicitacao", numSolicitacaoProcesso);
	form.setValue("num_id", datasetDs_frm_nao_conformidade);
	//passa o valor de nome e usuário logado para o input
	form.setValue("nome_usuario_logado", usuario);
	//form.setValue("grupo_usuario_logado", grupo);

	//Atribui valor do ID do registro
	form.setValue("codigo_registro_form", form.getDocumentId());
	

	//Atribui valor a data de criação do registro do form
	if (form.getFormMode() == "ADD") {
		// Adiciona um dado adicional ao usuário informando a sua data de criação
		var dataAtual = new Date();
		var dateFormat = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
		form.setValue("dt_criacao_form", dateFormat.format(dataAtual));
	}
	

	var atividadeDoProcesso = form.getValue("cod_estado");
	
	
	//Oculta botões das tabelas pai x filho
	customHTML.append("<script>");
	customHTML.append("$(document).ready(function(){ "); 
	if (codEstado != 15) {
	    customHTML.append(" $('#btn_causas_poten').hide();");
	    
	}
	if (codEstado != 19) {
	    customHTML.append(" $('#btn_plano_acao').hide();");
	    
	}
	customHTML.append(" });");
	customHTML.append("</script>");
	//percorre a coluna id no dataset para mostrar o id da solicitação
	var constraintDs_frm_nao_conformidade1 = DatasetFactory.createConstraint('sqlLimit', '100', '100', ConstraintType.MUST);
	var colunasDs_frm_nao_conformidade = new Array('id');
	var datasetDs_frm_nao_conformidade = DatasetFactory.getDataset('ds_frm_nao_conformidade', colunasDs_frm_nao_conformidade, new Array(constraintDs_frm_nao_conformidade1), ['id']);
	for(var i = 0; i < datasetDs_frm_nao_conformidade.rowsCount; i++){
		form.setValue("num_id", datasetDs_frm_nao_conformidade.getValue(i, "id"));
		
	}
	
}