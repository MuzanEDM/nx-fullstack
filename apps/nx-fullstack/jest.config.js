module.exports = {
  name: 'nx-fullstack',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/nx-fullstack',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
