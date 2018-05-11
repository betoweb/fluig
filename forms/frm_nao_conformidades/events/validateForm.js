/*
 * Autor: Roberto Alves.
 * Email: roberto@conenge-sc.com.br
 */
function validateForm(form){
	
	var defaultSelecione = "Selecione";
	
	// Validação da Abertura
	if(form.getValue("cod_estado") == 0 || form.getValue("cod_estado") == 5){
		if(form.getValue("select_tipo_nao_conf") == null || form.getValue("select_tipo_nao_conf") == defaultSelecione){
			log.warn("O campo Tipo da Não Conformidade localizado no menu " +
					"Cadastro não está preenchido!");
			throw "O campo Tipo da Não Conformidade localizado no menu " +
					"Cadastro é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
		if(form.getValue("select_origem_nao_conf") == null || form.getValue("select_origem_nao_conf") == defaultSelecione){
			log.warn("O campo Origem da Não Conformidade localizado no menu " +
					"Cadastro não está preenchido!");
			throw "O campo Origem da Não Conformidade localizado no menu " +
					"Cadastro é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
		if(form.getValue("obs_desc_nao_conf") == null || form.getValue("obs_desc_nao_conf").trim() == ""){
			log.warn("O campo Descrição da Não Conformidade localizado no menu " +
				"Cadastro não está preenchido!");
			throw "O campo Descrição da Não Conformidade localizado no menu " +
				"Cadastro é obrigatório e não foi preenchido, " +
				"favor inserir a descrição da Não Conformidade!";
		}
		if(form.getValue("select_resp_aber_nao_conf") == null || form.getValue("select_resp_aber_nao_conf") == defaultSelecione){
			log.warn("O campo Responsável pela Abertura da Não Conformidade localizado no menu " +
					"Cadastro não está preenchido!");
			throw "O campo Responsável pela Abertura da Não Conformidade localizado no menu " +
					"Cadastro é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
	}
	//Valida Informações da Ação
	if(form.getValue("cod_estado") == 6){
		if(form.getValue("txt_caminho_rede") == null || form.getValue("txt_caminho_rede").trim() == ""){
			log.warn("O campo Caminho na Rede para Evidências localizado no menu " +
					"Informações da Ação não está preenchido!");
			throw "O campo Caminho na Rede para Evidências localizado no menu " +
					"Informações da Ação é obrigatório e não foi selecionado, " +
					"favor inserir o caminho da pasta desta Não Conformidade!";
		}
		if(form.getValue("select_acao_imediata") == null || form.getValue("select_acao_imediata") == defaultSelecione){
			log.warn("O campo Ação Imediata Necessária localizado no menu " +
					"Informações da Ação não está preenchido!");
			throw "O campo Ação Imediata Necessária localizado no menu " +
					"Informações da Ação é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
		if(form.getValue("select_acao_imediata") == "sim"){
			if(form.getValue("txt_prazo_acao_imed") == null || form.getValue("txt_prazo_acao_imed").trim() == ""){
				log.warn("O campo Prazo da Ação localizado no menu " +
						"Informações da Ação não está preenchido!");
				throw "O campo Prazo da Ação localizado no menu " +
						"Informações da Ação é obrigatório e não foi selecionado, " +
						"favor selecionar uma opção!";
			}
			if(form.getValue("txt_custo_acao_imed") == null || form.getValue("txt_custo_acao_imed").trim() == ""){
				log.warn("O campo Custo da Ação localizado no menu " +
						"Informações da Ação não está preenchido!");
				throw "O campo Custo da Ação localizado no menu " +
						"Informações da Ação é obrigatório e não foi preenchido, " +
						"favor informar o custo!";
			}
		}	
	}
	//Valida Análise e Controle de Correção
	if(form.getValue("cod_estado") == 10){
		if(form.getValue("obs_acao_imediata") == null || form.getValue("obs_acao_imediata").trim() == ""){
			log.warn("O campo Ação Imediata localizado no menu " +
					"Análise e Controle de Correção não está preenchido!");
			throw "O campo Ação Imediata localizado no menu " +
					"Análise e Controle de Correção é obrigatório e não foi selecionado, " +
					"favor inserir informações da ação!";
		}
	}
	//Valida Análise Crítica
	if(form.getValue("cod_estado") == 12){
		if(form.getValue("obs_analise_crit_inic") == null || form.getValue("obs_analise_crit_inic").trim() == ""){
			log.warn("O campo Análise Crítica Inicial localizado no menu " +
					"Análise Crítica não está preenchido!");
			throw "O campo Análise Crítica Inicial localizado no menu " +
					"Análise Crítica é obrigatório e não foi selecionado, " +
					"favor inserir informações da análise!";
		}
	}
	//Valida Investigação das Causas
	if(form.getValue("cod_estado") == 15){
		
		var indexes = form.getChildrenIndexes("table_causas_poten");
		
		for (var i = 0; i < indexes.length; i++) {
			if(form.getValue("select_origem_causa_pot___" + indexes[i]) == null || form.getValue("select_origem_causa_pot____" + indexes[i]) == defaultSelecione){
				log.warn("Atenção, o campo Origem da Causa não foi selecionado!");
				throw "Atenção, o campo Origem da Causa não foi selecionado, " +
						"favor selecione uma opção!";
			}
			if(form.getValue("txt_desc_causa_pot___" + indexes[i]) == null || form.getValue("txt_desc_causa_pot___" + indexes[i]).trim() == ""){
				log.warn("Atenção, o campo Descrição da Causa não foi preenchido!");
				throw "Atenção, o campo Descrição da Causa não foi preenchido, " +
						"favor inserir informações da causa!";
			}
		}
	}
	//Valida Determinar Causa Raiz
	if(form.getValue("cod_estado") == 17){
		
		var indexes = form.getChildrenIndexes("table_causas_poten");
		
		for (var i = 0; i < indexes.length; i++) {
			if(form.getValue("select_tipo_causa_pot___" + indexes[i]) == null || form.getValue("select_tipo_causa_pot___" + indexes[i]) == defaultSelecione){
				log.warn("Atenção, o campo Tipo de Causa não foi selecionado!");
				throw "Atenção, o campo Tipo de Causa não foi selecionado, " +
						"favor selecione uma opção!";
			}
		}
	}
	//Valida Ação Corretiva
	if(form.getValue("cod_estado") == 19){
		
		var indexes = form.getChildrenIndexes("table_plano_acao");
		
		for (var i = 0; i < indexes.length; i++) {
			if(form.getValue("txt_acao_plan_acao___" + indexes[i]) == null || form.getValue("txt_acao_plan_acao___" + indexes[i]).trim() == ""){
				log.warn("Atenção, o campo Ação não foi preenchido!");
				throw "Atenção, o campo Ação não foi preenchido, " +
						"favor inserir informações da Ação!";
			}
			if(form.getValue("dt_prazo_plan_acao___" + indexes[i]) == null || form.getValue("dt_prazo_plan_acao___" + indexes[i]).trim() == ""){
				log.warn("Atenção, o campo Prazo não foi selecionado!");
				throw "Atenção, o campo Prazo não foi selecionado, " +
						"favor selecione uma opção!";
			}
			if(form.getValue("txt_custo_plan_acao___" + indexes[i]) == null || form.getValue("txt_custo_plan_acao___" + indexes[i]).trim() == ""){
				log.warn("Atenção, o campo Custo não foi preenchido!");
				throw "Atenção, o campo Custo não foi preenchido, " +
						"favor informar o Custo!";
			}
		}
	}
	//Valida Avaliação da Eficácia das Ações
	if(form.getValue("cod_estado") == 21){
		if(form.getValue("select_acao_eficaz") == null || form.getValue("select_acao_eficaz") == defaultSelecione){
			log.warn("O campo Ações Foram Eficazes localizado no menu " +
					"Avaliação da Eficácia das Ações não está preenchido!");
			throw "O campo Ações Foram Eficazes localizado no menu " +
					"Avaliação da Eficácia das Ações é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
	}
	//Valida Análise Crítica
	if(form.getValue("cod_estado") == 26){
		if(form.getValue("select_repete_prob") == null || form.getValue("select_repete_prob") == defaultSelecione){
			log.warn("O campo Problema se Repetiu localizado no menu " +
					"Análise Crítica não está preenchido!");
			throw "O campo Problema se Repetiu localizado no menu " +
					"Análise Crítica é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
		if(form.getValue("select_doc_altera") == null || form.getValue("select_doc_altera") == defaultSelecione){
			log.warn("O campo Necessário Alterar Documentos localizado no menu " +
					"Análise Crítica não está preenchido!");
			throw "O campo Necessário Alterar Documentos localizado no menu " +
					"Análise Crítica é obrigatório e não foi selecionado, " +
					"favor selecionar uma opção!";
		}
		if(form.getValue("select_doc_altera") == "sim"){
			if(form.getValue("obs_doc_altera") == null || form.getValue("obs_doc_altera").trim() == ""){
				log.warn("O campo Documentos a Serem Alterados localizado no menu " +
						"Análise Crítica não está preenchido!");
				throw "O campo Documentos a Serem Alterados localizado no menu " +
						"Análise Crítica é obrigatório e não foi preenchido, " +
						"favor informar quais documentos devem ser alterados!";
			}
		}
	}
	
}