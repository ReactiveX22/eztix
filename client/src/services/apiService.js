import axios, { all } from 'axios';

const api = axios.create({ baseURL: 'http://localhost:5000/api' });

const endPoints = {
  routes: { all: '/routes' },
  coaches: {
    all: '/coaches',
    byRouteId(id) {
      return `${this.all}/route/${id}`;
    },
  },
  tickets: {
    all: '/tickets',
    create: '/tickets',
    seatNumbersByCoachId(id) {
      return `${this.all}/coaches/${id}/seats`;
    },
    ticketsByCustomerId(id) {
      return `${this.all}/user-tickets/${id}`;
    },
    ticketByCustomerAndCoach(customerId, coachId) {
      return `${this.all}/customers/${customerId}/coaches/${coachId}`;
    },
  },
  customer: {
    all: '/customers',
    getCustomerByPhone(phone) {
      return `${this.all}/phone/${phone}`;
    },
  },
};

export { api, endPoints };
