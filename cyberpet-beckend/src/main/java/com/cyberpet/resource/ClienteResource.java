package com.cyberpet.resource;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cyberpet.domain.Cliente;
import com.cyberpet.service.ClienteService;

@CrossOrigin
@RestController()
@RequestMapping(value="/api/clientes", produces= MediaType.APPLICATION_JSON_VALUE )
public class ClienteResource {
	
	@Autowired
	private ClienteService service;
	
	@GetMapping("/findAll")
	public List<Cliente> findAll(){
		List<Cliente> clientes = service.findAll();
		return clientes;
	}
	
	@PostMapping(value="/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Cliente save(@RequestBody Cliente cliente) {
		return service.save(cliente);
	}
}
