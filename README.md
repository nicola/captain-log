# captain-log
Automating the logs from your favorite captains

#### Very WORK IN PROGRESS


## Install

```
npm install captain-log
```

## Usage

```
const captain = require('captain-log')
captain([{
  title: 'What happened (ongoing)', // This will be the title of this group of issues
  repo: 'ipld/specs', // this is the repo to get these from
  state: 'open', // want open issues or closed ones?
  labels: [], // any label to filter?
  exclude_labels: ['needs spec'], // any label to exclude?
  todo: true, // want to show the list as a todo?
  since: '2016-09-10T12:00:00Z', // want to get them from a particular time?
  exclude: [13], // want to exclude a particular issue?
  prefix: ':tada:' // wants to prefix each issues with a special emoji 🎉?
}])
```

will output

```
### What happened (ongoing)
- :tada: [ ] #19 : Idea for permanent mutable links
- :tada: [ ] #14 : Adding Introduction, Abstract and Scope
- :tada: [ ] #12 : Skeleton of IPLD v1 spec
- :tada: [ ] #4 : Selectors: Use cases (from Q3 Workshop)
```

## Quick history

I learned the practice of writing a captain.log from [@daviddias](https://github.com/diasdavid/) in his work on `js-ipfs` (see his [really cool log](https://github.com/ipfs/js-ipfs/issues/30)). When I started my [captain.log](https://github.com/ipld/specs/issues/13) I found really useful to list all the different issues that are open, closed, that need a spec that had something happening & so on. This process is very slow for humans but fast for machines :)

## License

MIT
