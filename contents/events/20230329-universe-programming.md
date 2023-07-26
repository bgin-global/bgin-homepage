---
title: "Blockchain Summit 2023"
date: "2023 Mar. 29"
location: "New York, US"
description: "The Blockchain Summit 2021 was a huge success, with over 500 attendees from around the world. The summit featured keynote speakers from the top Blockchain companies, as well as breakout sessions and networking opportunities."
---

コンピュータの性能は指数関数的な進化を遂げています。
5年かかると言われていた計算は5分に短縮され、AIは司法試験に合格し、量子コンピュータがさらなる計算パラダイムをもたらし、ブロックチェーンは複数のコンピュータノードが自律分散的にstateの更新を行なうことを可能にしました。

それらのパラダイムはいずれ一つの点として結びつきます。それが「宇宙をプログラムする」ことです。
宇宙をプログラムするということは、すなわち惑星や我々人間をプログラムするということです。生命・遺伝子・光合成・核融合などの全ての現象です。それは映画「Matrix」のように、今我々がいる現実世界を模倣することになります。

宇宙をプログラムすることは、すなわち無限を表現することです。それはこの世の全てを表現することと同義であり、コンピュータにとって最大のゴールと言えるでしょう。

私は今日、それが達成されるために必要なことを整理します。

## Approarches

宇宙を表現するというのがとても壮大に聞こえ、イメージがつきにくいかもしれません。
まず、どのようなアプローチで宇宙を表現することができるのか考えます。

#### 1. top-down

自律する個々のオブジェクトを定義します。「人」「惑星」「空気」「木」といったものです。そしてそれぞれのオブジェクトの性質(個体・液体・密度)やふるまいを定義する方程式を割り当てます。オブジェクトの集合が宇宙を形成します。

これには、昨今のコンピュータシミュレーションに近い手法で個々のオブジェクトの運動を予め制御する必要があります。

このアプローチには、オブジェクトの膨大な数と、それぞれのオブジェクトを制御するための膨大な場合分けと方程式が必要です。人の心理、行動、文化といった要素をそれぞれ事前定義しておく必要があります。そのために膨大なメモリストレージが必要です。

#### 2. bottom-up

宇宙を表現するための最小要素のふるまいのみを定義します。それは現時点では素粒子だと言われています。
20種類あると言われている素粒子を定義し、量子的なふるまい・方程式をプログラムします。
あとは宇宙の始まりと言われるビッグバンのように、微小空間にすべての素粒子を均等に配置します。そうしたら時間を再生し、1分後に水素、10年後にH2O、10億年後に太陽、40億年後に地球、そして45億年後にホモサピエンスができるのを観測します。

このアプローチには、素粒子の種類とふるまいの解明が不可欠です。ひいては素粒子の量子的な運動を解明することが必要です。さらに、それらをもとに分子をつくるだけで数兆個の素粒子が必要になります。そこには膨大な計算が必要です。

このアプローチを適用することは、我々がラプラスの悪魔になることを意味します。素粒子のすべての座標が計算され、1ms後の座標確率を予測することができます。脳を構成する素粒子の数と種類と位置も全て観測することができ、脳の構造を理解することができます。

bottom-upアプローチが理想です。宇宙を表現するために、宇宙の始まりと元素を定義するのがいいでしょう。逆にtop-downでは、量子的ふるまいを無視する古典的手法になり得ます。それは完璧に宇宙を再現するのには限界があるでしょう。

では次に、bottom-upアプローチを実現するための要素を考えます。

## pieces

要素として以下を挙げます。

#### 1. Quantum Computing

量子コンピューティングは量子ビットをもとに論理回路を構成し、計算をシュレディンガー方程式に当てはめてコンピューティングを行なう計算手法です。

量子のふるまいや運動を定義するのに量子コンピューティングを用います。原始的なコンピューティングよりも計算に適しています。

#### 2. Blockchain

Blockchainは電子コインの送金や出金のトランザクションをパーミッションレスな複数のコンピュータで自律分散的に管理するstate machineです。

量子の座標や状態を管理するstate machineとしてBlockchainを用います。
システムが自律分散的に稼働するための設計としてBlockchainを用います。量子の座標計算を適切に行なったコンピュータノードに報酬が与えられます。

