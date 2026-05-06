import { test } from '../../src/helpers/fixtures/api.fixture';
import { expect } from '@playwright/test';
//import { Api } from '../../src/services/api.service'


test.only('BasketTest', async ({ api }) => {
    //const api = new Api(request);
    let response = await api.basket.getItemsInBasket();
    let data = await response.json();

    console.log(response);
    console.log(data);
});