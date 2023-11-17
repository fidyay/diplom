import { makeAutoObservable } from "mobx";

export const catBreeds = [
  "Абісинська",
  "Бенгальска",
  "Британська довгошерста",
  "Британська короткошерста",
  "Мейн-кун",
  "Орієнтальна",
  "Шотландська висловуха",
  "Шотландська прямовуха",
];

export const genders = ["Жіноча", "Чоловіча"];

export const catAges = [
  "До трьох місяців",
  "3 - 6 місяців",
  "6 - 9 місяців",
  "9 - 12 місяців",
  "1 рік",
  "2 роки",
  "3 роки",
  "5 років",
  "6 років",
  "7 років",
  "8 років",
  "9 років",
  "10 років",
];

export const activityBreakpoints = {
  "Серійний сонник": "До 20 хвилин ходьби на день",
  "Дещо активна": "0.5 - 1 година активностей на день",
  "Дуже активна": "2 - 3 години активностей на день",
  Атлет: "Більше 3 годин активностей на день",
};

export const boolValuesUA = ["Немає", "Є"];

export const catWeight = [
  "До 1 кг",
  "1 кг",
  "2 кг",
  "3 кг",
  "4 кг",
  "5 кг",
  "6 кг",
  "7 кг",
  "8 кг",
  "9 кг",
  "10 кг",
];

export const waistBreakpoints = {
  "Трохи худа": "Вузька талія і добре видно ребра",
  "В самий раз":
    "Видима талія з деяким жировим покривом, але ребра легко промацати",
  "Трохи кремезна": "Талії не видно, а ребра важко промацати",
};

class Store {
  catName: string = "";
  userName: string = "";
  catBreed: string = catBreeds[0];
  catGender: string = genders[0];
  catAge: string = catAges[0];
  catWeight: string = catWeight[0];
  catWaist: string = Object.keys(waistBreakpoints)[0];
  catActivity: string = Object.keys(activityBreakpoints)[0];
  hasIllness: boolean = false;
  hasSterilization: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
}

const store = new Store();

export default store;
