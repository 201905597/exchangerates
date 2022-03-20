package com.ejemplo.exchangerates.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class ExchangeRateServiceImpl implements ExchangeRateService{

    @Autowired
    RestTemplate restTemplate;

    @Override
    public List<String> getCurrency(){
        String url = "https://api.coingecko.com/api/v3/exchange_rates";

        String rate = restTemplate.getForObject(url, String.class);

        return Arrays.asList(rate);
    }

}
