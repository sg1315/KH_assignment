package com.proj1.jdbc.model.vo;

public class Drink {
    private int drinkNo;
    private String drinkName;
    private String category;
    private int price;

    public Drink() {
        super();
    }

    public Drink(int drinkNo, String drinkName, String category, int price) {
        super();
        this.drinkNo = drinkNo;
        this.drinkName = drinkName;
        this.category = category;
        this.price = price;
    }

    public Drink(String drinkName, String category, int price) {
        super();
        this.drinkName = drinkName;
        this.category = category;
        this.price = price;
    }

    public Drink(String drinkName, int price) {
        super();
        this.drinkName = drinkName;
        this.price = price;
    }

    public int getDrinkNo() {
        return drinkNo;
    }

    public void setDrinkNo(int drinkNo) {
        this.drinkNo = drinkNo;
    }

    public String getDrinkName() {
        return drinkName;
    }

    public void setDrinkName(String drinkName) {
        this.drinkName = drinkName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return drinkName + " - " + price;
    }
}
