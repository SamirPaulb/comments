const Application = require('@waline/vercel');
const LinkInterceptor = require('@waline-plugins/link-interceptor');

module.exports = Application({
  plugins: [
    LinkInterceptor({
      whiteList: [
        'samir.pages.dev',
        'samirpaulb.github.io',
        'samirpaul.workers.dev',
        'web.samirpaul.workers.dev'
      ],
      blackList: [
        'baidu.com'
      ],
      // interceptorTemplate: `redirect to __URL`
    });
  ],
  async postSave(comment) {
    // do what ever you want after comment saved
  },
});
