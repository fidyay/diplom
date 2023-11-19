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

export const catWeightArr = [
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
  catWeight: string = catWeightArr[0];
  catWaist: string = Object.keys(waistBreakpoints)[0];
  catActivity: string = Object.keys(activityBreakpoints)[0];
  hasIllness: boolean = false;
  hasSterilization: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }
  // index of str of array is number of weight in kilograms, if index is 0, consider that weight = 0.5kg
  get catWeightNumber() {
    const indexOfArr = catWeightArr.findIndex(
      (weightStr) => weightStr === this.catWeight
    );
    if (indexOfArr === 0) return 0.5;
    else return indexOfArr;
  }
  // the minimum daily protein requirement for adult cats is at least 5.2 grams of protein per kilogram of body weight
  get dailyProteingRequirement() {
    const recomendedProteinIntake = 5.2;
    return this.catWeightNumber * recomendedProteinIntake;
  }
  // the general recommendation for adult cats is to provide a diet in which fats make up about 20–25% of the total caloric content of the diet
  get dailyFatRequirement() {
    const minRecommendedFatIntake = 3;
    const maxRecommendedFatIntake = 5;
    return {
      min: minRecommendedFatIntake * this.catWeightNumber,
      max: maxRecommendedFatIntake * this.catWeightNumber,
    };
  }
  // the need for energy at rest
  get RER() {
    return 70 * Math.pow(this.catWeightNumber, 0.75);
  }
  /* Assessment of the cat's daily calorie needs, taking into account its activity level
  For example, if the cat's RER is calculated as 200 kcal/day and it has an activity level of 3, use the multiplier:
  - activity level 1: AER = RER x 1.2.
  - activity level 2: AER = RER x 1.4
  - activity level 3: AER = RER x 1.6.
  - Activity level 4: AER = RER x 1.8.
  */
  get AER() {
    // activity level number started from 0
    const index = Object.keys(activityBreakpoints).findIndex(
      (activityBreakpoint) => this.catActivity === activityBreakpoint
    );
    const activityLevelPoint = 1.2 + (index * 2) / 10;

    return this.RER * activityLevelPoint;
  }
}

const store = new Store();

export default store;
