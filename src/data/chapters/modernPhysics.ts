import type { Chapter } from '../../types/physics'

export const modernPhysics: Chapter = {
  id: 'modern-physics',
  title: '近代物理',
  enTitle: 'Modern Physics',
  accent: '#ec4899',
  description: '相对论与量子力学突破了经典物理的适用范围，构成现代物理的基石。',
  points: [
    {
      id: 'relativity',
      title: '狭义相对论',
      summary: '光速不变与相对性原理导致时间膨胀、长度收缩与质能关系。',
      formulas: [
        { latex: String.raw`\gamma = \frac{1}{\sqrt{1 - v^2/c^2}}`, note: '洛伦兹因子' },
        {
          latex: String.raw`\Delta t = \gamma\Delta t_0,\quad L = \frac{L_0}{\gamma}`,
          note: '时间膨胀与长度收缩（下标 0 表示固有量）',
        },
        { latex: String.raw`m = \gamma m_0,\quad E = mc^2`, note: '相对论质量与质能关系' },
        { latex: String.raw`E^2 = (pc)^2 + (m_0c^2)^2`, note: '能量–动量关系' },
      ],
      keyPoints: [
        '所有惯性系中光速都等于 c，与光源和观察者的运动无关。',
        '同时性是相对的：在一个惯性系中同时发生的异地事件，在另一个惯性系中一般不同时。',
        '固有时间最短、固有长度最长，运动参考系测得的时间变长、长度变短。',
        '低速条件下洛伦兹变换退化为伽利略变换，相对论效应可忽略。',
      ],
      level: 3,
    },
    {
      id: 'quantum-light',
      title: '光的量子性',
      summary: '光电效应与康普顿散射表明光具有粒子性，能量以量子形式交换。',
      formulas: [
        { latex: String.raw`E = h\nu,\quad p = \frac{h}{\lambda}`, note: '光子的能量与动量' },
        { latex: String.raw`h\nu = W + E_{k,\max}`, note: '爱因斯坦光电方程（W 为逸出功）' },
        {
          latex: String.raw`\lambda' - \lambda = \frac{h}{m_0c}(1 - \cos\theta)`,
          note: '康普顿散射',
        },
      ],
      keyPoints: [
        '存在红限频率，低于红限频率的光无论强度多大都不能产生光电子。',
        '光电流的饱和值与光强成正比，光电子的最大初动能与频率成正比。',
        '康普顿散射证明光子具有动量，是光粒子性的有力证据。',
        '光的波粒二象性：传播时体现波动性，相互作用时体现粒子性。',
      ],
      level: 2,
    },
    {
      id: 'quantum-mechanics',
      title: '量子力学基础',
      summary: '微观粒子具有波粒二象性，状态用波函数描述，能量常取分立值。',
      formulas: [
        { latex: String.raw`\lambda = \frac{h}{p}`, note: '德布罗意关系' },
        { latex: String.raw`\Delta x\,\Delta p \ge \frac{\hbar}{2}`, note: '海森堡不确定关系' },
        { latex: String.raw`E_n = \frac{n^2h^2}{8ma^2}`, note: '一维无限深势阱能级' },
        {
          latex: String.raw`-\frac{\hbar^2}{2m}\nabla^2\psi + U\psi = E\psi`,
          note: '定态薛定谔方程',
        },
      ],
      keyPoints: [
        '波函数的模方 |ψ|² 表示粒子出现的概率密度，需满足归一化条件。',
        '不确定关系不是测量精度的限制，而是微观粒子固有属性的体现。',
        '势阱中粒子的能量量子化，且存在零点能，不能静止。',
        '隧道效应是量子力学的重要推论，是扫描隧道显微镜的工作原理。',
      ],
      level: 3,
    },
    {
      id: 'atomic-structure',
      title: '原子结构与光谱',
      summary: '玻尔模型成功解释了氢原子光谱，量子力学给出更精确的图像。',
      formulas: [
        { latex: String.raw`E_n = -\frac{13.6\ \mathrm{eV}}{n^2}`, note: '氢原子能级' },
        {
          latex: String.raw`\frac{1}{\lambda} = R\left(\frac{1}{n_1^2} - \frac{1}{n_2^2}\right)`,
          note: '里德伯公式',
        },
        {
          latex: String.raw`r_n = n^2 r_1,\quad r_1 \approx 0.053\ \mathrm{nm}`,
          note: '玻尔半径',
        },
      ],
      keyPoints: [
        '玻尔模型的三个假设：定态、频率条件与角动量量子化。',
        '原子发光是电子在能级间跃迁的结果，谱线频率满足 hν = E₂ − E₁。',
        '四个量子数（n、l、m、mₛ）决定电子的状态，泡利不相容原理限制电子排布。',
        '玻尔模型只能解释氢原子等单电子体系，多电子原子需用量子力学处理。',
      ],
      level: 2,
    },
  ],
}
