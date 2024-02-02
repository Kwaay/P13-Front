import Service from './Service';

export default class UserService extends Service {
  static resourceUrl = 'http://localhost:3001/api/v1/user';

  static async getProfile(token) {
    try {
      const res = await fetch(`${UserService.resourceUrl}/profile`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
