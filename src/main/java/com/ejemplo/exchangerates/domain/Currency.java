package com.ejemplo.exchangerates.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

/**
 * Clase de domain para almacenar los datos de cada entrada de la API
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class Currency {
    private String name;
    private String unit;
    private float value;
    private String type;

    public Currency(){
    }

    public void setName(String name){
        this.name = name;
    }

    public void setValue(float value){
        this.value = value;
    }

    public void setType(String type){
        this.type = type;
    }

    public void setUnit(String unit){
        this.unit = unit;
    }

    public String getType(){
        return type;
    }

    public String getName(){
        return name;
    }

    public String getUnit(){
        return unit;
    }

    public float getValue(){
        return value;
    }

    @Override
    public String toString(){
        return "Currency{"+
                "name='" + name + '\'' +
                ", unit='" + unit + '\'' +
                ", value=" + value +
                ", type='" + type + '\'' +
                '}';
    }
}
