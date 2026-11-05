import type { Chapter } from '../../types/physics'

export const oscillations: Chapter = {
  id: 'oscillations',
  title: '振动与波动',
  enTitle: 'Vibration & Waves',
  accent: '#8b5cf6',
  description: '简谐振动是周期性运动的原型，波动是振动在介质中的传播。',
  points: [
    {
      id: 'shm',
      title: '简谐振动',
      summary: '回复力与位移成正比反向时的运动，可用旋转矢量与相位描述。',
      formulas: [
        { latex: String.raw`x = A\cos(\omega t + \varphi)`, note: '简谐振动方程' },
        {
          latex: String.raw`\omega = \sqrt{\frac{k}{m}},\quad T = 2\pi\sqrt{\frac{m}{k}}`,
          note: '弹簧振子',
        },
        { latex: String.raw`T = 2\pi\sqrt{\frac{l}{g}}`, note: '单摆（小角度）' },
        {
          latex: String.raw`E = \frac{1}{2}kA^2 = \frac{1}{2}mv^2 + \frac{1}{2}kx^2`,
          note: '振动总能量守恒',
        },
      ],
      keyPoints: [
        'A、ω、φ 是简谐振动的三个特征量，初相 φ 由初始条件决定。',
        '位移最大处速度为零、加速度最大；平衡位置处速度最大、加速度为零。',
        '旋转矢量法把相位差转化为几何角度，求合振动的初相很方便。',
        '弹簧振子的周期只由 m、k 决定，与振幅无关。',
      ],
      examples: [],
      level: 1,
    },
    {
      id: 'superposition',
      title: '振动的合成与阻尼',
      summary: '同方向同频率振动合成仍为简谐振动；频率相近时出现拍现象。',
      formulas: [
        {
          latex: String.raw`A = \sqrt{A_1^2 + A_2^2 + 2A_1A_2\cos\Delta\varphi}`,
          note: '同方向同频率振动合成',
        },
        { latex: String.raw`\nu_{\mathrm{beat}} = |\nu_1 - \nu_2|`, note: '拍频' },
        { latex: String.raw`x = A_0 e^{-\beta t}\cos(\omega' t + \varphi)`, note: '阻尼振动' },
      ],
      keyPoints: [
        'Δφ = 2kπ 时振动加强，Δφ = (2k+1)π 时振动减弱。',
        '相互垂直、频率相同的两振动合成一般为椭圆（李萨如图形）。',
        '受迫振动稳定后频率等于驱动力频率，与固有频率无关。',
        '共振时振幅最大，阻尼越小共振峰越尖锐。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'mechanical-wave',
      title: '机械波',
      summary: '振动状态在弹性介质中传播，形成波长、频率、波速的关系。',
      formulas: [
        {
          latex: String.raw`y = A\cos\left[\omega\left(t - \frac{x}{u}\right)\right]`,
          note: '沿 x 正方向传播的平面简谐波',
        },
        { latex: String.raw`u = \lambda\nu = \frac{\lambda}{T}`, note: '波速、波长与频率的关系' },
        { latex: String.raw`\Delta\varphi = \frac{2\pi\Delta x}{\lambda}`, note: '同一时刻两点的相位差' },
      ],
      keyPoints: [
        '波是相位（振动状态）的传播，介质质点并不随波迁移。',
        '波速由介质性质决定，频率由波源决定，波长由两者共同决定。',
        '波从一种介质进入另一种介质时频率不变，波速与波长改变。',
        '写波动方程时，沿 x 正向传播取 −x/u，反向取 +x/u。',
      ],
      examples: [],
      level: 2,
    },
    {
      id: 'wave-interference',
      title: '波的干涉与驻波',
      summary: '相干波叠加产生稳定的加强或减弱分布；驻波是两列反向行波的合成。',
      formulas: [
        {
          latex: String.raw`\Delta\varphi = \varphi_2 - \varphi_1 - \frac{2\pi(r_2 - r_1)}{\lambda}`,
          note: '两相干波在 P 点的相位差',
        },
        {
          latex: String.raw`\delta = k\lambda,\quad \delta = (2k+1)\frac{\lambda}{2}`,
          note: '波程差判据：前者加强，后者减弱（初相相同）',
        },
        {
          latex: String.raw`y = 2A\cos\frac{2\pi x}{\lambda}\cos\omega t`,
          note: '驻波方程',
        },
      ],
      keyPoints: [
        '相干条件：频率相同、振动方向相同、相位差恒定。',
        '波从波疏介质射向波密介质反射时存在半波损失。',
        '驻波相邻波节（或波腹）间距为 λ/2，波节两侧相位相反。',
        '驻波不传播能量，各质点能量在波节与波腹间往复转换。',
      ],
      examples: [],
      level: 3,
    },
    {
      id: 'doppler',
      title: '多普勒效应',
      summary: '波源与观察者相对运动时，接收到的频率发生变化。',
      formulas: [
        {
          latex: String.raw`\nu' = \nu\,\frac{u \pm v_0}{u \mp v_s}`,
          note: '靠近时取使 ν′ 增大的符号（v₀ 观察者、vₛ 波源）',
        },
      ],
      keyPoints: [
        '波源靠近观察者时接收频率升高，远离时降低。',
        '公式中的符号容易混淆，判断方法是“靠近则频率升高”。',
        '光的多普勒效应需用相对论公式，是红移、测速的物理基础。',
      ],
      examples: [],
      level: 2,
    },
  ],
}
