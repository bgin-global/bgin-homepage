import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

const EASYCHAIR_HREF = "https://easychair.org/conferences/?conf=bsaq2026";
const ACCESS_HREF = "https://www.iis.u-tokyo.ac.jp/ja/access/";
const HUB_HREF = "/projects/pqc-migration";

export default function Bsaq2026CallPage() {
  return (
    <main className="min-h-screen bg-white w-screen" lang="ja">
      <Header />

      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Image
            src="/images/Logo/BGIN_horizontal_01_black.png"
            alt="BGIN Logo"
            width={300}
            height={100}
            className="mx-auto mb-8"
          />
          <h1 className="font-FamiljenGrotesk text-3xl md:text-[2rem] leading-tight font-semibold tracking-tight text-black text-center mb-4">
            論文募集（Call for Papers）
          </h1>
          <p className="font-FamiljenGrotesk text-2xl leading-snug font-semibold text-black text-center mb-3">
            量子計算機時代のブロックチェーンシステムの安全性確保技術ワークショップ
          </p>
          <p className="text-gray-700 text-center mb-8">
            （Workshop on Technologies for Securing Blockchain Systems in the
            Age of Quantum Computers: BSAQ2026）
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={EASYCHAIR_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800"
            >
              EasyChair で投稿する
            </a>
            <Link
              href={HUB_HREF}
              className="inline-flex px-6 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 font-semibold hover:bg-gray-50"
            >
              PQC Migration hub
            </Link>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 text-lg leading-7 text-gray-800">
          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            主催（二組織による共催）：
          </h2>
          <ul className="list-none pl-0 mb-8 space-y-2">
            <li>
              ・東京大学生産技術研究所
              ディペンダブル社会情報プラットフォーム研究センター
            </li>
            <li>・BGIN（Blockchain Governance Initiative Network）</li>
          </ul>

          <p className="mb-2">開催日： 2026年11月30日（月）</p>
          <p className="mb-2">
            会場：
            東京大学駒場リサーチキャンパス総合研究実験棟(An棟)コンベンションホール
            <br />
            東京都目黒区駒場4-6-1
          </p>
          <p className="mb-2">
            アクセス：{" "}
            <a
              href={ACCESS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold hover:underline break-all"
            >
              https://www.iis.u-tokyo.ac.jp/ja/access/
            </a>
          </p>
          <p className="mb-10">※ハイブリッド開催ではありません。</p>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            概要
          </h2>
          <p className="mb-4">
            NISTの耐量子計算機暗号（PQC）プログラムは、アルゴリズム選定の段階から、実装展開・移行・測定・エコシステム全体の評価の段階へ移行しました。パブリックブロックチェーンをはじめとする分散型台帳は、長期にわたって有効性が問われ得る電子署名と状態を蓄積し続けています。いま問われているのは、もはや「どの暗号プリミティブを選ぶか」だけではありません。何をオンチェーンに置くのか、移行をどのように段階化するのか、ハイブリッド設計や暗号アジリティをどう仕様化するのか、そして評価基準をステークホルダー間でどう合意するのかが問われています。
          </p>
          <p className="mb-10">
            本ワークショップは、これらの問いを扱う、特定のチェーン・ベンダーに依らない、学術的な議論の場として開催されます。新規PQCプリミティブを募る場ではなく、また標準化機関が既に選定したものを超えて特定のチェーン・製品・アルゴリズムを推奨するものでもありません。
          </p>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            募集トピック（例）
          </h2>
          <p className="mb-4">以下を含みますが、これらに限りません。</p>

          <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-6 mb-3">
            PQC移行
          </h3>
          <ul className="list-none pl-0 mb-6 space-y-2">
            <li>
              ●ブロックチェーン／DLTシステムの、NIST選定またはその他の標準化された耐量子署名・鍵確立方式への移行
            </li>
            <li>
              ●台帳プロトコルにおけるハイブリッド署名、段階的カットオーバー、後方互換性、暗号アジリティ
            </li>
            <li>
              ●PQCのサイズおよび検証コストが、スループット、ノードコスト、ライトクライアント、分散性に与える影響
            </li>
            <li>
              ●評価手法：ベンチマーク、テストベッド、再現性、形式手法、実装セキュリティ
            </li>
            <li>
              ●オープンなマルチステークホルダー型コンペティションおよび評価枠組みの設計（AES、SHA-3、NIST
              PQC、移行志向のプログラムからの教訓）
            </li>
            <li>
              ●標準化への橋渡し：競技・研究の成果 →
              IETF／ISO／業界プロファイル／チェーン固有のBIPや仕様
            </li>
            <li>
              ●移行のガバナンス：情報開示、ライセンシング、利用者・開発者・マイナー／バリデータ・運用者間の調整
            </li>
            <li>
              ●長寿命台帳に対する脅威モデル（例：harvest-now /
              forge-later、休眠資産、競合的移行）
            </li>
            <li>
              ●「PQC-ready」という主張の測定と根拠 ―
              何が標準化可能で、何が標準化できないのか
            </li>
          </ul>

          <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-6 mb-3">
            高度な鍵管理
          </h3>
          <ul className="list-none pl-0 mb-6 space-y-2">
            <li>
              ●MPC／マルチシグ／ZKP の文脈における鍵の生成・更新・復旧・失効
            </li>
            <li>●t-of-n 閾値障害下における可用性、RTO、一貫性</li>
            <li>
              ●ウォレット、バリデータ、カストディ、スマートコントラクト管理者にまたがる責任分界
            </li>
          </ul>

          <h3 className="font-FamiljenGrotesk text-lg font-semibold text-black mt-6 mb-3">
            評価基準とテストベッド
          </h3>
          <ul className="list-none pl-0 mb-10 space-y-2">
            <li>●理論的安全性と実装性能を統合する評価ルーブリックの設計</li>
            <li>
              ●性能指標の例：レイテンシ、TPSの変動、ブロック伝播遅延、CPU／メモリのオーバーヘッド、鍵長および署名サイズ
            </li>
            <li>●地理的分散、および「十分な分散性」の定義または下限</li>
            <li>
              ●再現性（テストハーネス、ログ形式、ベンチマークスクリプトの公開）
            </li>
            <li>●中立性と利益相反（COI）、オープンソース／IPRに関する期待</li>
            <li>●短期的に実用的な解と長期的なアジリティの重み付け</li>
          </ul>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            募集対象外の投稿（例）
          </h2>
          <ul className="list-none pl-0 mb-10 space-y-2">
            <li>●NISTプロセス外の新規PQC方式の提案を主たる目的とする論文</li>
            <li>●特定のベンダーまたはチェーンの製品宣伝に終始する論文</li>
            <li>
              ●査読可能な技術的主張や評価手法を伴わない政策提言のみの論文
            </li>
          </ul>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            原稿書式等
          </h2>
          <ul className="list-none pl-0 mb-10 space-y-3">
            <li>
              ●言語
              <ul className="list-none pl-6 mt-1">
                <li>➢日本語または英語</li>
              </ul>
            </li>
            <li>
              ●書式
              <ul className="list-none pl-6 mt-1">
                <li>
                  ➢幅広い異なる学術分野やセクターからの投稿を推奨するため自由書式とし、著者が使用できる標準的なフォーマットで、参考文献を含め最大12ページ（付録は任意。査読者に読む義務はありません）。ページ数の下限は設けません。内容がSoK
                  (Systematization of Knowledge) / Vision paper
                  である場合は、タイトルの冒頭に SoK: または Vision:
                  を付してください。
                </li>
              </ul>
            </li>
            <li>
              ●査読プロセス
              <ul className="list-none pl-6 mt-1">
                <li>➢各投稿はプログラム委員会の委員により査読されます。</li>
              </ul>
            </li>
            <li>
              ●公開ポリシー
              <ul className="list-none pl-6 mt-1 space-y-1">
                <li>
                  ➢本ワークショップは正式な論文集を発行しません。ただし、論文題目・著者名・所属といった情報は、BGINのホームページにおいて本ワークショップのプログラム情報として公開します。
                </li>
                <li>
                  ➢採択された論文の著者は、自身や所属組織のホームページ等において同論文を公開する場合、そこに本ワークショップで採択され発表された論文だという情報を添えることができます。
                </li>
                <li>
                  ➢本ワークショップでの発表は、本ワークショップとしては、その後に他所へ投稿・公表することを妨げるものではありません（それら他所のポリシーに従って下さい）。
                </li>
              </ul>
            </li>
            <li>
              ●その他の注意事項
              <ul className="list-none pl-6 mt-1">
                <li>
                  ➢投稿論文はオリジナルであり、かつ論文集を発行する他所で査読中でないことを要します。論文PDFに著者名と所属は記載しないでください。著者自身の先行研究を引用する場合は、三人称で記述してください。
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            重要な日程
          </h2>
          <p className="mb-4">
            特記なき限り Anywhere on Earth（AoE = UTC−12時間） です。
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="bsaq-dates w-full text-left text-base text-gray-800">
              <thead>
                <tr>
                  <th className="bg-gray-50 font-semibold">項目</th>
                  <th className="bg-gray-50 font-semibold">日付</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>論文投稿締切</td>
                  <td>2026年11月4日（水）</td>
                </tr>
                <tr>
                  <td>採否通知（予告無く延期する場合があります）</td>
                  <td>2026年11月16日（月）</td>
                </tr>
                <tr>
                  <td>ワークショップ開催（現地時間）</td>
                  <td>2026年11月30日（月） 東京・駒場</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            投稿方法（EasyChair）
          </h2>
          <ul className="list-none pl-0 mb-10 space-y-3">
            <li>
              ●論文は本ワークショップのEasyChairサイト
              <br />
              <a
                href={EASYCHAIR_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold hover:underline break-all"
              >
                https://easychair.org/conferences/?conf=bsaq2026
              </a>
              <br />
              を通じて投稿してください。
            </li>
            <li>
              ●投稿手順
              <ul className="list-none pl-6 mt-1 space-y-1">
                <li>➢EasyChairのアカウントをお持ちでない場合は作成してください。</li>
                <li>
                  ➢ログインし、本ワークショップ（EasyChairにおける略称はBSAQ2026）のページを開いて投稿してください。
                </li>
                <li>
                  ➢ダブルブラインド査読のため、論文のPDF中に著者名および所属を記載しないでください。
                </li>
                <li>
                  ➢タイトル・アブストラクト・著者情報といった基本情報をEasyChairへ入力したにもかかわらず締切までに論文のPDFをアップロードしなかった投稿に関しては、本ワークショップのスコープとの関連性を重視して評価した上で、Work-in-Progress(WiP)セッションにおける発表として採択する場合があります。WiP採択の場合には、ワークショップにおいて発表する意思確認をしてから、プログラムに加えることとします。
                </li>
                <li>
                  ➢採択された各論文について、著者のうち少なくとも1名がワークショップに参加し、発表を行う必要があります。
                </li>
              </ul>
            </li>
          </ul>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            参加登録
          </h2>
          <p className="mb-4">
            事前の参加登録は不要です。当日、直接現地の受付デスクへお越し下さい。
          </p>
          <p className="mb-10">
            論文を投稿されない方を含め、どなたでも参加可能です。聴講および議論への参加のみを目的としたご参加も歓迎いたします。参加費は無料です。
          </p>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            運営体制
          </h2>
          <ul className="list-none pl-0 mb-10 space-y-2">
            <li>
              ●実行委員長／共同プログラム委員長　松浦
              幹太（東京大学生産技術研究所
              ディペンダブル社会情報プラットフォーム研究センター）
            </li>
            <li>
              ●実行副委員長／共同プログラム委員長　松尾
              真一郎（Blockchain Governance Initiative
              Network（BGIN）／Georgetown University）
            </li>
          </ul>

          <h2 className="font-FamiljenGrotesk text-xl leading-snug font-semibold text-black mb-4">
            問い合わせ先
          </h2>
          <p className="mb-2">
            ワークショップおよび本論文募集に関するお問い合わせ：
          </p>
          <p className="mb-8">
            松尾 真一郎　
            <a
              href="mailto:matsuo@bg2x.org"
              className="text-blue-700 font-semibold hover:underline"
            >
              matsuo@bg2x.org
            </a>
          </p>
          <p>以上</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
