package com.proj1.jdbc.model.vo;

public class Coffee extends Drink{

    public Coffee() {
        super();
    }

    public Coffee(int drinkNo, String drinkName, int price) {
        super(drinkNo, drinkName, "커피", price);
    }
}
