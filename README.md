- higher-order function （高位関数）

関数とかを引数に取ったり、関数を返す関数らしい

> One such technique is using higher order functions. Higher order functions are functions that take one or more functions as arguments, or return a function as their result.
> https://www.freecodecamp.org/news/higher-order-functions-in-javascript-explained/

- こちらのサイトをベース
- https://ja.react.dev/learn/start-a-new-react-project
  []

"jsx": "preserve" で、（tsconfig.json）型チェックのみを ts が行う指定
jsx を js と html ? として解釈するために babel(トランスパイラ)が必要だけれど、
そいつらはそもそも Next を使った時点で内部的に使ってくれてる
webpack, turbopack なんかも同じ、こいつらはバンドラー（css などのアセットを圧縮）

ちなみに next は tsconfig.json があれば、勝手に ts を利用してくれる

- hydration
  クライアントに SSR して HTML を送った後に、React が js を使って動的なアプリにするプロセス

- global.d.ts
  css ファイル全体を string 型の key value のオブジェクトとして見て、ts で使えるようにする

- App router
  page router の代替となる PJ 構造
  layout.tsx が今までの \_app.tsx

- 分割代入

  - esa 参照（Next.js 14 入門 ）

- Cognito の AuthProvider は$$、クライアントコンポーネントである React Context を使ってるので、layout.tsx では動かない
- axios と fetch につい$$て

  - どっちも選択肢ではあるっぽいけど、fetch でよさそうかな〜
  - https://qiita.com/kinopy513/items/f60b3aba6d16c2367588
  - うそ、next なら fetch っぽいな？
    - polyfil = 機能互換を持たせてる（古いブラウザだと fetch 対応してないけど、next.js は対応してるから気にせず使える)
  - https://www.reddit.com/r/nextjs/comments/101ibo6/fetch_api_vs_axios_for_api_routes/
  - んー、派閥としてはどっちもあるのか、next ならやや fetch 郵政って感じ？
  - https://scrapingrobot.com/blog/fetch-vs-axios-in-next-js/#fetch-vs-axios-react

- 一部クライアントに切り出すことでキルんだ（NextAuthProvider）

  - https://zenn.dev/shimotani/articles/21743d015fc5e6

- layout.tsx（RootLayout）

  - その階層全体に適用するレイアウト, page.tsx はその階層のコンテンツで、children として page.tsx が React コンポーネントとして渡される

- nextauth : signIn()

  - authOptions の設定が基本的に利用される

- useEffect(副作用の実施)

  - レンダリングに直接関係ない、データの取得 DOM 操作などを実行するためのフック。レンダリング再度行われる

- [API Routes](https://zenn.dev/kaitok/articles/f08a20513a98ff)
  - api は別で定義するって感じで一旦は
  - > Next.js の API ルートは、Next.js アプリケーション内でサーバーレスの API エンドポイントを定義するための特別なディレクトリです。このディレクトリ内のファイルは、サーバーサイドで実行される API エンドポイントとして機能し、クライアントからのリクエストに対してデータを返すことができます。
  - `pages/api` 配下に置くことで、それがパスになる（`pages/api/user.js` -> `api/user.js`）
  - ルール
    - サーバーサイドコンポーネントのみ可能
    - api のハンドラとなる関数が定義されていること ↓
    - [これによれば](https://nextjs.org/learn-pages-router/basics/api-routes/creating-api-routes)、`handler`関数を定義するだけでいいぽいな
    - [これがわかりやすいかな〜](https://dev.to/fabrikapp/mastering-nextjs-1314-app-router-and-api-routes-fbn)

```js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello, Next.js API!" });
}
```

- [App router における API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

  - `app`配下に定義する、`page.js`と同じディレクトリに存在してはならない（まぁ、api だからね）
  - > Route Handlers are defined in a route.js|ts file inside the app directory:
  - > Route Handlers can be nested anywhere inside the app directory, similar to page.js and layout.js. But there cannot be a route.js file at the same route segment level as page.js.

## ユーティリティ系列

- Omit ユーティリティ

  - Omit<対象, 除外するプロパティ>
    - 除外したプロパティは存在するとエラーになるわけだ
  - Omit< Config, "email"> みたいな
    - キーはもちろん、複数指定もできる
    - Omit<Partial<OAuthConfig<P>,"options" | "type">>

- Pick
  - 対象のキーを抜き出す
- Required
  - 対象のキーを必須とする

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
