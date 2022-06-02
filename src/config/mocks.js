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
  city() {
    return faker.address.city()
  }
  country() {
    return faker.address.country()
  }
  product() {
    return faker.commerce.product()
  }
  price() {
    return faker.commerce.price()
  }
  companyName() {
    return faker.company.companyName()
  }
  phone() {
    return faker.phone.phoneNumber()
  }
  musicGenre() {
    return faker.music.genre()
  }
  songName() {
    return faker.music.songName()
  }
}

const mockSettings = new MockValues()

export default mockSettings