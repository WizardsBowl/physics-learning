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
        { expression: 'v = dr/dt，a = dv/dt = d²r/dt²', note: '瞬时速度与瞬时加速度的定义' },
        { expression: 'x = x₀ + v₀t + ½at²', note: '匀变速直线运动' },
        { expression: 'v² − v₀² = 2a(x − x₀)', note: '不含时间的实用关系式' },
        { expression: 'aₙ = v²/r，aₜ = dv/dt', note: '自然坐标系下的法向与切向加速度' },
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
        { expression: 'F = ma = dp/dt', note: '质点动力学基本方程' },
        { expression: 'F₁₂ = −F₂₁', note: '作用力与反作用力' },
        { expression: 'f ≤ μN', note: '静摩擦力的取值范围' },
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
        { expression: 'p = mv，J = ∫F dt = Δp', note: '动量定理' },
        { expression: 'L = r × p，M = dL/dt', note: '角动量与角动量定理' },
        { expression: 'Σp = 常量（合外力为零）', note: '动量守恒' },
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
        { expression: 'W = ∫F·dr = ∫F cosθ dr', note: '功的定义' },
        { expression: 'Ek = ½mv²，W合 = ΔEk', note: '动能定理' },
        { expression: 'Ep重力 = mgh，Ep弹性 = ½kx²', note: '常见势能' },
        { expression: 'W外 + W非保守 = ΔE', note: '功能原理' },
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
        { expression: 'M = Jα，L = Jω', note: '转动定律与角动量' },
        { expression: 'Ek = ½Jω²', note: '转动动能' },
        { expression: 'J = Jc + md²', note: '平行轴定理' },
        { expression: 'J圆盘 = ½mR²，J细杆(中心) = mL²/12', note: '常见转动惯量' },
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
