package com.proj1.jdbc.view;

import java.util.ArrayList;
import java.util.Scanner;

import com.proj1.jdbc.controller.Proj1Controller;
import com.proj1.jdbc.model.vo.Coffee;
import com.proj1.jdbc.model.vo.Drink;
import com.proj1.jdbc.model.vo.Tea;

public class Proj1Menu {
	private Scanner sc = new Scanner(System.in);
	private Proj1Controller pc = new Proj1Controller();

	private ArrayList<Drink> selectedDrinks = new ArrayList<>();
	
	public void mainMenu() {
		while(true) {
			System.out.println("======== CoffeeCoffee ========");
			System.out.println("1. 음료 선택");
			System.out.println("2. 음료 취소");
			System.out.println("3. 결제");
			System.out.println("9. 종료");
			System.out.println("0. 관리자 메뉴");
			
			System.out.print("메뉴 번호 입력 :  ");
			int num = sc.nextInt();
			sc.nextLine();
			
			switch(num) {
			case 1:
				selectDrink();
				break;
			case 2:
				cancelDrink();
				break;
			case 3:
				payment();
				break;
			case 9:
				System.out.println("종료합니다.");
				return;
			case 0:
				adminMenu();
				break;
			default:
				System.out.println("잘못 입력 하였습니다. 다시 입력해주세요");
			}		
		}
	}//mainMenu

	public void selectDrink() {
		System.out.println("======== 음료 선택 ========");
		System.out.println("1. 커피");
		System.out.println("2. 차");
		System.out.print("종류 선택 : ");
		int num = sc.nextInt();
		sc.nextLine();

		switch(num) {
			case 1:
				selectCoffee();
				break;
			case 2:
				selectTea();
				break;
			default:
				System.out.println("잘못 입력 하였습니다. 다시 입력해주세요");
		}

	}

	public void selectCoffee() {
		ArrayList<Coffee> coffeeList = pc.coffeeList();  // 커피 리스트 불러오기

		System.out.print("커피 이름 입력 : ");
		String drinkName = sc.nextLine();

		// 음료 이름으로 선택한 커피를 리스트에 추가
		boolean found = false;
		for (Coffee coffee : coffeeList) {
			if (coffee.getDrinkName().equalsIgnoreCase(drinkName)) {
				selectedDrinks.add(coffee);  // 선택한 커피를 리스트에 추가
				System.out.println(coffee.getDrinkName() + " 추가되었습니다.");
				found = true;
				break;
			}
		}

		if (!found) {
			System.out.println("입력한 커피 이름이 없습니다.");
		}
	}

	public void selectTea() {
		ArrayList<Tea> teaList = pc.teaList();  // 차 리스트 불러오기

		System.out.print("차 이름 입력 : ");
		String drinkName = sc.nextLine();

		// 음료 이름으로 선택한 차를 리스트에 추가
		boolean found = false;
		for (Tea tea : teaList) {
			if (tea.getDrinkName().equalsIgnoreCase(drinkName)) {
				selectedDrinks.add(tea);  // 선택한 차를 리스트에 추가
				System.out.println(tea.getDrinkName() + " 추가되었습니다.");
				found = true;
				break;
			}
		}

		if (!found) {
			System.out.println("입력한 차 이름이 없습니다.");
		}
	}

	public void cancelDrink() {
		System.out.println("======== 음료 취소 ========");
		System.out.println("선택한 음료 목록:");
		for (int i = 0; i < selectedDrinks.size(); i++) {
			System.out.println((i+1) + ". " + selectedDrinks.get(i).getDrinkName());
		}

		System.out.print("취소할 음료 이름 입력 : ");
		String drinkName = sc.nextLine();

		// 선택한 음료 이름으로 삭제
		boolean removed = false;
		for (int i = 0; i < selectedDrinks.size(); i++) {
			if (selectedDrinks.get(i).getDrinkName().equalsIgnoreCase(drinkName)) {
				selectedDrinks.remove(i);
				System.out.println(drinkName + " 취소되었습니다.");
				removed = true;
				break;
			}
		}

		if (!removed) {
			System.out.println("입력한 음료 이름이 없습니다.");
		}
	}

	public void payment() {
		int totalPrice = 0;
		System.out.println("======== 결제 ========");

		// 선택된 음료들의 가격 합산
		for (Drink drink : selectedDrinks) {
			totalPrice += drink.getPrice();
			System.out.println(drink.getDrinkName() + ": " + drink.getPrice() + "원");
		}

		System.out.println("총 결제 금액: " + totalPrice + "원");
		selectedDrinks.clear();
	}

	//관리자 메뉴
	public void adminMenu() {
		while(true) {
			System.out.println("======== 관리자 메뉴 ========");
			System.out.println("1. 음료 목록");
			System.out.println("2. 음료 추가");
			System.out.println("3. 가격 변경");
			System.out.println("4. 음료 삭제");
			System.out.println("9. 메인메뉴");

			System.out.print("메뉴 번호 입력 :  ");
			int num = sc.nextInt();
			sc.nextLine();

			switch(num) {
				case 1:
					System.out.println("======== 커피 ========");
					pc.coffeeList();
					System.out.println("======== 차 ========");
					pc.teaList();
					break;
				case 2:
					insertDrink();
					break;
				case 3:
					updateDrink();
					break;
				case 4:
					deleteDrink();
					break;
				case 9:
					return;
				default:
					System.out.println("잘못 입력 하였습니다. 메인메뉴로 돌아갑니다.");
					return;
			}
		}
	}//adminMenu

	public void insertDrink() {
		System.out.print("음료 종류 : ");
		String category = sc.nextLine();
		System.out.print("음료 이름 : ");
		String drinkName = sc.nextLine();
		System.out.print("음료 가격 : ");
		int price = sc.nextInt();
		sc.nextLine();

		pc.insertDrink(drinkName, category, price);

	}//insertDrink

	public void updateDrink() {
		System.out.print("음료 이름 : ");
		String drinkName = sc.nextLine();
		System.out.print("변경할 음료 가격 : ");
		int price = sc.nextInt();
		sc.nextLine();

		pc.updateDrink(drinkName, price);
	}//updateDrink

	public void deleteDrink() {
		System.out.print("음료 이름 : ");
		String drinkName = sc.nextLine();

		pc.deleteDrink(drinkName);
	}//deleteDrink
	

	
	//----------------------------응답화면-------------------------
	/**
	 * 서비스요청 처리 후 성공했을 경우 사용자가 보게될 화면
	 * message : 객체별 성공메세지
	 */
	public void displaySuccess(String message) {
		System.out.println("\n서비스 요청 성공 : " + message);
	}
	
	/**
	 * 서비스요청 처리 후 실패했을 경우 사용자가 보게될 화면
	 * message : 객체별 실패메세지
	 */
	public void displayFail(String message) {
		System.out.println("\n서비스 요청 실패 : " + message);
	}
	
	/**
	 * 조회서비스 요청시 조회결과가 없을 때 사용자가 보게될 응답화면
	 * message : 조회결과에대한 응답메세지
	 */
	public void displayNoData(String message) {
		System.out.println("\n" + message);
	}
	
	/**
	 * 조회서비스 요청 결과가 여러행일 경우 보게될 응답화면
	 * list : 조획결과
	 */
	
	public void displayCoffeeList(ArrayList<Coffee> list) {
		for(Coffee c : list) {
			System.out.println(c);
		}
	}//CoffeeList

	public void displayTeaList(ArrayList<Tea> list) {
		for(Tea t : list) {
			System.out.println(t);
		}
	}//TeaList


	
}
