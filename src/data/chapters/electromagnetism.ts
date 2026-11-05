import type { Chapter } from '../../types/physics'

export const electromagnetism: Chapter = {
  id: 'electromagnetism',
  title: '电磁学',
  enTitle: 'Electromagnetism',
  accent: '#10b981',
  description: '静电场、稳恒磁场到电磁感应，最终统一为麦克斯韦方程组。',
  points: [
    {
      id: 'electrostatics',
      title: '静电场',
      summary: '用电场强度与电势描述场，高斯定理是求解对称场分布的关键工具。',
      formulas: [
        {
          latex: String.raw`\vec{E} = \frac{\vec{F}}{q_0},\quad V = \frac{W}{q_0}`,
          note: '场强与电势的定义',
        },
        {
          latex: String.raw`\oint_S \vec{E}\cdot d\vec{S} = \frac{q_{\mathrm{in}}}{\varepsilon_0}`,
          note: '静电场高斯定理',
        },
        { latex: String.raw`\vec{E} = -\frac{dV}{dn}\hat{n}`, note: '场强指向电势降低最快的方向' },
        {
          latex: String.raw`C = \frac{Q}{U},\quad C_{\mathrm{parallel}} = \frac{\varepsilon_0\varepsilon_r S}{d}`,
          note: '电容与平行板电容器',
        },
      ],
      keyPoints: [
        '电场线始于正电荷、止于负电荷，不闭合；电势沿电场线方向降低。',
        '高斯定理对任意闭合面成立，但只有球、柱、面对称时才能直接求出场强。',
        '导体静电平衡：内部场强为零、表面场强垂直于表面、整体是等势体。',
        '介质中的高斯定理使用电位移 D，∮D·dS = q自由。',
      ],
      level: 2,
    },
    {
      id: 'magnetostatics',
      title: '稳恒磁场',
      summary: '电流激发磁场，安培环路定理与洛伦兹力是分析磁场问题的两大工具。',
      formulas: [
        {
          latex: String.raw`d\vec{B} = \frac{\mu_0}{4\pi}\frac{I\,d\vec{l}\times\hat{r}}{r^2}`,
          note: '毕奥–萨伐尔定律',
        },
        {
          latex: String.raw`\oint_L \vec{B}\cdot d\vec{l} = \mu_0\sum I_{\mathrm{in}}`,
          note: '安培环路定理',
        },
        {
          latex: String.raw`\vec{F} = q\vec{v}\times\vec{B},\quad \vec{F} = I\vec{L}\times\vec{B}`,
          note: '洛伦兹力与安培力',
        },
        { latex: String.raw`B_{\mathrm{wire}} = \frac{\mu_0 I}{2\pi r}`, note: '长直载流导线' },
      ],
      keyPoints: [
        '磁场是无源场：∮B·dS = 0，不存在磁单极子。',
        '安培环路定理中电流的正负由右手螺旋定则确定。',
        '运动电荷在匀强磁场中做圆周运动，半径 r = mv/(qB)。',
        '磁介质分为顺磁质、抗磁质与铁磁质，铁磁质存在磁滞现象。',
      ],
      level: 2,
    },
    {
      id: 'induction',
      title: '电磁感应',
      summary: '磁通量变化产生感应电动势，楞次定律指明感应电流的方向。',
      formulas: [
        { latex: String.raw`\varepsilon = -\frac{d\Phi}{dt}`, note: '法拉第电磁感应定律' },
        { latex: String.raw`\varepsilon = BLv\sin\theta`, note: '动生电动势' },
        {
          latex: String.raw`\varepsilon = -L\frac{dI}{dt},\quad W_m = \frac{1}{2}LI^2`,
          note: '自感电动势与磁场能量',
        },
        { latex: String.raw`\varepsilon = -M\frac{dI}{dt}`, note: '互感电动势' },
      ],
      keyPoints: [
        '感应电流的磁场总是阻碍引起感应电流的磁通量变化（楞次定律）。',
        '动生电动势的非静电力是洛伦兹力，感生电动势的非静电力是涡旋电场。',
        '涡旋电场的电场线闭合，是非保守场。',
        '自感系数 L 只由线圈自身几何结构与介质决定。',
      ],
      level: 3,
    },
    {
      id: 'maxwell',
      title: '麦克斯韦方程组',
      summary: '位移电流假设使电场与磁场完全对称，预言了电磁波的存在。',
      formulas: [
        { latex: String.raw`\oint_S \vec{D}\cdot d\vec{S} = q_{\mathrm{free}}`, note: '高斯定理（电场）' },
        { latex: String.raw`\oint_S \vec{B}\cdot d\vec{S} = 0`, note: '高斯定理（磁场）' },
        {
          latex: String.raw`\oint_L \vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt}`,
          note: '法拉第电磁感应定律',
        },
        {
          latex: String.raw`\oint_L \vec{H}\cdot d\vec{l} = I + \frac{d\Phi_D}{dt}`,
          note: '全电流安培环路定理',
        },
        { latex: String.raw`c = \frac{1}{\sqrt{\varepsilon_0\mu_0}}`, note: '真空中电磁波速度' },
      ],
      keyPoints: [
        '位移电流 Id = dΦD/dt 的本质是变化的电场，可在真空中存在。',
        '变化电场产生磁场、变化磁场产生电场，二者相互激发形成电磁波。',
        '真空中电磁波速度 c = 1/√(ε₀μ₀) ≈ 3.0×10⁸ m/s。',
        '麦克斯韦方程组是经典电磁学的完整总结，也是狭义相对论的实验基础之一。',
      ],
      level: 3,
    },
  ],
}
