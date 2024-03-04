/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.umade.controllers;

import com.umade.Configuration;
import com.umade.models.Product;
import com.umade.utils.database.ProductDAO;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 *
 * @author ADM
 */
@WebServlet(name = "ProductController", urlPatterns = {"/api/product"})
public class ProductController extends HttpServlet{
    public static final ProductDAO dbContext = Configuration.products;

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        
        dbContext.delete(id);
        
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        int id = Integer.parseInt(req.getParameter("id"));
        int quantity = Integer.parseInt(req.getParameter("quantity"));
        int price = Integer.parseInt(req.getParameter("price"));
//        String image = req.getParameter("image");
//        
        dbContext.update(id, quantity, price);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
           PrintWriter print = resp.getWriter();
           
           String name = req.getParameter("name");
           int quantity = Integer.parseInt(req.getParameter("quantity"));
           int price = Integer.parseInt(req.getParameter("price"));
           String image = req.getParameter("image");
           
           Product p = new Product(name, quantity, price, image);
           
           dbContext.add(name, quantity, price, image);
           print.print(p);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter print = resp.getWriter();
        List<Product> productList = dbContext.getAll();
        print.print(productList);
    }
}
