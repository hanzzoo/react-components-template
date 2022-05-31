# next-boilerpalte-project

next.js 用のボイラープレートプロジェクト

## branch

- [master (この README 記載のベーステンプレート)](https://github.com/hanzzoo/next-boilerpalte-project)
- [redux-toolkit-template(redux-toolkit を含めたテンプレート)](https://github.com/hanzzoo/next-boilerpalte-project/tree/redux-toolkit-template)

## 環境

- Next.js `12.1.6`
- Node.js `16.10.0`
- yarn `1.22.18`

## npm scripts

| コマンド          | 内容                                                          | 備考                                                                                 |
| ----------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `yarn dev`        | development mode でアプリを実行                               | 　                                                                                   |
| `yarn build`      | アプリをビルドする                                            |                                                                                      |
| `yarn start`      | production mode でアプリをビルドする                          | 前提として`yarn build`で production 用に最適化されたファイルが存在している必要がある |
| `yarn lint`       | コードに es-lint の check を実行する                          | git hook で commit 時に実行される                                                    |
| `yarn lint:fix`   | スタイル違反のコードに対する警告を es-lint のルールに修正する |                                                                                      |
| `yarn format`     | コードが prettier のルールに乗っ取っているか check を実行する |                                                                                      |
| `yarn format:fix` | コードを prettier のルール乗っ取って整形する                  | 　 git hook で commit 時に実行される                                                 |
| `yarn test`       | テストコードを実行する                                        | 　テストコードは`tests`配下に jest で記載する                                        |
| `yarn test:ci`    | CI でテストコードを実行する                                   | 　テストコードは`tests`配下に jest で記載する                                        |
