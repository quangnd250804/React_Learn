/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.umade.models;

import com.umade.Configuration;

/**
 *
 * @author ADM
 */

public class Product {
    private int id, quantity, price;
    private String name;
    private String image;

    public Product() {
    }
    
    

    public Product(int id,  String name, int quantity, int price, String image) {
        this.id = id;
        this.quantity = quantity;
        this.price = price;
        this.name = name;
        this.image = image;
    }
    
    public Product(String name, int quantity, int price, String image) {
        this.quantity = quantity;
        this.price = price;
        this.name = name;
        this.image = image;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return Configuration.gson.toJson(this);
    }
    
    
}
