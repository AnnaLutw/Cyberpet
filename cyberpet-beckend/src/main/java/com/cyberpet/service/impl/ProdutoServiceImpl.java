package com.cyberpet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cyberpet.domain.Produto;
import com.cyberpet.repository.ProdutoRepository;
import com.cyberpet.service.ProdutoService;

@Service
public class ProdutoServiceImpl implements ProdutoService {

	@Autowired
	private ProdutoRepository repository;

	@Override
	public List<Produto> findAll() {
		return repository.findAll();
	}

	@Override
	public Produto save(Produto produto) {
		return repository.save(produto);
	}
	
}


