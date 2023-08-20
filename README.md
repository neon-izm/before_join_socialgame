[![release](https://img.shields.io/github/release/neon-izm/before_join_socialgame.svg?style=flat-square)](https://github.com/neon-izm/before_join_socialgame/releases)  ![Deploy](https://github.com/neon-izm/before_join_socialgame/workflows/Deploy/badge.svg?branch=master)

ソーシャルゲームのクライアントエンジニア入門以前　のWebサイトの中身リポジトリです。

https://neon-izm.github.io/before_join_socialgame/

# Contributing
Feel free to contribute. 
お気軽にissueやpull reqを送ってください。誤字脱字の訂正も歓迎します。

/website/docs
are simple markdown file.You can fork and write anything.

/website/docs  
内の*.mdファイルはシンプルなテキストのmarkdownファイルなので、ここだけをローカルのテキストエディタで編集すれば、プレビュー出来ます。

# Setup(Windows)
0. launch PowerShell with administrator
1. `install chocolatey`
2. `choco install nodejs --version=16.16.0`
3. `choco install yarn`
4. `yarn global add @docusaurus/init@next`
5. cd to website root directory (example  C:/Github/before_join_socialgame/website)
6. `yarn install`
7. `yarn run start`
8. access to http://localhost:3000/before_join_socialgame/

# deploy
automated to push gh-pages branch.
(for me)

0. launch Powershell
1. `set-item env:GIT_USER -value YOUR-GITHUB-USER`
2. `yarn deploy`
3. access to https://neon-izm.github.io/before_join_socialgame/



