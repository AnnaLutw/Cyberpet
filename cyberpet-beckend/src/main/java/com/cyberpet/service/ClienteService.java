package com.cyberpet.service;

import java.util.List;

import com.cyberpet.domain.Cliente;

public interface ClienteService {

	List<Cliente> findAll();

	Cliente save(Cliente cliente);
	
}
