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
        { expression: 'γ = 1/√(1 − v²/c²)', note: '洛伦兹因子' },
        { expression: 'Δt = γΔt₀，L = L₀/γ', note: '时间膨胀与长度收缩（Δt₀、L₀ 为固有量）' },
        { expression: 'm = γm₀，E = mc²', note: '相对论质量与质能关系' },
        { expression: 'E² = (pc)² + (m₀c²)²', note: '能量–动量关系' },
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
        { expression: 'E = hν，p = h/λ', note: '光子的能量与动量' },
        { expression: 'hν = W + Ek,max', note: '爱因斯坦光电方程' },
        { expression: 'λ′ − λ = (h/m₀c)(1 − cosθ)', note: '康普顿散射' },
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
        { expression: 'λ = h/p', note: '德布罗意关系' },
        { expression: 'Δx Δp ≥ ħ/2', note: '海森堡不确定关系' },
        { expression: 'Eₙ = n²h²/(8ma²)', note: '一维无限深势阱能级' },
        { expression: '−ħ²/(2m) ∇²ψ + Uψ = Eψ', note: '定态薛定谔方程' },
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
        { expression: 'Eₙ = −13.6 eV/n²', note: '氢原子能级' },
        { expression: '1/λ = R(1/n₁² − 1/n₂²)', note: '里德伯公式' },
        { expression: 'rₙ = n²r₁，r₁ ≈ 0.053 nm', note: '玻尔半径' },
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
