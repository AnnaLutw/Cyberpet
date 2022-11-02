package com.cyberpet.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.cyberpet.domain.Cliente;
import com.cyberpet.repository.ClienteRepository;
import com.cyberpet.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService{
	@Autowired
	private ClienteRepository repository;

	@Override
	public List<Cliente> findAll() {
		return repository.findAll();
	}

	@Override
	public Cliente save(Cliente cliente) {
		return repository.save(cliente);
	}
	
}
