/*
 * Autor: Roberto Alves.
 * Email: roberto@conenge-sc.com.br
 */
function enableFields(form){
	var activity = getValue('WKNumState');
	//variaveis de indexes das tabelas
	var indexes_causas_poten = form.getChildrenIndexes("table_causas_poten");
	var indexes_acao_prev = form.getChildrenIndexes("table_plano_acao");
	
	//Desabilitando campos do cabeçalho
	form.setEnabled("nome_usuario_logado", false);
	form.setEnabled("num_id", false);
	form.setEnabled("dt_criacao_form", false);
	form.setEnabled("cod_estado", false);
	form.setEnabled("versao_processo", false);
	form.setEnabled("proxima_atividade_processo", false);
	form.setEnabled("codigo_registro_form", false);
	form.setEnabled("num_solicitacao", false);
	
	//Cadastro de NC
	if(activity == 5 || activity == 0 ){
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Informação da Ação
	if(activity == 6){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Análise de Controle e Correção
	if(activity == 10){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Análise Crítica Inicial
	if(activity == 12){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Investigação de Causas
	if(activity == 15){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Determinar Causa Raiz
	if(activity == 17){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Ações Corretivas
	if(activity == 19){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Avaliar Eficácia das Ações
	if(activity == 21){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
	//Análise Crítiva Final
	if(activity == 26){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
	}
	//Fim
	if(activity == 31){
		//Cadastro de NC
		form.setEnabled('select_tipo_nao_conf', false);
		form.setEnabled('select_origem_nao_conf', false);
		form.setEnabled('obs_desc_nao_conf', false);
		form.setEnabled('select_resp_aber_nao_conf', false);
		form.setEnabled('select_outro_resp_aber', false);
		//Informações da Ação
		form.setEnabled('txt_caminho_rede', false);
		form.setEnabled('select_acao_imediata', false);
		form.setEnabled('select_resp_acao_imed', false);
		form.setEnabled('txt_prazo_acao_imed', false);
		form.setEnabled('txt_custo_acao_imed', false);
		//Análise de Controle e Correção
		form.setEnabled('obs_acao_imediata', false);
		//Análise Crítica Inicial
		form.setEnabled('obs_analise_crit_inic', false);
		//Investigação de Causas
		for (var i = 0; i < indexes_causas_poten.length; i++) {
	        form.setEnabled("select_origem_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("txt_desc_causa_pot___" + indexes_causas_poten[i], false);
	        form.setEnabled("select_tipo_causa_pot___" + indexes_causas_poten[i], false);
	    }
		//Determinar Causa Raiz
		form.setEnabled('obs_causa_raiz', false);
		//Ações Corretivas
		for (var i = 0; i < indexes_acao_prev.length; i++) {
	        form.setEnabled("txt_acao_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("select_resp_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("dt_prazo_plan_acao___" + indexes_acao_prev[i], false);
	        form.setEnabled("txt_custo_plan_acao___" + indexes_acao_prev[i], false);
	    }
		//Avaliar Eficácia das Ações
		form.setEnabled('select_acao_eficaz', false);
		form.setEnabled('obs_avaliacao_acao', false);
		//Análise Crítiva Final
		form.setEnabled('select_repete_prob', false);
		form.setEnabled('obs_analise_critica', false);
		form.setEnabled('select_doc_altera', false);
		form.setEnabled('obs_doc_altera', false);
		form.setEnabled('obs_relatorio_fim', false);
	}
}