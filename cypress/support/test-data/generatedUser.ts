import { faker } from '@faker-js/faker';
import { TestUser } from './types';

export function generateDynamicUser(): TestUser {
  return {
    name: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zip: faker.location.zipCode(),
    phone: faker.helpers.replaceSymbols('+1##########')
  };
}
