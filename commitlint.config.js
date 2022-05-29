module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['fix', 'doc',]],
    'scope-empty': [2, 'never']
  }
}

/*
 * Functions that return true if commitlint should ignore the given message.
 * 如果需要commitlint忽略任何的message，这个函数就返回true
 */
// ignores: [(commit) => true],
/*
 * Whether commitlint uses the default ignore rules.
    是否使用默认的rules
 */
// defaultIgnores: true,


// ⧗   input: foo: change
// ✖   type must be one of [fix, doc] [type-enum]

// ✖   found 1 problems, 0 warnings
// ⓘ   Get help: https://github.com/conventional-changelog/commitlint/#what-is-commitlint