#### 3. Distributed Computing

Distributed Computingは、プログラムの処理をコンピュータで分割して高度な計算能力を実現する手法です。

たとえば1+1と2+2を順次計算するアルゴリズムがあったとき、前者をNode Aが実行し、後者をNode Cが実行するようにスケジューラNode Cが制御するようなアーキテクチャです。並列コンピューティングとは異なり、それぞれのNodeは全く別の計算を行ないます。

計算性能をより柔軟でスケーラブルにするためにDistributed Computingを用います。

#### 4. Distributed Execution of Process

Distributed Computingのそれぞれのコンピュータのワークフロー制御とタイムスケジューリングを分散化します。そうすることでDistributed Computingから単一障害点を排除します。
さらに、量子座標といったケミカルパラダイムをそれらのアルゴリズムに適用することで事前定義されたプログラムから開放します。これはプログラムの抽象度を自由に行き来し、場合分けされた関数や変数を必要とせず柔軟な実行が可能になります。例えるならば、「人間」という構造体を定義した時に、「前に歩く」ことしか定義していなくても、「ぶつかったときに止まる」という行動を実行することができるようになります。

5. AI

素粒子の座標の計算過程や、遺伝子・脳の構造・心理・魂といったマクロな事象においてAIの力が必要になります。

## Architecture

大前提として、P2Pで稼働するアーキテクチャを考えます。それが現実世界の素粒子だからです。
それぞれの要素はこのようになります。(解像度はまだまだ低いです)。


## Challenges

これを達成するためにはまだいくつかの課題があります。

1. Quantum: まだ、量子のふるまいは完全に解明されていません。
2. Quantum Computing: まだ、量子コンピューティングは不完全です。
3. Cryptography: パーミッションレスな分散アーキテクチャを用いて量子が正しくふるまっているかを検証するために、まだまだセキュリティ的な課題があります。
4. Latency: P2Pアーキテクチャにおけるネットワークの遅延は依然として課題です。

## Steps

これを実現するためにどのようなステップを歩む必要があるでしょうか。
まず、それぞれの要素における研究は日々進めていく必要があります。
そして、それらが混じり合うためのディスカッションを日々続ける必要があります。私が今回提案したアーキテクチャを叩き台とし、批判的な議論を重ねていく必要があります。そのためには実装も必要です。


ーーーーーーー

What is Decentralized Execution

In decentralized execution, task-based workflows are not executed by a single server, but rather distributed and processed in parallel by multiple servers.

Simply put, the execution of A and B is shared among multiple servers.

Currently, whether it is an API or a smart contract, a transaction is received and processed by a single Node. Other Nodes or servers may be called asynchronously, but this is only treated as execution on the Node.

In decentralized execution, transaction is received by multiple Nodes, the workflow is divided and scheduled, and each Node processes the transactions in parallel. The partial result is also held as a state, and the node returns the result of the process.

For example, we have a function like this:

```js
async function A() {
    const b = await B()
    const c = await C()
    const d = await D()
    return b + c - d   
}
```

Here, when I call A(), call B(), C() and D() inside it.

If this is distributed execution by node a, node b, node c, and node d, node a receives A() and executes the functions B(), C(), and D() on node b, c, and d, respectively. Finally, one of the nodes or another proxy node returns the result of A().

Here, for simplicity, we have separated them by function, but a finer granularity is also acceptable. I think it is also possible to distribute by register operation unit.

What decentralized execution gives developers

First, there are several problems with centralized workflow processing.

one server can be a single point of failure because one server is responsible for all processing

heavy server load

large cost to build servers

there can be security issues with running processes under centralized management and control

Bringing a ceiling to the decentralization and scalability of the blockchain

Decentralized execution solves these and changes development experience significantly.

Infrastructure costs are significantly lower

Develop with far less code (completely changes what you write).

Build Maximum Viable applications from the start, not Minimum Viable

You can create network effects much larger than Web 3.0

You can get the same performance as Fugaku with 100 smartphones.

Bitcoin can allow users to participate in Mining with a smartphone or Raspberry-Pi with only 0.5GB memory.

Achieving this is very important under the idea of "decentralization" in the Internet.

