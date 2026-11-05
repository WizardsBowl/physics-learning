import type { Chapter } from '../../types/physics'

export const mechanics: Chapter = {
  id: 'mechanics',
  title: '力学',
  enTitle: 'Mechanics',
  accent: '#3b82f6',
  description: '从质点运动学到刚体转动，建立描述运动、分析受力的基本框架。',
  points: [
    {
      id: 'kinematics',
      title: '质点运动学',
      summary: '用位置、速度、加速度描述质点运动，掌握匀变速直线运动与曲线运动的分解。',
      formulas: [
        {
          latex: String.raw`\vec{v} = \frac{d\vec{r}}{dt},\quad \vec{a} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2}`,
          note: '瞬时速度与瞬时加速度的定义',
        },
        { latex: String.raw`x = x_0 + v_0 t + \frac{1}{2} a t^2`, note: '匀变速直线运动' },
        { latex: String.raw`v^2 - v_0^2 = 2a\,(x - x_0)`, note: '不含时间的实用关系式' },
        {
          latex: String.raw`a_n = \frac{v^2}{r},\quad a_t = \frac{dv}{dt}`,
          note: '自然坐标系下的法向与切向加速度',
        },
      ],
      keyPoints: [
        '位移是矢量，路程是标量；只有单向直线运动时二者大小相等。',
        '平均速度不等于平均速率，瞬时速度的大小才等于瞬时速率。',
        '抛体运动可分解为水平匀速与竖直匀变速两个独立分运动。',
        '圆周运动中法向加速度只改变速度方向，切向加速度只改变速度大小。',
      ],
      level: 1,
    },
    {
      id: 'newton-laws',
      title: '牛顿运动定律',
      summary: '以受力分析为核心，用牛顿第二定律把力与加速度联系起来。',
      formulas: [
        { latex: String.raw`\vec{F} = m\vec{a} = \frac{d\vec{p}}{dt}`, note: '质点动力学基本方程' },
        { latex: String.raw`\vec{F}_{12} = -\vec{F}_{21}`, note: '作用力与反作用力' },
        { latex: String.raw`f \le \mu N`, note: '静摩擦力的取值范围' },
      ],
      keyPoints: [
        '牛顿定律只在惯性系中成立；非惯性系中需引入惯性力。',
        '受力分析的顺序：重力 → 接触力（弹力、摩擦力）→ 其他场力。',
        '最大静摩擦力略大于滑动摩擦力，但一般题目中可近似取等。',
        '用隔离体法列方程，注意加速度相同的物体可整体分析。',
      ],
      level: 1,
    },
    {
      id: 'momentum',
      title: '动量与角动量',
      summary: '冲量改变动量，冲量矩改变角动量；合外力为零时相应守恒。',
      formulas: [
        {
          latex: String.raw`\vec{p} = m\vec{v},\quad \vec{J} = \int \vec{F}\,dt = \Delta\vec{p}`,
          note: '动量与动量定理',
        },
        {
          latex: String.raw`\vec{L} = \vec{r}\times\vec{p},\quad \vec{M} = \frac{d\vec{L}}{dt}`,
          note: '角动量与角动量定理',
        },
        {
          latex: String.raw`\sum\vec{p} = \text{const}\quad\left(\sum\vec{F}_{\mathrm{ext}} = 0\right)`,
          note: '动量守恒（ext 表示外力）',
        },
      ],
      keyPoints: [
        '动量守恒是矢量式，可在某一方向分量上单独守恒。',
        '碰撞问题按恢复系数区分弹性、非弹性与完全非弹性碰撞。',
        '有心力场中角动量守恒，是开普勒第二定律的本质。',
        '变质量问题（如火箭）应使用动量定理的微分形式分析。',
      ],
      level: 2,
    },
    {
      id: 'work-energy',
      title: '功与能',
      summary: '功是能量转化的量度，保守力做功与路径无关，可引入势能。',
      formulas: [
        {
          latex: String.raw`W = \int \vec{F}\cdot d\vec{r} = \int F\cos\theta\,dr`,
          note: '功的定义',
        },
        {
          latex: String.raw`E_k = \frac{1}{2}mv^2,\quad W_{\mathrm{net}} = \Delta E_k`,
          note: '动能与动能定理（net 表示合力）',
        },
        {
          latex: String.raw`E_{p,\mathrm{grav}} = mgh,\quad E_{p,\mathrm{spring}} = \frac{1}{2}kx^2`,
          note: '重力势能与弹性势能',
        },
        {
          latex: String.raw`W_{\mathrm{ext}} + W_{\mathrm{nc}} = \Delta E`,
          note: '功能原理（nc 表示非保守力）',
        },
      ],
      keyPoints: [
        '势能属于系统共有，其数值依赖于零势能面的选取。',
        '机械能守恒条件：只有保守力做功，或非保守力做功之和为零。',
        '摩擦力做负功时机械能转化为内能，此时机械能不守恒。',
        '功能关系是解决变力做功问题的首选工具。',
      ],
      level: 2,
    },
    {
      id: 'rigid-body',
      title: '刚体定轴转动',
      summary: '把质点动力学平移到刚体转动：力矩对应力，转动惯量对应质量。',
      formulas: [
        { latex: String.raw`M = J\alpha,\quad L = J\omega`, note: '转动定律与角动量' },
        { latex: String.raw`E_k = \frac{1}{2}J\omega^2`, note: '转动动能' },
        { latex: String.raw`J = J_C + md^2`, note: '平行轴定理（C 为质心轴）' },
        {
          latex: String.raw`J_{\mathrm{disk}} = \frac{1}{2}mR^2,\quad J_{\mathrm{rod}} = \frac{1}{12}mL^2`,
          note: '圆盘绕中心轴、细杆绕中点',
        },
      ],
      keyPoints: [
        '转动惯量取决于质量分布、转轴位置，同一刚体对不同轴的值不同。',
        '定轴转动中角量（θ、ω、α）对刚体上各点都相同，线量随半径变化。',
        '刚体定轴转动的角动量守恒：合外力矩为零时 Jω = 常量。',
        '刚体平面运动可分解为质心平动与绕质心转动。',
      ],
      level: 3,
    },
  ],
}
