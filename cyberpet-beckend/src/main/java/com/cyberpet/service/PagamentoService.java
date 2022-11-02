package com.cyberpet.service;

import java.util.List;

import com.cyberpet.domain.Pagamento;

public interface PagamentoService {

	List<Pagamento> findAll();

	Pagamento save(Pagamento pagamentos);
}
