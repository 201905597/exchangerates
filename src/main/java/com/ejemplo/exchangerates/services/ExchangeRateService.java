package com.ejemplo.exchangerates.services;

import com.ejemplo.exchangerates.domain.Currency;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ExchangeRateService {
    List<String> getCurrency();
}
/*public interface ExchangeRateService {
    String getCurrency(String id);
}*/
