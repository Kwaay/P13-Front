import Service from './Service';

export default class UserService extends Service {
  static resourceUrl = 'http://localhost:3001/api/v1/user';

  static async login({ email, password }) {
    try {
      const res = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.ok) {
        return res.json();
      }
    } catch (err) {
      throw new Error('Unable to get user data');
    }
    return null;
  }
}
