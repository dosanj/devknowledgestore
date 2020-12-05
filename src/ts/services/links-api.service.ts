import { ISavedLink } from '../../models';

export class LinksApiService {
  static instance: LinksApiService = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new LinksApiService();
    }
    return this.instance;
  }

  async getAllLinks() {
    return await firebase.functions().httpsCallable('getAllLinks')();
  }

  async saveLink({ link, timestamp }) {
    const saveLink = firebase.functions().httpsCallable('saveLink');
    return await saveLink({ link, timestamp });
  }
  async deleteLink(link: string) {
    const deleteLink = firebase.functions().httpsCallable('deleteLink');
    await deleteLink({ link });
  }
}
