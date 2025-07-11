package com.proj1.jdbc.Template;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

public class Proj1Template {
    //모든 메서드를 전부 static메서드로 만듬
    //싱글톤 패턴 : 메모리영역에 단 한번만 생성해서 매번 재사용하는 개념

    //1. Connectionn객체 생성 후 해당 Connection객체 반환
    public static Connection getConnection() {
        Connection conn = null;
        Properties prop = new Properties();

        try {
            prop.load(new FileInputStream("resources/driver.properties"));

            Class.forName(prop.getProperty("driver"));

            conn = DriverManager.getConnection(prop.getProperty("url"), prop.getProperty("username"), prop.getProperty("password"));
            conn.setAutoCommit(false);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return conn;
    }

    //2. commit처리해주는 메서드(Connection객체 전달받아 사용)
    public static void commit(Connection conn) {
        try {
            if(conn != null && !conn.isClosed()) {
                conn.commit();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //3. rollback처리해주는 메서드(Connection객체 전달받아 사용)
    public static void rollback(Connection conn) {
        try {
            if(conn != null && !conn.isClosed()) {
                conn.rollback();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //4. Statement관련 객체를 전달받아서 반납시켜주는 메서드
    public static void close(Statement stmt) {
        try {
            if(stmt != null && !stmt.isClosed()) {
                stmt.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //5. Connection객체를 전달받아서 반납시켜주는 메서드
    public static void close(Connection conn) {
        try {
            if(conn != null && !conn.isClosed()) {
                conn.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    //6. ResultSet객체를 전달받아서 반납시켜주는 메서드
    public static void close(ResultSet rset) {
        try {
            if(rset != null && !rset.isClosed()) {
                rset.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
