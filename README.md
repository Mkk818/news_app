## open App
```
expo start
```
## トラブルシューティング
### ■エミュレーターで起動できない

**→ expoを一度落として再起動する** <br>

`expo start` したターミナルにて `ctrl + c`で終了 <br>

※キャッシュクリアして再起動 <br>
再起動する際 `expo start -c` と-cオプションを追加 <br>

**→ node_modulesをクリアしてみる** <br>

フォルダを削除して `yarn install` にて再インストールしてみると解消する場合あり <br>

**→ エミュレータ内のExpo Clientを最新にする** <br>

iOS <br>
`expo client:install:ios`
Android <br>
`expo client:install:android`

エミュレータ内でExpo Clientアプリを削除して、再度 `expo start` してもOK <br>

※`”requires a newer version of Expo Client app"`のようなエラーメッセージが表示されている場合は、おそらくこれで解消

**→ XCodeを最新にする** <br>

### ■ スマホ実機で起動できない
**→ macとスマホが同じLAN環境にある確認する** <br>

**→ Expo Clientアプリを最新にする** <br>


**→ LANのセキュリティに阻まれている可能性**

### ■ Can't resolve 'expo-constants'のようなエラーが出る

**→ node_modulesをクリアしてみる**

フォルダを削除して `yarn install` にて再インストール

### ■ (React Navigation導入の際に)Tried to register two views with the same name RNCSafeAreaProvider のようなエラーが出る

→以下手順を実行
1. node_modulesフォルダとlockfile (yarn.lockもしくはpackage-lock.json)を削除する

2. package.jsonのexpoのバージョンを 38.0.8 にする

3. `react-native-safe-area-context` <br> package.jsonから削除する

4. yarn install (もしくはnpm install)を実行する

`expo install react-native-safe-area-context`
を実行