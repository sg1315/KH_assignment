package com.proj1.jdbc.model.vo;

public class Tea extends Drink{

    public Tea() {
        super();
    }

    public Tea(int drinkNo, String drinkName, int price) {
        super(drinkNo, drinkName, "차", price);
    }
}
