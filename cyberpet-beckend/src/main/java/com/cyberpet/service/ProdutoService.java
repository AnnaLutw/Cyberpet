package com.cyberpet.service;

import java.util.List;

import com.cyberpet.domain.Produto;

public interface ProdutoService {

	List<Produto> findAll();

	Produto save(Produto produto);
}