Let’s get closer to reality

Now, the main issue is actually here.

Does This just democratize processing?

No. The potential of decentralized execution goes far beyond that. It is to bring the program closer to the laws of nature.

As you know, all current programs are simply executing something predefined.

Whether it's an API, a web application, or a smart contract, you just write the process first, deploy it to the server, and then the client executes it. How about AI? Yes it is the same way. It is just a model that has learned according to predefined learning rules and returns results.

To use a human analogy, we are simply given regular motions, such as getting up at 9:00 AM and blinking every three seconds. This is not natural.

Furthermore, a predefined process cannot do everything. There are a limited number of execution patterns, and they cannot all be covered.

Human blinking occurs under a number of irregular and uncertain conditions, such as when the eyes are dry, when there is an insect in the eye, or when the air is dry. All of these uncertain conditions are, in fact, infinitely varied. It is impossible to predefine them all. This is the limit where a program is just a program and cannot become reality.

Decentralized execution has the potential to support execution environments where tasks are not predefined, i.e., dynamic workflow coordination.

You can go right when you want to, blink when your eyes get tired, and sleep when you get sleepy. There is a possibility that computers can represent these biological or natural-like phenomena.

Decentralization is a necessary component of natural phenomena. Humans are always autonomous decentralized. Your actions are not dictated by anything. The laws of nature are found in observation, and the constitution is determined by someone else.

In fact, I do not yet know if decentralization of execution can directly describe this phenomenon, but it is certainly one factor, as we will infer from the methods we will discuss later.

How the world will change

So what will a world in which decentralized execution is implemented on the Internet bring to us?

The concept of application will change.

The freedom of applications will be unlimited, allowing for realistic communication. It will provide us more informative and unlimited experiences. An example would be this feature.

3D VR website that transitions to the back instead of bottom

Self-generated Monsters self-grown plants on the game

Metaverse space where one billion people battle simultaneously

Exchanges where prices fluctuate according to nature without liquidity

Blockchain that works without validators

What else do you think will change? Imagine and give us your ideas.

How?

So how and why is this feasible? Here are some implementation tips.

What I am thinking of is interpreting the process that Node performs in a different way. That is, not just a 1+1 kind of process, but more of a different resolution.

One is the Distributed OS, in which individual Nodes separate the kernel, which is the OS functionality, from the management components and distribute them across multiple Nodes. This enables distributed processing on a kernel-by-kernel basis.

The other is the Meta-process. A meta-process is an abstraction of a process. Meta-process is self-constructed based on workflow. The workflow is the order of execution of tasks, and the meta-process changes form based on the variables given for execution to this workflow. Here, the business logic is not predefined, but only a structure that is dynamically adjusted at runtime by process variables.

The other is the metaphors in nature. You map chemical metaphors, such as molecules, to opcodes and processes, and then design them to react. For example, there is a higher-order chemical language called HOCL(Higher Order Chemical Language). Here, integer values, types, and operators are all represented as a multiset of atoms. The program acts as a single solution, and when an atom is dropped, it simply repeats the reaction according to the reaction rules until it becomes inert. The architecture is based on a distributed operating system.

If you want to describe all phenomena more freely, I would prefer elementary particles.

The elementary particle is the smallest unit of all matter. There are only 12 particles, and the building blocks of all objects can be explained by combinations of particles without exception. For example, my headphone has 3 up-quarks + 4 electrons, etc.

Then there is the quantum to define the behavior of elementary particles. In the quantum world, all phenomena are based on uncertainty, which is reflected in the macroscopic results.

Creating from the smallest element, not the form, is the way to define the world as bottom-up as possible.

(However, how the quantum currently shapes our cells and bodies is not yet understood. It will take some time yet to get to this point.)

We believe that the key here is quantum computing. If all Nodes can be processed in a distributed manner using quantum computing, we will be closer to achieving an interactive world.

Finally

I believe the ultimate goal of the Internet is to reproduce the real world on a computer.

In other words, to create an electronic world that people can live in by programmatically representing real materials that grow autonomously according to natural laws such as air, smells, organisms, and nature.

I am absolutely sure that how to achieve decentralized execution and how to program quantum is the next step for the goal of the Internet.

I am waiting for your opinions.