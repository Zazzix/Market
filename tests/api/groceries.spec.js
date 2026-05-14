import { test } from '../../src/helpers/fixtures/api.fixture';
import { expect } from '@playwright/test';
import { faker, Faker } from "@faker-js/faker";
import { ProductBuilder } from '../../src/helpers/builder/index'

test('Get all products @get', async ({ api }) => {
    let response = await api.groceries.getAllGroceries();
    let data = await response.json();

    expect(response.status()).toBe(200);
    expect(data.products.length).toBeGreaterThanOrEqual(1);
});

test('Create product with all optional fields @post', async ({ api }) => {
    const product = new ProductBuilder().withName().withPrice().withMeatCategory().withChilledTempZone().withWeighted().withStock().withCountryDetails().withIngridientDetails().build()

    let response = await api.groceries.createProduct(product);
    let data = await response.json();

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

test('Create product with invalid temperature_zone @post', async ({ api }) => {
    const product = new ProductBuilder().withName().withPrice().withMeatCategory().withInvalidTempZone().withWeighted().withStock().withCountryDetails().withIngridientDetails().build()

    let response = await api.groceries.createProduct(product);
    let data = await response.json();

    expect(response.status()).toBe(400);
});

test('Filter by multiple categories @get', async ({ api }) => {
    let response = await api.groceries.filterGroceries();
    let data = await response.json();
    const filteredProducts = data.every(product => product.category === 'meat-seafood' || product.category === 'dairy-eggs')

    expect(response.status()).toBe(200);
    expect(filteredProducts).toBe(true)
});

test('Update product price only @put', async ({ api }) => {
    let response = await api.groceries.getAllGroceries();
    let data = await response.json();

    const productIDForUpdate = data.products[0].id
    const newPrice = faker.number.int({ max: 100 });

    response = await api.groceries.updatePrice(productIDForUpdate, newPrice)
    data = await response.json();

    expect(response.status()).toBe(200);
    expect(newPrice).toEqual(data.price)
});

