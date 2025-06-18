package com.proj1.jdbc.model.dao;

import static com.proj1.jdbc.Template.Proj1Template.close;

import java.io.FileInputStream;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Properties;

import com.proj1.jdbc.model.vo.*;

public class Proj1Dao {

    private Properties prop = new Properties();

    public Proj1Dao() {
        super();
        try {
            prop.loadFromXML(new FileInputStream("resources/query.xml"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }//Proj1Dao

    public ArrayList<Coffee> coffeeList(Connection conn) {
        ResultSet rs = null;
        ArrayList<Coffee> list = new ArrayList<>();

        PreparedStatement pstmt = null;

        String sql = prop.getProperty("coffeeList");

        try {
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                Coffee c = new Coffee();
                c.setDrinkNo(rs.getInt("drinkNo"));
                c.setDrinkName(rs.getString("drinkName"));
                c.setCategory(rs.getString("category"));
                c.setPrice(rs.getInt("price"));
                list.add(c);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(rs);
            close(pstmt);
        }
        return list;
    }//coffeeList

    public ArrayList<Tea> teaList(Connection conn) {
        ResultSet rs = null;
        ArrayList<Tea> list = new ArrayList<>();

        PreparedStatement pstmt = null;

        String sql = prop.getProperty("teaList");

        try {
            pstmt = conn.prepareStatement(sql);
            rs = pstmt.executeQuery();

            while (rs.next()) {
                Tea t = new Tea();
                t.setDrinkNo(rs.getInt("drinkNo"));
                t.setDrinkName(rs.getString("drinkName"));
                t.setCategory(rs.getString("category"));
                t.setPrice(rs.getInt("price"));
                list.add(t);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(rs);
            close(pstmt);
        }
        return list;
    }//teaList


    //관리자 메뉴

    public int insertDrink(Drink d, Connection conn) {
        int result = 0;
        PreparedStatement pstmt = null;

        String sql = prop.getProperty("insertDrink");

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, d.getDrinkName());
            pstmt.setString(2, d.getCategory());
            pstmt.setInt(3, d.getPrice());

            result = pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(pstmt);
        }

        return result;
    }

    public int updateDrink(Drink d, Connection conn) {
        int result = 0;
        PreparedStatement pstmt = null;

        String sql = prop.getProperty("updateDrink");

        try {
            pstmt = conn.prepareStatement(sql);
            pstmt.setInt(1, d.getPrice());
            pstmt.setString(2, d.getDrinkName());

            result = pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(pstmt);
        }

        return result;
    }

    public int deleteDrink(String drinkName, Connection conn) {
        int result = 0;
        PreparedStatement pstmt = null;

        String sql = prop.getProperty("deleteDrink");

        try {
            pstmt = conn.prepareStatement(sql);

            pstmt.setString(1, drinkName);

            result = pstmt.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(pstmt);
        }

        return result;

    }


}
