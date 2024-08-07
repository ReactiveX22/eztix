import axios, { all } from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

const endPoints = {
  routes: '/routes',
  coaches: {
    all: '/coaches',
    byRouteId(id) {
      return `${this.all}/route/${id}`;
    },
  },
  tickets: {
    all: '/tickets',
    seatNumbersByCoachId(id) {
      return `${this.all}/coaches/${id}/seats`;
    },
  },
};

export { api, endPoints };
