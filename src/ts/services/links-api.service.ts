export class LinksApiService {
  static instance: LinksApiService = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new LinksApiService();
    }
    return this.instance;
  }

  async getAllLinks(email: string) {
    return await fetch(`/api/get-links`, { method: 'POST', body: JSON.stringify({ email }) }).then((res) => res.json());
  }

  async saveLink({ link, timestamp, email }) {
    if (!link.startsWith('http://') && !link.startsWith('https://')) {
      link = `http://${link}`;
    }
    const previewData = await this.getLinkPreview(link);
    return await fetch(`/api/save-link`, {
      method: 'POST',
      body: JSON.stringify({ link, timestamp, email, previewData }),
    }).then((res) => res.json());
  }
  async deleteLink(link: string, email) {
    const deleteLink = firebase.functions().httpsCallable('deleteLink');
    await deleteLink({ link, email });
  }
  async getLinkPreview(link) {
    return await fetch(`https://link-preview-two.vercel.app/api/link-preview`, {
      method: 'POST',
      body: JSON.stringify({ link }),
    }).then((res) => res.json());
  }
}
