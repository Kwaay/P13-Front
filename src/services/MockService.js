export default class MockService {
  static mockedData = null;

  static async getAll() {
    return { body: this.mockedData };
  }

  static async getOne(id) {
    return this.mockedData.find((data) => data.id === id);
  }
}
