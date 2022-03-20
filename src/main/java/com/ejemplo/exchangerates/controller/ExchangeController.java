package com.ejemplo.exchangerates.controller;

import com.ejemplo.exchangerates.domain.Currency;
import com.ejemplo.exchangerates.services.ExchangeRateService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class ExchangeController {

    @Autowired
    private ExchangeRateService exchangeRateService;

    /*@GetMapping("/exchange/{id}")
    public @ResponseBody
    ResponseEntity<String> getExchangeRates(@PathVariable ("id") String id){
        log.info("El param recibido es: " + id);
        return ResponseEntity.ok().body(exchangeRateService.getCurrency(id));
    }*/
    @GetMapping("/exchange")
    public @ResponseBody
    ResponseEntity<List<String>> getExchangeRates(){
        return ResponseEntity.ok().body(exchangeRateService.getCurrency());
    }
}