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
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = `http://${link}`;
    }
    const previewData = await this.getLinkPreview(link);
    const saveLink = firebase.functions().httpsCallable('saveLink');
    return await saveLink({ link, timestamp, previewData });
  }
  async deleteLink(link: string) {
    const deleteLink = firebase.functions().httpsCallable('deleteLink');
    await deleteLink({ link });
  }
  async getLinkPreview(link) {
    return await fetch(`/api/link-preview?link=${link}`).then((res) => res.json());
  }
}
