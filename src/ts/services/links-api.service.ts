export class LinksApiService {
  static instance: LinksApiService = null;
  static getInstance() {
    if (!this.instance) {
      this.instance = new LinksApiService();
    }
    return this.instance;
  }

  async getAllLinks(email: string) {
    // return Promise.resolve([
    //   {
    //     description: 'Curated tools & resources for people who make websites',
    //     image: 'https://toolkit.addy.codes/wp-content/uploads/2021/04/twitter-card.png',
    //     link: 'https://toolkit.addy.codes/',
    //     title: 'Web Design & Development Toolkit',
    //     url: 'https://toolkit.addy.codes/',
    //     timestamp: 1619397184037,
    //   },
    //   {
    //     image: 'https://abs.twimg.com/errors/logo23x19.png',
    //     link: 'https://twitter.com/explore/tabs/trending',
    //     title: 'Twitter / ?',
    //     url: 'https://twitter.com/explore/tabs/trending',
    //     timestamp: 1619397168518,
    //   },
    //   {
    //     description:
    //       "How fast is your download speed? In seconds, FAST.com's simple Internet speed test will estimate your ISP speed.",
    //     image: 'https://fast.com/assets/share/fb_en_____share_shot___.png',
    //     link: 'https://fast.com/',
    //     title: 'Internet Speed Test',
    //     url: 'https://fast.com/',
    //     timestamp: 1619397145541,
    //   },
    //   {
    //     description:
    //       'Comprehensive up-to-date news coverage, aggregated from sources all over the world by Google News.',
    //     image:
    //       'https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=w300',
    //     link: 'https://news.google.com/topstories',
    //     siteName: 'Google News',
    //     title: 'Google News',
    //     url: 'https://news.google.com/topstories?hl=en-US&gl=US&ceid=US:en',
    //     timestamp: 1619397111661,
    //   },
    //   {
    //     image: 'https://assets.vercel.com/image/upload/q_auto/front/zeit/twitter-card.png',
    //     link: 'https://vercel.com/dosanj/linkstore',
    //     title: 'Overview – Vercel',
    //     url: 'https://vercel.com/dosanj/linkstore',
    //     timestamp: 1619397086502,
    //   },
    //   {
    //     image: 'https://news.ycombinator.com/y18.gif',
    //     link: 'https://news.ycombinator.com/',
    //     title: 'Hacker News',
    //     url: 'https://news.ycombinator.com/',
    //     timestamp: 1619387906461,
    //   },
    //   {
    //     description: 'Quickly send and receive WhatsApp messages right from your computer.',
    //     image: 'https://static.facebook.com/images/whatsapp/www/whatsapp-promo.png',
    //     link: 'http://web.whatsapp.com',
    //     title: 'WhatsApp Web',
    //     url: 'https://web.whatsapp.com/',
    //     timestamp: 1608617006920,
    //   },
    //   {
    //     description:
    //       'Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.',
    //     image: 'https://www.facebook.com/images/fb_icon_325x325.png',
    //     link: 'http://fb.com',
    //     siteName: 'Facebook',
    //     title: 'Facebook - Log In or Sign Up',
    //     url: 'https://www.facebook.com/',
    //     timestamp: 1607580876968,
    //   },
    // ]);
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
    return await fetch(`/api/link-preview`, {
      method: 'POST',
      body: JSON.stringify({ link }),
    }).then((res) => res.json());
  }
}
