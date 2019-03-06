var shell = require('shelljs');

shell.exec('vuepress build');
shell.exec('git checkout -B gh-pages');
shell.exec('git add -f .vuepress/dist');
shell.exec("git commit -a  -m 'rebuild-website'");
shell.exec('git filter-branch -f --prune-empty --subdirectory-filter .vuepress/dist');
shell.exec('git push -f origin gh-pages');
shell.exec('git checkout -');