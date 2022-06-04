// parser-preset.js
module.exports = {
  parserOpts: {
    headerPattern: /^(\w*): (\[C\d{4}\])(.*)$/,
    headerCorrespondence: ['type', 'jira-number', 'subject'],
  },
};