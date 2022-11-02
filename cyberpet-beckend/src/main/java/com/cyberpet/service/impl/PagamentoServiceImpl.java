package com.cyberpet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cyberpet.domain.Pagamento;
import com.cyberpet.repository.PagamentoRepository;
import com.cyberpet.service.PagamentoService;

@Service
public class PagamentoServiceImpl implements PagamentoService{
	@Autowired
	private PagamentoRepository repository;

	@Override
	public List<Pagamento> findAll() {
		return repository.findAll();
	}

	@Override
	public Pagamento save(Pagamento pagamentos) {
		return repository.save(pagamentos);
	}
}
