const aliases = (prefix = 'src') => ({
  'src': `${prefix}`,
  'components': `${prefix}/components`,
  'pages': `${prefix}/pages`,
  'config': `${prefix}/config`,
  'assets': `${prefix}/assets`,
});
  
module.exports = aliases;