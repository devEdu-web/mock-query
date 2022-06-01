import { faker } from "@faker-js/faker"

class MockValues {
  firstName() {
    return faker.name.firstName()
  }
  lastName() {
    return faker.name.lastName()
  }
  age() {
    return faker.random.numeric(2)
  }
}

const mockSettings = new MockValues()

export default mockSettings