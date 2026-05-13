import { test } from '../../src/helpers/fixtures/api.fixture';
import { expect } from '@playwright/test';
import { ProductBuilder } from '../../src/helpers/builder/index'


test('BasketTest', async ({ api }) => {
    //const api = new Api(request);
    let response = await api.basket.getItemsInBasket();
    let data = await response.json();

    console.log(response);
    console.log(data);
});

test('Get all products @get', async ({ api }) => {
    let response = await api.groceries.getAllGroceries();
    let data = await response.json();

    //console.log(response);
    console.log(data);
    expect(response.status()).toBe(200);
    expect(data.products.length).toBeGreaterThanOrEqual(1);
});

test('Create product with all optional fields @post', async ({ api }) => {
    const product = new ProductBuilder().withName().withPrice().withMeatCategory().withChilledTempZone().withWeighted().withStock().withCountryDetails().withIngridientDetails().build()
    console.log(product);
    let response = await api.groceries.createProduct(product);
    let data = await response.json();

    console.log(response);
    console.log(data);
    expect(response.status()).toBe(201);
    expect(data.product_name).toEqual(product.product_name);
    expect(data.category).toEqual(product.category);
    expect(data.price).toEqual(product.price);
    expect(data.stock).toEqual(product.stock);
    expect(data.details.country).toEqual(product.details.country);
    expect(data.details.ingridient).toEqual(product.details.ingridient);
    expect(data.temperature_zone).toEqual(product.temperature_zone);
    expect(data.weighted).toEqual(product.weighted);
});

test.only('Create product with invalid temperature_zone @post', async ({ api }) => {
    const product = new ProductBuilder().withName().withPrice().withMeatCategory().withInvalidTempZone().withWeighted().withStock().withCountryDetails().withIngridientDetails().build()
    console.log(product);
    let response = await api.groceries.createProduct(product);
    let data = await response.json();

    console.log(response);
    console.log(data);
    expect(response.status()).toBe(400);
});