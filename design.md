# The One - JS SDK

The design of this SDK is pretty straightforward, modeling the API fairly closely while providing some niceties.

- I modeled each function after its associated REST endpoint, and stuck them all in [TheOneClient](./lib/index.ts).
- API calls and error handling are done in the separate [APIClient](./lib/api-client/index.ts).
- API entities were given types manually, and can be found under [api-models](./lib/api-models)
- In order to facilitate related resources (e.g. "movie quotes"), I created a separate functions (e.g. `movieQuotes(movieId)`) instead of trying to chain or combine them
  - This was simple, and would be easier to extend rather than something that is more intertwined (1 layer deep is easier to maintain than N>1 layers deep)
  - **TLDR**; `Clear, Consistent, Easy-To-Follow > Concise, Convenient, Complex`
- API endpoint integration was entirely test-driven
