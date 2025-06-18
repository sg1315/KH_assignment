package com.proj1.jdbc.controller;

import com.proj1.jdbc.model.vo.Coffee;
import com.proj1.jdbc.model.vo.Drink;
import com.proj1.jdbc.model.vo.Tea;
import com.proj1.jdbc.service.Proj1Service;
import com.proj1.jdbc.view.Proj1Menu;

import java.util.ArrayList;

public class Proj1Controller {
	private Proj1Service ps = new Proj1Service();

	public ArrayList<Coffee> coffeeList() {
		ArrayList<Coffee> list = ps.coffeeList();

		if(list.isEmpty()) { // list가 비어있는 경우
			new Proj1Menu().displayNoData("전체 조회 결과가 없습니다.");
		} else { // 조회된 데이터가 있을 경우
			new Proj1Menu().displayCoffeeList(list);
		}
		return list;
	}//coffeeList

	public ArrayList<Tea> teaList() {
		ArrayList<Tea> list = ps.teaList();

		if(list.isEmpty()) { // list가 비어있는 경우
			new Proj1Menu().displayNoData("전체 조회 결과가 없습니다.");
		} else { // 조회된 데이터가 있을 경우
			new Proj1Menu().displayTeaList(list);
		}
		return list;
	}//teaList

	public void selectDrink(int num) {

	}//selectDrink
	
	//관리자 메뉴
	public void insertDrink(String drinkName, String category, int price) {
		Drink d = new Drink(drinkName, category, price);

		int result = ps.insertDrink(d);
		if(result > 0) {
			new Proj1Menu().displaySuccess("음료 추가 성공");
		} else {
			new Proj1Menu().displayFail("음료 추가 실패");
		}
	}//insertDrink

	public void updateDrink(String drinkName, int price) {
		Drink d = new Drink(drinkName, price);
		d.setDrinkName(drinkName);
		d.setPrice(price);

		int result = ps.updateDrink(d);
		if(result > 0) {
			new Proj1Menu().displaySuccess("가격 수정 성공");
		} else {
			new Proj1Menu().displayFail("가격 수정 실패");
		}
	}//updateDrink

	public void deleteDrink(String drinkName) {
		int result = ps.deleteDrink(drinkName);

		if(result > 0) {
			new Proj1Menu().displaySuccess("음료 삭제 성공");
		} else {
			new Proj1Menu().displayFail("음료 삭제 실패");
		}
	}//delteDrink

}
