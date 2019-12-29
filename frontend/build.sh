npm run build &&

rm -rf ./../src/public/ &&
mkdir ./../src/public &&

mv dist/index.html ./../src/views/index.html &&
mv dist/* ./../src/public