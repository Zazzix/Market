import { faker, Faker } from "@faker-js/faker";

export class ProductBuilder {
    constructor() {
        this.product = {
            details: {}
        };
    }

    withName() {
        this.product.product_name = faker.food.meat();
        return this;
    }
    withPrice() {
        this.product.price = faker.number.int({ max: 100 });
        return this;
    }
    withMeatCategory() {
        this.product.category = 'meat-seafood';
        return this;
    }
    withChilledTempZone() {
        this.product.temperature_zone = 'Chilled';
        return this;
    }
    withInvalidTempZone() {
        this.product.temperature_zone = 'Warm';
        return this;
    }
    withWeighted() {
        this.product.weighted = faker.datatype.boolean();
        return this;
    }
    withStock() {
        this.product.stock = faker.number.int({ max: 20 })
        return this;
    }
    withCountryDetails() {
        this.product.details.country = faker.food.ethnicCategory();
        return this;
    }
    withIngridientDetails() {
        this.product.details.ingridient = faker.food.ingredient();
        return this;
    }
    build() {
        return this.product;
    }
}