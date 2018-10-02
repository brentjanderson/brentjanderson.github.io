const base = {
  name: 'Brent Anderson',
  url: 'https://www.brentjanderson.com',
};

const config = {
  /* meta tags */
  siteTitle: `${base.name} - Senior Software Engineer & Entrepreneur`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.name} is a senior software engineer & enterpreneur`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Senior Software Engineer & Entrepreneur',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',
};

module.exports = config;
