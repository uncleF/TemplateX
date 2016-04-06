module.exports = (grunt, options) => {

  var project = options.project;

  return {
    optimize: {
      cwd: project.res.js.dir,
      src: ['*.js', '!*.min.js'],
      dest: project.res.js.dir,
      expand: true
    }
  };

};
