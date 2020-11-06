import request from 'superagent';

export async function fetchCocktails() {
    try {
        const response = await request.get(`https://pacific-garden-61897.herokuapp.com/cocktails`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchOneCocktail(someId) {
    try {
        const response = await request.get(`https://pacific-garden-61897.herokuapp.com/cocktails/${someId}`);

        return response.body;
    } catch (err) {
        throw err;
    }
}

export async function fetchAlcohols() {
    try {
        const response = await request.get(`https://pacific-garden-61897.herokuapp.com/alcohols`);

        return response.body
    } catch (err) {
        throw err;
    }
}

export async function createCocktail(newCocktail) {
    try {
        await request
            .post(`https://pacific-garden-61897.herokuapp.com/cocktails`)
            .send(newCocktail);

        return;
    } catch (err) {
        throw err;
    }
}

export async function updateCocktail(someId, newCocktail) {
    try {
        await request
            .put(`https://pacific-garden-61897.herokuapp.com/cocktails/${someId}`)
            .send(newCocktail);

        return;
    } catch (err) {
        throw err;
    }
}

export async function deleteCocktail(someId) {
    try {
        await request.delete(`https://pacific-garden-61897.herokuapp.com/cocktails/${someId}`);

        return;
    } catch (err) {
        throw err;
    }
}