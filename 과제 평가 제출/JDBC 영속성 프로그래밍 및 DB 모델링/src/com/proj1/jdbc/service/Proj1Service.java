package com.proj1.jdbc.service;

import com.proj1.jdbc.model.dao.Proj1Dao;
import com.proj1.jdbc.model.vo.Coffee;
import com.proj1.jdbc.model.vo.Drink;
import com.proj1.jdbc.model.vo.Tea;

import static com.proj1.jdbc.Template.Proj1Template.*;

import java.sql.Connection;
import java.util.ArrayList;

public class Proj1Service {

    public ArrayList<Coffee> coffeeList() {
        Connection conn = getConnection();
        ArrayList<Coffee> coffeeList = new Proj1Dao().coffeeList(conn);
        close(conn);

        return coffeeList;
    }

    public ArrayList<Tea> teaList() {
        Connection conn = getConnection();
        ArrayList<Tea> teaList = new Proj1Dao().teaList(conn);
        close(conn);

        return teaList;
    }


    //관리자 메뉴
    public int insertDrink(Drink d) {
        Connection conn = getConnection();
        int result = new Proj1Dao().insertDrink(d, conn);

        if(result > 0) {
            commit(conn);
        } else {
            rollback(conn);
        }

        close(conn);
        return result;
    }//insertDrink

    public int updateDrink(Drink d) {
        Connection conn = getConnection();
        int result = new Proj1Dao().updateDrink(d, conn);

        if(result > 0) {
            commit(conn);
        } else {
            rollback(conn);
        }

        close(conn);
        return result;
    }//updateDrink

    public int deleteDrink(String drinkName) {
        Connection conn = getConnection();
        int result = new Proj1Dao().deleteDrink(drinkName, conn);

        if(result > 0) {
            commit(conn);
        } else {
            rollback(conn);
        }

        close(conn);
        return result;
    }//deleteDrink


}
