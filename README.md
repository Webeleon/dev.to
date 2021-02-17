# unofficial API client for dev.to API

[![Coverage Status](https://coveralls.io/repos/github/Webeleon/dev.to/badge.svg?branch=master)](https://coveralls.io/github/Webeleon/dev.to?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![Test and coverage](https://github.com/webeleon/dev.to/workflows/Test%20and%20coverage/badge.svg)

*This repository is not related to the dev.to organisations.*

## Getting started

```bash
npm i @webeleon/dev.to
```

### Use the all inclusive client
```typescript
import { DevTo } from '@webeleon/dev.to';

const devtToClient = new DevTo('API KEY');

devtToClient
  .articleApi
  .getUserPublishedArticle()
  .then((articles: Article[]) => {
    // do some stuff ;) 
  });
```

### Use a specific client

```typescript
import { ArticleApi } from '@webeleon/dev.to';

const articleApiClient = new ArticleApi('API _KEY');

articleApiClient
  .getUserPublishedArticle()
  .then((articles: Article[]) => {
    // do some stuff ;) 
  });
```

## Dev.to API support
```
Work in progress.
At the moment only endpoint required for the site https://webeleon.dev are implemented
If you need more endpoints make a PR or create an Issue
```

### Article

- [get article by id](https://docs.dev.to/api/#operation/getArticleById)
- [get user published articles](https://docs.dev.to/api/#operation/getUserArticles)

## Useful Links
- :link: [dev.to API documentation](https://docs.dev.to/api/)
- :link: [NPM package](https://www.npmjs.com/package/@webeleon/dev.to)
- :link: [discord support server](https://discord.com/invite/a9PdTrv)