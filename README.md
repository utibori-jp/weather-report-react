# weather-report-react
年末年始に、
[こちら](https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%A4%E3%81%8F%E3%82%8BReact%E3%82%A2%E3%83%97%E3%83%AA-mod728-ebook/dp/B08XWMVX76)
を参考にReactを勉強したときのレポジトリです。
こちでは、OpenWeatherMapのAPIを使って、天気予報を取得して表示するアプリを作成したのですが、
教材でハンズオンで作ったものに加えて、ページ遷移や状態管理機能を追加し、より汎用的なWebアプリの作成に必要な技術をキャッチアップしました。

## 使い方
基本的には以下の手順に沿っていけば問題なく動くと思いますが、Dockerなどを利用していので、ローカル環境のバージョンによっては動かない場合がある点ご留意ください。
1. このレポジトリをクローンします。
2. [こちら](https://www.weatherapi.com/)のサイトに登録して、APIキーを発行します。
3. プロジェクトルートに`.env`ファイルを作成し、以下のようにAPIキーを記述します。
4. `npm run dev`等でアプリを起動します。
```:.env
VITE_WEATHER_API_KEY = your_api_key
```


## 技術選定の考え方
- React: Vueは以前少し学習したので、Vueと比べてReactにはどのような特徴があるのか気になったためです。ReactとVueの考え方の違いを切り口に、フロントエンドへの理解を深めることが目的です。
- TypeScript：この機会にReactと一緒に学習してしまおうと思い、TypeScriptを選択しました。
- Material UI: あまり凝ったデザインを作る予定はなかったため、コンポーネントベースで比較的簡単にそれっぽいデザインを実装できるMaterial UIを選択しました。
- React-router-dom: TanStack Routerというライブラリもあるようでしたが、React-router-domのほうがWeb標準に準拠しているとのことだったので、こちらを選択しました。
- Recoil: あまり複雑な状態管理を伴うアプリケーションを実装するつもりはなかったので、最もシンプルなコードが書けるRecoilを選択しました。

## 実装した機能
ハンズオンで、APIを使ってリクエストを行い、取得した情報を表示する部分まではできていたので、そこに以下を追加しました。
3つ目の機能については、Propsでも問題なくできますが、キャッチアップもかねて、状態管理ライブラリを用いた実装を行いました。
- Material UIを使って、デザインを整えた。
- Home画面を追加し、画面遷移機能を実装した。
- Home画面のフォームに入力した情報をもとに、WeatherReport画面で天気の情報を表示できる機能を追加した。
