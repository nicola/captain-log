const captain = require('./')

const configs = [
  {
    title: 'What happened (ongoing)',
    repo: 'ipld/specs',
    state: 'open',
    labels: [],
    exclude_labels: ['needs spec'],
    todo: true,
    since: '2016-09-10T12:00:00Z',
    exclude: [13]
  },
  {
    title: 'What happened (done)',
    repo: 'ipld/specs',
    state: 'closed',
    labels: [],
    exclude_labels: ['needs spec'],
    todo: true,
    since: '2016-09-10T12:00:00Z',
    exclude: [13]
  }, {
    title: 'To Agree',
    repo: 'ipld/specs',
    state: 'open',
    labels: ['discussion', 'spec'],
    todo: true
  }, {
    title: 'Agreed (needs spec writing)',
    repo: 'ipld/specs',
    state: 'open',
    labels: ['needs spec'],
    todo: false,
    prefix: ':tada:'
  }, {
    title: 'Others (proposals, question, ..)',
    repo: 'ipld/specs',
    state: 'open',
    labels: ['discussion'],
    exclude_labels: ['spec'],
    todo: true,
    exclude: [13]
  }]

captain(configs)
