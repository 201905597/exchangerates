package com.ejemplo.exchangerates.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Rate {
    private List<Currency> currencyList;

    public Rate(){
    }

    public void setCurrencyList(List<Currency> currencyList){
        this.currencyList = currencyList;
    }

    public List<Currency> getCurrencyList(){
        return currencyList;
    }

    @Override
    public String toString(){
        StringBuilder sb = new StringBuilder();
        sb.append("rates{");
        for (Currency curr : currencyList){
            sb.append(curr.toString());
        }
        sb.append('}');
        return sb.toString();
    }
}
