'use strict';

import { DbService } from './db-service.js';

const KEY = 'reviews';

export default {
    query,
    get,
    remove,
    save,
    getEmptyReview
};

async function query(id = '') {
    const reviews = await DbService.query(KEY) || []
    return reviews.filter(review => review.bookId === id)
}

function get(id) {
    return DbService.get(KEY, id);
}

function remove(id) {
    return DbService.delete(KEY, id);
}

function save(review) {
    // console.log(this.review.id);
    if (review.id) return DbService.put(KEY, review);
    else return DbService.post(KEY, review);
}


function getEmptyReview() {
    return {
      reader: '',
      readDate: (new Date(Date.now()).toISOString().slice(0,10)),
      description: '',
      rate: 0
      
    };
}


