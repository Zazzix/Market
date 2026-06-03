import { faker, Faker } from "@faker-js/faker";

export class ProductBuilder {
    details = {};

    withName() {
        this.product_name = faker.food.meat();
        return this;
    }

    withnameFruit() {
        this.product_name = faker.food.fruit();
        return this;
    }

    withPrice() {
        this.price = faker.number.int({ max: 100 });
        return this;
    }

    withMeatCategory() {
        this.category = 'meat-seafood';
        return this;
    }

    withChilledTempZone() {
        this.temperature_zone = 'Chilled';
        return this;
    }

    withInvalidTempZone() {
        this.temperature_zone = 'Warm';
        return this;
    }

    withWeighted() {
        this.weighted = faker.datatype.boolean();
        return this;
    }

    withStock() {
        this.stock = faker.number.int({ max: 20 });
        return this;
    }

    withCountryDetails() {
        this.details.country = faker.food.ethnicCategory();
        return this;
    }

    withIngridientDetails() {
        this.details.ingridient = faker.food.ingredient();
        return this;
    }

    build() {
        const result = { ...this };
        
        return result;
    }
}