rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:Promise-Devotion/zulu-ui-website.git
git push -f -u origin master &&
cd ..
echo https://promise-devotion.github.io/zulu-ui-website/#/
 