const request = require('request')
const async = require('async')

function getIssues (config, callback) {
  // console.log(createQuery(config))
  request(
    {
      url: createQuery(config),
      headers: {
        'User-Agent': 'Captain-log'
      }
    },
    (err, req, body) => {
      callback(err, JSON.parse(body))
    })
}

function display (config, data) {
  console.log(`### ${config.title}`)
  // TODO if data is not array, complain, we have got an error
  data
    .filter(d => {
      if (config.exclude && config.exclude.includes(d.number)) {
        return false
      }
      if (config.exclude_labels) {
        const excluded = d.labels
          .some(l => config.exclude_labels.includes(l.name))
        if (excluded) {
          return false
        }
      }
      return true
    })
    .forEach(d => {
      let prefix = ''
      d.number = '#' + d.number
      if (config.prefix) {
        prefix += ' ' + config.prefix
      }
      if (config.todo) {
        prefix += ` [${d.state === 'closed' ? 'x' : ' '}]`
      }
      if (config.issueLink) {
        d.number = `[${d.number}](${d.url})`
      }
      console.log(`-${prefix} ${d.number} : ${d.title}`)
    //   console.log(d.labels.map(d => d.name).join(', '))
    })
}

function configToUrl (config) {
  const string = []
  if (config.state) string.push(`state=${config.state}`)
  if (config.labels && config.labels.length) {
    const labels = config.labels.join(',')
    string.push(`labels=${labels}`)
  }
  if (config.since) string.push(`since=${config.since}`)
  return string.join('&')
}

function createQuery (config) {
  return `https://${config.auth}@api.github.com/repos/${config.repo}/issues?${configToUrl(config)}`
}

function runConfigs (configs, auth) {
  async.forEachSeries(configs, (config, done) => {
    if (!config.auth) {
      config.auth = auth || ''
    }
    getIssues(config, function (err, data) {
      display(config, data)
      done(err)
    })
  })
}

module.exports = runConfigs
