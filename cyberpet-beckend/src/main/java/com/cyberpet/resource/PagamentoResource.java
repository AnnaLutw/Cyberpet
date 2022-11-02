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
import com.cyberpet.domain.Pagamento;
import com.cyberpet.service.PagamentoService;

@CrossOrigin
@RestController()
@RequestMapping(value="/api/pagamentos", produces= MediaType.APPLICATION_JSON_VALUE )
public class PagamentoResource {
	
	@Autowired
	private PagamentoService service;
	
	@GetMapping("/findAll")
	public List<Pagamento> findAll(){
		List<Pagamento> pagamentos = service.findAll();
		return pagamentos;
	}
	
	@PostMapping(value="/save", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Pagamento save(@RequestBody Pagamento pagamentos) {
		return service.save(pagamentos);
	}
}